import React, {useRef} from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    return(
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id="update-avatar-popup">
            <div className="popup__container">
                <h2 className="popup__title">Обновить аватар</h2>
                <button className="popup__close" type="button" aria-label="Закрыть попап" onClick={onClose}></button>
                <form className="popup__form" name="avatar-form" noValidate onSubmit={handleSubmit}>
                    <input type="url" className="popup__input" name="avatar" id="avatar"
                           placeholder="Ссылка на картинку" ref={inputRef} aria-label="Введите ссылку на картинку" required />
                        <span className="popup__input-error popup__avatar-error"></span>
                        <button type="submit" className="popup__button">Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default EditAvatarPopup;
