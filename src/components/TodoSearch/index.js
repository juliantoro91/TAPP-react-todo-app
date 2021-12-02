import React from "react";
import { CurvedContainer } from "../CurvedContainer";
import './TodoSearch.css';
import icon from "../../images/search-icon.png";

const content = {
    height: '15%', // Height in percent
    displacement: 0, // how many radius the element gets displaced
    color: '--primary-color',
    icon: {
        url: icon,
        alt: 'Search icon',
    },
}


function TodoSearch({ searchValue, setSearchValue, matchedSearchLabel, language }) {
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    const verifyCoincidences = (matchedSearchLabel)  => {
        if ( searchValue !== '' ) {
            return matchedSearchLabel;
        } else {
            return '';
        }
    }
    
    return (
        <CurvedContainer height={content.height} displacement={content.displacement} color={content.color}>
            <section className="todo-search">
                <img src={content.icon.url} alt={content.icon.alt} />
                <input placeholder={(language) ? "Search card..." : "Buscar tarjeta..."} value={searchValue} onChange={onSearchValueChange} />
                <p>{ verifyCoincidences(matchedSearchLabel) }</p>
            </section>
        </CurvedContainer>
    );
}

export { TodoSearch };