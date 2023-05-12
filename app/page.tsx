import Player from "@/components/Player";
import {Container} from "@/components/Container";

export default function Home() {
    return (
        <section>
            <Container>
                <h1 className="text-6xl font-bold text-center">
                    Hoi pipeloi!
                </h1>
                <Player/>
            </Container>
        </section>
    )
}
