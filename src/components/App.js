import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    };

    const handleCardClick = (path) => {
        setSelectedCard(path);
    }

    return (
        <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
            <Footer />

            {isEditProfilePopupOpen && <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title={"Редактировать профиль"} name={"profile-form"} />}
            {isAddPlacePopupOpen && <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title={"Новое место"} name={"add-card-form"} />}
            {isEditAvatarPopupOpen && <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title={"Обновить аватар"} name={"avatar-form"} />}
            {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} />}
        </div>
    );
}

export default App;
