import React from 'react';
import { CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: 'whitesmoke',
}));

const AnimeData = ({ data }) => {
    const { image, title, description, original_title, original_title_romanised, rt_score, director, producer, release_date, running_time, people } = data;
    const rating = Number(rt_score / 20)

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Item>
                        <CardMedia
                            component="img"
                            image={image}
                            alt="Anime Poster"
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item sx={{ backgroundColor: "#1C1C1C" }}>
                        <CardContent>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                                <div>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: "whitesmoke" }}>
                                        {original_title}, {original_title_romanised}
                                    </Typography>
                                </div>

                                <div>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
                                        <Typography sx={{ color: "gray" }} variant="subtitle1">{`${rating} out of 5`}</Typography>
                                    </Stack>
                                </div>
                            </div>

                            <br />
                            <br />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ color: "whitesmoke", textAlign: "justify" }}
                            >
                                {description}
                            </Typography>
                            <br />

                            <Grid container>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Item sx={{ backgroundColor: "#1C1C1C", boxShadow: 0 }}>
                                        <Typography>Director: <span style={{ color: "#8555cc" }}>{director}</span></Typography>
                                        <Typography>Producer: <span style={{ color: "#8555cc" }}>{producer}</span></Typography>
                                        <Typography>Release date: <span style={{ color: "#8555cc" }}>{release_date}</span></Typography>
                                        <Typography>Running time: <span style={{ color: "#8555cc" }}>{running_time} min</span></Typography>
                                    </Item>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <Item sx={{ backgroundColor: "#1C1C1C", boxShadow: 0 }}>
                                        <Typography>Total Chracter: <span style={{ color: "#8555cc" }}>{people?.length}</span></Typography>
                                    </Item>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
};

export default AnimeData;