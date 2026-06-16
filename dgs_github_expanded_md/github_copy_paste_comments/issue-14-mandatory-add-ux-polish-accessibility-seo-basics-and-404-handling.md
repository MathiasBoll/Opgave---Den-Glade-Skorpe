# Expanded issue details for #14

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

    # [Mandatory] Add UX polish, accessibility, SEO basics and 404 handling

    **GitHub issue:** #14  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P2 - finish before optional  
    **Type:** Mandatory quality  
    **Estimated time:** 4-7 hours

    ## PDF requirements covered
    - Accessibility standards
- Responsiveness
- Basic SEO
- 404 page
- API error handling
- User-friendly form errors
- UX: navigation, feedback, contrast, hierarchy, performance

    ## Goal
    Finish the cross-cutting quality requirements. This issue should be done before optional extras.

    ## Detailed tasks
    - [ ] Add meaningful page titles and meta descriptions if using React Helmet or similar, or at least update main HTML title/description.
- [ ] Use semantic HTML: header, nav, main, section, footer, button, form, label.
- [ ] Ensure every form input has a label.
- [ ] Add alt text for meaningful images; empty alt for decorative images.
- [ ] Check color contrast between text/background.
- [ ] Check keyboard navigation for burger menu, links, buttons and forms.
- [ ] Add custom 404 page for invalid routes.
- [ ] Add empty states: empty basket, no dishes, no employees, no messages/orders if optional.
- [ ] Use consistent microcopy for errors and success messages.
- [ ] Avoid layout shift and huge images where possible.
- [ ] Make loading states visible but not distracting.
- [ ] Test core flow on mobile width and desktop width.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/NotFound.jsx`
- `dgs_frontend/index.html`
- `dgs_frontend/src/components/*`
- `dgs_frontend/src/styles/*`

    ## Acceptance criteria
    - [ ] Invalid routes show custom 404 page.
- [ ] All required user actions show feedback.
- [ ] Forms are accessible and validated.
- [ ] Navigation is understandable and keyboard usable.
- [ ] Basic SEO/meta/title is handled.
- [ ] No unreadable low-contrast text remains.

    ## Test checklist
    - [ ] Use keyboard only for main navigation and form.
- [ ] Run Lighthouse if possible.
- [ ] Open invalid route.
- [ ] Test at 390px and >1024px.

    ## Report / exam notes
    - Mention accessibility and UX choices, including user feedback and 404 handling.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
