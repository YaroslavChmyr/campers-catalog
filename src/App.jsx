import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage'
import VehicleFeatures from './components/VehicleFeatures/VehicleFeatures'
import VehicleReviews from './components/VehicleReviews/VehicleReviews'

const App = () => {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<VehicleFeatures />} />
            <Route path="reviews" element={<VehicleReviews />} />
          </Route>
        </Routes>
      </div>
    )
}

export default App
