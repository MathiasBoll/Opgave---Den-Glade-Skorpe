# Expanded issue details for #19

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

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
