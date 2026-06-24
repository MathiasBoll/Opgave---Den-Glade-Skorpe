# Den Glade Skorpe — AI-brug og projektoversigt

> Dette dokument er lavet til at hjælpe en ven, der skal løse den samme opgave.
> Det viser, hvad projektet indeholder, hvilke AI-værktøjer der er brugt og hvilken tilstand alle funktioner er i.

---

## Hvilken AI er brugt?

|Værktøj | Brugt til |
|---|---|
| **GitHub Copilot** (Claude Sonnet 4.6 via VS Code) | Hele projektet — kodning, CSS-debugging, GitHub issues, visuel audit mod Figma, fix af design-gaps |
| **ChatGPT / Claude direkte** | Ikke brugt — al AI-assistance er gået igennem Copilot i editoren |

**Vigtigt til rapporten (§ Anvendelse af tredjepart og AI):**
Al kode er skrevet *med* GitHub Copilot som assistent i VS Code. Copilot foreslog kode, men alle beslutninger om arkitektur, design-valg og afvigelser fra Figma er taget bevidst og kan begrundes. Se afsnit 3 herunder.

---

## Mappestruktur — opgavemappe

```
dgs 1/
│
├── dgs_frontend/                  ← React 18 + Vite frontend
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx               ← App entry point
│       ├── App.jsx                ← Router + layouts (PublicLayout / BackofficeLayout)
│       ├── index.css
│       │
│       ├── assets/                ← Billeder og statiske filer
│       ├── components/            ← Genbrugelige komponenter
│       │   ├── Header.jsx         ← Transparent fixed header + burger-menu
│       │   ├── Footer.jsx         ← Footer med logo + kontaktinfo
│       │   ├── DishCard.jsx       ← Ret-kort på forsiden
│       │   └── RequireAuth.jsx    ← Beskytter backoffice-ruter (JWT-check)
│       │
│       ├── context/
│       │   └── BasketContext.jsx  ← Global kurv-state (localStorage)
│       │
│       ├── hooks/
│       │   └── usePageTitle.js    ← Sætter <title> per side
│       │
│       ├── pages/                 ← Én fil per side
│       │   ├── Home.jsx / .module.css            ← Forside
│       │   ├── DishDetail.jsx / .module.css      ← Detaljeside
│       │   ├── Employees.jsx / .module.css       ← Personale-side
│       │   ├── Contact.jsx / .module.css         ← Kontaktformular
│       │   ├── ContactConfirmation.jsx            ← "Tak for din besked"-side
│       │   ├── Basket.jsx / .module.css           ← Kurv (localStorage)
│       │   ├── OrderConfirmation.jsx              ← Orderbekræftelse
│       │   ├── NotFound.jsx / .module.css         ← 404-side
│       │   └── backoffice/
│       │       ├── BackofficeLogin.jsx            ← Login med JWT
│       │       ├── Backoffice.jsx                 ← Backoffice-layout/nav
│       │       ├── BackofficeEmployees.jsx        ← Medarbejdere CRUD
│       │       ├── BackofficeDishes.jsx           ← Retter CRUD
│       │       ├── BackofficeMessages.jsx         ← Beskeder (valgfri)
│       │       └── BackofficeOrders.jsx           ← Ordrer (valgfri)
│       │
│       ├── services/
│       │   └── api.js             ← Ét sted for ALLE fetch-kald til serveren
│       │
│       ├── styles/
│       │   ├── variables.css      ← Design-tokens (farver, fonte, spacing)
│       │   └── global.css         ← Reset + base-typografi
│       │
│       └── utils/                 ← Hjælpefunktioner
│
├── mcd_web_dengladeskorpe_server/ ← Udleveret Express/MongoDB-server
│   ├── index.js                   ← Start-punkt (port 3042)
│   ├── package.json
│   └── lib/
│       ├── server.js              ← Express-opsætning + routes
│       ├── db/                    ← Mongoose-modeller + forbindelse
│       ├── routes/                ← API-endpoints (dishes, employees, messages, auth …)
│       ├── handlers/              ← Forretningslogik
│       └── middleware/            ← auth.middleware.js (JWT-validering)
│
├── dgs_github_md/                 ← GitHub issues (original)
├── dgs_github_expanded_md/        ← Udvidede GitHub issues + checkliste
├── dgs_materialer/                ← Tekst til siden (Den Glade Skorpe)
├── design/                        ← Figma-design referencer
│
├── README.md                      ← Opsætningsvejledning
└── RAPPORT.md                     ← Eksamenrapport
```

