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
