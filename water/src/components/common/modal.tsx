import { ReactNode } from "react";
import "../../stylesheets/modal.css"

interface ModalProp {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal(props: ModalProp) {
    console.log('showModal:', props.isOpen)
    return (
        <>
        {props.isOpen && (
            <div className="modal-overlay">
                <div className="modal-box">
                    {props.children}
                    <div className="btn-container">
                        <button type="button" className="btn" onClick={props.onClose}>&times;</button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}