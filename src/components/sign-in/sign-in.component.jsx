import React, { Component } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDeafult();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        const {email, password} = this.state;

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={this.handleChange}
                    label="email"
                    required                        
                    />
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={this.handleChange}
                    label="password"
                    required                        
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>                   
                </form>
            </div>
        )
    }

   
}

export default SignIn;