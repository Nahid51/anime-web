import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AnimeData from './AnimeData/AnimeData';


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
        <div style={{ backgroundColor: "black", padding: "2rem 0" }}>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    {
                        singleAnime?.map((data) => (
                            // console.log(data)

                            <AnimeData
                                key={data?.id}
                                data={data}
                            ></AnimeData>

                        ))
                    }
                </Box>
            </Container>
        </div>
    );
};

export default SingleAnime;