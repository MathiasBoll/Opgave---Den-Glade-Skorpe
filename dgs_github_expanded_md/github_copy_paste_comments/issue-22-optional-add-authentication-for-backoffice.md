# Expanded issue details for #22

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

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
