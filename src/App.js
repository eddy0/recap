import NavBar from './components/NavBar'
import Home from './page/Home'
import {Container} from 'semantic-ui-react'
import {Route} from 'react-router-dom'
import ShipperForm from './page/ShipperForm'
import ConsigneeForm from './page/ConsigneeForm'
import TodoPage from './page/TodoPage'
import LoginPage from './page/LoginPage'


function App() {

    return (
        <>
            <NavBar/>
            <Container className={'main'}>
                <Route exact={true} path={'/'} component={Home}/>
                <Route exact={true} path={'/shipper/new'} component={ShipperForm}/>
                <Route exact={true} path={'/consignee/new'} component={ConsigneeForm}/>
                <Route exact={true} path={'/todo'} component={TodoPage}/>
                <Route exact={true} path={'/login'} component={LoginPage}/>
            </Container>
        </>
    )
}


export default App
