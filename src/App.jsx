import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { Home, Policy, Contacts, Conditions } from './pages';
import { Footer } from './components/Footer';
import { Cookie } from './components/Cookie';
import { LanguageProvider } from "./context/LanguageContext";

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <div className='flex-1 bg-[var(--bg-black)]'>
        <Outlet />
      </div>
      <Footer />
      <Cookie/>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>

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
        <Route path="/conditions" >
          <Route index element={<Conditions />} />
        </Route>
        {/* можно добавить 404: */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>

  );
}

export default App;
