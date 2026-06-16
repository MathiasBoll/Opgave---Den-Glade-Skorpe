# Den Glade Skorpe - all existing GitHub issues expanded

Repo checked: `MathiasBoll/Opgave---Den-Glade-Skorpe`  
Purpose: This file expands the existing GitHub issues (#1 and #3-#22) into deeper task descriptions, acceptance criteria, test checklists and report notes.

Use this file in one of two ways:

1. Open the existing issue in GitHub and replace the body with the matching section.
2. Or paste the matching section as a comment under the existing issue.

Important: issue #2 was not visible in the current open issue list. The visible open issues were #1 and #3-#22.

---

# Build frontend for "Den Glade Skorpe"

    **GitHub issue:** #1  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - overview / Copilot master prompt  
    **Type:** Master  
    **Estimated time:** This is an umbrella issue; use the child issues for estimates.

    ## PDF requirements covered
    - Whole assignment overview
- Mandatory routes
- Mandatory tasks
- Project priority order

    ## Goal
    Use this as the master issue that explains the whole project to Copilot/Codex. It should stay high level and link to the smaller implementation issues.

    ## Detailed tasks
    - [ ] Keep this issue as the main project overview and do not use it as the only implementation task.
- [ ] Link all mandatory feature issues from this issue.
- [ ] Add a comment when a mandatory issue is completed, so the master issue gives a clear project overview.
- [ ] Do not let Copilot build optional features before mandatory features are stable.
- [ ] Use this issue to explain exam-friendly code: simple structure, clear names, reusable components and no unnecessary complexity.

    ## Suggested files / areas
    - `README.md`
- `PROJECT_CHECKLIST.md`
- `src/* after frontend setup`

    ## Acceptance criteria
    - [ ] The issue links or references every mandatory page and API requirement.
- [ ] The issue clearly states that mobile-first and Figma matching are core requirements.
- [ ] The issue clearly states that report, README and delivery are part of the project.

    ## Test checklist
    - [ ] Check all child issues before closing this issue.
- [ ] Only close this issue when all mandatory requirements are done and tested.

    ## Report / exam notes
    - Use this issue as evidence that the project was planned and broken into tasks.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Planning] Create project plan, estimates and daily process documentation

    **GitHub issue:** #3  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - start first  
    **Type:** Mandatory documentation  
    **Estimated time:** 1-2 hours setup + 10-15 min per workday

    ## PDF requirements covered
    - Tidsplan, estimat og todo-liste
- Rapport: tidsplan og proces
- General exam requirement: individual work, backup and timely delivery

    ## Goal
    Create the planning that the PDF requires. This is not just nice-to-have; it must support the report and oral exam.

    ## Detailed tasks
    - [ ] Create a project board or use GitHub Issues as the task board.
- [ ] Add rough estimates to each issue before coding starts.
- [ ] Track actual time after each work session.
- [ ] Write daily notes: what was planned, what was completed, what blocked progress, what changed.
- [ ] Take screenshots of GitHub Issues/Projects during the process for report appendices.
- [ ] Write down all third-party packages and AI assistance as soon as they are used.
- [ ] Commit regularly with meaningful commit messages so the process is visible.
- [ ] Backup/push to GitHub at the end of every working day.

    ## Suggested files / areas
    - `docs/process-log.md`
- `docs/time-plan.md`
- `REPORT.md or rapport.md`
- `GitHub Issues/Projects`

    ## Acceptance criteria
    - [ ] Every main issue has an estimate.
- [ ] A daily process log exists in the repo or report draft.
- [ ] Actual time is tracked for the largest issues.
- [ ] There are screenshots or GitHub links that can be used in the report.
- [ ] There is a visible plan for what must be done before optional tasks.

    ## Test checklist
    - [ ] Open the report draft and confirm it can answer: planned tasks, actual tasks, estimates, changes and blockers.

    ## Report / exam notes
    - Use this for section: Tidsplan og proces.
- Mention why priorities changed if they did.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Set up frontend project, routing and folder structure

    **GitHub issue:** #4  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - foundation  
    **Type:** Mandatory implementation  
    **Estimated time:** 3-5 hours

    ## PDF requirements covered
    - Modern frontend framework required
- HTML/CSS/JS with React/Next/etc.
- Mandatory routes
- 404 route
- Reusable components and maintainable folder structure

    ## Goal
    Create the frontend foundation in a way that is easy to explain at the exam.

    ## Detailed tasks
    - [ ] Create a frontend folder, for example `dgs_frontend`.
- [ ] Set up React + Vite unless another approved framework is chosen.
- [ ] Install `react-router-dom` and set up BrowserRouter.
- [ ] Create required public routes: `/`, `/dish/:id`, `/employees`, `/contact`, `/basket`.
- [ ] Create required backoffice routes: `/backoffice`, `/backoffice/employees`.
- [ ] Create a catch-all/404 route for invalid routes.
- [ ] Create folders: `components`, `pages`, `services`, `utils`, `assets`, `styles`.
- [ ] Add global CSS/reset and connect fonts later in the design issue.
- [ ] Create placeholder page components so navigation can be tested early.
- [ ] Use semantic route/page names that are easy to explain.

    ## Suggested files / areas
    - `dgs_frontend/package.json`
