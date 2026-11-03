import { test, expect, type Page, type BrowserContext } from '@playwright/test';
import { coRegistrationQuestions, partners, profileQuestions, quiz } from '../const';
import type { IconOption, ImageOption, RegistrationQuestion, UserData, ValueLabelOption } from '../types';

test.describe.configure({ mode: 'serial' });
test.setTimeout(60000);

const REGISTER_EMAIL = 'kardevpl@gmail.com';
const REGISTER_FIRST_NAME = 'Ewa';
const REGISTER_LAST_NAME = 'Test';

let page: Page;
let context: BrowserContext;
let key: string;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext({
    httpCredentials: {
      username: 'admin_qtp',
      password: 'qtp2024!',
    },
  });
  page = await context.newPage();
});

test.afterAll(async ({ request }) => {
  if (key) {
    await request.get(`http://s.inis.pl/rm.php?u=107615&key=8A664582F37FB50D380CC5854743A4739AAE10C3&mkey=${key}`);
  }
  if (page) {
    await page.close();
  }
  if (context) {
    await context.close();
  }
});

const submitStep = (fieldTestId: string) =>
  page.locator('form').filter({ has: page.getByTestId(fieldTestId) }).getByTestId('form-submit2');

test('check register form', async () => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByTestId('form-submit1').click();

  await page.waitForSelector('[data-testid="form-firstName"]', { timeout: 10000 });
  await page.getByTestId('form-firstName').fill(REGISTER_FIRST_NAME);
  await page.getByLabel('Nazwisko').fill(REGISTER_LAST_NAME);
  await submitStep('form-firstName').click();

  await page.waitForSelector('[data-testid="form-email"]', { timeout: 10000 });
  await page.getByTestId('form-email').fill(REGISTER_EMAIL);
  await submitStep('form-email').click();

  await page.waitForSelector('[data-testid="form-dob"]', { timeout: 10000 });
  await page.locator('[data-testid="form-dob"]').fill('01-01-1990');
  await submitStep('form-dob').click();

  await page.waitForSelector('[data-testid="form-phone"]', { timeout: 10000 });
  await page.getByTestId('form-phone').fill('123456789');

  const [resp] = await Promise.all([
    page.waitForResponse((response) => response.url().includes('api.php') && response.status() === 200),
    page.getByTestId('form-submit2-all').click(),
  ]);

  const body: { status?: string; key?: string } = await resp.json();
  expect(body.status).toBe('success');
  expect(body.key).toBeTruthy();
  key = body.key!;

  await page.waitForURL('**/lead_done**', { timeout: 15_000 });
  await expect(
    page.getByText('Za chwilę rozpocznie się konkurs. Najpierw jednak mamy kilka dodatkowych pytań'),
  ).toBeVisible();
});

type QuestionOption = string | ImageOption | IconOption | ValueLabelOption;

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const plainText = (html: string) =>
  html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();

const htmlTextPattern = (html: string) => {
  const parts = plainText(html).split(/\s+/).filter(Boolean).map(escapeRegExp);
  return new RegExp(`^\\s*${parts.join('\\s*')}\\s*$`);
};

const optionHtml = (option: QuestionOption) => {
  if (typeof option === 'string') return option;
  if ('icon' in option && option.icon) {
    return option.iconPosition === 'after' ? `${option.label} ${option.icon}` : `${option.icon} ${option.label}`;
  }
  return option.label;
};

const optionValue = (option: QuestionOption) => {
  if (typeof option === 'string') return option;
  if ('img' in option && option.img) return option.label;
  if ('value' in option) return option.value;
  return option.label;
};

const fieldProp = (field: string | { prop: string }) => (typeof field === 'string' ? field : field.prop);

const checkedConsentKeys = ['prop22', 'prop23', 'prop24', 'prop25', 'prop26', 'prop27', 'prop28'];

const activeQuestions = (answers: Record<string, string>, user: UserData) =>
  [...coRegistrationQuestions, ...profileQuestions].filter((question) =>
    question.filter(checkedConsentKeys, user, answers),
  );

const answerLabels = () => page.locator('form li.answer label');

const saveAnswer = async (act: () => Promise<unknown>) => {
  const [resp] = await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url().includes('api.php') &&
        response.request().method() === 'POST' &&
        (response.request().postData() ?? '').includes('upd'),
    ),
    act(),
  ]);
  expect(resp.status()).toBe(200);
  const body: { status?: string } = await resp.json();
  expect(body.status).toBe('success');
};

