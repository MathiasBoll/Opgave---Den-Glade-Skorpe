# [Optional] Add extra ingredients on dish detail page

    **GitHub issue:** #18  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional  
    **Type:** Optional feature  
    **Estimated time:** 5-9 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 2: add extra ingredients on detail page
- Figma contains example; own solution is allowed

    ## Goal
    Allow users to customize a dish with extra ingredients before adding it to basket.

    ## Detailed tasks
    - [ ] Check backend data for ingredients/extras support.
- [ ] If API supports ingredients, fetch them or read them from dish data.
- [ ] If API does not support ingredients, only implement if teacher-approved or as local static options documented in report.
- [ ] Show extras on dish detail page in a design style matching Figma.
- [ ] Allow selecting/unselecting extra ingredients.
- [ ] Show price change if extras have prices.
- [ ] Include selected extras in basket item saved to localStorage.
- [ ] Show selected extras on basket page.
- [ ] Include extras in order payload if issue #21 is also completed.
- [ ] Keep mandatory size selection working.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/DishDetails.jsx`
- `dgs_frontend/src/components/ExtraIngredients.jsx`
- `dgs_frontend/src/utils/basket.js`
- `dgs_frontend/src/pages/Basket.jsx`

    ## Acceptance criteria
    - [ ] User can select extras before adding to basket.
- [ ] Selected extras are saved in localStorage.
- [ ] Basket displays extras clearly.
- [ ] Total price is correct if extras have prices.
- [ ] Feature is documented as optional in report.

    ## Test checklist
    - [ ] Select one extra and add to basket.
- [ ] Select multiple extras.
- [ ] Remove extras or add same dish without extras.
- [ ] Check localStorage and total.

    ## Report / exam notes
    - Explain how extras are stored and how price is calculated.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
