import React from "react";
import "../App.scss";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faCheck, faUser, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const carousel_blogpage = [
  {
    src: process.env.PUBLIC_URL + "/assets/img/jahwa_page_1.png"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/jahwa_page_2.png"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/jahwa_page_3.png"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/jahwa_page_4.png"
  }
];

function Projects(): JSX.Element {
  return (
    <div id="projects" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">PROJECTS</p>
      </div>
      <Container>                        
        {/* Project1 */}
        <Row>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div className="image_carousel">
                <UncontrolledCarousel items={carousel_blogpage}/>
            </div>            
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">자화전자 그룹웨어 어플</p>
              <p className="font-color-lightgray font-bold">
                Flutter로 개발한 사내 그룹웨어 어플입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">3명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">60</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2021.05 - 2021.10 (5개월)</span>
                </p>                
                <div>
                  <img className="image_skill margin-left-right-03e" alt="Flutter" src ="https://img.shields.io/badge/Flutter-02569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white"/>   
                  <img className="image_skill margin-left-right-03e" alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/>                  
                  <img className="image_skill margin-left-right-03e" alt="Mssql" src="https://img.shields.io/badge/Microsoft SQL Server-CC2927?style=for-the-badge&logo=Microsoft SQL Server&logoColor=white"/>
                </div>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">디자인</span>                   
                  <span className="keyword-gray margin-left-right-03e">개발</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://play.google.com/store/apps/details?id=kr.co.jahwa.jahwa_M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>                
              </div>
            </div>
          </Col>
        </Row>
        <div className="bottom-line"></div>
      </Container>
    </div>
  );
}

export default Projects;