- `dgs_frontend/src/main.jsx`
- `dgs_frontend/src/App.jsx`
- `dgs_frontend/src/pages/*`
- `dgs_frontend/src/components/*`

    ## Acceptance criteria
    - [ ] `npm install` and `npm run dev` work from the frontend folder.
- [ ] All required routes render a page without crashing.
- [ ] An invalid URL shows a custom 404 page.
- [ ] The folder structure is clean and component-based.
- [ ] The frontend does not require `node_modules` to be committed.

    ## Test checklist
    - [ ] Run `npm run dev`.
- [ ] Open all required routes manually.
- [ ] Open a fake route and verify the 404 page.

    ## Report / exam notes
    - Explain why React/Vite was chosen.
- Explain the routing structure and component folder structure.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Set up backend and reusable API service layer

    **GitHub issue:** #5  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - foundation/API  
    **Type:** Mandatory implementation  
    **Estimated time:** 3-6 hours

    ## PDF requirements covered
    - Backend runs locally on http://localhost:3042
- REST usage: GET, POST, PUT/PATCH, DELETE
- Asynchronous requests
- Loading state, error handling and feedback

    ## Goal
    Run the backend, confirm endpoints, then create one frontend API layer instead of scattering fetch calls everywhere.

    ## Detailed tasks
    - [ ] Start backend using the supplied backend README instructions.
- [ ] Confirm backend runs on `http://localhost:3042`.
- [ ] Seed database if required before frontend integration.
- [ ] Test endpoints in browser/Postman before using them in React.
- [ ] Create `src/services/api.js` with one `API_URL` constant.
- [ ] Create reusable functions for categories, dishes, dish by id, employees, messages and employee CRUD.
- [ ] Use `async/await` with `try/catch` and meaningful errors.
- [ ] Make functions return clean data or throw a controlled error.
- [ ] Do not duplicate API URLs in multiple components.
- [ ] Document any changed endpoint names in README and report.

    ## Suggested files / areas
    - `dgs_frontend/src/services/api.js`
- `README.md`
- `.env.local example if needed`

    ## Acceptance criteria
    - [ ] Backend can be started from the README instructions.
- [ ] API service contains all mandatory request functions.
- [ ] GET functions exist for dishes, dish details and employees.
- [ ] POST function exists for contact message and employee create.
- [ ] PUT/PATCH function exists for employee update.
- [ ] DELETE function exists for employee delete.
- [ ] Frontend pages can show loading/error/success based on API calls.

    ## Test checklist
    - [ ] Start backend.
- [ ] Call `/dishes`, `/categories`, `/employees` in browser/Postman.
- [ ] Temporarily stop backend and confirm frontend shows useful error messages.

    ## Report / exam notes
    - Explain REST methods used: GET, POST, PUT/PATCH and DELETE.
- Mention backend changes only if approved by teacher.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Implement design system, fonts, colors and mobile-first base styling

    **GitHub issue:** #6  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - design foundation  
    **Type:** Mandatory implementation/design  
    **Estimated time:** 4-7 hours

    ## PDF requirements covered
    - Figma must be followed in layout and visual structure
- Mobile-first from ca. 390px
- Fonts: Just Another Hand and Kurale
- Colors: #4A4A4A, #F6F0EE, #FFFFFF, #000000
- Accessibility, responsiveness, SEO basics and UX

    ## Goal
    Create the visual foundation for the project so all pages feel like the Figma design and not separate random pages.

    ## Detailed tasks
    - [ ] Install or import `Just Another Hand` for headings/buttons.
- [ ] Install or import `Kurale` for body text.
- [ ] Create CSS variables for colors, spacing, radius, font sizes and layout width.
- [ ] Use `#4A4A4A` for header/footer/buttons/primary contrast.
- [ ] Use `#F6F0EE` for cream cards/sections where Figma uses it.
- [ ] Create a mobile-first base layout that works at 390px.
- [ ] Add responsive image rules to avoid stretched or broken images.
- [ ] Create reusable button/card/form styles.
- [ ] Check Figma for any effects or details not named directly in the PDF and implement them where reasonable.
- [ ] Document any design changes and why they improve UX/accessibility.

    ## Suggested files / areas
    - `dgs_frontend/src/styles/global.css`
- `dgs_frontend/src/styles/variables.css`
- `dgs_frontend/src/components/ui/*`

    ## Acceptance criteria
    - [ ] Fonts are used consistently.
- [ ] Colors match the PDF/Figma direction.
- [ ] Pages are readable at around 390px width.
- [ ] Buttons, cards and forms share a consistent style.
- [ ] Design changes are intentional and can be explained.

    ## Test checklist
    - [ ] Open pages at 390px in browser devtools.
