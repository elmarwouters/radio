import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

type TemplateProps = {
    children: React.ReactNode
}

function Template({children}: TemplateProps) {
    return (
        <>
            <Header/>
            <main className="py-24">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Template;
