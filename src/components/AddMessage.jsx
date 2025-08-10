import { createPortal } from "react-dom";

function AddMessage() {
  return createPortal(
    <p className="addmessage">Added To Favorites Successfully</p>,
    document.getElementById("message")
  );
}

export default AddMessage;
