import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from "./sign-in.styles";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = () => {
	const dispatch = useDispatch();

	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = ev => {
		const { value, name } = ev.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	const { email, password } = userCredentials;

	const handleSubmit = async ev => {
		ev.preventDefault();
		dispatch(emailSignInStart(email, password));
	};
	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					handleChange={handleChange}
					label='email'
					required
				/>

				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='password'
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type='submit'> Sign in </CustomButton>
					<CustomButton
						type='button'
						onClick={() => dispatch(googleSignInStart())}
						isGoogleSignIn
					>
						Sign in with Google{" "}
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
