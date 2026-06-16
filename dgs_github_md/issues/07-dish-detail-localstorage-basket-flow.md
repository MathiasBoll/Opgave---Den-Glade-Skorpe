# [Mandatory] Build dish detail page and add-to-basket localStorage flow

## Goal
Build `/dish/:id` so the user can view one dish, choose size and add it to basket.

## Tasks
- [ ] Read `id` from route params.
- [ ] Fetch dish by id from API.
- [ ] Show image, name, description and price.
- [ ] Add size selection if the dish has available sizes.
- [ ] Add “Tilføj til kurv” button.
- [ ] Save selected item to localStorage.
- [ ] Include dish id, name, image, price, size and quantity in basket data.
- [ ] Show success feedback after adding to basket.
- [ ] Update basket badge.
- [ ] Handle invalid dish id or failed fetch.

## Acceptance criteria
- [ ] Dish detail works from a dish card.
- [ ] Selected dish is saved in localStorage.
- [ ] User gets clear feedback.
- [ ] Page does not crash on missing data.

## Estimate
5-7 hours.
