# Den Glade Skorpe - expanded project checklist

Use this checklist before delivery. It is built from the uploaded PDF and the visible GitHub issues.

## Must pass / mandatory

### Setup and structure
- [ ] Repo is pushed to GitHub.
- [ ] Frontend exists in a clear folder, for example `dgs_frontend`.
- [ ] Frontend runs with `npm install` + `npm run dev`.
- [ ] Backend runs on `http://localhost:3042`.
- [ ] `.gitignore` excludes `node_modules`.
- [ ] Code uses a modern frontend framework.
- [ ] Folder structure is understandable: components, pages, services, utils, assets/styles.
- [ ] 404 page exists.

### Required routes
- [ ] `/` front page.
- [ ] `/dish/:id` dish detail.
- [ ] `/employees` public staff page.
- [ ] `/contact` contact form.
- [ ] `/basket` basket.
- [ ] `/backoffice` admin overview.
- [ ] `/backoffice/employees` employees CRUD.

### Design and UX
- [ ] Mobile-first layout works from around 390px.
- [ ] Figma is followed as closely as possible.
- [ ] Any design deviation is explainable as UX/accessibility improvement.
- [ ] Header is dark and contains logo/name.
- [ ] Basket icon has live badge count.
- [ ] Burger menu works.
- [ ] Footer has logo and contact information.
- [ ] Fonts are used: Just Another Hand for headings/buttons, Kurale for body.
- [ ] Colors are used consistently: `#4A4A4A`, `#F6F0EE`, `#FFFFFF`, `#000000`.
- [ ] Buttons/forms/cards have consistent styling.
- [ ] Loading states exist for API pages.
- [ ] Error states exist for failed API calls.
- [ ] Empty states exist, especially empty basket.
- [ ] User gets clear feedback after important actions.

### API / data
- [ ] API service file exists; fetch calls are not duplicated everywhere.
- [ ] GET dishes works.
- [ ] GET dish by id works.
- [ ] GET employees works.
- [ ] POST contact message works.
- [ ] GET employees in backoffice works.
- [ ] POST employee works.
- [ ] PUT/PATCH employee works.
- [ ] DELETE employee works.
- [ ] All API requests have try/catch or equivalent error handling.
- [ ] Failed backend does not crash the app.

### Front page
- [ ] Intro/welcome text exists.
- [ ] Categories are visible under “Vælg kategori”.
- [ ] All dishes load from API.
- [ ] Each dish has image/name minimum.
- [ ] Category filter updates list without reload.
- [ ] Active category is clear.
- [ ] Clicking dish opens detail route.

### Dish detail and basket flow
- [ ] Detail page uses route id.
- [ ] Detail page shows image/name/description/price.
- [ ] Size selection works if dish has sizes.
- [ ] Add to basket saves to localStorage.
- [ ] User gets success feedback after adding.
- [ ] Basket badge updates.
- [ ] Basket page reads from localStorage.
- [ ] Basket shows item name, size, quantity, price and total.
- [ ] Basket handles empty state.
- [ ] User can remove items.
- [ ] User can clear basket.

### Employees and contact
- [ ] `/employees` fetches staff from API.
- [ ] Employee cards show image/name/role where available.
- [ ] Contact form has name, subject/emne, message/besked.
- [ ] Contact form validates all required fields.
- [ ] Contact form posts to server.
- [ ] Success message/receipt appears: “Tak for din besked!”.

### Backoffice employees
- [ ] Backoffice overview page exists.
- [ ] Backoffice employees page exists.
- [ ] Employee list/table loads.
- [ ] Create employee form works.
- [ ] Edit employee works.
- [ ] Delete employee has confirmation.
- [ ] Success/error feedback exists for every CRUD action.

## Optional - choose minimum 1
- [ ] Desktop breakpoint above 1024px.
- [ ] Extra ingredients on dish detail page.
- [ ] Backoffice messages with read/unread.
- [ ] Backoffice dishes CRUD.
- [ ] Submit orders from basket to server.
- [ ] Authentication/sign in for backoffice.

## Documentation and delivery
- [ ] README explains backend setup.
- [ ] README explains frontend setup.
- [ ] README includes backend URL and frontend URL.
- [ ] README includes test login if auth is used.
- [ ] README says what is completed and what is not.
- [ ] Report exists in root as `.md` or `.pdf`.
- [ ] Report has front page with name, hold, school, date and declaration.
- [ ] Report has “Vurdering af egen indsats”.
- [ ] Report has “Tidsplan og proces”.
- [ ] Report has “Tech stack”.
- [ ] Report has “Faglige valg og dokumentation”.
- [ ] Report has “Tilvalgsopgaver”.
- [ ] Report has “Anvendelse af tredjepart og AI”.
- [ ] Report has “Testoplysninger”.
- [ ] Report has “Særlige punkter til bedømmelse”.
- [ ] Report has bilag/screenshots if useful.
- [ ] Final delivery does not include `node_modules`.
- [ ] Clean install/start has been tested if possible.
