import React from 'react'
import Gif from '../Gif/Gif';

function Results({
    data
}) {
    return (
        <section>
            {(data || []).map(item => {
                const { id, images: {
                    fixed_height: {
                        url
                    }
                } } = item;
                return (
                    <Gif 
                        key={id}
                        src={url} 
                    />
                )
            })}
        </section>
    )
}

export default Results;
