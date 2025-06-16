// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import InternshipsPage from './pages/Internships';
import InternshipDetailPage from './pages/InternshipDetailPage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import MyInternshipPage from './pages/MyInternshipPage';
import NotFoundPage from './pages/NotFoundPage';


import './App.css'; // App-specific CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content"> {/* Main content area for routing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/internships/:id" element={<InternshipDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/my-internships" element={<MyInternshipPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;