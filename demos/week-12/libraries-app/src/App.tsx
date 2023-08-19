import { Container } from 'react-bootstrap';
import { Navigate, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import HomePage from "./pages/HomePage/HomePage";
import LibraryDetailsPage from './pages/LibraryDetailsPage/LibraryDetailsPage';
import LibraryListPage from './pages/LibraryListPage/LibraryListPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Menu />

      <Container className="my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/libraries/:id" element={<LibraryDetailsPage />} />
          <Route path="/libraries" element={<LibraryListPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
