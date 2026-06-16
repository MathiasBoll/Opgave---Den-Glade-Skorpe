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
