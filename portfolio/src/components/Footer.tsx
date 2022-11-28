import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer(): JSX.Element {
  return (
    <div id="footer" className="padding-top-btm-1e">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div>
                <a
                  href="https://jinseok-park.notion.site/37cf6dd814f749a5b51650e5d6f1b80d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={process.env.PUBLIC_URL + "/assets/img/Notion.png"} alt="Notion 링크" className="mainImg" />                  
                </a>
                <a
                  href="https://github.com/jinseok1306"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={process.env.PUBLIC_URL + "/assets/img/Github.jpg"} alt="Github 링크" className="mainImg" />                  
                </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;