import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import ModalForm from "./ModalForm";

function ItemModal({ text, email, id }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="w-full " onClick={() => setOpenModal(true)}>
        {text === "lost" ? "Found This!" : "This is Mine!"}
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Info</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <ModalForm setOpenModal={setOpenModal} id={id} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemModal;
