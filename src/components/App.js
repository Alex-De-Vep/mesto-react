import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    };

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    };

    const closeAllPopups = () => {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard(false);
    };

    const handleCardClick = (path) => {
        setSelectedCard(path);
    }

    return (
        <div className="App page">
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
