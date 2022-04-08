import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, CardMedia, CardContent, Typography, Card, Rating } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SingleAnime = () => {
    const { id } = useParams();

    const [animeData, setAnimeData] = useState([]);
    const [singleAnime, setSingleAnime] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setAnimeData(data))
    }, []);

    useEffect(() => {
        const singleData = animeData?.filter(data => data?.id === id);
        setSingleAnime(singleData);
    }, [animeData, id]);

    return (
        <div style={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    {
                        singleAnime?.map((data, index) => (
                            <div key={index}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <Item>
                                            <CardMedia
                                                component="img"
                                                image={data?.image}
                                                alt="Anime Poster"
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <Item>
                                            <CardContent sx={{ textAlign: "start", backgroundColor: "#1C1C1C", color: "whitesmoke" }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                                                    <div>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {data?.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" sx={{ color: "whitesmoke" }}>
                                                            {data?.original_title}, {data?.original_title_romanised}
                                                        </Typography>
                                                    </div>

                                                    <div>
                                                        {/* <Box
                                                            sx={{
                                                                '& > legend': { mt: 2 },
                                                            }}
                                                        >
                                                            <Typography component="legend">Read only</Typography>
                                                            <Rating name="read-only" value={data?.rt_score} readOnly />
                                                        </Box> */}
                                                    </div>
                                                </div>

                                                <br />
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ color: "whitesmoke", textAlign: "justify" }}
                                                >
                                                    {data?.description}
                                                </Typography>
                                                <br />

                                                <Grid container>
                                                    <Grid item xs={12} sm={6} md={6}>
                                                        <Item sx={{ textAlign: "start", backgroundColor: "#1C1C1C", color: "whitesmoke" }}>
                                                            <Typography>Director: {data?.director}</Typography>
                                                            <Typography>Producer: {data?.producer}</Typography>
                                                            <Typography>Release date: {data?.release_date}</Typography>
                                                            <Typography>Running time: {data?.running_time} min</Typography>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6}>
                                                        <Item sx={{ textAlign: "start", backgroundColor: "#1C1C1C", color: "whitesmoke" }}>
                                                            <Typography>{data?.director}</Typography>
                                                            <Typography>{data?.producer}</Typography>
                                                            <Typography>{data?.release_date}</Typography>
                                                            <Typography>{data?.running_time}</Typography>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Item>
                                    </Grid>
                                </Grid>

                            </div>

                        ))
                    }
                </Box>
            </Container>
        </div>
    );
};

export default SingleAnime;