import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
	const adminUser = localStorage.getItem('adminUser');

	//   console.log("this", adminUser);

	return (
		<Route
			{...rest}
			render={(props) =>
				adminUser ? <Component {...props} /> : <Navigate to="/" />
			}
		/>
	);
}

export default ProtectedRoute;
