import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleOnSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }catch(error){
            console.log(error)
        }
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