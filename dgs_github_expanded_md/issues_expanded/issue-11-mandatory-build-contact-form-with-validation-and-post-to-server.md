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
