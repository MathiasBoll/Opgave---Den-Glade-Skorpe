# Den Glade Skorpe

Fagprøveprojekt — Den Glade Skorpe er en moderne pizzarestaurant med mobil-first hjemmeside, online bestilling og backoffice/admin-panel.

- **Eksamenrapport:** [`RAPPORT.html`](./RAPPORT.html) — åbn i browser
- **Frontend-dokumentation:** [`dgs_frontend/README.md`](./dgs_frontend/README.md)
- **Backend-dokumentation:** [`mcd_web_dengladeskorpe_server/readme.md`](./mcd_web_dengladeskorpe_server/readme.md)

---

## Repo-struktur

```
RAPPORT.html                     ← Eksamensrapport (åbn i browser)
docs/screenshots/                ← FireShot-skærmbilleder af appen
mcd_web_dengladeskorpe_server/   ← Backend API (Node.js / Express / MongoDB)
dgs_frontend/                    ← Frontend (React 19 + Vite)
dgs_materialer/                  ← Assets: logo, billeder, tekst
dgs_github_md/                   ← Issue-skabeloner og projektstyrings-dokumenter
```

---

## Backend — kom i gang

Backend kører på **http://localhost:3042**

### 1. Installér dependencies

```bash
cd mcd_web_dengladeskorpe_server
npm install
```

### 2. Opret `.env.local` i `mcd_web_dengladeskorpe_server/`

```env
NODE_ENV=development

SERVER_PORT=3042
SERVER_HOST=http://localhost:3042

MONGODB_URI=mongodb://127.0.0.1:27017/mcd-dengladeskorpe

JWT_EXPIRES_IN="24h"
JWT_SECRET="8e18fa26acc704d3ca37fea29e17e8e024423a7c3eab4b76390a94ac579c20f0"

USE_JWT=false
```

### 3. Seed databasen

```bash
npm run "Opret Database"
```

### 4. Start serveren

```bash
npm run "Start Server"
```

---

## Frontend — kom i gang

Frontend kører på **http://localhost:5173** (kan variere til 5174 hvis porten er optaget)

### 1. Installér dependencies

```bash
cd dgs_frontend
npm install
```

### 2. Opret `.env.local` i `dgs_frontend/` (valgfrit — falder tilbage på localhost:3042)

```env
VITE_API_BASE_URL=http://localhost:3042
```

### 3. Start frontend

```bash
npm run dev
```

---

## Testlogin (backoffice)

| Rolle | Email | Adgangskode |
|---|---|---|
| Admin | admin@mediacollege.dk | admin |
| Guest | guest@mediacollege.dk | guest |

> Authentication er **slået fra** som standard (`USE_JWT=false`).
> Backoffice kan tilgås direkte på `/backoffice` uden login.
> Sæt `USE_JWT=true` i `.env.local` for at aktivere krav om login.

---

## API-endpoints

| Method | Endpoint | Auth | Beskrivelse |
|---|---|---|---|
| GET | `/categories` | — | Hent alle kategorier |
| GET | `/dishes` | — | Hent alle retter |
| GET | `/dish/:id` | — | Hent én ret |
| GET | `/ingredients` | — | Hent alle ingredienser |
| GET | `/employees` | — | Hent alle medarbejdere |
| GET | `/employee/:id` | — | Hent én medarbejder |
| POST | `/employee` | ✓ | Opret medarbejder (multipart/form-data) |
| PUT | `/employee` | ✓ | Opdater medarbejder (multipart/form-data) |
| DELETE | `/employee/:id` | ✓ | Slet medarbejder |
| POST | `/message` | — | Send kontaktbesked |
| GET | `/messages` | ✓ | Hent alle beskeder |
| PUT | `/message` | ✓ | Opdater beskedstatus |
| DELETE | `/message/:id` | ✓ | Slet besked |
| POST | `/order` | — | Opret bestilling |
| GET | `/orders` | ✓ | Hent alle bestillinger |
| PUT | `/order` | ✓ | Opdater ordrestatus |
| DELETE | `/order/:id` | ✓ | Slet ordre |
| POST | `/dish` | ✓ | Opret ret (multipart/form-data) |
| PUT | `/dish` | ✓ | Opdater ret (multipart/form-data) |
| DELETE | `/dish/:id` | ✓ | Slet ret |
| POST | `/auth/signin` | — | Log ind, returnerer JWT |

---

## Hvad er implementeret

### Obligatorisk
- [x] Backend API med alle routes
- [x] Database-seed med retter, medarbejdere, kategorier, brugere og ingredienser
- [x] Frontend — React 19 + Vite + React Router
- [x] Design system — CSS custom properties, Just Another Hand + Kurale fonte
- [x] Header med burger-menu (mobil), kurv-badge og footer
- [x] Forside `/` med rettekort og kategorifilter
- [x] Retteside `/dish/:id` med størrelsesvælger (normal/familie)
- [x] Kurv med localStorage-persistens, mængdekontrol og total
- [x] Bestilling fra kurv — poster til `/order`, ordrebekræftelsesside
- [x] Kontaktformular med klient-side validering — poster til `/message`
- [x] Medarbejderside `/employees`
- [x] Backoffice med login og JWT-beskyttet adgang
- [x] Backoffice medarbejdere — fuld CRUD med billede-upload
- [x] Backoffice beskeder — visning, statusskift og sletning
- [x] Backoffice ordrer — visning, statusskift og sletning
- [x] 404-side for ukendte ruter
- [x] Dynamisk `document.title` på alle sider (SEO)

### Tilvalg (alle 7 gennemført)
- [x] Backoffice retter — fuld CRUD med billede-upload
- [x] Ekstra ingredienser på rettesiden — tilføj/fjern ingredienser gemt i kurv
- [x] Backoffice beskeder — statusskift (læst/ulæst) og sletning
- [x] Backoffice ordrer — statusskift og sletning
- [x] Responsivt layout — 320px → 375px → 768px → 1024px → 1440px → 2560px
- [x] Authentication — JWT-login, `RequireAuth`-rutebeskytter, token i localStorage
- [x] Ordreafgivelse — POST til server med JWT, ordrebekræftelse med ordrenummer

### UX-forbedringer
- [x] Toast-notifikationer ved "Læg i kurv" med løbende antal, så gentagne klik ikke går ubemærket hen
- [x] Tydelige CTA-knapper med accentfarve, hover-løft og fokus-ring
- [x] Bekræftelsesmodal (i stedet for inline boks) ved sletning i backoffice
- [x] Favicon matcher logoet i toppen af siden

---

## Links

- [GitHub Issues](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues)
- [Figma design](https://www.figma.com/design/yzjuDfwFzngz8EySrOXSf6/Den-Glade-Skorpe)
- [Postman collection JSON](./mcd_web_dengladeskorpe_server/%5Bmcd%5D/postman/postman_collection.json)
- [dgs_github_md/PROJECT_CHECKLIST.md](dgs_github_md/PROJECT_CHECKLIST.md) — samlet tjekliste
