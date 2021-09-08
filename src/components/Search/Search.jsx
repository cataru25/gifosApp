import React from 'react'
import Button from '../Button/Button';
import './Search.css';

function Search({
    onClick,
    value,
    setValue,
    btnDisabled
}) {
    return (
        <section>
            <form>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button
                    onClick={onClick}
                    className="btn-search"
                    disabled={btnDisabled}
                >
                    BUSCAR
                </Button>
            </form>            
        </section>
    )
}

export default Search;
