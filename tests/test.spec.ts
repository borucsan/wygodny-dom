import { test, expect, type Page } from '@playwright/test';
test.describe.configure({ mode: 'serial' });

  let page: Page;
  let key: string;
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin_qtp',
        password: 'qtp2024!',
      },
    });
    page = await context.newPage();
  });

  test.afterAll(async ({ request }) => {
    if(key) {
      await request.get(`http://s.inis.pl/rm.php?u=107615&key=8A664582F37FB50D380CC5854743A4739AAE10C3&mkey=${key}`);
    }
    await page.close();
  });

  test('check answers', async () => {
    await page.goto('/');
    await page.getByTestId("start-quiz").click();
    
    await page.getByTestId("1-D").click();
    expect(await page.getByTestId("1-D")).toHaveClass(/correct/);
    await page.getByTestId("2-C").click();
    expect(await page.getByTestId("2-C")).toHaveClass(/correct/);
    await page.getByTestId("3-A").click();
    await page.getByTestId("4-A").click();
    await page.getByTestId("5-A").click();
    await page.getByTestId("6-A").click();
  });

  test('check regiter form', async () => {
    await page.getByTestId("form-firstName").fill('E2E');
    /* expect(await page.getByTestId("form-firstName")).toHaveValue('E2e'); */
    await page.getByLabel("Nazwisko").fill('Test');
    await page.getByTestId("form-email").fill('kardevpl@gmail.com');
    page.getByTestId("form-submit1").click();
    await page.waitForTimeout(1000);
    await page.getByTestId("form-dob").fill('01-01-1990');
    page.getByTestId("form-submit2").click();
    await page.waitForTimeout(1000);
    await page.getByTestId("form-phone").fill('123456789');
    //await page.getByLabel("Mężczyzna").check();
    await page.getByTestId("form-submit").click();
    await page.waitForTimeout(1000);
    /* expect(await page.getByTestId("rules-confirm-dialog")).toBeVisible(); */
    await page.getByTestId("rules-confirm-dialog-close").click();
    await page.getByTestId("check-all-consents").check();
    
    const [resp] = await Promise.all([
      page.waitForResponse(resp => resp.url().includes('api.php') && resp.status() === 200),
      page.getByTestId("form-submit3").click()
     ]);

     const body = await resp.json();

     expect(body.response).not.toBe("-1");
     expect([
      "1",
      "4",
    ]).toContain(body.response);

     expect(body.key).not.toBeUndefined();
     key = body.key;
  });