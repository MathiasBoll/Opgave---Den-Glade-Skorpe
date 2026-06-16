# [Mandatory] Build dish detail page and add-to-basket localStorage flow

    **GitHub issue:** #9  
    **Repo:** `MathiasBoll/Opgave---Den-Glade-Skorpe`  
    **Priority:** P1 - core customer feature  
    **Type:** Mandatory implementation/page/data  
    **Estimated time:** 6-9 hours

    ## PDF requirements covered
    - Route `/dish/:id`
- Show selected dish by id
- Image, name, description, price
- Size selection if available
- Add to basket
- Save in localStorage
- Clear feedback when added

    ## Goal
    Build the detail page where the user chooses a dish/size and adds it to basket. This is one of the most important flows.

    ## Detailed tasks
    - [ ] Read the dish id from route params.
- [ ] Fetch the selected dish by id from API.
- [ ] Show loading/error state for the detail fetch.
- [ ] Render dish image, name, description and price.
- [ ] Check data structure for sizes and render size options if available.
- [ ] Default to a sensible size if the dish requires a size selection.
- [ ] Disable add button or show validation if required size is missing.
- [ ] Create basket item object with id, name, image, selected size, price, quantity and extras if later used.
- [ ] Save item to localStorage using basket helper functions.
- [ ] If same dish/size already exists, increase quantity instead of duplicating messy entries.
- [ ] Show clear success feedback: “Retten er lagt i kurven”.
- [ ] Update basket badge after add.
- [ ] Add link/button to go to basket after adding.

    ## Suggested files / areas
    - `dgs_frontend/src/pages/DishDetails.jsx`
- `dgs_frontend/src/utils/basket.js`
- `dgs_frontend/src/services/api.js`

    ## Acceptance criteria
    - [ ] Detail page fetches the correct dish based on URL id.
- [ ] Invalid/missing id is handled with error or 404-like message.
- [ ] User can choose size when applicable.
- [ ] Add to basket saves correct data in localStorage.
- [ ] Basket survives page reload.
- [ ] User receives feedback after adding item.

    ## Test checklist
    - [ ] Open detail page from multiple dish cards.
- [ ] Add different sizes and inspect localStorage.
- [ ] Reload page and confirm data remains.
- [ ] Try invalid dish id.

    ## Report / exam notes
    - Explain route params, localStorage structure and why the basket helper functions are reusable.

    ## Definition of done
    - [ ] Code is committed with a meaningful commit message.
    - [ ] Feature is tested manually.
    - [ ] Loading/error/empty states are handled where relevant.
    - [ ] The solution is simple enough to explain at the oral exam.
    - [ ] Report notes are updated if this issue involved a design, API, state, package, AI or process decision.