---

## Status på alle funktioner

### Obligatoriske sider ✅ Alle implementeret

| Side | Rute | Status | Bemærkninger |
|---|---|---|---|
| Forside | `/` | ✅ Færdig | Hero, velkomst, kategori-filter, ret-grid |
| Detaljeside | `/dish/:id` | ✅ Færdig | Pizza-hero med "Den Glade [Rettens navn]", cirkulært billede, ingredienser, størrelse, pris, kurv-knap |
| Personale | `/employees` | ✅ Færdig | Pizza-hero, intro-tekst, medarbejderkort med billede/navn/stilling |
| Kontakt | `/contact` | ✅ Færdig | Pizza-hero, formular med validation, POST til server |
| Kurv | `/basket` | ✅ Færdig | Pizza-hero, varer fra localStorage, størrelse-badge, fjern/tøm |
| 404 | `/*` | ✅ Færdig | Pizza-emoji, 404-tekst, link hjem |
| Backoffice login | `/backoffice/login` | ✅ Færdig | Email + kode, JWT-token, redirect |
| Backoffice medarbejdere | `/backoffice/employees` | ✅ Færdig | Tabel, opret, rediger, slet |

### Valgfrie sider ✅ Alle implementeret (bonus)

| Side | Rute | Status |
|---|---|---|
| Backoffice retter | `/backoffice/dishes` | ✅ Fuldt CRUD |
| Backoffice beskeder | `/backoffice/messages` | ✅ Åbn/slet, ulæst-status |
| Backoffice ordrer | `/backoffice/orders` | ✅ Status-skift, slet |
| Ekstra ingredienser | `/dish/:id` | ✅ Toggle-lista under "Tilføj ingredienser" |

### Tekniske krav

| Krav | Status |
|---|---|
| API-service-lag (én `api.js`) | ✅ |
| localStorage kurv | ✅ |
| JWT-auth til backoffice | ✅ |
| Loading-states | ✅ |
| Error-states | ✅ |
| Tomme states | ✅ |
| Kategori-filter uden reload | ✅ |
| Kurv-badge tæller live | ✅ |
| Burger-menu (mobil) | ✅ |
| Responsive 390 px mobil-first | ✅ |
| 404-side | ✅ |
| `.gitignore` (node_modules) | ✅ |

---

## Bevidste afvigelser fra Figma

Disse er UX-forbedringer — kan forklares til eksamen:

| Figma | Vores valg | Begrundelse |
|---|---|---|
| Dropdown (`<select>`) til størrelse | Pill-knapper (Almindelig / Familie) | Viser alle valg på én gang — én interaktion spares |
| Plain tekst-liste til ingredienser | Horisontale pill-chips | Hurtigere at scanne, fylder mindre vertikalt |
| Handwriting-font på "Tilføj"-knap | Body-font (Kurale) | Kurale er mere læsbar på mørk knap i lille skriftstørrelse |
| "Den Glade Skorpe" samme størrelse alle linjer | `★ Den ★` lille / `Glade` stor / `[Navn]` mellem | Visuel hierarki fra Figma-referencen implementeret på DishDetail |

---

## Testoplysninger

```
Backend URL:   http://localhost:3042
Frontend URL:  http://localhost:5173

Backoffice login:
  E-mail:        admin@mediacollege.dk
  Adgangskode:   admin
```

**Start server:**
```bash
cd mcd_web_dengladeskorpe_server
node index.js
```

**Start frontend:**
```bash
cd dgs_frontend
npm install
npm run dev
```

---

## Hvad der stadig kan forbedres

Disse er noter til vurdering af egen indsats:

- [ ] Desktop-breakpoint over 1024 px (valgfri — ikke implementeret)
- [ ] Hero-titel typografi-hierarki (lille/stor/mellem) er kun på DishDetail — kan harmoniseres til alle sider
- [ ] Backoffice har ingen responsiv tabel-løsning (horisontalt scroll på 390 px er forventet backoffice-adfærd)
- [ ] Kontakt-formular `ContactConfirmation`-siden mangler en "Gå hjem"-knap (redirect sker automatisk)
