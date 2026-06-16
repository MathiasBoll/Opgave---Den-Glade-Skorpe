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
