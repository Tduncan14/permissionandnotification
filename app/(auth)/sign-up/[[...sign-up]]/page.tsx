import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignedInPage = () => {
    return (
        <main className="auth-page">
            <SignUp />
        </main>
    )
}

export default SignedInPage
