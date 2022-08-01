import { Container, Nav, Navbar, NavLink} from 'react-bootstrap'



const LobeNavbar = (props) => {

    return (

        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/static_content/Lobo.png" alt={"Lobo logo"} style={{width: "5%", height: "auto"}}/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink href="#overview"> Overview </NavLink>
                    <NavLink href="#examples"> Examples </NavLink>
                    <NavLink href="tour"> Tour </NavLink>
                    <NavLink href="blog"> Blog </NavLink>
                    <NavLink href="#help"> Help </NavLink>
                </Nav>
            </Container>


        </Navbar>


    )

}

export default LobeNavbar;