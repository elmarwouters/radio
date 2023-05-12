import Link from "next/link";
import {Container} from "@/components/Container";

export const Header = () => {
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
                    <Link href="/api/login" title="Go to Login">Login</Link>
                </div>
            </Container>
        </header>
    )
};
