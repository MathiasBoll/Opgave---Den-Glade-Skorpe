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
