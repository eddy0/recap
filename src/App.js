import NavBar from "./components/NavBar";
import Home from "./page/Home";
import {Container} from "semantic-ui-react";
import {Route} from "react-router-dom";
import ShipperForm from "./page/ShipperForm";

function App() {

    return (
        <>
            <NavBar/>
            <Container className={'main'}>
                <Route exact={true} path={'/'} component={Home}/>
                <Route exact={true} path={'/shipper/new'} component={ShipperForm}/>
            </Container>
        </>
    )
}


export default App
