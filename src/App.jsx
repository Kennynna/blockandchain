import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { Home, Policy, Contacts, Conditions } from './pages';
import { Footer } from './components/Footer';

function Layout() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/policy" element={<Layout />}>
          <Route index element={<Policy />} />
        </Route>
        <Route path="/contacts">
          <Route index element={<Contacts />} />
        </Route>
        <Route path="/conditions" element={<Layout />}>
          <Route index element={<Conditions />} />
        </Route>
        {/* можно добавить 404: */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
