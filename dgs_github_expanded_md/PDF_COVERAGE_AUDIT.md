# Den Glade Skorpe - PDF coverage audit

This audit compares the uploaded assignment PDF with the current GitHub issue plan.

## Overall verdict

The current visible GitHub issues cover the mandatory PDF requirements well. The main thing to improve is depth: every issue should include implementation details, acceptance criteria, tests and report notes. The expanded issue files in this folder do that.

## Coverage matrix

| PDF requirement | Covered by issue(s) | Status / note |
|---|---:|---|
| Individual exam work, ability to explain choices/code, backup, timely delivery | #3, #15, #16 | Covered; keep process log, commits and report updated. |
| Third-party packages/frameworks allowed only if sourced and explainable; AI use must be stated | #16, #15 | Covered in report issue; add package/AI log from day 1. |
| Modern framework with HTML/CSS/JS; semantic, structured, reusable components | #4, #6, #14, #16 | Covered. |
| Mobile-first from ca. 390px and follow Figma design | #6, #7, #8, #9, #10, #11, #12, #14 | Covered; do mobile first before desktop. |
| Required routes: /, /dish/:id, /employees, /contact, /basket, /backoffice, /backoffice/employees | #4 + page issues #8-#13 | Covered. |
| 404 page and error handling for API/input | #4, #5, #11, #14 | Covered. |
| All forms need validation and user-friendly feedback | #11, #13, #14, #20 if optional | Covered. |
| Front page: all dishes + category filter without reload | #8 | Covered. |
| Dish detail: fetch by id, size choice, add to basket, localStorage feedback | #9 | Covered. |
| Employees page: fetch and show staff | #10 | Covered. |
| Contact: POST name, subject/emne, message/besked to server | #11 | Covered. |
| Basket: show localStorage items, details, total, empty state | #12 | Covered. |
| Backoffice employees: GET/POST/PUT/PATCH/DELETE with feedback | #13 | Covered. |
| API: demonstrate REST principles and async calls with loading/error/success | #5, #8-#13 | Covered. |
| Header: dark logo, basket icon badge, burger navigation | #7 | Covered. |
| Footer: logo and contact information, opening hours/SoMe if in Figma | #7 | Covered; check Figma for optional footer details. |
| Design: fonts Just Another Hand and Kurale, colors #4A4A4A, #F6F0EE, #FFFFFF, #000000 | #6 | Covered. |
| Images: API images for data, free images only if needed and sourced | #6, #8, #10, #16 | Mostly covered; remember to list image sources in report if external images are used. |
| Minimum 1 optional task required | #17-#22 | Covered, but choose one clearly in report. Recommended first optional: desktop breakpoint or orders depending time. |
| Report required in root as .md or .pdf with all sections | #16 | Covered. |
| README required with startup instructions | #15 | Covered; current README already has backend instructions but must be updated after frontend exists. |
| Delivery without node_modules; source code, README, report | #15 | Covered. |
| No editing after deadline; backend only delivered if changed with approval | #15, #16 | Covered; document if backend changed. |
| Oral exam preparation: explain code, methodology, navigation, data layout | #16 + all feature issues | Covered through report/exam notes in each issue. |

## Gaps / things to be careful about

- **Issue #2 was not visible** in the current open issue list. This is not a problem if it was deleted/closed, but the numbering jumps from #1 to #3.
- **Frontend is not started according to README**, so the next real work should be issue #4 and #6 before page features.
- **Minimum 1 optional task is required.** Do not leave all optional issues undone. Choose at least one after mandatory features work.
- **AI use must be documented.** Because Copilot/ChatGPT prompts are part of the workflow, the report must say how AI was used and that the code was understood/adapted.
- **External images must be sourced.** If API/Figma images are not enough and Unsplash/Pexels/Pixabay are used, add source notes to the report.
- **Backend changes need teacher approval.** Do not change API routes/schemas without documenting why and getting approval.
- **Delivery must not include `node_modules`.** Add/check `.gitignore` and test the final zip/repo.

## Recommended priority from here

1. Start/verify backend and README commands.
2. Build frontend setup/routing.
3. Build design system/header/footer.
4. Build homepage GET dishes + category filter.
5. Build dish detail + localStorage basket.
6. Build basket page.
7. Build employees page.
8. Build contact form POST.
9. Build backoffice employees CRUD.
10. Finish 404/accessibility/SEO/UX.
11. Complete at least one optional task.
12. Finish README and report.
