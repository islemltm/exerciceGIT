import {test, expect} from '@playwright/test'

test.beforeEach('setup',async ({page}) =>{
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    // saisir email
     await page.locator("#login-email").fill("admin@boutique.qa")
    // saisir mot de passe 
     await page.locator("[data-testid='login-password']").fill("Admin123!")
    // clique sur se connecter
     await page.getByRole("button",{name:"Se connecter"}).click()
     await expect(page).toHaveURL(/dashboard.php/)
     await expect(page.locator("#nav-logout")).toBeVisible()
})
test('ajout produit via admin',{tag:'@smoke'},async({page})=>{
    await page.getByTestId("dashboard-add-product").click()
    await expect(page).toHaveURL(/product_form.php/)
    await page.locator("#product-nom").fill("Bouilloires et distributeurs d'eau chaude")
    await page.locator("#product-description").fill("Bienvenue dans la boutique")
    let prix_ran =Math.floor(Math.random()*151)+100
    await page.locator("#product-prix").fill(String (prix_ran))
    let stock_ran=Math.floor(Math.random()*10)+0
    await page.locator("#product-stock").fill(String (stock_ran))
    await page.locator("#product-image-file").setInputFiles("assets/img.jpg")
    //await expect(page.locator("#product-image-file")).toHaveValue("assets/img.jpg")
    await page.locator("#product-submit").click()
    await expect (page.getByTestId("alert-message")).toBeVisible()
    let size= await page.getByTestId("products-table").locator("tbody tr").count()
    console.log("la taille est" +size)
    await expect(page.getByTestId("product-name-"+size)).toHaveText("Bouilloires et distributeurs d'eau chaude")
    if (stock_ran <=0){
        await expect(page.getByTestId("product-stock-"+size)).toHaveText("Rupture")
    }else if(stock_ran<=5){
    await expect(page.getByTestId("product-stock-"+size)).toHaveText(stock_ran+ " (faible)")
    }else{
        await expect(page.getByTestId("product-stock-"+size)).toHaveText(String (stock_ran))
    }
    let price= (await page.getByTestId("product-price-"+size).innerText()).split('€')[0].trim()
    expect(String(prix_ran)+",00").toEqual(price)

})
