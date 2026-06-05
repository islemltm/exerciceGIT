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
test('Verifier panier',{tag:'@smoke'},async({page})=>{

    //premier produit
    await page.locator("#nav-cart").click()
    await expect(page).toHaveURL(/cart.php/)
    let res1 = await fn_item(1,page)
    let res2 = await fn_item(4,page)
    let qte_tot_exp = res1.qte + res2.qte
    console.log("la quantité est :" + qte_tot_exp)
    let sous_total_exp = res1.sous_total + res2.sous_total
    console.log("le sous_total est " +  sous_total_exp)
    expect(await page.getByTestId("cart-count").innerText()).toEqual(String(qte_tot_exp))
    let tot_obt : number 
    tot_obt = parseFloat((await page.getByTestId("cart-total").innerText()).split('€')[0].trim().replace(",","."))
    expect(sous_total_exp).toEqual(tot_obt)
    let tot = await page.getByTestId("cart-total").innerText()
    await page.getByRole("link", {name: "Passer la commande"}).click()
    await expect(page).toHaveURL(/checkout.php/)
    await page.getByTestId("checkout-confirm-btn").click()
    //pour l'alert
    // 1. On enregistre le handler AVANT de cliquer
    page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('Confirmer la commande ?');
    await dialog.accept();   // = clique sur OK
    });

    // 2. On clique sur le bouton qui déclenche la confirm
    await page.getByTestId('checkout-confirm-btn').click();
    expect(page.getByTestId("alert")).toBeVisible()
    //deuxieme produit
    

})

const fn_item =async (nu,page) =>{
    //premier produit
    let prix_p1 = await page.locator("[data-testid='cart-item-"+nu+"']").locator(".flex-1.min-w-0").locator(".text-sm").innerText()
    let prix_p1_1 : number
    prix_p1_1= parseFloat(prix_p1.split('€')[0].trim().replace(",","."))
    //console.log("value is " + prix_p1_1)
    let qti : number
    qti = parseFloat(await page.locator("[data-testid='cart-qty-"+nu+"']").inputValue())
    let sous_tot_1_exp : number
    sous_tot_1_exp = prix_p1_1 * qti
    //console.log("qti is " + qti + "sum is" + sous_tot_1_exp)
    let sous_tot_1 = await page.getByTestId("cart-subtotal-"+nu+"").innerText()
    let sous_tot_1_obt : number
    sous_tot_1_obt = parseFloat(sous_tot_1.split('€')[0].trim().replace(",","."))
    //console.log("valeur obtenu est"+ sous_tot_1_obt)
    expect(sous_tot_1_exp).toEqual(sous_tot_1_obt)
    return{"qte":qti,"sous_total":sous_tot_1_obt}
}