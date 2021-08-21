import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ContactPage from "./pages/contact/contact.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/users.selectors";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
		// 	if (user) {
		// 		const userRef = await createUserProfileDoc(user);
		// 		userRef.onSnapshot(snapShot => {
		// 			setCurrentUser({
		// 				id: snapShot.id,
		// 				...snapShot.data(),
		// 			});
		// 		});
		// 	}
		// 	setCurrentUser(user);
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
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
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
