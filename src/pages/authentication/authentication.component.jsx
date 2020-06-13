import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'

import './authentication.styles.scss'
import SignUp from '../../components/sign-up/sign-up.component'

const Authentication = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;