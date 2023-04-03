import React from "react";
import ReactDOM from "react-dom";


function CustomerFormModal() {
    return ReactDOM.createPortal(
        <div>
           <form>
            
           </form>
        </div>,
        document.getElementById("modal-root")
    )
}

export default CustomerFormModal;