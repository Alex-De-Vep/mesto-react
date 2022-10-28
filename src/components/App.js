import React, {useState, useEffect} from 'react';
import api from "../utils/Api";
import { currentUserContext } from '../context/CurrentUserContext';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupConfirm from "./PopupConfirm";

function App() {
    const [currentUser, setCurrentUser] = useState({name: "Имя"});
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isPopupConfirm, setIsPopupConfirmOpen] = useState(false);
    const [buttonPopup, setButtonPopup] = useState("Сохранить");
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardDelete, setSelectedCardDelete] = useState(null);
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
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

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const handleCardClick = (path) => {
        setSelectedCard(path);
    }

    const handleCardDelete = (card) => {
        setIsPopupConfirmOpen(true);
        setSelectedCardDelete(card);
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsPopupConfirmOpen(false);
    };

    const handleUpdateUser = (data) => {
        setButtonPopup("Сохранение");

        api.updateUserInfo(data)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setButtonPopup("Сохранено");
            });
    }

    const handleUpdateAvatar = (data) => {
        setButtonPopup("Сохранение");

        api.updateAvatar(data)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setButtonPopup("Сохранено");
            });
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.toggleLike(card._id, !isLiked)
            .then((newCard) => {
                setCards((oldCards) =>
                    oldCards.map((oldCard) => oldCard._id === card._id ? newCard : oldCard)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleAddPlaceSubmit(data) {
        setButtonPopup("Сохранение");

        api.addCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setButtonPopup("Сохранено");
            });
    }

    function deleteCard(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((oldCards) =>
                    oldCards.filter((oldCard) => oldCard._id !== card._id)
                );
            })
            .then(() => {
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="page">
            <currentUserContext.Provider value={currentUser}>
                <Header />
                <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={handleCardClick} />
                <Footer />

                <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitButton={buttonPopup} />
                <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitButton={buttonPopup} />
                <AddPlacePopup onUpdatePlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitButton={buttonPopup} />
                <PopupConfirm onSubmit={deleteCard} card={selectedCardDelete} isOpen={isPopupConfirm} onClose={closeAllPopups} />
                {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} />}
            </currentUserContext.Provider>
        </div>
    );
}

export default App;
