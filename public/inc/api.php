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
