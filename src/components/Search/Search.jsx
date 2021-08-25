import React from 'react'
import Button from '../Button/Button';
import './Search.css';

function Search({
    onClick
}) {
    return (
        <section>
            <form>
                <input type="text" />
                <Button
                    onClick={onClick}
                    className="btn-search"
                >
                    BUSCAR
                </Button>
            </form>            
        </section>
    )
}

export default Search;
