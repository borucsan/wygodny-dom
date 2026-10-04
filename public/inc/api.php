<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: *');
header("Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, Accept");

date_default_timezone_set('Europe/Warsaw');
class EnvLoader
{
    /**
     * The directory where the .env file can be located.
     *
     * @var string
     */
    protected $path;


    public function __construct(string $path)
    {
        if (!file_exists($path)) {
            throw new \InvalidArgumentException(sprintf('%s does not exist', $path));
        }
        $this->path = $path;
    }

    public function load(): void
    {
        if (!is_readable($this->path)) {
            throw new \RuntimeException(sprintf('%s file is not readable', $this->path));
        }

        $lines = file($this->path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {

            if (strpos(trim($line), '#') === 0) {
                continue;
            }

            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);

            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv(sprintf('%s=%s', $name, $value));
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }
    }
}
try {
    ($envLoader = new EnvLoader(__DIR__ . '/.env'))->load();
    $apiKey = getenv('API_KEY');
    $uid = getenv('UID');


    $method = strip_tags(htmlspecialchars($_POST['mtd']));
    $action = strip_tags(htmlspecialchars($_GET['mtd']));
    if(empty($method) && !empty($action)) {
        $method = $action;
    }
    switch ($method) {
        case "add":
            $response = add();
            $key = getKey();
            echo json_encode(array(
                'status' => 'success',
                'response' => $response,
                'key' => $key
            ));
            break;
        case "upd":
            $response = upd();
            echo json_encode(array(
                'status' => 'success',
                'response' => $response
            ));
            break;
        case "key":
            $response = getKey();
            echo json_encode(array(
                'status' => 'success',
                'key' => $response
            ));
            break;
        case "getData":
                $json = file_get_contents("./data.json");
                $response = json_decode($json, true) ?? [];
                $response['status'] = 'success';
                echo json_encode($response);
                break;
        case "ret":
            $response = ret();
            echo json_encode(array_merge(array('status' => 'success'), $response));
            break;
        default:
            throw new Exception("Method not found");
            break;
    }
} catch (Exception $e) {
    echo json_encode(array(
        'status' => 'error',
        'message' => $e->getMessage()
    ));
}

function add()
{
    $curl = curl_init();

    $s_key = getenv('S_KEY');
    $s_uid = getenv('UID');
    $s_email = strip_tags(htmlspecialchars($_POST['email']));
    $s_property1 = strip_tags(htmlspecialchars($_POST['firstName']));
    $s_property2 = strip_tags(htmlspecialchars($_POST['lastName']));
    $phone_full = strip_tags(htmlspecialchars($_POST['phone_full']));
    $group = strip_tags(htmlspecialchars($_POST['group']));
    $dob = strip_tags(htmlspecialchars($_POST['dob']));
    $consents = json_decode($_POST['consents'], true);
    $groupKey = null;

    $prop17 = strip_tags(htmlspecialchars($_POST['prop17']));
    $prop10 = strip_tags(htmlspecialchars($_POST['prop10']));
    $prop62 = strip_tags(htmlspecialchars($_POST['prop62']));
    $prop63 = strip_tags(htmlspecialchars($_POST['prop63']));
    $prop64 = strip_tags(htmlspecialchars($_POST['prop64']));

    if($group) {
        $groupKey = "s_group_$group";
    } else {
        if ($consents['prop22'] === true && $consents['prop26'] === true && $consents['prop27'] === true) {
            $groupKey = 's_group_1';
        } else {
            $groupKey = 's_group_2';
        }
    }

    if ($groupKey === null) {
        throw new Exception("Consents not accepted");
    }

    $ip = isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);

    $data = [
        's_key' => $s_key,
        's_uid' => $s_uid,
        's_email' => $s_email,
        's_property11' => $phone_full,
        's_rv' => true,
        's_property1' => $s_property1,
        's_property2' => $s_property2,
        's_property4' => $dob,
        's_property14' => date('Y-m-d H:i:s'),
        's_property15' => $ip,
        's_property10' => $prop10,
    ];

    if(!empty($prop17)) {
        $data['s_property17'] = $prop17;
    }
    if(!empty($prop62)) {
        $data['s_property62'] = $prop62;
    }
    if(!empty($prop63)) {
        $data['s_property63'] = $prop63;
    }
    if(!empty($prop64)) {
        $data['s_property64'] = $prop64;
    }

    $data[$groupKey] = 1;
    foreach ($consents as $key => $value) {
        $key = 's_' . str_replace('prop', 'property', $key);
        $data[$key] = $value ? 1 : 0;
    }
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://system.inis.pl/acq.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $data
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

