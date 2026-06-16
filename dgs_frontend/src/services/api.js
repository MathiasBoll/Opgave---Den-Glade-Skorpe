const BASE_URL = 'http://localhost:3042'

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
export const getDishes = () => request('/dishes')
export const getDish = (id) => request(`/dishes/${id}`)

// Categories
export const getCategories = () => request('/categories')

// Employees
export const getEmployees = () => request('/employees')
export const getEmployee = (id) => request(`/employees/${id}`)

// Ingredients
export const getIngredients = () => request('/ingredients')

// Messages (contact form — public POST; authenticated GET)
export const postMessage = (data) =>
  request('/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

export const getMessages = () =>
  request('/messages', { headers: authHeaders() })

// Orders
export const postOrder = (data) =>
  request('/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

export const getOrders = () =>
  request('/orders', { headers: authHeaders() })

// Auth
export const login = (credentials) =>
  request('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })
