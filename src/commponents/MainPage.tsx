import React, {useEffect, useState} from 'react';
import {Avatar, Box, Grid, Paper, styled, Typography} from "@mui/material";
import axios from "axios";
import CircleIcon from '@mui/icons-material/Circle';


function MainPage() {

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.style.cursor = 'pointer';
    };

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const agency_fa = ['شبکه خبر', 'مهر ', 'ایرنا', 'ورزش سه']
    const agency = ['irinn', 'mehr', 'irna', 'varzesh3']
    const [agencyNews, setAgencyNews] = useState("irinn")

    const handlerAgencyClick = (item: string) => {
        setAgencyNews(item)
    }

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://one-api.ir/rss/?token=961304:63468a8012a1c8.42537746&action=${agencyNews}`);
            setData(response.data);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [agencyNews]);

    return (
        <div>
            <Box sx={{borderBottom: 1, borderColor: 'divider', padding: "1em", backgroundColor: "white"}}>
                <Typography sx={{fontSize: "1em"}}>خبرنامه | همیشه به‌روز با آخرین اخبار</Typography>
            </Box>

            {/*agency Tabs*/}
            <Box sx={{display: "flex", paddingTop: "1em", paddingRight: "1em"}}>
                {agency && (
                    agency.map((item: any, index: number) => {
                        return <Box onMouseEnter={handleMouseEnter} onClick={() => {
                            handlerAgencyClick(item)
                        }} sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: ".5em 1em",
                            borderRadius: "0.8em"
                        }}>
                            <Typography sx={{
                                fontSize: {xs: "0.8em", md: "1.1em"},
                                color: agencyNews === item ? "orange" : "grey.300"
                            }}>{agency_fa[index]}</Typography>
                            <CircleIcon sx={{
                                fontSize: 5,
                                marginTop: "0.5em",
                                color: agencyNews === item ? "orange" : "transparent"
                            }}/>
                        </Box>
                    })
                )}
            </Box>


            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <Grid container spacing={2}>
                        {data?.result?.item && (
                            data?.result?.item.map((item: any, index: any) => (

                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor: "white",
                                        borderRadius: "1em",

                                        // height: "12em",
                                        width: "100%"
                                    }}>

                                        <Box sx={{
                                            display: "flex",
                                            width: "100%",
                                            margin: "0.8em",
                                            alignItems: "center"
                                        }}>
                                            <Avatar sx={{width: 30, height: 30}} alt="Remy Sharp"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/IRINN_IRIB.png/200px-IRINN_IRIB.png"/>

                                            <Box sx={{display: "flex", flexDirection: "column", marginRight: "0.5em"}}>
                                                <Typography sx={{
                                                    fontSize: {xs: "1em", sm: "0.8em", md: "0.7em",},
                                                    color: "grey.300"
                                                }}>خبرگزاری صدا و سیما</Typography>
                                                <Typography sx={{
                                                    fontSize: {xs: "1em", sm: "0.8em", md: "0.7em",},
                                                    color: "grey.300"
                                                }}>info@iribnews.ir</Typography>
                                            </Box>
                                        </Box>

                                        <img style={{borderRadius: "0.5em", margin: item.hasOwnProperty("enclosure") ?"0.8em":"0"}}
                                             src={item.hasOwnProperty("enclosure") ? item?.enclosure['@attributes']?.url : "unset"}
                                             alt={""}/>

                                        <Typography sx={{
                                            width: "90%",
                                            marginRight: "1em",
                                            marginBottom: "1em",
                                            fontSize: "0.8em",
                                            textAlign: "right",
                                            maxLines: 5,
                                        }}>{item?.description}</Typography>


                                    </Box>
                                </Grid>
                            ))

                        )}
                    </Grid>


                </div>
            )}


        </div>
    );

}

export default MainPage;