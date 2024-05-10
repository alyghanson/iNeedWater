import { ReactNode } from "react";

interface ModalProp {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalProp){
    return 
    <>
    <div className="modal-overlay">
        <div className="modal-box">
            {props.children}
        </div>
    </div>
    </>
}