import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleOnSubmit = e => {
        e.preventDefault();
        
        console.log(this.state)
    }

    handleOnChange = e => {
        const {name, value} = e.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email} 
                        onChange={this.handleOnChange}
                        required 
                        />
                    <label></label>

                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password} 
                        onChange={this.handleOnChange}
                        required 
                        />
                    <div className="buttons">
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton isGoogleSignIn onClick={ signInWithGoogle }>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;