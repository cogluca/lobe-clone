import {Col, Container, Footer, Row} from "react-bootstrap";


const LoboFooter = (props) => {

    return (

        <Container  style={{ paddingTop: "40px", alignItems: "center", alignContent:"space-evenly"}}>
            <hr/>
            <Row className="flex-grow-1 flex-row align-items-center" style={{display: "flex", textAlign: "center"}}>
                <Col>
                    <img src="/static_content/Lobo.png" alt="small product logo" style={{width: "20%", height: "auto"}}/>
                    <br/>
                    <br/>
                    <p>A product by Microsoft</p>
                    <p>All rights reserved</p>
                    <p>Ⓒ Microsoft 2022</p>
                </Col>

                <Col>
                    <p style={{fontWeight: "bold"}}>About</p>
                    <br/>
                    <p>Download</p>
                    <p>Overview</p>
                    <p>Examples</p>
                    <p>Blog</p>
                </Col>
                <Col>
                    <p style={{fontWeight: "bold"}}>General</p>
                    <br/>
                    <p>Notice</p>
                    <p>Licence</p>
                    <p>Press Inquiry</p>
                    <p>Press Images</p>
                </Col>
                <Col>
                    <p style={{fontWeight: "bold"}}>Resources</p>
                    <br/>
                    <p>Help</p>
                    <p>Tour</p>
                    <p>Contact</p>
                    <p>Privacy</p>


                </Col>
            </Row>

        </Container>


    )
        ;


}

export default LoboFooter;