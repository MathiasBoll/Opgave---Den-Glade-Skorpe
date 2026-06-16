const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

function authHeaders() {
  const token = localStorage.getItem('bo_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

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
export const postMessage = (data) =>
  request('/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

export const getMessages = () =>
  request('/messages', { headers: authHeaders() }).then((r) => r.data)

// Orders
export const postOrder = (data) =>
  request('/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

export const getOrders = () =>
  request('/orders', { headers: authHeaders() }).then((r) => r.data)

// Auth
export const login = (credentials) =>
  request('/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  }).then((r) => r.data)

// Employee CRUD (multipart/form-data for image upload)
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