- [ ] Check header, cards, buttons and form fields for consistent styling.
- [ ] Run Lighthouse/basic accessibility check if possible.

    ## Report / exam notes
    - Explain design choices, mobile-first approach and any Figma deviations.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build header, burger menu, footer and basket badge

    **GitHub issue:** #7  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - shared layout  
    **Type:** Mandatory implementation/layout  
    **Estimated time:** 4-6 hours

    ## PDF requirements covered
    - Header on all pages
- Dark header with logo
- Basket icon with item count badge
- Burger menu with navigation
- Footer with logo and contact information

    ## Goal
    Create the shared layout that every public page uses. This should match the Figma mobile frames.

    ## Detailed tasks
    - [ ] Build Header component with dark background and logo/name.
- [ ] Add basket icon that links to `/basket`.
- [ ] Read basket from localStorage and show item count in a badge.
- [ ] Update badge when items are added or removed.
- [ ] Build burger button with `aria-expanded` and accessible label.
- [ ] Create burger menu links to `/`, `/employees`, `/contact`, `/basket` and optionally backoffice.
- [ ] Burger menu opens/closes on click and closes when a link is clicked.
- [ ] Add ESC key close if easy.
- [ ] Build Footer with logo, email, phone and address.
- [ ] Add opening hours/SoMe links if they are visible in Figma or material.
- [ ] Make Header/Footer reusable through a Layout component.

    ## Suggested files / areas
    - `dgs_frontend/src/components/Header.jsx`
- `dgs_frontend/src/components/Footer.jsx`
- `dgs_frontend/src/components/Layout.jsx`
- `dgs_frontend/src/utils/basket.js`

    ## Acceptance criteria
    - [ ] Header appears on all public pages.
- [ ] Burger menu is usable on mobile.
- [ ] Navigation links work without page reload.
- [ ] Basket badge displays correct quantity from localStorage.
- [ ] Footer contains contact info and matches the visual style.
- [ ] Keyboard and screen reader basics are considered for the menu.

    ## Test checklist
    - [ ] Add an item to basket and verify badge changes.
- [ ] Reload page and verify badge still reads from localStorage.
- [ ] Open and close burger menu on mobile width.
- [ ] Tab through menu links.

    ## Report / exam notes
    - Explain how the burger menu state works and how basket badge reads localStorage.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build front page with dishes and category filter

    **GitHub issue:** #8  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - core customer feature  
    **Type:** Mandatory implementation/page  
    **Estimated time:** 5-8 hours

    ## PDF requirements covered
    - Forside `/`
- All dishes from API
- Category filter: Pizzaer, Indbagte pizzaer, Durum ruller etc.
- Dynamic filtering without reload
- Dish click leads to `/dish/:id`
- Header intro and footer

    ## Goal
    Build the first page users see: intro, category filter and menu cards fetched from the API.

    ## Detailed tasks
    - [ ] Fetch categories from API.
- [ ] Fetch dishes from API.
- [ ] Show a loading state while dishes/categories load.
- [ ] Show a friendly error state if fetching fails.
- [ ] Show all dishes by default.
- [ ] Build a `DishCard` component.
- [ ] Each dish card must show image and name as minimum.
- [ ] Show price and short description if the data/design supports it.
- [ ] Create “Vælg kategori” filter UI.
- [ ] Filter by category dynamically in React state without reload.
- [ ] Add active style for the selected category.
- [ ] Make dish cards link to `/dish/:id`.
- [ ] Handle empty category results with a friendly message.
- [ ] Use provided intro/welcome text or write short pizza-focused intro in the Figma style.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Home.jsx`
- `dgs_frontend/src/components/DishCard.jsx`
- `dgs_frontend/src/components/CategoryFilter.jsx`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] The front page loads dishes from the backend.
- [ ] The front page does not crash if API returns empty array.
- [ ] Category filter changes visible dishes without page reload.
- [ ] Active category is visually clear.
- [ ] Clicking a dish opens the correct detail route.
- [ ] The page works well on mobile around 390px.

    ## Test checklist
    - [ ] Test “all” category and each category.
- [ ] Click multiple dish cards and check the id in URL.
- [ ] Stop backend and confirm error state.
- [ ] Use devtools mobile width.

    ## Report / exam notes
    - Explain fetching, filtering logic and how component reuse works.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build dish detail page and add-to-basket localStorage flow

    **GitHub issue:** #9  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - core customer feature  
    **Type:** Mandatory implementation/page/data  
    **Estimated time:** 6-9 hours

    ## PDF requirements covered
    - Route `/dish/:id`
- Show selected dish by id
- Image, name, description, price
- Size selection if available
- Add to basket
- Save in localStorage
- Clear feedback when added

    ## Goal
    Build the detail page where the user chooses a dish/size and adds it to basket. This is one of the most important flows.

    ## Detailed tasks
    - [ ] Read the dish id from route params.
- [ ] Fetch the selected dish by id from API.
- [ ] Show loading/error state for the detail fetch.
- [ ] Render dish image, name, description and price.
- [ ] Check data structure for sizes and render size options if available.
- [ ] Default to a sensible size if the dish requires a size selection.
- [ ] Disable add button or show validation if required size is missing.
- [ ] Create basket item object with id, name, image, selected size, price, quantity and extras if later used.
- [ ] Save item to localStorage using basket helper functions.
- [ ] If same dish/size already exists, increase quantity instead of duplicating messy entries.
- [ ] Show clear success feedback: “Retten er lagt i kurven”.
- [ ] Update basket badge after add.
- [ ] Add link/button to go to basket after adding.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/DishDetails.jsx`
- `dgs_frontend/src/utils/basket.js`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Detail page fetches the correct dish based on URL id.
- [ ] Invalid/missing id is handled with error or 404-like message.
- [ ] User can choose size when applicable.
- [ ] Add to basket saves correct data in localStorage.
- [ ] Basket survives page reload.
- [ ] User receives feedback after adding item.

    ## Test checklist
    - [ ] Open detail page from multiple dish cards.
