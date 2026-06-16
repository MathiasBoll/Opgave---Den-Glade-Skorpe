# Den Glade Skorpe — Fagprøverapport

---

**Opgavenavn:** Den Glade Skorpe  
**Navn:** Mathias Boll  
**Skole:** Media College Denmark  
**Afleveringsdato:** 26-06-2026

---

## Erklæring

Jeg bekræfter hermed, at denne opgave er udarbejdet af mig selv, og at jeg ikke har afleveret den eller dele af den til vurdering ved andre eksaminer. Jeg har angivet alle anvendte kilder og hjælpemidler, herunder AI-assisterede værktøjer.

---

## Vurdering af egen indsats

Jeg er overordnet tilfreds med resultatet. Jeg har formået at bygge en fungerende, mobilvenlig webapplikation med komplet forside, bestillingsflow, backoffice og API-integration. Alle mandatory-krav er implementeret. De optional-krav, der ikke er fuldført (bl.a. exam rapport og desktop responsivt layout), skyldes prioritering af kernefunktionalitet frem for polering.

Udfordringer undervejs inkluderede korrekt håndtering af MongoDB-modellers feltnavne, JWT-auth-flow i Express samt håndtering af FormData til billede-uploads. Disse problemer løste jeg ved at læse routekoden grundigt og teste med Postman.

---

## Tidsplan og proces

| Fase | Aktiviteter | Omtrentlig tid |
|------|------------|----------------|
| Planlægning | GitHub Issues oprettet, opgavebeskrivelse læst, Figma-design studeret | ~2 t |
| Opsætning | Vite-projekt, routing, design tokens, fonts, header, footer | ~3 t |
| Forside + retter | DishCard-komponent, kategori-filter, retteside med størrelsevælger | ~4 t |
| Kurv + bestilling | BasketContext, localStorage, Basket-side, OrderConfirmation | ~3 t |
| Personale + kontakt | EmployeePage, ContactForm, postMessage | ~2 t |
| Backoffice | Login, AuthContext, employees CRUD, messages, orders, dishes CRUD | ~6 t |
| API-fejlretning | Korrekte feltnavne, endpoints, FormData-håndtering | ~3 t |
| UX-polish | 404-side, sidehoveder, tomme tilstande, desktop breakpoints | ~2 t |
| Tilvalg | Extra ingredienser, opdateret README | ~2 t |
| **Total** | | **~27 t** |

---

## Tech stack

| Teknologi | Rolle |
|-----------|-------|
| React 18 | UI-framework |
| Vite | Bundler og dev-server |
| React Router v6 | Klient-routing |
| CSS Modules | Scoped styling |
| Just Another Hand | Overskrift-font |
| Kurale | Brødtekst-font |
| Node.js + Express | Backend API |
| MongoDB + Mongoose | Database |
| Multer | Billedupload |
| bcryptjs | Password-hashing |
| JSON Web Tokens | Auth (valgfrit, USE_JWT=false som standard) |
| Postman | API-testning |

---

## Faglige valg og dokumentation

### Mobil-first tilgang
Hele layoutet er designet fra mobil og op. Breakpoints er tilføjet ved `640px` (header burger → desktop nav) og `1024px` (grid-kolonner, hero-fontstørrelser, sidekasse i kurv).

### Kurv med localStorage
Kurven er implementeret med React Context (`BasketContext`) og persistes i `localStorage` under nøglen `dgs_basket`. Hvert kurvelement har en unik `basketKey = ${_id}-${selectedSize}`, så Normal og Familie af samme ret tælles separat. `useReducer`-mønsteret sikrer forudsigelig tilstandsstyring.

### API-integration
Et centralt `api.js`-lag håndterer alle fetch-kald. Svaret fra serveren pakkes altid ud via `.data` (response-enveloppen `{ status, message, data }`). Auth-headere injiceres via `authHeaders()`, der læser JWT-tokenet fra `localStorage`. Billeder sendes som `multipart/form-data` via `FormData`.

