import React from 'react';
import avatar from "../images/profile/Jak-Iv.jpg";
import api from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = React.useState("Исследователь океана");
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            });

        api.getCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="container">
                    <div className="profile__content">
                        <button data-profile-image onClick={onEditAvatar} className="profile__image-button">
                            <div className="profile__image-edit"></div>
                            <picture>
                                <img className="profile__image" src={userAvatar} alt="Аватарка профиля" />
                            </picture>
                        </button>
                        <div className="profile__info">
                            <div className="profile__title-wrapper">
                                <h1 className="profile__title">{userName}</h1>
                                <button className="profile__button-edit" type="button" data-popup-profile onClick={onEditProfile}>
                                </button>
                            </div>
                            <p className="profile__text">{userDescription}</p>
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