- [ ] Add different sizes and inspect localStorage.
- [ ] Reload page and confirm data remains.
- [ ] Try invalid dish id.

    ## Report / exam notes
    - Explain route params, localStorage structure and why the basket helper functions are reusable.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build public employees page

    **GitHub issue:** #10  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - mandatory content  
    **Type:** Mandatory implementation/page/API GET  
    **Estimated time:** 3-5 hours

    ## PDF requirements covered
    - Route `/employees`
- Show restaurant employees from API
- Each employee with image, name, title/role
- Loading and error states

    ## Goal
    Build a public page that presents the staff and proves API GET integration for employees.

    ## Detailed tasks
    - [ ] Create `/employees` page.
- [ ] Fetch employees from API.
- [ ] Show loading state while employees load.
- [ ] Show user-friendly error state if request fails.
- [ ] Build reusable `EmployeeCard` component.
- [ ] Show employee image, name and role/title if the backend provides it.
- [ ] Use fallback image or fallback text if image/title is missing.
- [ ] Add intro text about the staff and customer experience.
- [ ] Make the layout mobile-first and match Figma staff page.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Employees.jsx`
- `dgs_frontend/src/components/EmployeeCard.jsx`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Employees are fetched from the backend.
- [ ] Employees are shown in readable cards.
- [ ] Missing images/data do not break the page.
- [ ] Loading and error states exist.
- [ ] Page works around 390px width.

    ## Test checklist
    - [ ] Open `/employees` with backend running.
- [ ] Stop backend and confirm error state.
- [ ] Inspect page at mobile width.

    ## Report / exam notes
    - Explain employee fetching and card component.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build contact form with validation and POST to server

    **GitHub issue:** #11  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - mandatory form  
    **Type:** Mandatory implementation/form/API POST  
    **Estimated time:** 4-7 hours

    ## PDF requirements covered
    - Route `/contact`
- Fields: name, subject/emne, message/besked
- Technical and user-friendly validation
- POST to server
- Success receipt: Tak for din besked
- Error feedback

    ## Goal
    Build a validated contact form and send the message to the backend.

    ## Detailed tasks
    - [ ] Create `/contact` page matching Figma contact design.
- [ ] Add fields: name/navn, subject/emne and message/besked.
- [ ] Use controlled inputs or a form library that you can explain.
- [ ] Validate that all fields are filled before POST.
- [ ] Show inline error messages near relevant fields.
- [ ] Prevent submit if invalid.
- [ ] Send valid data to backend using POST `/message` or confirmed endpoint.
- [ ] Show loading/submitting state while request runs.
- [ ] Show success message or receipt page: “Tak for din besked!”.
- [ ] Clear form after successful submission.
- [ ] Show useful error message if backend fails.
- [ ] Make labels, inputs and error messages accessible.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Contact.jsx`
- `dgs_frontend/src/components/ContactForm.jsx`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Empty form cannot be submitted silently.
- [ ] User sees clear validation feedback.
- [ ] Valid form sends POST request to backend.
- [ ] Success feedback appears after POST succeeds.
- [ ] Failure feedback appears if POST fails.
- [ ] Form is keyboard usable and mobile-friendly.

    ## Test checklist
    - [ ] Submit empty form.
- [ ] Submit with one missing field.
- [ ] Submit valid form with backend running.
- [ ] Stop backend and submit to verify error.

    ## Report / exam notes
    - Explain validation, POST request and success/error state.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build basket page from localStorage

    **GitHub issue:** #12  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - core order flow  
    **Type:** Mandatory implementation/page/localStorage  
    **Estimated time:** 5-8 hours

    ## PDF requirements covered
    - Route `/basket`
- Read selected dishes from localStorage
- Show name, size, extras if used, quantity, price and total
- Empty basket message
- Order POST is optional

    ## Goal
    Build the basket page that displays items added from dish detail pages.

    ## Detailed tasks
    - [ ] Read basket data safely from localStorage.