function getKey()
{
    $curl = curl_init();

    $s_key = getenv('S_KEY');
    $s_uid = getenv('UID');
    $s_email = strip_tags(htmlspecialchars($_POST['email']));

    $data = [
        's_key' => $s_key,
        's_uid' => $s_uid,
        's_email' => $s_email,
        's_no_send' => true
    ];

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://system.inis.pl/acq.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $data
    ));

    $response = curl_exec($curl);
    curl_close($curl);
    return str_replace("key=", "", $response);
}

function upd()
{
    $curl = curl_init();

    $s_uid = getenv('UID');
    $s_key = strip_tags(htmlspecialchars($_POST['mkey']));
    $input = json_decode($_POST['data'], true);

    $data = [
        's_uid' => $s_uid,
        's_mkey' => $s_key,
        's_rv' => true,
    ];

    foreach ($input as $key => $value) {
        $pkey = str_replace('prop', 's_property', $key);
        $data[$pkey] = $value;
    }
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://system.inis.pl/upd.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $data
    ));
    return curl_exec($curl);
}

function ret()
{
    $email = trim(strip_tags($_POST['email'] ?? ''));
    $firstName = trim(strip_tags($_POST['firstName'] ?? ''));
    $lastName = trim(strip_tags($_POST['lastName'] ?? ''));
    $prop10 = trim(strip_tags($_POST['prop10'] ?? ''));

    if ($email === '') {
        throw new Exception('Email required');
    }

    $retUid = getenv('RET_UID');
    $retKey = getenv('RET_RKEY');
    if ($retUid === false || $retKey === false || $retUid === '' || $retKey === '') {
        throw new Exception('RET is not configured');
    }

    $prefs = 'email,status,c1,c2,c3,c4,c5,c6,c7,c8,c9,c11,c13,c20,c22,c23,c24,c25,c26,c27,c28,c35,c39,c40,c49,c56,c65,c66,c68,c70,c77,c83,c86,c89,c92';
    $url = 'https://system.inis.pl/ret.php?' . http_build_query(array(
        's_uid' => $retUid,
        's_rkey' => $retKey,
        's_email' => $email,
        's_prefs' => $prefs,
    ));

    $record = parseInisBody(inisRequest($url));
    if (!retRecordFound($record)) {
        return array(
            'scenario' => 'new_user',
        );
    }

    $key = importKnownProfile($email, $record, $prop10);

    return array(
        'scenario' => 'known_user',
        'key' => $key,
        'present' => retPresence($record),
        'hlr' => trim((string) ($record['c13'] ?? '')),
        'recordStatus' => trim((string) ($record['status'] ?? '')),
        'nameMatch' => retNameMatch($firstName, $lastName, $record),
    );
}

