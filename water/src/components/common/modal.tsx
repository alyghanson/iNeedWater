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
                <div className="modal-box" onClick={props.toggle}>
                    {props.children}
                </div>
            </div>
        )}
        </>
    );
}