- [ ] Handle missing or invalid localStorage data without crashing.
- [ ] Show empty basket state: “Din kurv er tom”.
- [ ] Build `BasketItem` component.
- [ ] Show dish name, selected size, quantity, item price and line total.
- [ ] Show extra ingredients if optional extra issue is implemented.
- [ ] Show total sum for the whole basket.
- [ ] Add remove item button.
- [ ] Add clear basket button with confirmation.
- [ ] Allow quantity increase/decrease if time allows, or at least remove/clear.
- [ ] Update basket badge after changes.
- [ ] Keep optional order submission separate unless issue #21 is chosen.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Basket.jsx`
- `dgs_frontend/src/components/BasketItem.jsx`
- `dgs_frontend/src/utils/basket.js`

    ## Acceptance criteria
    - [ ] Basket page shows all items from localStorage.
- [ ] Empty basket is handled cleanly.
- [ ] Total price calculates correctly.
- [ ] Remove item works.
- [ ] Clear basket works.
- [ ] Page still works after reload.

    ## Test checklist
    - [ ] Add item from detail page, then open `/basket`.
- [ ] Reload basket page.
- [ ] Remove one item.
- [ ] Clear full basket.
- [ ] Check total after each action.

    ## Report / exam notes
    - Explain localStorage format and how total price is calculated.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Build backoffice employees CRUD

    **GitHub issue:** #13  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - mandatory admin  
    **Type:** Mandatory implementation/backoffice/REST  
    **Estimated time:** 8-12 hours

    ## PDF requirements covered
    - Routes `/backoffice` and `/backoffice/employees`
- Backoffice desktop/større skærm
- Employees GET, POST, PUT/PATCH, DELETE
- Feedback and error handling for every action

    ## Goal
    Build the required admin feature: staff can view, create, update and delete employees.

    ## Detailed tasks
    - [ ] Create `/backoffice` overview page with cards/links.
