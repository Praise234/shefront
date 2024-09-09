import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import SideNavigation from "./components/UI/SideNavigation"
import AdminDashboard from "./pages/AdminDashboard"
import LoansPage from "./pages/LoansPage"

function App() {

  return (
    <div className="flex min-h-screen w-screen ">
      <SideNavigation />
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/forgot-password" Component={ForgotPasswordPage} />
        <Route path="/dashboard" Component={AdminDashboard} />
        <Route path="/loans" Component={LoansPage} />
      </Routes> 
    </div>
  )
}

export default App
