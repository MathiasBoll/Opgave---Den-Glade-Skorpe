# Copilot/Codex master prompt - Den Glade Skorpe

Du skal arbejde på projektet **Den Glade Skorpe**.

Projektet er en fagprøve/webudvikler-opgave for et moderne pizzeria med online bestilling og backoffice. Løsningen skal være min egen, forståelig og eksamensvenlig. Koden må gerne være god, men ikke så avanceret at den bliver svær at forklare mundtligt.

## Vigtigste krav

Byg en mobile-first frontend der følger Figma-designet så tæt som muligt.

Obligatoriske routes:

- `/` Forside
- `/dish/:id` Detaljeside for ret
- `/employees` Personalet
- `/contact` Kontakt
- `/basket` Kurv
- `/backoffice` Backoffice forside
- `/backoffice/employees` Administrér medarbejdere

Backend/API kører lokalt på:

```txt
http://localhost:3042
```

## Prioritering

Arbejd i denne rækkefølge:

1. Projektstruktur, routing, komponentstruktur og styling setup
2. Grundlayout: header, burger menu, footer, mobile-first layout
3. API GET: retter på forsiden, ret-detalje og employees
4. Kurv-flow: størrelse → tilføj til kurv → localStorage → vis kurv
5. Kontaktformular med validering og POST til server
6. Backoffice employees CRUD
7. 404, loading/error states, tomme lister og UX-finish
8. Tilvalg først når alt obligatorisk virker

## Design

Fonts:

- Overskrifter/knapper: `Just Another Hand`
- Brødtekst: `Kurale`

Farver:

- Dark gray/koksgrå: `#4A4A4A`
- Cream: `#F6F0EE`
- White: `#FFFFFF`
- Black: `#000000`

Assets:

- `logo.png`
- `headerImg.png`
- `basket_icon.png`

## API-funktioner der bør laves

Lav en `services/api.js` eller lignende med reusable functions:

- `getCategories()`
- `getDishes()`
- `getDishById(id)`
- `getEmployees()`
- `getEmployeeById(id)`
- `sendMessage(data)`
- `createEmployee(data)`
- `updateEmployee(data)` eller `updateEmployee(id, data)` afhængigt af API'et
- `deleteEmployee(id)`

Brug loading, error og success feedback.

## Kurv i localStorage

Lav helper functions:

- `getBasket()`
- `saveBasket(items)`
- `addToBasket(item)`
- `removeFromBasket(id)`
- `clearBasket()`
- `getBasketCount()`
- `getBasketTotal()`

Kurven må ikke crashe, hvis localStorage er tom.

## Backoffice employees

Backoffice employees skal kunne:

- hente alle medarbejdere
- oprette medarbejder
- redigere medarbejder
- slette medarbejder
- vise feedback ved succes/fejl
- bekræfte før delete

## Kode-stil

- Hold koden læsbar og begyndervenlig.
- Brug genanvendelige komponenter.
- Kommentér vigtige steder, men ikke hver linje.
- Undgå at starte på tilvalg før obligatoriske krav virker.
- Sørg for at README og rapport kan forklare projektet.
