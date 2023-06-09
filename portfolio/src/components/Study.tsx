import React from "react";
import { Container, Row, Col } from "reactstrap";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function Study(): JSX.Element {  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="study" className="padding-top-btm-1e">
        <div>
            <p className="menu-name font-color-pink">STUDY</p>
        </div>
        <Container>
            <Row>
            <Col xs={12} sm={12} md={12}>
                <div>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="2020" {...a11yProps(0)} />
                            <Tab label="2021" {...a11yProps(1)} />
                            <Tab label="2022" {...a11yProps(2)} />        
                            <Tab label="2023" {...a11yProps(3)} />       
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className="align-left">
                                <p className="font-color-lightgray">MSSQL 공부 2020.01~2020.02</p>
                                <p className="font-color-lightgray">연말정산 시스템 운영을 위해 관련 세법 공부 2020.01~2020.02</p>                                
                                <p className="font-color-lightgray">HTML+CSS 공부 2020.03~2020.04 </p>                                
                                <p className="font-color-lightgray">ERP 인사시스템 로직 공부 2020.03~2020.05</p>
                                <p className="font-color-lightgray">비젠트로 ERP Framework 공부 2020.05~2020.06</p>
                                <p className="font-color-lightgray">OZ Report 개발 공부 2020.07~2020.08</p>
                                <p className="font-color-lightgray">그룹웨어 시스템 로직 공부 2020.07~2020.09</p>
                                <p className="font-color-lightgray">모두의 네트워크 교재 1권 정독 2020.09~2020.10</p>
                                <p className="font-color-lightgray">퇴직금 유형별 계산로직 공부 2020.09~2020.10</p>                                
                            </div>                            
                        </TabPanel>
                        <TabPanel value={value} index={1}>      
                            <div className="align-left">                                
                                <p className="font-color-lightgray">Flutter 공부 2021.02~2021.05</p>
                                <p className="font-color-lightgray">UI/UX 교재 1권 정독 2021.08~2021.09</p>     
                                <p className="font-color-lightgray">MES 로직 공부 2021.08~2021.09</p>                                                              
                            </div>                                                  
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="align-left">
                                <p className="font-color-lightgray">C# ASP.NET Core 공부 2022.01~2022.02</p>
                                <p className="font-color-lightgray">이것이 자바다 교재 1권 정독 2022.01~2022.02</p>
                                <p className="font-color-lightgray">Javscript 코드잇 강의 수강 2022.03~2022.03</p>
                                <p className="font-color-lightgray">MSSQL 인프런 강의 수강 2022.03~2022.03</p>
                                <p className="font-color-lightgray">React 웹 퍼블리싱 공부 2022.02~2022.04</p>
                                <p className="font-color-lightgray">네트워크 관리사 2급 준비 2022.05~2022.07</p>
                                <p className="font-color-lightgray">React Native App 개발 공부 2022.05~2022.07</p>
                                <p className="font-color-lightgray">Jupyter Notebook 공부 2022.06~2022.06</p>
                                <p className="font-color-lightgray">AutoHotkey 공부 2022.08~2022.08</p>
                                <p className="font-color-lightgray">모의해킹 인프런 강의 수강 2022.08~2022.08</p>
                                <p className="font-color-lightgray">컴퓨터 구조+운영체제 2022.10~ 진행중</p>
                                <p className="font-color-lightgray">프로그래머스 코딩테스트 공부 2022.11~2023.02</p>
                            </div>
                        </TabPanel>  
                        <TabPanel value={value} index={3}>
                            <div className="align-left">
                                <p className="font-color-lightgray">시스코 네트워크 공부 2023.02~진행중</p>
                                <p className="font-color-lightgray">영어회화 공부 2023.02~진행중</p>     
                                <p className="font-color-lightgray">기초회계원리 2023.03~2023.04</p>     
                                <p className="font-color-lightgray">SpringBoot+Mybatis 공부 2023.04~2023.05</p>                                
                            </div>
                        </TabPanel>     
                    </Box>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Study;