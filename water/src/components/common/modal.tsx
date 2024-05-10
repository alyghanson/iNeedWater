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
            <div className="modal-overlay" onClick={props.toggle}>
                <div className="modal-box">
                    {props.children}
                </div>
            </div>
        )}
        </>
    );
}