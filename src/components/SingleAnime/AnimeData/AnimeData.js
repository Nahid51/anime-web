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
    const { image, title, description, original_title, original_title_romanised, rt_score, director, producer, release_date, running_time } = data;
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
                                    <Item sx={{ backgroundColor: "#1C1C1C" }}>
                                        <Typography>Director: {director}</Typography>
                                        <Typography>Producer: {producer}</Typography>
                                        <Typography>Release date: {release_date}</Typography>
                                        <Typography>Running time: {running_time} min</Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Item sx={{ backgroundColor: "#1C1C1C" }}>
                                        <Typography>{director}</Typography>
                                        <Typography>{producer}</Typography>
                                        <Typography>{release_date}</Typography>
                                        <Typography>{running_time}</Typography>
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