import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import AddService from "./components/Profile/AddService";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/profile/add-service" element={<AddService />} />
        <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
