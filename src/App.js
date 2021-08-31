import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ContactPage from "./pages/contact/contact.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/users.selectors";

const App = () => {
	const currentUser = useSelector(selectCurrentUser);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/contact' component={ContactPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route
					exact
					path='/signin'
					render={() =>
						currentUser ? <Redirect to='/' /> : <SignInSignUpPage />
					}
				/>
			</Switch>
		</div>
	);
};

export default App;
