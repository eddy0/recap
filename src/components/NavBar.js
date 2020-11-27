import {Menu, Container, Button} from 'semantic-ui-react'
import _nav from './NavBar.module.css'

const NavBar = () => {
    return (
        <Menu className={_nav.header}  borderless>
            <Container>
                <Menu.Item header>
                    Header
                </Menu.Item>
                <Menu.Item as={'a'}>
                    Add Shipper
                </Menu.Item>
                <Menu.Item as={'a'}>
                    Add Consignne
                </Menu.Item>
                <Menu.Item position={'right'}>
                    <Button basic >Login</Button>
                    <Button basic style={{marginLeft: '0.5em'}}>Logout</Button>
                </Menu.Item>

            </Container>


        </Menu>
    )
}

export default NavBar