function importKnownProfile($email, $record, $prop10)
{
    $ip = isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);
    $data = array(
        's_key' => getenv('S_KEY'),
        's_uid' => getenv('UID'),
        's_email' => $email,
        's_rv' => true,
        's_no_send' => true,
        's_property14' => date('Y-m-d H:i:s'),
        's_property15' => $ip,
        's_property17' => 'wygodny-dom.pl',
    );

    if ($prop10 !== '') {
        $data['s_property10'] = $prop10;
    }

    foreach (array(1, 2, 4, 5, 6, 7, 8, 9, 20, 35, 40, 49, 65, 66, 68, 70, 89, 92) as $n) {
        $value = trim(strip_tags((string) ($record['c' . $n] ?? '')));
        if ($value !== '') {
            $data['s_property' . $n] = $value;
        }
    }

    $phone = trim(strip_tags((string) ($record['c11'] ?? '')));
    if ($phone !== '' && trim((string) ($record['c13'] ?? '')) === '1') {
        $data['s_property11'] = $phone;
        $data['s_property13'] = '1';
    }

    $hasMarketingConsent = false;
    foreach (array(23, 24, 25, 26, 27, 28) as $n) {
        if (inisFlag($record['c' . $n] ?? '')) {
            $data['s_property' . $n] = 1;
            $hasMarketingConsent = true;
        }
    }
    if ($hasMarketingConsent) {
        $data['s_group_1'] = 1;
    }

    $response = inisRequest('https://system.inis.pl/acq.php', $data);
    if (trim((string) $response) === '-1') {
        throw new Exception('Destination import failed');
    }

    return getKey();
}

function retPresence($record)
{
    $present = array();
    foreach (array(3, 4, 5, 6, 7, 8, 9, 11, 20, 35, 40, 49, 65, 66, 68, 70, 89, 92) as $n) {
        $present['c' . $n] = trim((string) ($record['c' . $n] ?? '')) !== '';
    }
    $present['c13'] = trim((string) ($record['c13'] ?? '')) === '1';
    foreach (array(22, 23, 24, 25, 26, 27, 28) as $n) {
        $present['c' . $n] = inisFlag($record['c' . $n] ?? '');
    }
    return $present;
}

function retNameMatch($firstName, $lastName, $record)
{
    $first = samePersonName($firstName, $record['c1'] ?? '');
    $last = samePersonName($lastName, $record['c2'] ?? '');
    if ($first === false || $last === false) {
        return false;
    }
    if ($first === null || $last === null) {
        return null;
    }
    return true;
}

function retRecordFound($record)
{
    if (!is_array($record) || count($record) === 0) {
        return false;
    }

    if (trim((string) ($record['email'] ?? '')) !== '') {
        return true;
    }

    foreach ($record as $key => $value) {
        if (preg_match('/^c\d+$/', (string) $key) && trim((string) $value) !== '') {
            return true;
        }
    }

    return false;
}

function samePersonName($left, $right)
{
    $left = mb_strtolower(trim((string) $left), 'UTF-8');
    $right = mb_strtolower(trim((string) $right), 'UTF-8');
    if ($left === '' || $right === '') {
        return null;
    }
    return $left === $right;
}

function inisFlag($value)
{
    $value = strtolower(trim((string) $value));
    return in_array($value, array('1', 'true', 'tak', 'yes'), true);
}

function parseInisBody($raw)
{
    $raw = trim((string) $raw);
    if ($raw === '') {
        return array();
    }

    $json = json_decode($raw, true);
    if (is_array($json)) {
        return $json;
    }

    if (strpos($raw, "\n") !== false && strpos($raw, '&') === false) {
        $out = array();
        foreach (preg_split('/\r\n|\n|\r/', $raw) as $line) {
            if (strpos($line, '=') === false) {
                continue;
            }
            list($key, $value) = explode('=', $line, 2);
            $out[trim($key)] = trim(urldecode($value));
        }
        return $out;
    }

    $out = array();
    parse_str($raw, $out);
    return $out;
}

function inisRequest($url, $postFields = null)
{
    $curl = curl_init();
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    );
    if ($postFields !== null) {
        $options[CURLOPT_POST] = 1;
        $options[CURLOPT_POSTFIELDS] = $postFields;
    }
    curl_setopt_array($curl, $options);
    $response = curl_exec($curl);
    $errno = curl_errno($curl);
    curl_close($curl);
    if ($response === false || $errno) {
        throw new Exception('INIS request failed');
    }
    return $response;
}
