import React from "react";
import "../App.scss";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faCheck, faUser, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const carousel_jahwa_page = [
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

const carousel_cepheus = [
  {
    src: process.env.PUBLIC_URL + "/assets/img/cepheus plus.png"
  }
];

const carousel_seetec = [
  {
    src: process.env.PUBLIC_URL + "/assets/img/Device Group Page.png"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/Device Item Page.png"
  }
];

const carousel_no_image = [
    {
      src: process.env.PUBLIC_URL + "/assets/img/No-Image.png"
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
            <div>
              <p className="font-bold-900 font-2">Cepheus Plus GUI</p>
              <p className="font-color-lightgray font-bold">
                C# .NET Framework Winform으로 개발한 시리얼 통신 프로그램입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">80</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2020.10 - 2020.11 (2개월)</span>
                </p>                
                <div>                  
                  <img className="image_skill margin-left-right-03e" alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/>                                    
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
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div >
            <UncontrolledCarousel items={carousel_cepheus}/>
            </div>            
          </Col>
        </Row>                 
        <div className="bottom-line"></div> 
        {/* Project2 */}
        <Row>          
           <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div className="image_carousel">
                <UncontrolledCarousel items={carousel_no_image}/>
            </div>            
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">근로유형 개선</p>
              <p className="font-color-lightgray font-bold">
                신규 출퇴근제 로직을 재설계하고 ERP, 그룹웨어에서 근태 관련 페이지를 개발했습니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">90</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2021.05 - 2021.07 (3개월)</span>
                </p>                
                <div>                  
                  <img className="image_skill margin-left-right-03e" alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/>                                    
                  <img className="image_skill margin-left-right-03e" alt="Mssql" src="https://img.shields.io/badge/Microsoft SQL Server-CC2927?style=for-the-badge&logo=Microsoft SQL Server&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="JQuery" src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>
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
            </div>
          </Col>          
        </Row>                 
        <div className="bottom-line"></div> 
        {/* Project3 */}
        <Row>          
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">업무지원시스템</p>
              <p className="font-color-lightgray font-bold">
                그룹웨어에서 타부서간 업무 협업을 위해 업무지원 시스템 페이지를 구축했습니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">1명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">100</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2021.05 - 2021.09 (5개월)</span>
                </p>                
                <div>                  
                <img className="image_skill margin-left-right-03e" alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/>                                    
                  <img className="image_skill margin-left-right-03e" alt="Mssql" src="https://img.shields.io/badge/Microsoft SQL Server-CC2927?style=for-the-badge&logo=Microsoft SQL Server&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="JQuery" src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>
                </div>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">기획</span>                   
                  <span className="keyword-gray margin-left-right-03e">디자인</span>
                  <span className="keyword-gray margin-left-right-03e">개발</span>
                </p>
              </div>              
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div className="image_carousel">
                <UncontrolledCarousel items={carousel_no_image}/>
            </div>            
          </Col>
        </Row>                 
        <div className="bottom-line"></div> 
        {/* Project4 */}
        <Row>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div className="image_carousel">
                <UncontrolledCarousel items={carousel_jahwa_page}/>
            </div>            
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">사내 그룹웨어 어플</p>
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
                  <span className="padding-left-right-1e">2021.05 - 2021.10 (6개월)</span>
                </p>                
                <div>
                  <img className="image_skill margin-left-right-03e" alt="Flutter" src ="https://img.shields.io/badge/Flutter-02569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white"/>   
                  <img className="image_skill margin-left-right-03e" alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/>                  
                  <img className="image_skill margin-left-right-03e" alt="Mssql" src="https://img.shields.io/badge/Microsoft SQL Server-CC2927?style=for-the-badge&logo=Microsoft SQL Server&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="Figma" src ="https://img.shields.io/badge/Figma-F24E1E.svg?&style=for-the-badge&logo=Figma&logoColor=white"/>
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
        {/* Project3 */}
        <Row>          
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">부두 관리자 페이지</p>
              <p className="font-color-lightgray font-bold">
                React로 개발한 PDA 점검 데이터를 관리하는 페이지입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">70</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2022.09 - 2022.10 (2개월)</span>
                </p>                
                <div>                                    
                  <img className="image_skill margin-left-right-03e" alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="Typescript" src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
                  <img className="image_skill margin-left-right-03e" alt="React" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
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
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div >
            <UncontrolledCarousel items={carousel_seetec}/>
            </div>            
          </Col>
        </Row>                 
        <div className="bottom-line"></div> 
      </Container>
    </div>
  );
}

export default Projects;