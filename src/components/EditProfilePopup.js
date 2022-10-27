import React, {useState}from "react";
import { currentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from "./PopupWithForm";


function EditProfilePopup({onUpdateUser, isOpen, onClose}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const currentUser = React.useContext(currentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm onUpdateUser={onUpdateUser} isOpen={isOpen} children={[name, setName, description, setDescription]} onClose={onClose} title={"Редактировать профиль"} formName={"profile-form"} />
    );
}

export default EditProfilePopup;
