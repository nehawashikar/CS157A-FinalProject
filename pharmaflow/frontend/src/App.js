import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SelectPharmacy from './pages/SelectPharamacy';
import UserSelect from './pages/UserSelect';
import SelectPharmacyLocation from './pages/SelectPharmacyLocation';
import CustomerLogin from './pages/CustomerLogin';
import CustomerHomepage from './pages/CustomerHomepage';
import EmployeeHomepage from './pages/EmployeeHomepage';
import EmployeeLogin from './pages/EmployeeLogin';
import CustomerUpdateInfo from './pages/CustomerUpdateInfo';
import CustomerPrescriptionInfo from './pages/CustomerPrescriptionInfo';
import SearchCustomer from './pages/SearchCustomer';
import ShowCustomerInfo from './pages/ShowCustomerInfo';
import SearchInventory from './pages/SearchInventory';
import AddSupplier from './pages/AddSupplier';
import AddCustomer from './pages/AddCustomer';
import PlaceOrder from './pages/PlaceOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/select-pharmacy"/>}/>
            <Route path="/select-pharmacy" element={<SelectPharmacy/>}/>
            <Route path="/select-pharmacy-location" element={<SelectPharmacyLocation/>}/>
            <Route path="/user-select/:pharmacyID" element={<UserSelect/>}/>
            <Route path="/customer-login" element={<CustomerLogin/>}/>
            <Route path="/employee-login" element={<EmployeeLogin/>}/>
            <Route path="/customer-homepage" element={<CustomerHomepage/>}/>
            <Route path="/employee-homepage" element={<EmployeeHomepage/>}/>
            <Route path="/customer-update-info" element={<CustomerUpdateInfo/>}/>
            <Route path="/customer-prescription-info" element={<CustomerPrescriptionInfo/>}/>
            <Route path="/search-customer" element={<SearchCustomer/>}/>
            <Route path="/show-customer-info" element={<ShowCustomerInfo/>}/>
            <Route path="/search-inventory" element={<SearchInventory/>}/>
            <Route path="/add-supplier" element={<AddSupplier/>}/>
            <Route path="/add-customer" element={<AddCustomer/>}/>
            <Route path="/place-order" element={<PlaceOrder/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
