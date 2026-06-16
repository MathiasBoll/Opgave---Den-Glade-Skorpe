# [Mandatory] Set up backend and reusable API service layer

## Goal
Run the provided backend locally and create reusable frontend API functions.

## Backend info
Backend URL: `http://localhost:3042`

Expected useful endpoints:
- `GET /categories`
- `GET /dishes`
- `GET /dish/:id`
- `GET /employees`
- `GET /employee/:id`
- `POST /message`
- `GET /messages`
- `POST /employee`
- `PUT /employee`
- `DELETE /employee/:id`

## Tasks
- [ ] Install backend dependencies.
- [ ] Create `.env.local` in backend root if required by backend README.
- [ ] Run database seed command.
- [ ] Start server.
- [ ] Test endpoints in browser/Postman.
- [ ] Create `services/api.js` or similar in frontend.
- [ ] Add reusable API functions for dishes, categories, employees and messages.
- [ ] Add loading/error handling patterns.

## Acceptance criteria
- [ ] Frontend can fetch dishes from backend.
- [ ] API logic is centralized and not duplicated everywhere.
- [ ] Failed requests show user-friendly errors.

## Estimate
3-5 hours.
