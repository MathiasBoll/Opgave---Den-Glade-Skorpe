# Design Reference Screenshots

Figma file: https://www.figma.com/design/yzjuDfwFzngz8EySrOXSf6/Den-Glade-Skorpe?node-id=0-1&t=MSX31p88mfkA3jmj-1

Save each screenshot from the project Figma file with the filename below, then use them as visual reference while building.

## Mobile frames

| File | Description | GitHub Issue |
|---|---|---|
| `01-forside.png` | Full front page — header, welcome text, category circles, dish grid, footer | [#8 Front page](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/8) |
| `02-forside-kategori-filter.png` | Category filter close-up — "Vælg kategori" + "Alle vores pizzaer" filtered state | [#8 Front page](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/8) |
| `03-detaljeside.png` | Dish detail page — Parma Drama, size dropdown (Almindelig), price, add-to-basket button | [#9 Dish detail](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/9) |
| `04-detaljeside-ingredienser.png` | Dish detail with extra ingredient dropdown open — Chili, Hvidløg, Rød peber, Kebab | [#18 Extra ingredients (optional)](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/18) |
| `05-burgermenu.png` | Burger menu full-screen overlay — dark background, Forside / Personalet / Kontakt / Kurv, ✕ close | [#7 Header/footer](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/7) |
| `06-personalet.png` | Employees page — 2-column grid, name + role below each photo | [#10 Employees](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/10) |
| `07-kontakt.png` | Contact form — Navn, Emne, Beskrivelse fields, Send button | [#11 Contact form](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/11) |
| `08-kurv.png` | Basket page — order cards with Ekstra/Størrelse/Pris, total "I alt", comments field, "Afgiv ordre" button | [#12 Basket](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/12) |
| `09-tak-for-din-bestilling.png` | Order receipt overlay — pizza bg, "Tak for din bestilling!", ✕ close | [#21 Orders (optional)](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/21) |
| `10-tak-for-din-besked.png` | Contact receipt overlay — pizza bg, "Tak for din besked [Name]! Vi vender tilbage hurtigst muligt.", ✕ close | [#11 Contact form](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/11) |

## Backoffice frames (desktop)

| File | Description | GitHub Issue |
|---|---|---|
| `11-backoffice-employees.png` | Employees table (Name/Image/Position/Actions) + Add staffmember form | [#13 Backoffice employees](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/13) |
| `12-backoffice-messages.png` | Messages table (Name/Subject/Status/Actions) with Delete + Open buttons | [#19 Backoffice messages (optional)](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/19) |
| `13-backoffice-orders.png` | Orders table (ID/Dishes/Comments/TotalPrice/Status/Actions) with status dropdown | [#21 Backoffice orders (optional)](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/21) |
| `14-backoffice-dishes.png` | Dishes table + two-column Add dish / Update dish forms side by side | [#20 Backoffice dishes (optional)](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues/20) |

## Design tokens (from Figma / PDF)

```css
:root {
  /* Colors */
  --color-dark:  #4A4A4A;  /* header, footer, buttons, primary contrast */
  --color-cream: #F6F0EE;  /* section and card backgrounds */
  --color-white: #FFFFFF;  /* page background, text on dark surfaces */
  --color-black: #000000;  /* body text */

  /* Fonts */
  --font-heading: 'Just Another Hand', cursive;  /* headings, buttons */
  --font-body:    'Kurale', serif;               /* body text, labels */
}
```

Install fonts:
```sh
npm install @fontsource/just-another-hand @fontsource/kurale
```

Import in `main.jsx`:
```js
import '@fontsource/just-another-hand'
import '@fontsource/kurale'
```
