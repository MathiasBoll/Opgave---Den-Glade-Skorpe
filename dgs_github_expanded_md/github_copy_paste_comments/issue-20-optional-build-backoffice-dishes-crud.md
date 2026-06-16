# Expanded issue details for #20

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

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
