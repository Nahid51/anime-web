import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Button, createTheme, ThemeProvider, Typography } from '@mui/material';

import { Autoplay, Pagination, Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import { NavLink } from "react-router-dom";


const Hero = () => {
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setAnimeData(data))
    }, []);

    const theme = createTheme();

    theme.typography.h1 = {
        fontSize: '2rem',
        '@media (min-width:480px) and (max-width:600px)': {
            fontSize: '2rem',
        },
        '@media (max-width:480px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Virtual]}
                className="mySwiper"
            >
                {
                    animeData?.map((data, index) => (
                        // console.log(data?.image)
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div>
                                <img src={data?.movie_banner} alt="Poster" />
                                <div className="setPosition">
                                    <ThemeProvider theme={theme}>
                                        <Typography variant="h1">{data?.title}</Typography>
                                    </ThemeProvider>
                                    <NavLink to={`/singleAnime/${data?.id}`} style={{ textDecoration: "none" }}>
                                        <Button
                                            style={{
                                                backgroundColor: "#592e97"
                                            }}
                                            variant="contained"
                                            size="small"
                                        >
                                            Watch Details</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default Hero;