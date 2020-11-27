import NavBar from "./components/NavBar";
import Home from "./page/Home";
import {Container} from "semantic-ui-react";
import {Route} from "react-router-dom";

function App() {

    return (
        <>
            <NavBar/>
            <Container className={'main'}>
                <Route path={'/'} component={Home} />
            </Container>
        </>
    )
}


export default App
