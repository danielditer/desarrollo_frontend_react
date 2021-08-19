import Contador from "./Default/_components/Contador";
import Logo from "./Default/_components/Logo";
import Description from "./Default/_components/Description";
import OpenLink from "../components/OpenLink";


const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <OpenLink
                    title="Mi proyecto react (Github)"
                    url="https://github.com/danielditer/desarrollo_frontend_react"
                />
            </header>
        </>
    );
};

export default Default;