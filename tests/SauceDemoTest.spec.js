import {test, chromium}  from '@playwright/test';

test("@Regression End to End flow", async()=>{

    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");

    await page.locator("#password").fill("secret_sauce");
    
    await page.waitForTimeout(3000);
    
    await page.locator("#login-button").click();

    await page.waitForTimeout(3000);

    await page.locator(".product_sort_container").selectOption({label : 'Price (high to low)'});

    await page.waitForTimeout(3000);

    await page.locator("button[name='add-to-cart-sauce-labs-fleece-jacket']").click();

    await page.waitForTimeout(3000);

    //used to locate single elements in HTML DOM Structure
    const container = await page.$("//span[@class='shopping_cart_badge']");
    
    await container.click();

    await page.waitForTimeout(3000);
    

});