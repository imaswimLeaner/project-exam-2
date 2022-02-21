import Nav from "./Nav";
import React from 'react';
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "../../context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

import Home from "../home/Home";
import Accommodations from "../accommodations/Accommodations";
import Details from "../accommodations/Details";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import Admin from "../admin/Admin";
import Enquiries from "../admin/pages/enquiries/Enquiries";
import Entries from "../admin/pages/entries/Entries";
import AddPage from "../admin/pages/addEstablishment/AddPage";
// import ProtectedRoute from '../route/ProtectedRoute';


export default function Layout() {
  return (
		<AuthProvider>
			<HelmetProvider>
				<Router>
					<div className="wrapper">
						<Nav />
						<Routes>
							<Route path="/" exact="true" element={<Home />} />
							<Route
								path="/accommodations/"
								exact="true"
								element={<Accommodations />}
							/>
							<Route path="/accommodations/:id" element={<Details />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/login" element={<Login />} />
							<Route path="/admin" element={<Admin />} />
							
						  	<Route
								path="/admin/enquiries"
								component={<Enquiries />}
							/>
							<Route path="/admin/entries" component={<Entries />} />
							<Route
								path="/admin/add-establishment"
								component={<AddPage />}
							/>
						</Routes>
					</div>
					<Footer />
				</Router>
			</HelmetProvider>
		</AuthProvider>
	);
}
