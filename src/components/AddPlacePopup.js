import React, {useState} from "react";

function AddPlacePopup({onUpdatePlace, isOpen, onClose}) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdatePlace({
            name,
            link
        });
    }

    return(
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id="add-card-popup">
            <div className="popup__container">
                <h2 className="popup__title">Новое место</h2>
                <button className="popup__close" type="button" aria-label="Закрыть попап" data-close-popup onClick={onClose}></button>
                <form className="popup__form" name="add-card-form" noValidate onSubmit={handleSubmit}>
                    <input type="text" className="popup__input" value={name} onChange={handleChangeName} name="name" id="title" minLength="2" maxLength="30"
                           placeholder="Название" data-title aria-label="Введите название" required/>
                    <span className="popup__input-error popup__title-error"></span>
                    <input type="url" className="popup__input" value={link} name="link" onChange={handleChangeLink} id="link"
                           placeholder="Ссылка на картинку" data-link aria-label="Введите ссылку на картинку"
                           required/>
                    <span className="popup__input-error popup__link-error"></span>
                    <button type="submit" className="popup__button">Создать</button>
                </form>
            </div>
        </div>
    );
}

export default AddPlacePopup;