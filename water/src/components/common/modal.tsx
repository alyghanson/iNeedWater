import { ReactNode } from "react";
import "../../stylesheets/modal.css"

interface ModalProp {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalProp) {
    return (
        <>
        {props.isOpen && (
            <div className="modal-overlay">
                <div className="modal-box">
                    {props.children}
                    <div className="btn-container">
                        <button type="button" className="btn" onClick={props.toggle}>&times;</button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}