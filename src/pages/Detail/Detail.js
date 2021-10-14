import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { Id, name } = useParams({});
    return (
        <div>
            <h4>This is detail{Id}</h4>
            {/* <h4>This is detail{name}</h4> */}
        </div>
    );
};

export default Detail;