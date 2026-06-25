# Den Glade Skorpe — Frontend

React 18 + Vite frontend til Den Glade Skorpe pizzeria-webapp.

---

## Indholdsfortegnelse

1. [Hurtig start](#hurtig-start)
2. [Mappestruktur](#mappestruktur)
3. [Sider og ruter](#sider-og-ruter)
4. [Komponenter](#komponenter)
5. [Kontekst (global tilstand)](#kontekst-global-tilstand)
6. [Hooks](#hooks)
7. [Service-lag (API)](#service-lag-api)
8. [Styling](#styling)
9. [Backoffice](#backoffice)
10. [Miljøvariabler](#miljøvariabler)

---

## Hurtig start

```bash
npm install
npm run dev
```

Frontend kører på **http://localhost:5174** — backend skal køre på port 3042.

---

## Mappestruktur

```
src/
├── main.jsx                  ← App-indgangspunkt, BrowserRouter, context-providers
├── App.jsx                   ← Alle ruter defineret med React Router
├── App.css                   ← Global reset og basis-layout
├── index.css                 ← Importerer variables.css og global.css
│
├── pages/                    ← Én fil pr. side (offentlige)
│   ├── Home.jsx              ← Forside med hero og rettekort-grid
│   ├── DishDetail.jsx        ← Retteside med størrelsesvælger og ingredienspanel
│   ├── Basket.jsx            ← Kurv med mængdekontrol og ordreafgivelse
│   ├── OrderConfirmation.jsx ← Bekræftelsesside efter afgivet ordre
│   ├── Employees.jsx         ← Offentlig medarbejder-side
│   ├── Contact.jsx           ← Kontaktformular
│   ├── ContactConfirmation.jsx ← Bekræftelse efter sendt besked
│   ├── NotFound.jsx          ← 404-siden (catch-all route)
│   └── backoffice/           ← Beskyttede admin-sider (kræver login)
│       ├── BackofficeLogin.jsx
│       ├── Backoffice.jsx          ← Backoffice-shell/layout
│       ├── BackofficeEmployees.jsx ← CRUD medarbejdere inkl. billede-upload
│       ├── BackofficeDishes.jsx    ← CRUD retter inkl. billede-upload
│       ├── BackofficeOrders.jsx    ← Visning af indkomne ordrer
│       └── BackofficeMessages.jsx  ← Visning af kontaktbeskeder
│
├── components/               ← Delte komponenter brugt på tværs af sider
│   ├── Header.jsx            ← Navbar med burger-menu og kurv-badge
│   ├── Footer.jsx            ← Sidefod
│   ├── DishCard.jsx          ← Kortkomponent til visning af én ret
│   └── RequireAuth.jsx       ← Rutebeskytter — omdirigerer til login uden JWT
│
├── context/                  ← Global React Context
│   ├── BasketContext.jsx     ← Kurv-tilstand og localStorage-persistens
│   └── AuthContext.jsx       ← JWT-token og login/logout-funktion
│
├── hooks/
│   └── usePageTitle.js       ← Custom hook der sætter document.title pr. side
│
├── services/
│   └── api.js                ← Centralt service-lag med alle fetch-kald til serveren
│
└── styles/
    ├── variables.css         ← CSS custom properties (farver, fonte, spacing)
    └── global.css            ← Globale base-styles og utility-klasser
```

---

## Sider og ruter

| Rute | Komponent | Beskrivelse |
|---|---|---|
| `/` | `Home` | Forside med hero-banner og rettekort-grid med kategorifilter |
| `/dish/:id` | `DishDetail` | Retteside med størrelsesvælger, ingredienspanel og "Læg i kurv" |
| `/kurv` | `Basket` | Kurv med mængdekontrol, extras og ordreafgivelse til serveren |
| `/ordre-bekraeftelse` | `OrderConfirmation` | Vist efter afgivet ordre med ordrenummer |
| `/medarbejdere` | `Employees` | Offentlig medarbejder-side hentet fra API |
| `/kontakt` | `Contact` | Kontaktformular med klient-side validering og POST til server |
| `/kontakt/tak` | `ContactConfirmation` | Bekræftelse efter sendt kontaktbesked |
| `/backoffice/login` | `BackofficeLogin` | Login-side til backoffice |
| `/backoffice` | `Backoffice` + `RequireAuth` | Backoffice-shell, kræver gyldigt JWT |
| `/backoffice/medarbejdere` | `BackofficeEmployees` | CRUD medarbejdere med billede-upload |
| `/backoffice/retter` | `BackofficeDishes` | CRUD retter med billede-upload |
| `/backoffice/ordrer` | `BackofficeOrders` | Visning af indkomne ordrer |
| `/backoffice/beskeder` | `BackofficeMessages` | Visning af kontaktbeskeder |
| `*` | `NotFound` | 404-side for alle ukendte URL'er |

---

## Komponenter

### `Header.jsx`
Navigationsbar med logo, links og kurv-badge. På mobil vises et burger-ikon der åbner en fullscreen-menu. Badge-tallet hentes fra `BasketContext.count`.

### `Footer.jsx`
Simpel sidefod med kontaktinfo og åbningstider.

### `DishCard.jsx`
Kortkomponent der modtager en ret som prop og viser billede, navn, beskrivelse og pris. Bruges på `Home` og evt. søgeresultater. Klikker man, navigeres til `/dish/:id`.

### `RequireAuth.jsx`
Wrapper-komponent der tjekker `AuthContext` for gyldigt JWT. Mangler token → redirect til `/backoffice/login`. Bruges som `element` på alle `/backoffice/*`-ruter.

---

## Kontekst (global tilstand)

### `BasketContext.jsx`
Holder kurv-array i React state og synkroniserer med `localStorage` (nøgle: `dgs_basket`).

Eksporterer:
- `basket` — array af kurv-linjer `{ ...dish, selectedSize, quantity, basketKey }`
- `addToBasket(dish)` — tilføjer eller øger quantity
- `updateQuantity(basketKey, n)` — opdaterer antal (0 = slet)
- `clearBasket()` — tømmer kurven
- `count` — sum af alle quantity-værdier, vises som badge

### `AuthContext.jsx`
Håndterer JWT-login-tilstand.

Eksporterer:
- `token` — JWT-string eller `null`
- `login(token)` — gemmer token i state og `localStorage`
- `logout()` — fjerner token og sender bruger til login

---

## Hooks

### `usePageTitle(title)`
Sætter `document.title` til den angivne streng + `" | Den Glade Skorpe"` hver gang siden renderes. Bruges på alle sider for korrekt SEO og fane-tekst.

---

## Service-lag (API)

Alle `fetch`-kald er samlet i `services/api.js`. Base-URL hentes fra `VITE_API_BASE_URL` (`.env.local`) eller falder tilbage på `http://localhost:3042`.

Vigtige funktioner:

| Funktion | Endpoint | Beskrivelse |
|---|---|---|
| `getDishes()` | `GET /dishes` | Henter alle retter |
| `getDish(id)` | `GET /dish/:id` | Henter én ret |
| `getCategories()` | `GET /categories` | Henter alle kategorier |
| `getIngredients()` | `GET /ingredients` | Henter alle ingredienser |
| `getEmployees()` | `GET /employees` | Henter alle medarbejdere |
| `postOrder(data)` | `POST /order` | Afgiver en ordre (kræver JWT) |
| `postMessage(data)` | `POST /messages` | Sender kontaktbesked |
| `signIn(creds)` | `POST /auth/signin` | Logger ind og returnerer JWT |

---

## Styling

- **CSS Modules** — hvert komponent/side har en `.module.css`-fil, klasserne er automatisk scoped
- **`styles/variables.css`** — alle farver, fonte og spacing som CSS custom properties (`--color-dark`, `--font-heading` osv.)
- **`styles/global.css`** — reset, base-styles og utility-klasser
- **Mobile-first** — base CSS er til mobil, desktop-breakpoints tilføjes med `min-width`

Breakpoints:

| Navn | Query |
|---|---|
| Lille mobil | `max-width: 374px` |
| Tablet | `min-width: 768px` |
| Desktop | `min-width: 1024px` |
| Bred desktop | `min-width: 1440px` |
| Ultrawide | `min-width: 2560px` |

---

## Backoffice

Backoffice kræver login med brugernavn og adgangskode. Test-credentials:

| Felt | Værdi |
|---|---|
| Brugernavn | `admin` |
| Adgangskode | `admin` |

JWT-tokenet gemmes i `localStorage` under nøglen `bo_token` og sendes som `Authorization: Bearer <token>` header på alle beskyttede kald.

Sæt `USE_JWT=false` i serverens `.env` for at deaktivere JWT-krav under udvikling.

---

## Miljøvariabler

Opret en `.env.local`-fil i `dgs_frontend/`-mappen (ignoreres af Git):

```env
VITE_API_BASE_URL=http://localhost:3042
```

Uden filen bruges `http://localhost:3042` som standard.
