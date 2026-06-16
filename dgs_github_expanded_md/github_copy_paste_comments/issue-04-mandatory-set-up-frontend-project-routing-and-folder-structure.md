# Expanded issue details for #4

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

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
