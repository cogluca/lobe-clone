import {Button, Container, Nav, Navbar, NavLink} from 'react-bootstrap'


const LobeNavbar = (props) => {

    return (

        <Navbar style={{color: "\n" +
                "#fff"}} >
            <Container className="m-auto navbar flex-grow-1 align-content-around flex-row navbar-expand" style={{paddingTop: "0px", paddingBottom: "0px", display:"flex", marginLeft:"0px", marginRight: "0px"}}>
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
                        "#04ddb2", borderColor: "#04ddb2"
                }}>
                    Download
                </Button>
            </Container>


        </Navbar>


    );

}

export default LobeNavbar;