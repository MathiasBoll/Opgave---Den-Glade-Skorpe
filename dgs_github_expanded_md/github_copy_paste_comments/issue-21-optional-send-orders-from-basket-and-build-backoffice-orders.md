# Expanded issue details for #21

    Paste this as a comment on the existing GitHub issue if you do not want to replace the issue body.

    # [Optional] Send orders from basket and build backoffice orders

    **GitHub issue:** #21  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P3 - optional  
    **Type:** Optional feature/order flow  
    **Estimated time:** 6-10 hours

> Optional rule: only start this when all mandatory issues are stable. The PDF says minimum 1 optional task must be selected, but mandatory requirements come first.

    ## PDF requirements covered
    - Optional task 5: send orders via server
- Basket may POST order and show “Tak for din bestilling”
- Optional route `/backoffice/orders`

    ## Goal
    Turn the basket into an actual order flow by posting the basket to the backend.

    ## Detailed tasks
    - [ ] Confirm backend order endpoint and required payload.
- [ ] Create `createOrder()` API service function.
- [ ] Add “Afgiv bestilling” button on basket page.
- [ ] Validate basket is not empty before POST.
- [ ] Build clean order payload from localStorage basket items.
- [ ] POST order to backend.
- [ ] Show submitting/loading state.
- [ ] Show success receipt: “Tak for din bestilling”.
- [ ] Clear basket only after successful order.
- [ ] Show error feedback if order POST fails.
- [ ] Optionally add `/backoffice/orders` to view orders.
- [ ] If building backoffice orders, add loading/error/empty states and useful order details.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/Basket.jsx`
- `dgs_frontend/src/pages/OrderReceipt.jsx`
- `dgs_frontend/src/pages/backoffice/BackofficeOrders.jsx`
- `dgs_frontend/src/services/api.js`
- `dgs_frontend/src/utils/basket.js`

    ## Acceptance criteria
    - [ ] User can submit a non-empty basket as an order.
- [ ] Successful order shows confirmation.
- [ ] Basket clears after successful order.
- [ ] Failed order keeps basket intact and shows error.
- [ ] Backoffice orders works if included in scope.

    ## Test checklist
    - [ ] Submit a basket with one item.
- [ ] Submit basket with multiple sizes/extras.
- [ ] Stop backend and verify basket is not cleared.
- [ ] View order in backoffice if built.

    ## Report / exam notes
    - If chosen optional, explain payload structure and why basket is cleared only after success.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
