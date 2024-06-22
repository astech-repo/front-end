"use client";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

interface ModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
  jsonToSend: Object;
}

const ModalPagamento: React.FC<ModalProps> = ({
  isModalOpen,
  onModalClose,
}) => {
  const [link, setLink] = useState<string>("");
  useEffect(() => {
    axios
      .get(`${process.env.url_base}/api/PaymentLink/receber`)
      .then((response) => setLink(response.data.referencia))
      .catch((err) => console.error(err));
  });

  const FinalizarPagamento = () => {
    window.open(link, "_blank");
    setTimeout(() => {
      window.location.href += "/sucesso";
    }, 5000);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onOverlayClick={onModalClose}
      onClose={onModalClose}
    >
      <ModalOverlay />
      <ModalContent>
        <div className="flex flex-col items-center justify-center gap-4 py-6">
          <FaRegClock className="text-yellow-600 text-8xl" />
          <h1 className="text-center text-xl">Aguardando pagamento</h1>
          <button
            onClick={FinalizarPagamento}
            className="bg-degrade text-white px-6 py-3 rounded-md shadow-md transition-all hover:opacity-75"
          >
            Prosseguir para pagamento
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalPagamento;