- [ ] Create `/backoffice/employees` page.
- [ ] Add a backoffice navigation component.
- [ ] Fetch and show all employees in table or cards.
- [ ] Show loading and error state for employee list.
- [ ] Create form for new employee.
- [ ] Validate required employee fields before POST.
- [ ] POST new employee to backend.
- [ ] After create, refresh list or update local state.
- [ ] Create edit form/modal/inline edit for existing employee.
- [ ] PUT/PATCH updated employee to backend.
- [ ] After update, show success feedback and update list.
- [ ] Add delete button with confirmation dialog.
- [ ] DELETE employee from backend.
- [ ] After delete, remove employee from list or refresh.
- [ ] Show success and error feedback for create/update/delete.
- [ ] Keep UI calm and desktop-friendly; mobile is not required for backoffice.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/backoffice/Backoffice.jsx`
- `dgs_frontend/src/pages/backoffice/BackofficeEmployees.jsx`
- `dgs_frontend/src/components/backoffice/*`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Backoffice overview exists.
- [ ] Employees admin page fetches and displays employees.
- [ ] Admin can create a new employee.
- [ ] Admin can edit an existing employee.
- [ ] Admin can delete an employee after confirmation.
- [ ] Every action gives clear success/error feedback.
- [ ] Failed backend requests do not break the UI.

    ## Test checklist
    - [ ] Create test employee.
- [ ] Edit the test employee.
- [ ] Delete the test employee.
- [ ] Try with backend stopped to confirm error handling.
- [ ] Check data persists by refreshing page.

    ## Report / exam notes
    - This is a strong exam topic: explain all CRUD methods and how state updates after each request.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Add UX polish, accessibility, SEO basics and 404 handling

    **GitHub issue:** #14  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P2 - finish before optional  
    **Type:** Mandatory quality  
    **Estimated time:** 4-7 hours

    ## PDF requirements covered
    - Accessibility standards
- Responsiveness
- Basic SEO
- 404 page
- API error handling
- User-friendly form errors
- UX: navigation, feedback, contrast, hierarchy, performance

    ## Goal
    Finish the cross-cutting quality requirements. This issue should be done before optional extras.

    ## Detailed tasks
    - [ ] Add meaningful page titles and meta descriptions if using React Helmet or similar, or at least update main HTML title/description.
- [ ] Use semantic HTML: header, nav, main, section, footer, button, form, label.
- [ ] Ensure every form input has a label.
- [ ] Add alt text for meaningful images; empty alt for decorative images.
- [ ] Check color contrast between text/background.
- [ ] Check keyboard navigation for burger menu, links, buttons and forms.
- [ ] Add custom 404 page for invalid routes.
- [ ] Add empty states: empty basket, no dishes, no employees, no messages/orders if optional.
- [ ] Use consistent microcopy for errors and success messages.
- [ ] Avoid layout shift and huge images where possible.
- [ ] Make loading states visible but not distracting.
- [ ] Test core flow on mobile width and desktop width.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/NotFound.jsx`
- `dgs_frontend/index.html`
- `dgs_frontend/src/components/*`
- `dgs_frontend/src/styles/*`

    ## Acceptance criteria
    - [ ] Invalid routes show custom 404 page.
- [ ] All required user actions show feedback.
- [ ] Forms are accessible and validated.
- [ ] Navigation is understandable and keyboard usable.
- [ ] Basic SEO/meta/title is handled.
- [ ] No unreadable low-contrast text remains.

    ## Test checklist
    - [ ] Use keyboard only for main navigation and form.
- [ ] Run Lighthouse if possible.
- [ ] Open invalid route.
- [ ] Test at 390px and >1024px.

    ## Report / exam notes
    - Mention accessibility and UX choices, including user feedback and 404 handling.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Write README and prepare delivery package

    **GitHub issue:** #15  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0/P2 - update throughout, finish at end  
    **Type:** Mandatory delivery  
    **Estimated time:** 2-4 hours

    ## PDF requirements covered
    - Delivery must include source code, README and report
- No node_modules
- Backend not submitted unless changed
- Do not edit after deadline
- Teacher must be informed and delivery approved

    ## Goal
    Make sure the project can be downloaded, installed, started and assessed without confusion.

    ## Detailed tasks
    - [ ] Update README with project name and short description.
- [ ] Document backend setup steps.
- [ ] Document frontend setup steps.
- [ ] Document exact commands: `npm install`, `npm run dev`, backend seed/start commands.
- [ ] Document backend URL: `http://localhost:3042`.
- [ ] Document frontend URL when running locally.
- [ ] Document required environment variables or `.env.local` example.
- [ ] Document available endpoints used by frontend.
- [ ] Document login details if authentication is enabled.
- [ ] Document completed features and chosen optional feature(s).
- [ ] Document known limitations if anything is unfinished.
- [ ] Confirm `.gitignore` excludes `node_modules`, `.env.local` if needed and build artifacts not required.
- [ ] Prepare zip/Git repo delivery without `node_modules`.
- [ ] Do a clean install test from a fresh copy if time allows.

    ## Suggested files / areas
    - `README.md`
- `.gitignore`
- `package.json files`
- `rapport.md or rapport.pdf`

    ## Acceptance criteria
    - [ ] Teacher can start backend and frontend from README alone.
- [ ] README matches the actual folder names and commands.
- [ ] No `node_modules` is included in delivery.
- [ ] Report file is in project root.
- [ ] README states what optional feature(s) were completed.

    ## Test checklist
    - [ ] Clone/copy project to another folder.
- [ ] Run install/start commands from README.
- [ ] Check zip does not contain `node_modules`.

    ## Report / exam notes
    - Mention delivery format and test information.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Mandatory] Write exam report and documentation

    **GitHub issue:** #16  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0/P2 - write alongside project  
    **Type:** Mandatory documentation/report  
    **Estimated time:** 5-8 hours spread across project

    ## PDF requirements covered
    - Report as .md or .pdf in project root
- Front page with declaration/signature/date
- Vurdering af egen indsats
- Tidsplan og proces
- Tech stack
- Faglige valg og dokumentation
- Tilvalgsopgaver
- Third-party and AI
- Test information
- Særlige punkter til bedømmelse
- Bilag

    ## Goal
    Write the report while building, not after everything is finished. The report is part of the exam foundation.

    ## Detailed tasks
    - [ ] Create `rapport.md` or `REPORT.md` in root early.
- [ ] Add front page: assignment name, your name, hold number, school, delivery date, usernames/passwords if relevant.
- [ ] Add the required declaration text and sign/date it.
- [ ] Write “Vurdering af egen indsats”: what went well, what was hard, how it was solved, what you would do differently.
- [ ] Write “Tidsplan og proces”: planned tasks, actual tasks, estimates, actual time and changes.
- [ ] Write “Tech stack”: frontend framework, CSS method and libraries/packages.
- [ ] Write “Faglige valg og dokumentation”: component structure, state, localStorage basket, API handling and backend changes if any.
- [ ] Write “Tilvalgsopgaver”: clearly state the selected optional task(s).
- [ ] Write “Anvendelse af tredjepart og AI”: list packages, plugins, free images, AI use and how you adapted/understood it.
- [ ] Write “Testoplysninger”: URLs, GitHub link, logins/passwords if used.
- [ ] Write “Særlige punkter til bedømmelse”: pick 2-3 strong code areas to present orally.
- [ ] Add appendices: screenshots of planning, GitHub Issues, selected code snippets, design comparisons, test screenshots.

    ## Suggested files / areas
    - `rapport.md`
- `docs/screenshots/*`
- `docs/process-log.md`

    ## Acceptance criteria
    - [ ] Report exists in project root as `.md` or `.pdf`.
- [ ] All required report sections are present.
- [ ] AI and third-party use is clearly documented.
- [ ] The report explains the code choices, not just lists features.
- [ ] Report includes enough test/login info for examiner.
- [ ] Report is ready before final delivery.

    ## Test checklist
    - [ ] Read the report and check it answers every PDF report bullet.
- [ ] Make sure no placeholder sections remain.

    ## Report / exam notes
    - This issue is the report itself; update daily.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Optional] Add responsive desktop breakpoint above 1024px

    **GitHub issue:** #17  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - choose at least one optional, only after mandatory stable  
    **Type:** Optional feature  
    **Estimated time:** 4-8 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 1: Responsive breakpoint > 1024px
- Design says backoffice is for larger screens; frontend desktop is optional

    ## Goal
    Improve frontend layout on larger screens without breaking the mandatory mobile-first layout.

    ## Detailed tasks
    - [ ] Keep the 390px mobile layout unchanged and stable.
- [ ] Add media query around `min-width: 1024px`.
- [ ] Improve homepage dish grid for desktop.
- [ ] Improve dish detail layout with image/info side-by-side if it matches Figma/design direction.
- [ ] Improve employees page grid.
- [ ] Improve basket layout so totals and item list are easy to scan.
- [ ] Make sure header/footer still look good on desktop.
- [ ] Avoid overworking this before mandatory requirements are finished.

    ## Suggested files / areas
    - `dgs_frontend/src/styles/*`
- `page/component CSS files`

    ## Acceptance criteria
    - [ ] Desktop layout works above 1024px.
- [ ] Mobile layout still works at 390px.
- [ ] No horizontal scrolling appears.
- [ ] Cards and text do not become too wide or hard to read.

    ## Test checklist
    - [ ] Test at 390px, 768px, 1024px and 1440px.
- [ ] Check core flow after CSS changes.

    ## Report / exam notes
    - If this is the chosen optional, state it clearly under Tilvalgsopgaver.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Optional] Add extra ingredients on dish detail page

    **GitHub issue:** #18  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional  
    **Type:** Optional feature  
    **Estimated time:** 5-9 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 2: add extra ingredients on detail page
- Figma contains example; own solution is allowed

    ## Goal
    Allow users to customize a dish with extra ingredients before adding it to basket.

    ## Detailed tasks
    - [ ] Check backend data for ingredients/extras support.
- [ ] If API supports ingredients, fetch them or read them from dish data.
- [ ] If API does not support ingredients, only implement if teacher-approved or as local static options documented in report.
- [ ] Show extras on dish detail page in a design style matching Figma.
- [ ] Allow selecting/unselecting extra ingredients.
- [ ] Show price change if extras have prices.
- [ ] Include selected extras in basket item saved to localStorage.
- [ ] Show selected extras on basket page.
- [ ] Include extras in order payload if issue #21 is also completed.
- [ ] Keep mandatory size selection working.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/DishDetails.jsx`
- `dgs_frontend/src/components/ExtraIngredients.jsx`
- `dgs_frontend/src/utils/basket.js`
- `dgs_frontend/src/pages/Basket.jsx`

    ## Acceptance criteria
    - [ ] User can select extras before adding to basket.
- [ ] Selected extras are saved in localStorage.
- [ ] Basket displays extras clearly.
- [ ] Total price is correct if extras have prices.
- [ ] Feature is documented as optional in report.

    ## Test checklist
    - [ ] Select one extra and add to basket.
- [ ] Select multiple extras.
- [ ] Remove extras or add same dish without extras.
- [ ] Check localStorage and total.

    ## Report / exam notes
    - Explain how extras are stored and how price is calculated.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Optional] Build backoffice messages page

    **GitHub issue:** #19  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional  
    **Type:** Optional feature/backoffice  
    **Estimated time:** 4-7 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 3: `/backoffice/messages` shows contact messages with read/unread status

    ## Goal
    Build an admin view for messages submitted from the contact form.

    ## Detailed tasks
    - [ ] Add route `/backoffice/messages`.
- [ ] Add link in BackofficeNav.
- [ ] Fetch messages from backend.
- [ ] Show loading and error states.
- [ ] Display sender name, subject, message and date if available.
- [ ] Add read/unread status if backend supports it.
- [ ] If backend does not support read/unread, document limitation or ask teacher before API changes.
- [ ] Make the page easy to scan on desktop.
- [ ] Add empty state if there are no messages.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/backoffice/BackofficeMessages.jsx`
- `dgs_frontend/src/components/backoffice/BackofficeNav.jsx`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Backoffice messages route exists.
- [ ] Messages sent from contact form can be viewed.
- [ ] Loading/error/empty states exist.
- [ ] Read/unread works if supported or limitation is documented.

    ## Test checklist
    - [ ] Send contact message.
- [ ] Open backoffice messages and verify it appears.
- [ ] Test empty/error states.

    ## Report / exam notes
    - If chosen optional, explain how contact POST connects to backoffice GET.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Optional] Build backoffice dishes CRUD

    **GitHub issue:** #20  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional  
    **Type:** Optional feature/backoffice/REST  
    **Estimated time:** 8-14 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 4: `/backoffice/dishes` opret, redigér og slet retter

    ## Goal
    Build admin CRUD for dishes after employee CRUD is stable.

    ## Detailed tasks
    - [ ] Add route `/backoffice/dishes`.
- [ ] Add link in BackofficeNav.
- [ ] Fetch all dishes and display them in table/cards.
- [ ] Create dish form with required fields based on backend schema.
- [ ] Validate form before POST/PUT.
- [ ] POST new dish to backend.
- [ ] Create edit form/modal/inline edit.
- [ ] PUT/PATCH dish changes to backend.
- [ ] Delete dish with confirmation.
- [ ] Refresh list after create/update/delete.
- [ ] Show loading/error/success feedback for every action.
- [ ] Be careful with image fields and category/size structures.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/backoffice/BackofficeDishes.jsx`
- `dgs_frontend/src/components/backoffice/DishForm.jsx`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Admin can view dishes.
- [ ] Admin can create a dish.
- [ ] Admin can edit a dish.
- [ ] Admin can delete a dish after confirmation.
- [ ] Frontend menu updates after data changes.

    ## Test checklist
    - [ ] Create test dish and see it on front page.
- [ ] Edit test dish and verify changes.
- [ ] Delete test dish.
- [ ] Test backend failure.

    ## Report / exam notes
    - If chosen optional, explain dish CRUD and schema handling.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Optional] Send orders from basket and build backoffice orders

    **GitHub issue:** #21  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional  
    **Type:** Optional feature/order flow  
    **Estimated time:** 6-10 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 5: send orders via server
- Basket may POST order and show “Tak for din bestilling”
- Optional route `/backoffice/orders`

    ## Goal
    Turn the basket into an actual order flow by posting the basket to the backend.

    ## Detailed tasks
    - [ ] Confirm backend order endpoint and required payload.
- [ ] Create `createOrder()` API service function.
- [ ] Add “Afgiv bestilling” button on basket page.
- [ ] Validate basket is not empty before POST.
- [ ] Build clean order payload from localStorage basket items.
- [ ] POST order to backend.
- [ ] Show submitting/loading state.
- [ ] Show success receipt: “Tak for din bestilling”.
- [ ] Clear basket only after successful order.
- [ ] Show error feedback if order POST fails.
- [ ] Optionally add `/backoffice/orders` to view orders.
- [ ] If building backoffice orders, add loading/error/empty states and useful order details.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Basket.jsx`
- `dgs_frontend/src/pages/OrderReceipt.jsx`
- `dgs_frontend/src/pages/backoffice/BackofficeOrders.jsx`
- `dgs_frontend/src/services/api.js`
- `dgs_frontend/src/utils/basket.js`

    ## Acceptance criteria
    - [ ] User can submit a non-empty basket as an order.
- [ ] Successful order shows confirmation.
- [ ] Basket clears after successful order.
- [ ] Failed order keeps basket intact and shows error.
- [ ] Backoffice orders works if included in scope.

    ## Test checklist
    - [ ] Submit a basket with one item.
- [ ] Submit basket with multiple sizes/extras.
- [ ] Stop backend and verify basket is not cleared.
- [ ] View order in backoffice if built.

    ## Report / exam notes
    - If chosen optional, explain payload structure and why basket is cleared only after success.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.

---

# [Optional] Add authentication for backoffice

    **GitHub issue:** #22  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional, only if time and understanding are strong  
    **Type:** Optional feature/authentication  
    **Estimated time:** 8-14 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional Authentication: enable auth on server and implement Sign In
- Token/session must be handled correctly
- Backoffice protected for logged-in users

    ## Goal
    Protect backoffice with login. Only choose this if mandatory CRUD is already done and you can explain auth at exam.

    ## Detailed tasks
    - [ ] Read backend auth README/instructions.
- [ ] Enable auth in backend only if you have time and understand it.
- [ ] Create `/signin` or `/login` page.
- [ ] POST credentials to confirmed auth endpoint.
- [ ] Store token/session in a way appropriate for this school project.
- [ ] Create auth helper/context for login state.
- [ ] Create protected route wrapper for `/backoffice/*`.
- [ ] Redirect unauthenticated users to sign in.
- [ ] Add logout button.
- [ ] Handle invalid/expired token gracefully.
- [ ] Document test login in README and report.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/SignIn.jsx`
- `dgs_frontend/src/context/AuthContext.jsx`
- `dgs_frontend/src/components/ProtectedRoute.jsx`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Unauthenticated users cannot access backoffice routes.
- [ ] Valid login grants access to backoffice.
- [ ] Logout removes access.
- [ ] README contains test login.
- [ ] You can explain token/session handling orally.

    ## Test checklist
    - [ ] Open backoffice while logged out.
- [ ] Log in with valid credentials.
- [ ] Try invalid credentials.
- [ ] Reload page after login.
- [ ] Logout and try backoffice again.

    ## Report / exam notes
    - If chosen optional, explain auth flow and how routes are protected.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
