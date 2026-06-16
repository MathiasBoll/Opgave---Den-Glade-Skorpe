# Expanded issue details for #6

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

    # [Mandatory] Implement design system, fonts, colors and mobile-first base styling

    **GitHub issue:** #6  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P0 - design foundation  
    **Type:** Mandatory implementation/design  
    **Estimated time:** 4-7 hours

    ## PDF requirements covered
    - Figma must be followed in layout and visual structure
- Mobile-first from ca. 390px
- Fonts: Just Another Hand and Kurale
- Colors: #4A4A4A, #F6F0EE, #FFFFFF, #000000
- Accessibility, responsiveness, SEO basics and UX

    ## Goal
    Create the visual foundation for the project so all pages feel like the Figma design and not separate random pages.

    ## Detailed tasks
    - [ ] Install or import `Just Another Hand` for headings/buttons.
- [ ] Install or import `Kurale` for body text.
- [ ] Create CSS variables for colors, spacing, radius, font sizes and layout width.
- [ ] Use `#4A4A4A` for header/footer/buttons/primary contrast.
- [ ] Use `#F6F0EE` for cream cards/sections where Figma uses it.
- [ ] Create a mobile-first base layout that works at 390px.
- [ ] Add responsive image rules to avoid stretched or broken images.
- [ ] Create reusable button/card/form styles.
- [ ] Check Figma for any effects or details not named directly in the PDF and implement them where reasonable.
- [ ] Document any design changes and why they improve UX/accessibility.

    ## Suggested files / areas
    - `dgs_frontend/src/styles/global.css`
- `dgs_frontend/src/styles/variables.css`
- `dgs_frontend/src/components/ui/*`

    ## Acceptance criteria
    - [ ] Fonts are used consistently.
- [ ] Colors match the PDF/Figma direction.
- [ ] Pages are readable at around 390px width.
- [ ] Buttons, cards and forms share a consistent style.
- [ ] Design changes are intentional and can be explained.

    ## Test checklist
    - [ ] Open pages at 390px in browser devtools.
- [ ] Check header, cards, buttons and form fields for consistent styling.
- [ ] Run Lighthouse/basic accessibility check if possible.

    ## Report / exam notes
    - Explain design choices, mobile-first approach and any Figma deviations.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
