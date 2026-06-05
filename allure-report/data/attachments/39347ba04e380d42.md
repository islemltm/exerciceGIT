# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: boutique.spec.ts >> Ajout produit
- Location: tests\boutique.spec.ts:14:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid=\'add-to-cart-qty-4\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - link "BoutiqueQA" [ref=e4] [cursor=pointer]:
        - /url: /e-commerce-test-api/index.php
      - generic [ref=e5]:
        - link "Boutique" [ref=e6] [cursor=pointer]:
          - /url: /e-commerce-test-api/client/shop.php
        - link "Mes commandes" [ref=e7] [cursor=pointer]:
          - /url: /e-commerce-test-api/client/my_orders.php
        - link "Profil" [ref=e8] [cursor=pointer]:
          - /url: /e-commerce-test-api/client/profile.php
        - link "Panier 2" [ref=e9] [cursor=pointer]:
          - /url: /e-commerce-test-api/client/cart.php
          - text: Panier
          - generic [ref=e10]: "2"
        - generic [ref=e11]: "|"
        - generic [ref=e12]: samir (client)
        - link "Déconnexion" [ref=e13] [cursor=pointer]:
          - /url: /e-commerce-test-api/auth/logout.php
  - main [ref=e14]:
    - generic [ref=e16]:
      - heading "La boutique" [level=1] [ref=e17]
      - paragraph [ref=e18]: Choisissez vos produits et ajoutez-les au panier.
      - generic [ref=e19]:
        - generic [ref=e20]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e22]
          - generic [ref=e23]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e24]
            - paragraph [ref=e25]: Bienvenue dans la boutique
            - generic [ref=e26]:
              - generic [ref=e27]: 130,00 €
              - generic [ref=e28]: Plus que 5 !
            - generic [ref=e29]:
              - spinbutton [ref=e30]: "1"
              - button "Ajouter" [ref=e31] [cursor=pointer]
        - generic [ref=e32]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e34]
          - generic [ref=e35]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e36]
            - paragraph [ref=e37]: Bienvenue dans la boutique
            - generic [ref=e38]:
              - generic [ref=e39]: 136,00 €
              - generic [ref=e40]: En stock
            - generic [ref=e41]:
              - spinbutton [ref=e42]: "1"
              - button "Ajouter" [ref=e43] [cursor=pointer]
        - generic [ref=e44]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e46]
          - generic [ref=e47]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e48]
            - paragraph [ref=e49]: Bienvenue dans la boutique
            - generic [ref=e50]:
              - generic [ref=e51]: 207,00 €
              - generic [ref=e52]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e53]
        - generic [ref=e54]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e56]
          - generic [ref=e57]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e58]
            - paragraph [ref=e59]: Bienvenue dans la boutique
            - generic [ref=e60]:
              - generic [ref=e61]: 227,00 €
              - generic [ref=e62]: Plus que 4 !
            - generic [ref=e63]:
              - spinbutton [ref=e64]: "1"
              - button "Ajouter" [ref=e65] [cursor=pointer]
        - generic [ref=e66]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e68]
          - generic [ref=e69]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e70]
            - paragraph [ref=e71]: Bienvenue dans la boutique
            - generic [ref=e72]:
              - generic [ref=e73]: 141,00 €
              - generic [ref=e74]: En stock
            - generic [ref=e75]:
              - spinbutton [ref=e76]: "1"
              - button "Ajouter" [ref=e77] [cursor=pointer]
        - generic [ref=e78]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e80]
          - generic [ref=e81]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e82]
            - paragraph [ref=e83]: Bienvenue dans la boutique
            - generic [ref=e84]:
              - generic [ref=e85]: 137,00 €
              - generic [ref=e86]: Plus que 3 !
            - generic [ref=e87]:
              - spinbutton [ref=e88]: "1"
              - button "Ajouter" [ref=e89] [cursor=pointer]
        - generic [ref=e90]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e92]
          - generic [ref=e93]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e94]
            - paragraph [ref=e95]: Bienvenue dans la boutique
            - generic [ref=e96]:
              - generic [ref=e97]: 191,00 €
              - generic [ref=e98]: Plus que 2 !
            - generic [ref=e99]:
              - spinbutton [ref=e100]: "1"
              - button "Ajouter" [ref=e101] [cursor=pointer]
        - generic [ref=e102]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e104]
          - generic [ref=e105]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e106]
            - paragraph [ref=e107]: Bienvenue dans la boutique
            - generic [ref=e108]:
              - generic [ref=e109]: 145,00 €
              - generic [ref=e110]: Plus que 3 !
            - generic [ref=e111]:
              - spinbutton [ref=e112]: "1"
              - button "Ajouter" [ref=e113] [cursor=pointer]
        - generic [ref=e114]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e116]
          - generic [ref=e117]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e118]
            - paragraph [ref=e119]: Bienvenue dans la boutique
            - generic [ref=e120]:
              - generic [ref=e121]: 182,00 €
              - generic [ref=e122]: Plus que 4 !
            - generic [ref=e123]:
              - spinbutton [ref=e124]: "1"
              - button "Ajouter" [ref=e125] [cursor=pointer]
        - generic [ref=e126]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e128]
          - generic [ref=e129]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e130]
            - paragraph [ref=e131]: Bienvenue dans la boutique
            - generic [ref=e132]:
              - generic [ref=e133]: 130,00 €
              - generic [ref=e134]: En stock
            - generic [ref=e135]:
              - spinbutton [ref=e136]: "1"
              - button "Ajouter" [ref=e137] [cursor=pointer]
        - generic [ref=e138]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e140]
          - generic [ref=e141]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e142]
            - paragraph [ref=e143]: Bienvenue dans la boutique
            - generic [ref=e144]:
              - generic [ref=e145]: 208,00 €
              - generic [ref=e146]: En stock
            - generic [ref=e147]:
              - spinbutton [ref=e148]: "1"
              - button "Ajouter" [ref=e149] [cursor=pointer]
        - generic [ref=e150]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e152]
          - generic [ref=e153]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e154]
            - paragraph [ref=e155]: Bienvenue dans la boutique
            - generic [ref=e156]:
              - generic [ref=e157]: 131,00 €
              - generic [ref=e158]: Plus que 4 !
            - generic [ref=e159]:
              - spinbutton [ref=e160]: "1"
              - button "Ajouter" [ref=e161] [cursor=pointer]
        - generic [ref=e162]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e164]
          - generic [ref=e165]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e166]
            - paragraph [ref=e167]: Bienvenue dans la boutique
            - generic [ref=e168]:
              - generic [ref=e169]: 141,00 €
              - generic [ref=e170]: En stock
            - generic [ref=e171]:
              - spinbutton [ref=e172]: "1"
              - button "Ajouter" [ref=e173] [cursor=pointer]
        - generic [ref=e174]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e176]
          - generic [ref=e177]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e178]
            - paragraph [ref=e179]: Bienvenue dans la boutique
            - generic [ref=e180]:
              - generic [ref=e181]: 112,00 €
              - generic [ref=e182]: Plus que 4 !
            - generic [ref=e183]:
              - spinbutton [ref=e184]: "1"
              - button "Ajouter" [ref=e185] [cursor=pointer]
        - generic [ref=e186]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e188]
          - generic [ref=e189]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e190]
            - paragraph [ref=e191]: Bienvenue dans la boutique
            - generic [ref=e192]:
              - generic [ref=e193]: 183,00 €
              - generic [ref=e194]: Plus que 5 !
            - generic [ref=e195]:
              - spinbutton [ref=e196]: "1"
              - button "Ajouter" [ref=e197] [cursor=pointer]
        - generic [ref=e198]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e200]
          - generic [ref=e201]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e202]
            - paragraph [ref=e203]: Bienvenue dans la boutique
            - generic [ref=e204]:
              - generic [ref=e205]: 192,00 €
              - generic [ref=e206]: En stock
            - generic [ref=e207]:
              - spinbutton [ref=e208]: "1"
              - button "Ajouter" [ref=e209] [cursor=pointer]
        - generic [ref=e210]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e212]
          - generic [ref=e213]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e214]
            - paragraph [ref=e215]: Bienvenue dans la boutique
            - generic [ref=e216]:
              - generic [ref=e217]: 117,00 €
              - generic [ref=e218]: En stock
            - generic [ref=e219]:
              - spinbutton [ref=e220]: "1"
              - button "Ajouter" [ref=e221] [cursor=pointer]
        - generic [ref=e222]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e224]
          - generic [ref=e225]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e226]
            - paragraph [ref=e227]: Bienvenue dans la boutique
            - generic [ref=e228]:
              - generic [ref=e229]: 136,00 €
              - generic [ref=e230]: Plus que 5 !
            - generic [ref=e231]:
              - spinbutton [ref=e232]: "1"
              - button "Ajouter" [ref=e233] [cursor=pointer]
        - generic [ref=e234]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e236]
          - generic [ref=e237]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e238]
            - paragraph [ref=e239]: Bienvenue dans la boutique
            - generic [ref=e240]:
              - generic [ref=e241]: 198,00 €
              - generic [ref=e242]: En stock
            - generic [ref=e243]:
              - spinbutton [ref=e244]: "1"
              - button "Ajouter" [ref=e245] [cursor=pointer]
        - generic [ref=e246]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e248]
          - generic [ref=e249]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e250]
            - paragraph [ref=e251]: Bienvenue dans la boutique
            - generic [ref=e252]:
              - generic [ref=e253]: 134,00 €
              - generic [ref=e254]: En stock
            - generic [ref=e255]:
              - spinbutton [ref=e256]: "1"
              - button "Ajouter" [ref=e257] [cursor=pointer]
        - generic [ref=e258]:
          - img "LG 24U421A-B Ecran PC bureautique 24\"" [ref=e260]
          - generic [ref=e261]:
            - heading "LG 24U421A-B Ecran PC bureautique 24\"" [level=2] [ref=e262]
            - paragraph [ref=e263]: description ici
            - generic [ref=e264]:
              - generic [ref=e265]: 25,00 €
              - generic [ref=e266]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e267]
        - generic [ref=e268]:
          - img "Casque audio sans fil" [ref=e270]
          - generic [ref=e271]:
            - heading "Casque audio sans fil" [level=2] [ref=e272]
            - paragraph [ref=e273]: Casque Bluetooth confortable, autonomie 30h.
            - generic [ref=e274]:
              - generic [ref=e275]: 79,90 €
              - generic [ref=e276]: En stock
            - generic [ref=e277]:
              - spinbutton [ref=e278]: "1"
              - button "Ajouter" [ref=e279] [cursor=pointer]
        - generic [ref=e280]:
          - img "Souris ergonomique" [ref=e282]
          - generic [ref=e283]:
            - heading "Souris ergonomique" [level=2] [ref=e284]
            - paragraph [ref=e285]: Souris sans fil silencieuse 6 boutons.
            - generic [ref=e286]:
              - generic [ref=e287]: 24,50 €
              - generic [ref=e288]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e289]
        - generic [ref=e290]:
          - img "Clavier mÃ©canique" [ref=e292]
          - generic [ref=e293]:
            - heading "Clavier mÃ©canique" [level=2] [ref=e294]
            - paragraph [ref=e295]: Clavier rÃ©troÃ©clairÃ© switches rouges.
            - generic [ref=e296]:
              - generic [ref=e297]: 59,99 €
              - generic [ref=e298]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e299]
        - generic [ref=e300]:
          - img "Montre connectÃ©e" [ref=e302]
          - generic [ref=e303]:
            - heading "Montre connectÃ©e" [level=2] [ref=e304]
            - paragraph [ref=e305]: Montre sport avec suivi cardio et GPS.
            - generic [ref=e306]:
              - generic [ref=e307]: 149,00 €
              - generic [ref=e308]: En stock
            - generic [ref=e309]:
              - spinbutton [ref=e310]: "1"
              - button "Ajouter" [ref=e311] [cursor=pointer]
  - contentinfo [ref=e312]:
    - generic [ref=e313]:
      - generic [ref=e314]: © 2026 BoutiqueQA — Projet pédagogique pour testeurs QA.
      - generic [ref=e315]: PHP · MySQL · Tailwind · JS
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.beforeEach('setup',async ({page}) =>{
  4  |     await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
  5  |     // saisir email
  6  |      await page.locator("#login-email").fill(" client@boutique.qa")
  7  |     // saisir mot de passe 
  8  |      await page.locator("[data-testid='login-password']").fill("Client123!")
  9  |     // clique sur se connecter
  10 |      await page.getByRole("button",{name:"Se connecter"}).click()
  11 |      await expect(page).toHaveURL("https://api.efi-academy.com/e-commerce-test-api/client/shop.php")
  12 |      await expect(page.locator("#nav-logout")).toBeVisible()
  13 | })
  14 | test('Ajout produit',{tag:'@regression'},async({page})=>{
  15 | // ajout premier produit
  16 |     await page.locator("[data-testid='add-to-cart-qty-1']").fill("2")
  17 |     await page.locator("[data-testid='add-to-cart-btn-1']").click()
  18 |     await expect(page.locator("[data-testid='alert']")).toBeVisible()
  19 |     await page.locator("[data-testid='alert-close']").click()
  20 | //ajout deuxieme produit
> 21 |     await page.locator("[data-testid='add-to-cart-qty-4']").fill("1")
     |                                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  22 |     await page.locator("[data-testid='add-to-cart-btn-4']").click()
  23 |     await expect(page.locator("[data-testid='alert']")).toBeVisible()
  24 |     await page.locator("[data-testid='alert-close']").click()
  25 | // vérifier que le panier contient les prods
  26 |     await expect(page.locator("#nav-cart-badge")).toHaveText("3")
  27 | })
```