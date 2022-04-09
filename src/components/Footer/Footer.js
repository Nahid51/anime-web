import React from 'react';
import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { FaTwitterSquare, FaDiscord, FaRedditSquare } from 'react-icons/fa';
import fIcon from '../../image/footer-icon.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#1C1C1C", color: "whitesmoke", marginTop: "2rem", padding: "2rem 0" }}>
            <Container maxWidth="xl">
                <div>
                    <Grid container spacing={2} sx={{ m: "0 10px" }}>
                        <Grid item xs={6} sm={6} md={4}>
                            <Item sx={{ backgroundColor: "transparent", boxShadow: 0, color: "whitesmoke" }}>
                                <Typography
                                    variant="h3"
                                    noWrap
                                    component="div"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: "bold", color: "#8555cc" }}
                                >
                                    AnimeWeb
                                </Typography>
                                <Typography sx={{ color: "gray" }}>Copyright &copy; AnimeWeb. All Rights Reserved</Typography>
                                <Typography sx={{ color: "gray", m: "10px 0" }}>
                                    <FaTwitterSquare size='32' />  <FaDiscord size='32' />  <FaRedditSquare size='32' />
                                </Typography>
                                <Typography variant='body2' sx={{ color: "gray" }}>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={6} md={2}>
                            <Item sx={{ backgroundColor: "transparent", boxShadow: 0, color: "whitesmoke" }}>
                                <Typography variant='h5'>Help</Typography>
                                <Typography sx={{ mt: 1, color: "gray" }}>Contact</Typography>
                                <Typography sx={{ color: "gray" }}>FAQ</Typography>
                                <Typography sx={{ color: "gray" }}>Request</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={6} md={2}>
                            <Item sx={{ backgroundColor: "transparent", boxShadow: 0, color: "whitesmoke" }}>
                                <Typography variant='h5'>Links</Typography>
                                <Typography sx={{ mt: 1, color: "gray" }}>A - Z List</Typography>
                                <Typography sx={{ color: "gray" }}>Upcoming</Typography>
                                <Typography sx={{ color: "gray" }}>Most Watched</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                            <Item sx={{ backgroundColor: "transparent", boxShadow: 0, color: "whitesmoke" }}>
                                <CardMedia
                                    component="img"
                                    image={fIcon}
                                    alt="Footer Icon"
                                    sx={{ width: "50%", marginTop: "-5rem" }}
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Footer;