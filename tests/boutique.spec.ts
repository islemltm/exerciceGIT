import {test, expect} from '@playwright/test'

test.beforeEach('setup',async ({page}) =>{
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    // saisir email
     await page.locator("#login-email").fill(" client@boutique.qa")
    // saisir mot de passe 
     await page.locator("[data-testid='login-password']").fill("Client123!")
    // clique sur se connecter
     await page.getByRole("button",{name:"Se connecter"}).click()
     await expect(page).toHaveURL("https://api.efi-academy.com/e-commerce-test-api/client/shop.php")
     await expect(page.locator("#nav-logout")).toBeVisible()
})
test('Ajout produit',{tag:'@regression'},async({page})=>{
// ajout premier produit
    await page.locator("[data-testid='add-to-cart-qty-1']").fill("2")
    await page.locator("[data-testid='add-to-cart-btn-1']").click()
    await expect(page.locator("[data-testid='alert']")).toBeVisible()
    await page.locator("[data-testid='alert-close']").click()
//ajout deuxieme produit
    await page.locator("[data-testid='add-to-cart-qty-4']").fill("1")
    await page.locator("[data-testid='add-to-cart-btn-4']").click()
    await expect(page.locator("[data-testid='alert']")).toBeVisible()
    await page.locator("[data-testid='alert-close']").click()
// vérifier que le panier contient les prods
    await expect(page.locator("#nav-cart-badge")).toHaveText("3")
})