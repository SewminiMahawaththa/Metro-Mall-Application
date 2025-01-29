import { Routes, Route, useLocation  } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import DashboardLayout from "./pages/AdminDashboard/DashboardLayout";
import AdminHeader from "./components/AdminHeader/AdminHeader";
import DashboardHome from "./pages/AdminDashboard/DashboardHome/DashboardHome";
import Stores from "./pages/AdminDashboard/AdminStores/AdminStores";
import AddStores from "./pages/AdminDashboard/AdminStores/AddStores";
import UpdateStores from "./pages/AdminDashboard/AdminStores/UpdateStores";
import FoodBeverages from "./pages/FoodBeveragesPage/FoodBeverages";
import FoodDescription from "./pages/FoodBeveragesPage/FoodDescription";
import AdminFooter from "./components/AdminFooter/AdminFooter";
import ClientHeader from "./components/ClientHeader/ClientHeader";
import ClientFooter from "./components/ClinetFooter/ClientFooter";
import About from "./pages/about/About";
import Parkingpage from "./pages/Parkingpage/Parkingpage";
import ContactUs from "./pages/ContactUs/ContactUs";
import HomePage from "./pages/HomePage/HomePage";

import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith('/admindashboard');
  const isClientDashboard = !isAdminDashboard;

  return (
    <div>
      {isAdminDashboard ? <AdminHeader /> : <ClientHeader />}
      <ToastContainer/>
      <Routes>
        <Route path="/admindashboard" element={<DashboardLayout component={<DashboardHome />} />} />
        <Route path="/admindashboard/stores" element={<DashboardLayout component={<Stores />} />} />
        <Route path="/admindashboard/stores/add" element={<DashboardLayout component={<AddStores />} />} />
        <Route path="/admindashboard/stores/update/:id" element={<DashboardLayout component={<UpdateStores />} />} />
        <Route path="/foodbeverages" element={<FoodBeverages/>} />
        <Route path="/fooddescription/:id" element={<FoodDescription/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/parking" element={<Parkingpage/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
      {isAdminDashboard && <AdminFooter />}
      {isClientDashboard && <ClientFooter />}
    </div>
  );
}

export default App;
