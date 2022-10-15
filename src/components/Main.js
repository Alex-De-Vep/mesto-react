import React from 'react';
import api from "../utils/Api";
import Card from "./Card";
import { currentUserContext } from '../context/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [cards, setCards] = React.useState([]);
    const userContext = React.useContext(currentUserContext);

    React.useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(userContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="container">
                    <div className="profile__content">
                        <button data-profile-image onClick={onEditAvatar} className="profile__image-button">
                            <div className="profile__image-edit"></div>
                            <picture>
                                <img className="profile__image" src={userContext.avatar} alt="Аватарка профиля" />
                            </picture>
                        </button>
                        <div className="profile__info">
                            <div className="profile__title-wrapper">
                                <h1 className="profile__title">{userContext.name}</h1>
                                <button className="profile__button-edit" type="button" data-popup-profile onClick={onEditProfile}>
                                </button>
                            </div>
                            <p className="profile__text">{userContext.about}</p>
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
                                <Card card={item} onCardClick={onCardClick} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Main;