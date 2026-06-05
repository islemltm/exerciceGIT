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
      - link "BoutiqueQA" [ref=e4]:
        - /url: /e-commerce-test-api/index.php
      - generic [ref=e5]:
        - link "Boutique" [ref=e6]:
          - /url: /e-commerce-test-api/client/shop.php
        - link "Mes commandes" [ref=e7]:
          - /url: /e-commerce-test-api/client/my_orders.php
        - link "Profil" [ref=e8]:
          - /url: /e-commerce-test-api/client/profile.php
        - link "Panier 2" [ref=e9]:
          - /url: /e-commerce-test-api/client/cart.php
          - text: Panier
          - generic [ref=e10]: "2"
        - generic [ref=e11]: "|"
        - generic [ref=e12]: samir (client)
        - link "Déconnexion" [ref=e13]:
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
              - generic [ref=e27]: 190,00 €
              - generic [ref=e28]: En stock
            - generic [ref=e29]:
              - spinbutton [ref=e30]: "1"
              - button "Ajouter" [ref=e31] [cursor=pointer]
        - generic [ref=e32]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e34]
          - generic [ref=e35]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e36]
            - paragraph [ref=e37]: Bienvenue dans la boutique
            - generic [ref=e38]:
              - generic [ref=e39]: 121,00 €
              - generic [ref=e40]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e41]
        - generic [ref=e42]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e44]
          - generic [ref=e45]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e46]
            - paragraph [ref=e47]: Bienvenue dans la boutique
            - generic [ref=e48]:
              - generic [ref=e49]: 233,00 €
              - generic [ref=e50]: Plus que 1 !
            - generic [ref=e51]:
              - spinbutton [ref=e52]: "1"
              - button "Ajouter" [ref=e53] [cursor=pointer]
        - generic [ref=e54]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e56]
          - generic [ref=e57]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e58]
            - paragraph [ref=e59]: Bienvenue dans la boutique
            - generic [ref=e60]:
              - generic [ref=e61]: 130,00 €
              - generic [ref=e62]: Plus que 5 !
            - generic [ref=e63]:
              - spinbutton [ref=e64]: "1"
              - button "Ajouter" [ref=e65] [cursor=pointer]
        - generic [ref=e66]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e68]
          - generic [ref=e69]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e70]
            - paragraph [ref=e71]: Bienvenue dans la boutique
            - generic [ref=e72]:
              - generic [ref=e73]: 136,00 €
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
              - generic [ref=e85]: 207,00 €
              - generic [ref=e86]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e87]
        - generic [ref=e88]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e90]
          - generic [ref=e91]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e92]
            - paragraph [ref=e93]: Bienvenue dans la boutique
            - generic [ref=e94]:
              - generic [ref=e95]: 227,00 €
              - generic [ref=e96]: Plus que 4 !
            - generic [ref=e97]:
              - spinbutton [ref=e98]: "1"
              - button "Ajouter" [ref=e99] [cursor=pointer]
        - generic [ref=e100]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e102]
          - generic [ref=e103]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e104]
            - paragraph [ref=e105]: Bienvenue dans la boutique
            - generic [ref=e106]:
              - generic [ref=e107]: 141,00 €
              - generic [ref=e108]: En stock
            - generic [ref=e109]:
              - spinbutton [ref=e110]: "1"
              - button "Ajouter" [ref=e111] [cursor=pointer]
        - generic [ref=e112]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e114]
          - generic [ref=e115]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e116]
            - paragraph [ref=e117]: Bienvenue dans la boutique
            - generic [ref=e118]:
              - generic [ref=e119]: 137,00 €
              - generic [ref=e120]: Plus que 3 !
            - generic [ref=e121]:
              - spinbutton [ref=e122]: "1"
              - button "Ajouter" [ref=e123] [cursor=pointer]
        - generic [ref=e124]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e126]
          - generic [ref=e127]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e128]
            - paragraph [ref=e129]: Bienvenue dans la boutique
            - generic [ref=e130]:
              - generic [ref=e131]: 191,00 €
              - generic [ref=e132]: Plus que 2 !
            - generic [ref=e133]:
              - spinbutton [ref=e134]: "1"
              - button "Ajouter" [ref=e135] [cursor=pointer]
        - generic [ref=e136]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e138]
          - generic [ref=e139]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e140]
            - paragraph [ref=e141]: Bienvenue dans la boutique
            - generic [ref=e142]:
              - generic [ref=e143]: 145,00 €
              - generic [ref=e144]: Plus que 3 !
            - generic [ref=e145]:
              - spinbutton [ref=e146]: "1"
              - button "Ajouter" [ref=e147] [cursor=pointer]
        - generic [ref=e148]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e150]
          - generic [ref=e151]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e152]
            - paragraph [ref=e153]: Bienvenue dans la boutique
            - generic [ref=e154]:
              - generic [ref=e155]: 182,00 €
              - generic [ref=e156]: Plus que 4 !
            - generic [ref=e157]:
              - spinbutton [ref=e158]: "1"
              - button "Ajouter" [ref=e159] [cursor=pointer]
        - generic [ref=e160]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e162]
          - generic [ref=e163]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e164]
            - paragraph [ref=e165]: Bienvenue dans la boutique
            - generic [ref=e166]:
              - generic [ref=e167]: 130,00 €
              - generic [ref=e168]: En stock
            - generic [ref=e169]:
              - spinbutton [ref=e170]: "1"
              - button "Ajouter" [ref=e171] [cursor=pointer]
        - generic [ref=e172]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e174]
          - generic [ref=e175]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e176]
            - paragraph [ref=e177]: Bienvenue dans la boutique
            - generic [ref=e178]:
              - generic [ref=e179]: 208,00 €
              - generic [ref=e180]: En stock
            - generic [ref=e181]:
              - spinbutton [ref=e182]: "1"
              - button "Ajouter" [ref=e183] [cursor=pointer]
        - generic [ref=e184]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e186]
          - generic [ref=e187]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e188]
            - paragraph [ref=e189]: Bienvenue dans la boutique
            - generic [ref=e190]:
              - generic [ref=e191]: 131,00 €
              - generic [ref=e192]: Plus que 4 !
            - generic [ref=e193]:
              - spinbutton [ref=e194]: "1"
              - button "Ajouter" [ref=e195] [cursor=pointer]
        - generic [ref=e196]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e198]
          - generic [ref=e199]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e200]
            - paragraph [ref=e201]: Bienvenue dans la boutique
            - generic [ref=e202]:
              - generic [ref=e203]: 141,00 €
              - generic [ref=e204]: En stock
            - generic [ref=e205]:
              - spinbutton [ref=e206]: "1"
              - button "Ajouter" [ref=e207] [cursor=pointer]
        - generic [ref=e208]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e210]
          - generic [ref=e211]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e212]
            - paragraph [ref=e213]: Bienvenue dans la boutique
            - generic [ref=e214]:
              - generic [ref=e215]: 112,00 €
              - generic [ref=e216]: Plus que 4 !
            - generic [ref=e217]:
              - spinbutton [ref=e218]: "1"
              - button "Ajouter" [ref=e219] [cursor=pointer]
        - generic [ref=e220]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e222]
          - generic [ref=e223]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e224]
            - paragraph [ref=e225]: Bienvenue dans la boutique
            - generic [ref=e226]:
              - generic [ref=e227]: 183,00 €
              - generic [ref=e228]: Plus que 5 !
            - generic [ref=e229]:
              - spinbutton [ref=e230]: "1"
              - button "Ajouter" [ref=e231] [cursor=pointer]
        - generic [ref=e232]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e234]
          - generic [ref=e235]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e236]
            - paragraph [ref=e237]: Bienvenue dans la boutique
            - generic [ref=e238]:
              - generic [ref=e239]: 192,00 €
              - generic [ref=e240]: En stock
            - generic [ref=e241]:
              - spinbutton [ref=e242]: "1"
              - button "Ajouter" [ref=e243] [cursor=pointer]
        - generic [ref=e244]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e246]
          - generic [ref=e247]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e248]
            - paragraph [ref=e249]: Bienvenue dans la boutique
            - generic [ref=e250]:
              - generic [ref=e251]: 117,00 €
              - generic [ref=e252]: En stock
            - generic [ref=e253]:
              - spinbutton [ref=e254]: "1"
              - button "Ajouter" [ref=e255] [cursor=pointer]
        - generic [ref=e256]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e258]
          - generic [ref=e259]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e260]
            - paragraph [ref=e261]: Bienvenue dans la boutique
            - generic [ref=e262]:
              - generic [ref=e263]: 136,00 €
              - generic [ref=e264]: Plus que 5 !
            - generic [ref=e265]:
              - spinbutton [ref=e266]: "1"
              - button "Ajouter" [ref=e267] [cursor=pointer]
        - generic [ref=e268]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e270]
          - generic [ref=e271]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e272]
            - paragraph [ref=e273]: Bienvenue dans la boutique
            - generic [ref=e274]:
              - generic [ref=e275]: 198,00 €
              - generic [ref=e276]: En stock
            - generic [ref=e277]:
              - spinbutton [ref=e278]: "1"
              - button "Ajouter" [ref=e279] [cursor=pointer]
        - generic [ref=e280]:
          - img "Bouilloires et distributeurs d'eau chaude" [ref=e282]
          - generic [ref=e283]:
            - heading "Bouilloires et distributeurs d'eau chaude" [level=2] [ref=e284]
            - paragraph [ref=e285]: Bienvenue dans la boutique
            - generic [ref=e286]:
              - generic [ref=e287]: 134,00 €
              - generic [ref=e288]: En stock
            - generic [ref=e289]:
              - spinbutton [ref=e290]: "1"
              - button "Ajouter" [ref=e291] [cursor=pointer]
        - generic [ref=e292]:
          - img "LG 24U421A-B Ecran PC bureautique 24\"" [ref=e294]
          - generic [ref=e295]:
            - heading "LG 24U421A-B Ecran PC bureautique 24\"" [level=2] [ref=e296]
            - paragraph [ref=e297]: description ici
            - generic [ref=e298]:
              - generic [ref=e299]: 25,00 €
              - generic [ref=e300]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e301]
        - generic [ref=e302]:
          - img "Casque audio sans fil" [ref=e304]
          - generic [ref=e305]:
            - heading "Casque audio sans fil" [level=2] [ref=e306]
            - paragraph [ref=e307]: Casque Bluetooth confortable, autonomie 30h.
            - generic [ref=e308]:
              - generic [ref=e309]: 79,90 €
              - generic [ref=e310]: En stock
            - generic [ref=e311]:
              - spinbutton [ref=e312]: "1"
              - button "Ajouter" [ref=e313] [cursor=pointer]
        - generic [ref=e314]:
          - img "Souris ergonomique" [ref=e316]
          - generic [ref=e317]:
            - heading "Souris ergonomique" [level=2] [ref=e318]
            - paragraph [ref=e319]: Souris sans fil silencieuse 6 boutons.
            - generic [ref=e320]:
              - generic [ref=e321]: 24,50 €
              - generic [ref=e322]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e323]
        - generic [ref=e324]:
          - img "Clavier mÃ©canique" [ref=e326]
          - generic [ref=e327]:
            - heading "Clavier mÃ©canique" [level=2] [ref=e328]
            - paragraph [ref=e329]: Clavier rÃ©troÃ©clairÃ© switches rouges.
            - generic [ref=e330]:
              - generic [ref=e331]: 59,99 €
              - generic [ref=e332]: Rupture de stock
            - button "Indisponible" [disabled] [ref=e333]
        - generic [ref=e334]:
          - img "Montre connectÃ©e" [ref=e336]
          - generic [ref=e337]:
            - heading "Montre connectÃ©e" [level=2] [ref=e338]
            - paragraph [ref=e339]: Montre sport avec suivi cardio et GPS.
            - generic [ref=e340]:
              - generic [ref=e341]: 149,00 €
              - generic [ref=e342]: En stock
            - generic [ref=e343]:
              - spinbutton [ref=e344]: "1"
              - button "Ajouter" [ref=e345] [cursor=pointer]
  - contentinfo [ref=e346]:
    - generic [ref=e347]:
      - generic [ref=e348]: © 2026 BoutiqueQA — Projet pédagogique pour testeurs QA.
      - generic [ref=e349]: PHP · MySQL · Tailwind · JS
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