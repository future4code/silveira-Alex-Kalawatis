import TripListPage from "../pages/TripListPage/TripListPage";
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import AppFormPage from "../pages/AppFormPage/AppFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/trips/list" element={<TripListPage />} />
          <Route path="/trips/appform" element={<AppFormPage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/list" element={<AdminHomePage />}/>
          <Route path="/admin/trips/createtrip" element={<CreateTripPage />}/>
          <Route path="/adim/trips/details/:id" element={<TripDetailsPage />}/>
          
        </Routes>
      </BrowserRouter>

    )


}