import { Route, Routes, Navigate } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Products from './pages/Products'
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
