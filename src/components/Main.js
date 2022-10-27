import React from 'react';
import Card from "./Card";
import { currentUserContext } from '../context/CurrentUserContext';

function Main({onEditProfile, onEditAvatar, onAddPlace, cards, onCardLike, onCardDelete, onCardClick}) {
    const currentUser = React.useContext(currentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="container">
                    <div className="profile__content">
                        <button data-profile-image onClick={onEditAvatar} className="profile__image-button">
                            <div className="profile__image-edit"></div>
                            <picture>
                                <img className="profile__image" src={currentUser.avatar} alt="Аватарка профиля" />
                            </picture>
                        </button>
                        <div className="profile__info">
                            <div className="profile__title-wrapper">
                                <h1 className="profile__title">{currentUser.name}</h1>
                                <button className="profile__button-edit" type="button" data-popup-profile onClick={onEditProfile}>
                                </button>
                            </div>
                            <p className="profile__text">{currentUser.about}</p>
                        </div>
                        <button className="profile__button" type="button" data-popup-add-card onClick={onAddPlace}>
                        </button>
                    </div>
                </div>
            </section>

            <section className="trips">
                <div className="container">
                    <ul className="trips__list">
                        {cards.map((item) => (
                            <li className="trips__item" key={item._id}>
                                <Card card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Main;