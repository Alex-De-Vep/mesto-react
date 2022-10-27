import React from 'react';

function PopupWithForm({onSubmit, title, formName, children, isOpen, onClose}) {
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <button className="popup__close" type="button" aria-label="Закрыть попап" onClick={onClose}></button>
                <form className="popup__form" name={formName} onSubmit={onSubmit} noValidate>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
