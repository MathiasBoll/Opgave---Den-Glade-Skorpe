# Den Glade Skorpe

Fagprøveprojekt — Den Glade Skorpe er en moderne pizzarestaurant med mobil-first hjemmeside, online bestilling og backoffice/admin-panel.

- **Eksamenrapport:** [`RAPPORT.html`](./RAPPORT.html) — åbn i browser
- **Frontend-dokumentation:** [`dgs_frontend/README.md`](./dgs_frontend/README.md)

---

## Repo-struktur

```
RAPPORT.html                     ← Eksamensrapport (åbn i browser)
docs/screenshots/                ← 20 FireShot-skærmbilleder af appen
mcd_web_dengladeskorpe_server/   ← Backend API (Node.js / Express / MongoDB)
dgs_frontend/                    ← Frontend (React 18 + Vite)
dgs_materialer/                  ← Assets: logo, billeder, tekst
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
- [x] Frontend — React 18 + Vite + React Router
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

---

## Links

- [GitHub Issues](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues)
- [Figma design](https://www.figma.com/design/yzjuDfwFzngz8EySrOXSf6/Den-Glade-Skorpe)
- [Postman collection JSON](./mcd_web_dengladeskorpe_server/%5Bmcd%5D/postman/postman_collection.json)


---

## Repo-struktur

```
mcd_web_dengladeskorpe_server/   ← Backend API (Node.js/Express/MongoDB)
dgs_frontend/                    ← Frontend (React + Vite)
dgs_materialer/                  ← Assets: logo, billeder, opgavebeskrivelse
```

---

## Backend — kom i gang

Backend kører på **http://localhost:3042**

### 1. Installér dependencies

```bash
cd mcd_web_dengladeskorpe_server
npm install
```

### 2. Opret `.env.local` i backend-roden

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

Serveren kører nu på `http://localhost:3042`.

---

## Frontend — kom i gang

Frontend kører på **http://localhost:5173**

### 1. Installér dependencies

```bash
cd dgs_frontend
npm install
```

### 2. Opret `.env` i frontend-roden (allerede inkluderet)

```env
VITE_API_BASE_URL=http://localhost:3042
```

### 3. Start frontend

```bash
npm run dev
```

Frontend kører nu på `http://localhost:5173`.

---

## Vigtige endpoints

| Method | Endpoint | Beskrivelse |
|--------|----------|-------------|
| GET | `/categories` | Hent alle kategorier |
| GET | `/dishes` | Hent alle retter |
| GET | `/dish/:id` | Hent én ret |
| GET | `/employees` | Hent alle medarbejdere |
| GET | `/employee/:id` | Hent én medarbejder |
| POST | `/employee` | Opret medarbejder (auth) |
| PUT | `/employee` | Opdater medarbejder (auth) |
| DELETE | `/employee/:id` | Slet medarbejder (auth) |
| POST | `/message` | Send kontaktbesked |
| GET | `/messages` | Hent alle beskeder (auth) |
| POST | `/order` | Opret bestilling |
| GET | `/orders` | Hent alle bestillinger (auth) |
| POST | `/auth/signin` | Log ind |

---

## Testlogin (backoffice)

| Rolle | Email | Adgangskode |
|-------|-------|-------------|
| Admin | admin@mediacollege.dk | admin |
| Guest | guest@mediacollege.dk | guest |

> Authentication er **slået fra** som standard (`USE_JWT=false`).  
> Backoffice kan tilgås direkte på `/backoffice` uden login.  
> Sæt `USE_JWT=true` i `.env.local` for at aktivere krav om login.

---

## Hvad er færdigt

