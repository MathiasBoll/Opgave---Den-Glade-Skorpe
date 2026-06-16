# [Mandatory] Build basket page from localStorage

    **GitHub issue:** #12  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - core order flow  
    **Type:** Mandatory implementation/page/localStorage  
    **Estimated time:** 5-8 hours

    ## PDF requirements covered
    - Route `/basket`
- Read selected dishes from localStorage
- Show name, size, extras if used, quantity, price and total
- Empty basket message
- Order POST is optional

    ## Goal
    Build the basket page that displays items added from dish detail pages.

    ## Detailed tasks
    - [ ] Read basket data safely from localStorage.
- [ ] Handle missing or invalid localStorage data without crashing.
- [ ] Show empty basket state: “Din kurv er tom”.
- [ ] Build `BasketItem` component.
- [ ] Show dish name, selected size, quantity, item price and line total.
- [ ] Show extra ingredients if optional extra issue is implemented.
- [ ] Show total sum for the whole basket.
- [ ] Add remove item button.
- [ ] Add clear basket button with confirmation.
- [ ] Allow quantity increase/decrease if time allows, or at least remove/clear.
- [ ] Update basket badge after changes.
- [ ] Keep optional order submission separate unless issue #21 is chosen.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Basket.jsx`
- `dgs_frontend/src/components/BasketItem.jsx`
- `dgs_frontend/src/utils/basket.js`

    ## Acceptance criteria
    - [ ] Basket page shows all items from localStorage.
- [ ] Empty basket is handled cleanly.
- [ ] Total price calculates correctly.
- [ ] Remove item works.
- [ ] Clear basket works.
- [ ] Page still works after reload.

    ## Test checklist
    - [ ] Add item from detail page, then open `/basket`.
- [ ] Reload basket page.
- [ ] Remove one item.
- [ ] Clear full basket.
- [ ] Check total after each action.

    ## Report / exam notes
    - Explain localStorage format and how total price is calculated.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
