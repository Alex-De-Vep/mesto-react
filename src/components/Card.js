import React from "react";

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return(
        <article className="card">
            <button className="card__image-button" onClick={handleClick}>
                <img className="card__image" src={card.link} alt={card.name} />
            </button>
            <div className="card__info">
                <h3 className="card__text">{card.name}</h3>
                <div className="card__button-wrapper">
                    <button className="card__button"></button>
                    <span className="card__count-like">{card.likes.length}</span>
                </div>
            </div>
            <button className="card__trash"></button>
        </article>
    );
}

export default Card;