### Backoffice CRUD
Backoffice-siderne for medarbejdere og retter implementerer komplet CRUD med:
- Inlinede formularer der sættes til redigering ved klik
- Slet-bekræftelse med dialogboks
- Fejlmeddelelser og loading-tilstand
- Genindlæsning af tabel efter operationer

### Extra ingredienser
På rettesiden kan brugeren aktivere/deaktivere individuelle ingredienser. De valgte ingredienser gemmes på kurve-elementet som `selectedExtras: [...]` og vises i kurven.

---

## Tilvalgsopgaver

| Tilvalg | Status | Kommentar |
|---------|--------|-----------|
| Responsivt desktop-layout (>1024px) | ✅ Implementeret | Breakpoints i alle CSS-moduler |
| Extra ingredienser på retteside | ✅ Implementeret | Toggle-knapper, gemt i kurv |
| Backoffice: retter CRUD | ✅ Implementeret | Fuldt create/edit/delete |

---

## Anvendelse af tredjepart og AI

### Tredjepartsbiblioteker
- **React Router** — klient-sidenavigation  
- **@fontsource/just-another-hand** og **@fontsource/kurale** — lokalt indlæste fonts  
- Alle øvrige afhængigheder var forudinstalleret i det udleverede backend-projekt

### AI-assisterede værktøjer
Jeg har anvendt **GitHub Copilot** (Claude Sonnet 4.6) som kodningsassistent under hele projektet. Copilot hjalp med:
- At skrive og fejlfinde React-komponenter og CSS-moduler  
- At forstå Express-routes og MongoDB-modellernes forventede feltnavne  
- At opdage mismatch mellem frontend-requests og backend-forventninger  
- At strukturere GitHub Issues og projektdokumentation  

Al kode er gennemlæst og godkendt af mig, og jeg er bevidst om indholdet af hvert eneste fil.

---

## Testoplysninger

| Type | Oplysning |
|------|-----------|
| Frontend URL | http://localhost:5173 |
| Backend URL | http://localhost:3042 |
| Admin login | admin@mediacollege.dk / admin |
| Guest login | guest@mediacollege.dk / guest |
| MongoDB database | mcd-dengladeskorpe |
| USE_JWT | false (login valgfrit) |

**Start backend:**
```bash
cd mcd_web_dengladeskorpe_server
npm install
npm run "Opret Database"
npm run "Start Server"
```

**Start frontend:**
```bash
cd dgs_frontend
npm install
npm run dev
```

---

## Særlige punkter til bedømmelse

1. **Komplet bestillingsflow** — Bruger kan vælge ret, vælge størrelse (normal/familie), justere ingredienser, se kurv med mængdekontrol og afgive bestilling — alt i én sammenhængende brugerrejse.

2. **Backoffice employees CRUD** — Komplet opret/rediger/slet med billede-upload via FormData, bekræftelsesdialog ved sletning, og live opdatering af tabellen.

3. **Backoffice dishes CRUD** — Retter kan oprettes med titel, priser (normal + familie), ingredienser og kategori. Billede-upload understøttes. Eksisterende retter kan redigeres og slettes.

4. **Mobil-first implementering** — Alle sider er designet mobile-first med burger-menu og fluid grid-layouts. Desktop breakpoints (1024px) forbedrer layout på store skærme uden at bryde mobil-visningen.

5. **Extra ingredienser** — Interaktive ingredient-toggle knapper på rettesiden med visuel feedback (gennemstregning ved fravalg). Valgte ingredienser følger med til kurven og vises der.

6. **Fejlhåndtering og loading-tilstande** — Alle API-kald har loading-indikatorer og fejlbeskeder. Tom-tilstand vises for tomme lister.

---

## Bilag

### Skærmbilleder (se GitHub repository)
- Forside med rettegrid og kategori-filter  
- Retteside med størrelsesvælger og ingredient-toggle  
- Kurv med mængdekontrol  
- Backoffice: medarbejdere CRUD  
- Backoffice: retter CRUD  
- 404-side  

### Links
- **GitHub repository:** https://github.com/MathiasBoll/Opgave---Den-Glade-Skorpe  
- **Opgavebeskrivelse:** `mcd_web_dengladeskorpe_server/[mcd]/assignment/den_glade_skorpe.md`
