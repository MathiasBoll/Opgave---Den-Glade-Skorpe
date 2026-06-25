// Centralt service-lag — alle fetch-kald til serveren er samlet her.
// Base-URL hentes fra .env.local (VITE_API_BASE_URL) eller falder tilbage på localhost:3042.
// Ændres serverens adresse ændres den kun ét sted.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

// Returnerer Authorization-header hvis et JWT-token er gemt i localStorage.
// Bruges på beskyttede (backoffice) endpoints.
function authHeaders() {
  const token = localStorage.getItem('bo_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// Generisk fetch-wrapper: kaster en fejl ved ikke-OK svar og parser JSON automatisk.
async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

// --- Offentlige endpoints (ingen auth) ---

// Dishes
export const getDishes = () => request('/dishes').then((r) => r.data)
export const getDish = (id) => request(`/dish/${id}`).then((r) => r.data)

// Categories
export const getCategories = () => request('/categories').then((r) => r.data)

// Employees
export const getEmployees = () => request('/employees').then((r) => r.data)
export const getEmployee = (id) => request(`/employee/${id}`).then((r) => r.data)

// Ingredients
export const getIngredients = () => request('/ingredients').then((r) => r.data)

// Messages (contact form — public POST; authenticated GET)
// Content-Type sættes manuelt fordi der sendes JSON (ikke FormData)
export const postMessage = (data) =>
  request('/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

// --- Beskyttede endpoints (kræver JWT i Authorization-header) ---

export const getMessages = () =>
  request('/messages', { headers: authHeaders() }).then((r) => r.data)

export const updateMessage = (id, status) =>
  request('/message', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify({ id, status }),
  }).then((r) => r.data)

export const deleteMessage = (id) =>
  request(`/message/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

// Orders
export const postOrder = (data) =>
  request('/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

export const getOrders = () =>
  request('/orders', { headers: authHeaders() }).then((r) => r.data)

export const updateOrder = (id, shipped) =>
  request('/order', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify({ id, shipped }),
  }).then((r) => r.data)

export const deleteOrder = (id) =>
  request(`/order/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

// Auth
export const login = (credentials) =>
  request('/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  }).then((r) => r.data)

// Employee CRUD (multipart/form-data for image upload)
// OBS: Content-Type udelades bevidst — browseren sætter boundary automatisk
export const createEmployee = (formData) =>
  request('/employee', {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  }).then((r) => r.data)

export const updateEmployee = (formData) =>
  request('/employee', {
    method: 'PUT',
    headers: authHeaders(),
    body: formData,
  }).then((r) => r.data)

export const deleteEmployee = (id) =>
  request(`/employee/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

// Dish CRUD (multipart/form-data for image upload)
export const createDish = (formData) =>
  request('/dish', {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  }).then((r) => r.data)

export const updateDish = (formData) =>
  request('/dish', {
    method: 'PUT',
    headers: authHeaders(),
    body: formData,
  }).then((r) => r.data)

export const deleteDish = (id) =>
  request(`/dish/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
