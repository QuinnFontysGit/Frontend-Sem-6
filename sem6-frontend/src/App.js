import './App.css';
import Layout from './components/navbar/navbar';
import LoginPage from './pages/LoginPage.js';
import JobsPage from './pages/JobsPage';
import ApplicantProfilePage from './pages/ApplicantProfilePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import SwipingPage from './pages/SwipingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path='jobs' element={<JobsPage />} />
          <Route path="applicant" element={<ApplicantProfilePage />} />
          <Route path="company" element={<CompanyProfilePage />} />
          <Route path="swipe" element={<SwipingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
