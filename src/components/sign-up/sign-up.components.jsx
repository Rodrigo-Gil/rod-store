import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = () => {
	const dispatch = useDispatch();

	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async ev => {
		ev.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match! Please try again");
			return;
		}
		dispatch(signUpStart({ displayName, email, password }));
	};

	const handleChange = ev => {
		const { name, value } = ev.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};
	return (
		<SignUpContainer>
			<SignUpTitle> I don't have an account</SignUpTitle>
			<span> Sign Up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
