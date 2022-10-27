import React from 'react';

function PopupWithForm({onUpdateUser, title, formName, children, isOpen, onClose}) {
    const [name, setName, description, setDescription] = children;

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeAbout(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description
        })
    }

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id="profile-popup">
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <button className="popup__close" type="button" aria-label="Закрыть попап" data-close-popup onClick={onClose}></button>
                <form className="popup__form" name={formName} onSubmit={handleSubmit} noValidate>
                    <input type="text" className="popup__input" value={name ?? ''} onChange={handleChangeName} name="name" id="name" minLength="2" maxLength="40" required
                           data-name aria-label="Введите Имя" />
                    <span className="popup__input-error popup__name-error"></span>
                    <input type="text" className="popup__input" value={description ?? ''} onChange={handleChangeAbout} name="about" id="about" minLength="2" maxLength="200" required
                           data-about aria-label="Введите статус" />
                    <span className="popup__input-error popup__about-error"></span>
                    <button type="submit" className="popup__button">Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
