import {Button, Container, ModalFooter, Col} from "react-bootstrap";


const Hero = (props) => {

    return (

        <Container className={"flex-grow-1 align-content-center text-center"} style={{alignItems: "center", paddingTop: "40px"}}>
            <h1 style={{fontWeight: "bold"}}> Lobe <span style={{
                color: "\n" +
                    "#04ddb2"
            }}>Tour</span></h1>

            <p>
                Build your first machine learning model in ten <br/> minutes. No code or experience required.
            </p>

            <Container style={{
                position: "relative",
                display: "block",
                flexDirection: "column",
                overflow: "hidden",
                alignItems: "center",
                verticalAlign: "middle",
                width: "100%",
                paddingTop: "56.3%",
                borderRadius: "24px",

            }}>

                <iframe src="https://www.youtube.com/embed/Mdcw3Sb98DA"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}></iframe>

            </Container>

            <Col>

                <h1 style={{fontWeight: "bold"}}>
                    Train your App <br/> with Lobe
                </h1>

                <Button style={{
                    background: "\n" +
                        "#04ddb2", outlineColor: "\n" +
                        "#04ddb2", borderColor: "#04ddb2"
                }}>
                    Download
                </Button>

                <Container className={"flex-grow-1 align-content-center text-center"} style={{alignItems: "center"}}>

                </Container>

            </Col>
        </Container>


    );


}

export default Hero;