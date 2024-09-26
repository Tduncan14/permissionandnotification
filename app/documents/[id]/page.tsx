import { Editor } from '@/components/editor/Editor'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
    return (
        <div>
            <Header className="">
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">
                        This is a fake document title
                    </p>

                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>

            </Header>
            <Editor />
        </div>
    )
}

export default Document
