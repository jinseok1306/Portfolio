import "../App.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBootstrap,
    faSass,
    faCss3,
    faHtml5,
    faJs,
    faReact,
    faJava,
    faNode,
    faVuejs
  } from "@fortawesome/free-brands-svg-icons";

function Skills(): JSX.Element {
    return (
        <div id="skills" className="padding-top-btm-5e">
            <div>
                <p className="menu-name font-color-pink">SKILLS</p>
            </div>
            <Container style={{textAlign:"left"}}>
                <Row>                
                    <p className="font-1H font-bold font-color-gray"><img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/></p>    
                    <p className="font-color-lightgray font-bold">그룹웨어, Ezgen 시스템 등 여러 웹 시스템 프론트엔드 개발을 위해 Javascript, Jquery를 사용했습니다.</p>                    
                </Row>                
                <Row>
                    <p className="font-1H font-bold font-color-gray"><img alt="React" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/></p>
                    <p className="font-color-lightgray font-bold">부두 점검용 App을 React Native로 개발했고, 수집된 데이터를 관리하는 관리자 페이지를 React로 구축했습니다. UI 라이브러리는 대부분 사용해봤고 Router, Redux를 구현할 수 있습니다.</p>
                </Row>
                <Row>
                    <p className="font-1H font-bold font-color-gray"><img alt=".NET" src ="https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=.NET&logoColor=white"/></p>
                    <p className="font-color-lightgray font-bold">기본적인 DB 연결(EF, SQL Connection), MVC 기반 설계, LINQ를 구사할 수 있으며 주로 Web API를 만드는 용도로 사용했습니다.</p>
                </Row>
                <Row>
                    <p className="font-1H font-bold font-color-gray"><img alt="Flutter" src ="https://img.shields.io/badge/Flutter-02569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white"/></p>
                    <p className="font-color-lightgray font-bold">Dart 언어 기반의 Flutter로 모바일 그룹웨어 로그인 부분을 제외한 전체 페이지(인사,전자결재, 주소록 등)를 Figma로 설계하고 개발했습니다.</p>
                </Row>
                <Row>
                    <p className="font-1H font-bold font-color-gray"><img alt="Mssql" src="https://img.shields.io/badge/Microsoft SQL Server-CC2927?style=for-the-badge&logo=Microsoft SQL Server&logoColor=white"/></p>
                    <p className="font-color-lightgray font-bold">Table 설계 및 SP, Trigger, Function을 개발할 수 있으며 ERP, 그룹웨어 백엔드 처리를 대부분 SP로 처리했기에 쿼리 분석 및 오류해결을 빠른 시간안에 처리할 수 있습니다.</p>
                </Row>
                <Row>
                    <p className="font-1H font-bold font-color-gray"><img alt="Markdown" src ="https://img.shields.io/badge/Markdown-000000.svg?&style=for-the-badge&logo=Markdown&logoColor=white"/></p>
                    <p className="font-color-lightgray font-bold">새로운 지식을 습득하면 항상 메모하는 습관을 가지고 있습니다. 지식을 공유하기 위해 메모는 Notion에 주로 작성하고 있으며 최근에는 GitHub에도 작성하고 있습니다.</p>
                </Row>
            </Container>
        </div>
    );
}


export default Skills;