### Mandatory
- [x] Backend API med alle routes
- [x] Database seed med 18 retter, 4 medarbejdere, 3 kategorier, brugere
- [x] Frontend setup — React 18 + Vite + React Router
- [x] Design system — CSS variables, Just Another Hand + Kurale fonts
- [x] Header med burger-menu, kurv-badge og footer
- [x] Forside `/` med rettekort og kategori-filter
- [x] Retteside `/dish/:id` med størrelsesvælger (normal/familie)
- [x] Kurv med localStorage-persistens, antal, total og fjern
- [x] Kontaktformular med validering — sender til `/message`
- [x] Bestilling fra kurv — sender til `/order`, bekræftelsesside
- [x] Personaleside `/employees` med billede og stilling
- [x] Backoffice `/backoffice` med login og beskyttet adgang
- [x] Backoffice medarbejdere CRUD — opret, rediger, slet med bekræftelse
- [x] Backoffice beskeder — vis kontaktbeskeder
- [x] Backoffice ordrer — vis bestillinger
- [x] Backoffice retter — vis retteoversigt
- [x] 404-side for ugyldige URL'er
- [x] Sidehoveder (document.title) på alle sider
- [x] Tom-tilstand for tomme lister

### Optional
- [x] Backoffice retter CRUD — opret, rediger, slet retter
- [x] Extra ingredienser på rettesiden — toggle ingredienser gemt i kurv
- [x] Backoffice beskeder — åbn, skift status (læst/ulæst), slet
- [x] Backoffice ordrer — vis bestillinger, skift status, slet
- [x] Responsivt layout — 320px / 375px / 425px / 768px / 1024px / 1440px / 2560px

---

## Hvad mangler

Alt mandatory og optional er implementeret. Eneste åbne punkt:

- [ ] Mundtlig eksamenforberedelse (efter fremlæggelse, uge 32–35 2026)

---

## Links

- [GitHub Issues](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues) — opgaveliste

> Frontenden er ikke bygget endnu — se GitHub Issues for opgavelisten.

Når frontenden er sat op:

```bash
cd dgs_frontend        # eller hvad mappen hedder
npm install
npm run dev
```

Frontend kører på **http://localhost:5173** (Vite standard).

---

## Vigtige endpoints

| Method | Endpoint | Beskrivelse |
|--------|----------|-------------|
| GET | `/categories` | Hent alle kategorier |
| GET | `/dishes` | Hent alle retter |
| GET | `/dish/:id` | Hent én ret |
| GET | `/employees` | Hent alle medarbejdere |
| GET | `/employee/:id` | Hent én medarbejder |
| POST | `/employee` | Opret medarbejder |
| PUT | `/employee` | Opdater medarbejder |
| DELETE | `/employee/:id` | Slet medarbejder |
| POST | `/message` | Send kontaktbesked |
| GET | `/messages` | Hent alle beskeder |

---

## Testlogin (backend)

| Rolle | Email | Password |
|-------|-------|----------|
| Admin | admin@mediacollege.dk | *(se seed data)* |
| Guest | guest@mediacollege.dk | *(se seed data)* |

Authentication er **slået fra** som standard (`USE_JWT=false`). Sæt `USE_JWT=true` i `.env.local` for at slå det til.

---

## Hvad er færdigt

- [x] Backend API med alle routes
- [x] Database seed med retter, kategorier, medarbejdere og brugere
- [x] GitHub Issues oprettet for alle opgaver
- [ ] Frontend (ikke startet endnu)

---

## Hvad mangler

- [ ] Frontend setup (React/Vite)
- [ ] Alle sider: `/`, `/dish/:id`, `/employees`, `/contact`, `/basket`, `/backoffice`, `/backoffice/employees`
- [ ] README opdateres igen når frontend er bygget

---

## Links

- [GitHub Issues](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues) — opgaveliste med estimater
- [dgs_github_md/PROJECT_CHECKLIST.md](dgs_github_md/PROJECT_CHECKLIST.md) — samlet tjekliste
- [dgs_github_md/COPILOT_MASTER_PROMPT.md](dgs_github_md/COPILOT_MASTER_PROMPT.md) — Copilot master prompt
