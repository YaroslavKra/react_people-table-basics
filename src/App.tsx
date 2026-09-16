import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PeoplePage } from './pages/PeoplePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => (
  <div data-cy="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/people/:slug" element={<PeoplePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);
