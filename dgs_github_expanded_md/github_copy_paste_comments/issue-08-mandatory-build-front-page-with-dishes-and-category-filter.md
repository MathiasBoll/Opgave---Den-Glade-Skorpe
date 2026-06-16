# Expanded issue details for #8

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

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
