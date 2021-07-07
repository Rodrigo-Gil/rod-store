import React from 'react';

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async ev => {
        ev.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match! Please try again")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDoc(user, { displayName });

            //clearing the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (err) {
            console.error(err.message)
        }
    };

    handleChange = ev => {
        const { name, value } = ev.target;

        this.setState({[ name ]: value });
}

    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle> I don't have an account</SignUpTitle>
                <span> Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp