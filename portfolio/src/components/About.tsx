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
                <Col xs={12} sm={6} md={6} >
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
                                전산팀에서 Web, Mobile App, ERP 개발 및 유지보수와 인프라 업무지원을 담당한 개발자입니다. 
                                전산 업무 특성 상 다방면 경험은 가능하지만 한 분야에 전문가가 될 수는 없습니다. 
                                그렇기에 웹 시스템에 대한 전문가로 거듭나기 위해 준비하고 있습니다.                                
                                </p>                            
                                <p className="font-color-lightgray font-bold">
                                더욱더 성장하여 과거의 나보다 나아진 개발자가 되기 위해 오늘도 공부합니다.
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
                                    청주대학교
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">전자공학과 학사</p>
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
                            </TimelineItem>          
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
                                    자화전자
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">IT운영팀 사원</p>
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">ERP 인사 시스템, 그룹웨어 웹시스템, 모바일 어플 유지보수 및 개발, 인프라 업무 지원</p>
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
                                    롯데정보통신
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">씨텍IS담당 선임</p>
                                </Typography>          
                                <Typography>
                                    <p className="font-color-lightgray">그룹웨어, Ezgen 웹 시스템, React 웹, 모바일 유지보수 및 개발, 인프라 업무지원</p>
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
                                    2023.02 - 재직중
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <BusinessIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    KCC건설
                                </Typography>
                                <Typography>
                                    <p className="font-color-lightgray">경영정보부 사원</p>
                                </Typography>          
                                <Typography>
                                    <p className="font-color-lightgray">관리회계 전표, 네트워크, 어플리케이션 개발 업무담당</p>
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