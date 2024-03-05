import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  stateModal: boolean;
  children: React.ReactNode;
}

export default function ModalCustom({
  setOpenModal,
  stateModal,
  children,
}: Props) {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        open={stateModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
