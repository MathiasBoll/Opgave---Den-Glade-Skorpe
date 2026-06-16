# [Mandatory] Build header, burger menu, footer and basket badge

    **GitHub issue:** #7  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - shared layout  
    **Type:** Mandatory implementation/layout  
    **Estimated time:** 4-6 hours

    ## PDF requirements covered
    - Header on all pages
- Dark header with logo
- Basket icon with item count badge
- Burger menu with navigation
- Footer with logo and contact information

    ## Goal
    Create the shared layout that every public page uses. This should match the Figma mobile frames.

    ## Detailed tasks
    - [ ] Build Header component with dark background and logo/name.
- [ ] Add basket icon that links to `/basket`.
- [ ] Read basket from localStorage and show item count in a badge.
- [ ] Update badge when items are added or removed.
- [ ] Build burger button with `aria-expanded` and accessible label.
- [ ] Create burger menu links to `/`, `/employees`, `/contact`, `/basket` and optionally backoffice.
- [ ] Burger menu opens/closes on click and closes when a link is clicked.
- [ ] Add ESC key close if easy.
- [ ] Build Footer with logo, email, phone and address.
- [ ] Add opening hours/SoMe links if they are visible in Figma or material.
- [ ] Make Header/Footer reusable through a Layout component.

    ## Suggested files / areas
    - `dgs_frontend/src/components/Header.jsx`
- `dgs_frontend/src/components/Footer.jsx`
- `dgs_frontend/src/components/Layout.jsx`
- `dgs_frontend/src/utils/basket.js`

    ## Acceptance criteria
    - [ ] Header appears on all public pages.
- [ ] Burger menu is usable on mobile.
- [ ] Navigation links work without page reload.
- [ ] Basket badge displays correct quantity from localStorage.
- [ ] Footer contains contact info and matches the visual style.
- [ ] Keyboard and screen reader basics are considered for the menu.

    ## Test checklist
    - [ ] Add an item to basket and verify badge changes.
- [ ] Reload page and verify badge still reads from localStorage.
- [ ] Open and close burger menu on mobile width.
- [ ] Tab through menu links.

    ## Report / exam notes
    - Explain how the burger menu state works and how basket badge reads localStorage.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
