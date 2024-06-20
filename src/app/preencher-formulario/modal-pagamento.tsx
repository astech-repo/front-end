import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

interface ModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

const ModalPagamento: React.FC<ModalProps> = ({isModalOpen, onModalClose}) => {
  return(
    <Modal isOpen={isModalOpen} onOverlayClick={onModalClose} onClose={onModalClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton/>
        <div className="flex flex-col items-center justify-center gap-4 py-6">
        <FaRegCheckCircle className="text-green-600 text-8xl"/>
        <h1 className="text-center text-xl">Modal de pagamento!</h1>
        <p className="text-balance text-center text-sm">Enviamos um e-mail para sua caixa de entrada sobre a solicitação</p>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default ModalPagamento;