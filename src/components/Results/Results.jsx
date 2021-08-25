import React from 'react'
import Gif from '../Gif/Gif';

function Results({
    show,
    data
}) {
    return show && (
        <section>
            {(data || []).map(item => {
                const { id, url } = item;
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
