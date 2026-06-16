import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BasketProvider } from './context/BasketContext'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import DishDetail from './pages/DishDetail'
import Employees from './pages/Employees'
import Contact from './pages/Contact'
import Basket from './pages/Basket'
import OrderConfirmation from './pages/OrderConfirmation'
import NotFound from './pages/NotFound'

import ContactConfirmation from './pages/ContactConfirmation'

import Backoffice from './pages/backoffice/Backoffice'
import BackofficeEmployees from './pages/backoffice/BackofficeEmployees'
import BackofficeMessages from './pages/backoffice/BackofficeMessages'
import BackofficeOrders from './pages/backoffice/BackofficeOrders'
import BackofficeDishes from './pages/backoffice/BackofficeDishes'

function PublicLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/dish/:id" element={<PublicLayout><DishDetail /></PublicLayout>} />
          <Route path="/employees" element={<PublicLayout><Employees /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/contact/tak" element={<PublicLayout><ContactConfirmation /></PublicLayout>} />
          <Route path="/basket" element={<PublicLayout><Basket /></PublicLayout>} />
          <Route path="/order-confirmation" element={<PublicLayout><OrderConfirmation /></PublicLayout>} />

          <Route path="/backoffice" element={<Backoffice />}>
            <Route index element={<BackofficeEmployees />} />
            <Route path="employees" element={<BackofficeEmployees />} />
            <Route path="messages" element={<BackofficeMessages />} />
            <Route path="orders" element={<BackofficeOrders />} />
            <Route path="dishes" element={<BackofficeDishes />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BasketProvider>
  )
}
