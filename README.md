# Den Glade Skorpe

Skoleproject (fagprøve) — Den Glade Skorpe er en moderne pizzarestaurant med mobil-first hjemmeside, online bestilling og en lille backoffice/admin-sektion.

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

---

## Hvad mangler

- [ ] Backoffice: slet og rediger enkeltbeskeder
- [ ] Extra ingredienser på rettesiden
- [ ] Desktop responsivt layout over 1024px (basic er på plads)
- [ ] Eksamensrapport (skrives separat)

---

## Links

- [GitHub Issues](https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe/issues) — opgaveliste


```bash
npm run "Start Server"
```

Serveren kører nu på `http://localhost:3042`.

---

## Frontend — kom i gang

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
