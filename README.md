# Den Glade Skorpe

Skoleproject — Den Glade Skorpe er en moderne pizzarestaurant med mobil-first hjemmeside, online bestilling og en lille backoffice/admin-sektion.

---

## Repo-struktur

```
mcd_web_dengladeskorpe_server/   ← Backend API (Node.js/Express/MongoDB)
dgs_materialer/                  ← Assets: logo, billeder, opgavebeskrivelse
dgs_github_md/                   ← GitHub issues, tjekliste, Copilot prompt, rapportskabelon
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