test('check continue questions', async () => {
  test.setTimeout(120_000);

  const user = {
    email: REGISTER_EMAIL,
    firstName: REGISTER_FIRST_NAME,
    lastName: REGISTER_LAST_NAME,
    phone_prefix: '+48',
    phone: '123456789',
    dob: '01-01-1990',
    consents: Object.fromEntries(checkedConsentKeys.map((consent) => [consent, true])),
    partners: partners.map((partner) => partner.name),
  } as UserData;

  await page.getByRole('button', { name: 'Dalej' }).click();
  await page.waitForURL('**/continue**', { timeout: 15_000 });
  await expect(page.getByText('Pytania Partnerów Serwisu')).toBeVisible();

  const answers: Record<string, string> = {};
  let index = 0;

  for (let step = 0; step < 50; step += 1) {
    const active = activeQuestions(answers, user);
    const question: RegistrationQuestion | undefined = active[index];
    expect(question, `Brak aktywnego pytania o indeksie ${index}`).toBeTruthy();
    expect(question!.type, `Pytanie ${question!.prop} jest typu component`).not.toBe('component');

    if (question!.type === 'inputs') {
      const props = question!.props ?? {};
      if (props.postalCode) {
        await page.getByLabel('Kod pocztowy').fill('12-345');
        await page.getByLabel('Miejscowość').fill('Warszawa');
        answers[fieldProp(props.postalCode)] = '12-345';
        if (props.city) answers[fieldProp(props.city)] = 'Warszawa';
      } else {
        await page.getByLabel('Ulica').fill('Testowa');
        await page.getByLabel('Numer domu').fill('1');
        await page.getByLabel('Nr mieszkania').fill('2');
        if (props.street) answers[fieldProp(props.street)] = 'Testowa';
        if (props.houseNumber) answers[fieldProp(props.houseNumber)] = '1';
        if (props.apartmentNumber) answers[fieldProp(props.apartmentNumber)] = '2';
      }
      await saveAnswer(() => page.getByRole('button', { name: 'Dalej' }).click());
    } else if (question!.type === 'select') {
      expect(question!.question, `Pytanie ${question!.prop} nie ma treści w const`).toBeTruthy();
      expect(question!.options?.length, `Pytanie ${question!.prop} nie ma odpowiedzi w const`).toBeGreaterThan(0);
      await expect(page.locator('form').getByText(htmlTextPattern(question!.question ?? ''))).toBeVisible({
        timeout: 15_000,
      });
      const stored = optionValue(question!.options![0]!);
      const select = page.locator('form select');
      await saveAnswer(() => select.selectOption({ label: plainText(optionHtml(question!.options![0]!)) }));
      if (question!.prop) answers[question!.prop] = stored;
    } else {
      expect(question!.question, `Pytanie ${question!.prop} nie ma treści w const`).toBeTruthy();
      expect(question!.options?.length, `Pytanie ${question!.prop} nie ma odpowiedzi w const`).toBeGreaterThan(0);

      await expect(page.locator('form').getByText(htmlTextPattern(question!.question ?? ''))).toBeVisible({
        timeout: 15_000,
      });

      const labels = question!.options!.map((option) => htmlTextPattern(optionHtml(option)));
      const stored = optionValue(question!.options![0]!);
      const labelsOnPage = answerLabels();
      await expect(labelsOnPage).toHaveCount(labels.length);
      for (const label of labels) {
        await expect(labelsOnPage.filter({ hasText: label })).toHaveCount(1);
      }
      await saveAnswer(() => labelsOnPage.filter({ hasText: labels[0]! }).click());
      if (question!.prop) answers[question!.prop] = stored;
    }

    const activeAfterAnswer = activeQuestions(answers, user);
    if (index < activeAfterAnswer.length - 1) {
      index += 1;
      continue;
    }

    await page.waitForURL('**/quiz**', { timeout: 15_000 });
    await expect(page.getByText('Za chwilę zobaczysz 3 pytania konkursowe.')).toBeVisible();
    return;
  }

  throw new Error('Za dużo aktywnych pytań na stronie continue');
});

test('check answers', async () => {
  await page.getByTestId('form-submit1').click();

  for (const question of quiz.questions) {
    const correct = question.answers.find((answer) => answer.correct);
    expect(correct, `Pytanie ${question.id} nie ma poprawnej odpowiedzi w const`).toBeTruthy();
    const choice = page.getByTestId(`${question.id}-${correct!.id}`);
    await expect(choice).toBeVisible();
    await choice.click();
    await expect(choice).toHaveClass(/correct/);
  }

  await page.waitForURL('**/finish**', { timeout: 15_000 });
  await expect(page.getByText('BRAWO!')).toBeVisible();
  await expect(page.getByText('Konkurs ukończony.')).toBeVisible();
});
