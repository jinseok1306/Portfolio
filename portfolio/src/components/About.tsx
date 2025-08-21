import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, List} from "reactstrap";
import "../App.scss";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';

function About(): JSX.Element {
    return (
      <div id="about" className="padding-top-btm-5e">
        <div>
            <p className="menu-name font-color-pink">ABOUT</p>
        </div>
        <Container>
            <Row>
                <Col xs={12} sm={4} md={4} >
                    <Card style={{border:0}}>
                        <img
                            className="image_about"
                            alt="Sample"
                            src={process.env.PUBLIC_URL + "/assets/img/my picture.jpg"}  
                                                  
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                            Jinseok Park
                            </CardTitle>
                            <CardText>
                                <p className="font-color-lightgray">
                                Web, Mobile App, ERP 개발 담당자로 시작해 현재는 보안 담당자로 성장하고 있는 지원자 박진석입니다.
                                대학원에서 포렌식, 침해대응을 공부하고 있으며 ISMS-P 취득을 목표로 공부중입니다.                          
                                </p>                            
                                <p className="font-color-lightgray font-bold">
                                보안 엔지니어이자 보안 담당자로 성장하기 위해 오늘도 도전합니다.
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={6}>
                    <div>
                        <p className="font-bold-900 font-1H font-color-bl">
                            Career
                        </p>
                    </div>
                    <div>
                        <Timeline>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    2012.03 - 2019.08
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    청주대학교 - 전자공학과
                                </Typography>                                
                                </TimelineContent>
                            </TimelineItem>
                            {/* <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    2019.09 - 2019.11
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <BusinessIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    씨앤씨테크
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">연구개발2팀 사원</p>
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">하이닉스 반도체 장비 GUI 개발 및 유지보수</p>
                                </Typography>
                                </TimelineContent>
                            </TimelineItem>           */}
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    2019.12 - 2021.12
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <BusinessIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    자화전자 - IT운영팀(사원)
                                </Typography>                            
                                <Typography sx={{ m: 'auto 0' }}
                                    align="left"
                                    variant="body2"
                                    color="text.secondary">
                                    <p>
                                    - ERP 개발 : 비젠트로 ERP 개발 및 운영(인사, 회계)<br/>
                                    - 웹개발 : .NET 기반 그룹웨어 개발 및 운영<br/>
                                    - 모바일 개발 : Flutter 기반 앱 개발<br/>
                                    - 보안 관리: 문서중앙화, NAC 운영, 백신 운영<br/>
                                    - 서버 관리 : AD, Exchange 서버 관리<br/>
                                    </p>
                                </Typography>
                                </TimelineContent>
                            </TimelineItem>           
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    2021.12 - 2022.12
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <BusinessIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    롯데정보통신 -씨텍IS담당(선임)
                                </Typography>                                        
                                <Typography sx={{ m: 'auto 0' }}
                                    align="left"
                                    variant="body2"
                                    color="text.secondary">
                                    <p>
                                        - ERP 운영 : 더존 ERP 운영 (인사)<br/>
                                        - 웹 개발 : React 기반 웹 개발<br/>
                                        - 모바일 : React Native 기반 앱 개발<br/>
                                        </p>
                                </Typography>                      
                                </TimelineContent>
                            </TimelineItem>    
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    2023.02 - 2025.06
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <BusinessIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    KCC건설 - 정보보안팀(대리)
                                </Typography>                                    
                                <Typography sx={{ m: 'auto 0' }}
                                    align="left"
                                    variant="body2"
                                    color="text.secondary">
                                    <p>
                                    - ERP 개발 : ERP 개발 및 운영(전표, 관리회계)<br/>
                                    - 웹개발 : .NET, Spring 기반 웹 사이트 개발 및 운영<br/>
                                    - 네트워크 관리 : 방화벽, 웹방화벽, VPN, 스위치 등<br/>
                                    - 정보보호공시 및 개인정보 관리<br/>
                                    - 보안 : 트러블슈팅 및 시큐어 코딩 가이드<br/>
                                        </p>
                                </Typography>                      
                                </TimelineContent>
                            </TimelineItem>     
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    2025.03 - 진행중
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot  color="primary">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    서강대학교 AI·SW대학원 - 정보보호
                                </Typography>                                
                                </TimelineContent>
                            </TimelineItem>       
                        </Timeline>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    );
}

export default About;