import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {UserProvider} from '@auth0/nextjs-auth0/client';

type TemplateProps = {
    children: React.ReactNode
}

function Template({children}: TemplateProps) {
    return (
        <UserProvider loginUrl="/api/auth/login">
            <Header/>
            <main className="py-24">
                {children}
            </main>
            <Footer/>
        </UserProvider>
    )
}

export default Template;
