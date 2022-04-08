import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const AnimeCollection = () => {

    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setAnimeData(data))
    }, []);

    return (
        <div style={{ marginTop: '5rem' }}>
            <Container maxWidth="xl">
                <Typography sx={{ color: 'white', mb: 3, ml: 2 }} variant='h4'>Anime Lists</Typography>
                <Grid container spacing={{ xs: 0, sm: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {animeData?.map((data) => (
                        <Grid item xs={4} sm={8} md={3} key={data?.id}>
                            <Item sx={{}}>
                                <Card sx={{ backgroundColor: "#1C1C1C", color: 'white' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="250"
                                        image={data?.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data?.title}
                                        </Typography>
                                        <Typography className='MyScrollBar' sx={{ color: 'whitesmoke', textAlign: 'justify', overflowY: 'scroll' }} variant="body2">
                                            {data?.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <NavLink to={`/singleAnime/${data?.id}`} style={{ textDecoration: "none" }}>
                                            <Button sx={{ color: "#9063d3" }} size="small">More</Button>
                                        </NavLink>
                                    </CardActions>
                                </Card>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default AnimeCollection;