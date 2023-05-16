"use client"

import Link from "next/link";
import {useUser} from '@auth0/nextjs-auth0/client';

import {Container} from "@/components/Container";

export const Header = () => {
    const {user, error, isLoading} = useUser();

    return (
        <header className="dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900 py-4">
            <Container className="grid grid-cols-2 gap-4">
                <nav>
                    <ul>
                        <li>
                            <Link href="/" title="Go to Home">Home</Link>
                        </li>
                    </ul>
                </nav>
                <div className="justify-self-end">
                    {!user ? (
                        <Link href="/api/auth/login" title="Go to Login">Login</Link>
                    ) : (
                        <>
                            Welcome&nbsp;{user.name}&nbsp;|&nbsp;<Link href="/api/auth/logout" title="Go to Logout">Logout</Link>
                        </>
                    )}
                </div>
            </Container>
        </header>
    )
};
