import React from 'react';
import { useParams } from 'react-router-dom';

const SingleAnime = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            SingleAnime {id}
        </div>
    );
};

export default SingleAnime;