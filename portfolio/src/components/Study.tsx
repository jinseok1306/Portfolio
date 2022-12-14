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
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className="align-left">
                                <p className="font-color-lightgray">MSSQL ?????? 2020.01~2020.02</p>
                                <p className="font-color-lightgray">???????????? ????????? ????????? ?????? ?????? ?????? ?????? 2020.01~2020.02</p>                                
                                <p className="font-color-lightgray">HTML+CSS ?????? 2020.03~2020.04 </p>                                
                                <p className="font-color-lightgray">ERP ??????????????? ?????? ?????? 2020.03~2020.05</p>
                                <p className="font-color-lightgray">???????????? ERP Framework ?????? 2020.05~2020.06</p>
                                <p className="font-color-lightgray">OZ Report ?????? ?????? 2020.07~2020.08</p>
                                <p className="font-color-lightgray">???????????? ????????? ?????? ?????? 2020.07~2020.09</p>
                                <p className="font-color-lightgray">????????? ???????????? ?????? 1??? ?????? 2020.09~2020.10</p>
                                <p className="font-color-lightgray">????????? ????????? ???????????? ?????? 2020.09~2020.10</p>                                
                            </div>                            
                        </TabPanel>
                        <TabPanel value={value} index={1}>      
                            <div className="align-left">                                
                                <p className="font-color-lightgray">Flutter ?????? 2021.02~2021.05</p>
                                <p className="font-color-lightgray">UI/UX ?????? 1??? ?????? 2021.08~2021.09</p>     
                                <p className="font-color-lightgray">MES ?????? ?????? 2021.08~2021.09</p>                                                              
                            </div>                                                  
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="align-left">
                                <p className="font-color-lightgray">C# ASP.NET Core ?????? 2022.01~2022.02</p>
                                <p className="font-color-lightgray">????????? ????????? ?????? 1??? ?????? 2022.01~2022.02</p>
                                <p className="font-color-lightgray">Javscript ????????? ?????? ?????? 2022.03~2022.03</p>
                                <p className="font-color-lightgray">MSSQL ????????? ?????? ?????? 2022.03~2022.03</p>
                                <p className="font-color-lightgray">React ??? ???????????? ?????? 2022.02~2022.04</p>
                                <p className="font-color-lightgray">???????????? ????????? 2??? ?????? 2022.05~2022.07</p>
                                <p className="font-color-lightgray">React Native App ?????? ?????? 2022.05~2022.07</p>
                                <p className="font-color-lightgray">Jupyter Notebook ?????? 2022.06~2022.06</p>
                                <p className="font-color-lightgray">AutoHotkey ?????? 2022.08~2022.08</p>
                                <p className="font-color-lightgray">???????????? ????????? ?????? ?????? 2022.08~2022.08</p>
                                <p className="font-color-lightgray">????????? ??????+???????????? 2022.10~ ?????????</p>
                                <p className="font-color-lightgray">?????????????????? ??????????????? ?????? 2022.11~?????????</p>
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