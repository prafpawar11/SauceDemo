import { test }  from '@playwright/test';
import env from '../env/env.config.js';


test("@Regression End to End flow", async({page})=>{

    await page.goto(env.BASE_URL);

    await page.locator("#user-name").fill(env.USERNAME);

    await page.locator("#password").fill(env.PASSWORD);
    
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
    
    console.log("@Regression group test cases");
    console.log("@Regression group test cases");
    console.log("@Regression group test cases");
    console.log("@Regression group test cases");
    
});



