const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 5000);
    
  });
});

describe("Confirm that the Draw Button displays 5 robots", () => {
  test("display robots", async () => {
    await driver.get("http://localhost:8000")
    await driver.sleep(6000)

    await driver.findElement(By.id('draw')).sendKeys(Key.RETURN)
    await driver.sleep(6000)
    
  })

})

describe("Check that when a bot is removed from Duo, it goes back to choices", () => {
  test("confirm return of robot to choices", async () => {
    await driver.get("http://localhost:8000")
    await driver.sleep(6000)
    await driver.findElement(By.id('draw')).sendKeys(Key.RETURN)
    await driver.sleep(6000)
    await driver.findElement(By.id('choices')).RETURN
    await driver.sleep(6000)

  })

})
