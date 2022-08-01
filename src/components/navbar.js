import {Button, Container, Nav, Navbar, NavLink} from 'react-bootstrap'


const LobeNavbar = (props) => {

    return (

        <Navbar bg="light">
            <Container className="header justify-content-around flex-row flex-grow-1 ">
                <Navbar.Brand href="#home">
                    <img src="/static_content/Lobo.png" alt={"Lobo logo. Click for home"} style={{maxWidth: "5vw", height: "auto", width: "100%"}}/>
                </Navbar.Brand>
                <Nav className="flex" style={{
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    verticalAlign: "middle"
                }}>
                    <NavLink href="#overview"> Overview </NavLink>
                    <NavLink href="#examples"> Examples </NavLink>
                    <NavLink href="tour"> Tour </NavLink>
                    <NavLink href="blog"> Blog </NavLink>
                    <NavLink href="#help"> Help </NavLink>
                </Nav>
                <Button style={{
                    background: "\n" +
                        "#04ddb2", outlineColor: "\n" +
                        "#04ddb2"
                }}>
                    Download
                </Button>
            </Container>


        </Navbar>


    )

}

export default LobeNavbar;