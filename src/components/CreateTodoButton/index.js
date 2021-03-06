import React from "react";
import { BaseButton } from "../BaseButton";
import './CreateTodoButton.css';
import AddIcon from '../../images/add-icon.png';

const content = {
    addButton: {
        width: 67,
        urlActive: AddIcon,
        urlInactive: AddIcon,
    },
}

function CreateTodoButton({ setOpenModal, setModalType }) {

    const CreateTodo = () => {
        setModalType('create');
        setOpenModal(prevState => !prevState);
    }

    return (
        <div className="add-card-button">
            <BaseButton 
                width={content.addButton.width} 
                urlActive={content.addButton.urlActive} 
                urlInactive={content.addButton.urlInactive} 
                completed={false} 
                action={CreateTodo}
                type="button" />
        </div>
    );
}

export { CreateTodoButton };