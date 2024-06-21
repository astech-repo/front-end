import React, { useState } from "react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import comprasegura from "../../../public/compra-segura-vetor-1.png";
import InputMask from "react-input-mask";

interface ModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

interface FormValues {
  cc: string;
  cvc: string;
  data: string;
  nome: string;
  cpf: string;
  cep: string;
  uf: string;
  logradouro: string;
  numero: string;
}

interface FormValidation {
  cc: boolean;
  cvc: boolean;
  data: boolean;
  nome: boolean;
  cpf: boolean;
  cep: boolean;
  uf: boolean;
  logradouro: boolean;
  numero: boolean;
}

const ModalPagamento: React.FC<ModalProps> = ({
  isModalOpen,
  onModalClose,
}) => {
  const initialFormValues: FormValues = {
    cc: "",
    cvc: "",
    data: "",
    nome: "",
    cpf: "",
    cep: "",
    uf: "",
    logradouro: "",
    numero: "",
  };

  const initialValidation: FormValidation = {
    cc: true,
    cvc: true,
    data: true,
    nome: true,
    cpf: true,
    cep: true,
    uf: true,
    logradouro: true,
    numero: true,
  };

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formValidation, setFormValidation] =
    useState<FormValidation>(initialValidation);
  const [isValid, setIsValid] = useState<boolean>(true);
  const toast = useToast();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Validar campos ao mudar o input
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    let isValidField = true;

    switch (fieldName) {
      case "cc":
        isValidField =
          value.replace(/\s/g, "").length === 16 &&
          /^\d+$/.test(value.replace(/\s/g, ""));
        break;
      case "cvc":
        isValidField = value.length === 3 && /^\d+$/.test(value);
        break;
      case "data":
        isValidField = /^\d{2}\/\d{2}$/.test(value);
        break;
      case "nome":
        isValidField = value.trim().length > 0;
        break;
      case "cpf":
        isValidField = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
        break;
      case "cep":
        isValidField = /^\d{5}-\d{3}$/.test(value);
        break;
      case "uf":
        isValidField = /^[A-Za-z]{2}$/.test(value);
        break;
      case "logradouro":
        isValidField = value.trim().length > 0;
        break;
      case "numero":
        isValidField = value.trim().length > 0;
        break;
      default:
        break;
    }

    setFormValidation({
      ...formValidation,
      [fieldName]: isValidField,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar todos os campos antes de submeter
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log(formValues); // Aqui você pode prosseguir com a submissão do formulário
      setFormValues(initialFormValues); // Limpa os valores do formulário após o envio
      onModalClose(); // Fecha o modal após o envio
    } else {
      setIsValid(false);
      toast({
        title: "Envio não realizado",
        description: "Preencha todos os campos corretamente.",
        status: "error",
        duration: 5000,
        isClosable: false,
      }); // Define o estado de validação como falso para mostrar erros
    }
  };

  const validateForm = () => {
    // Validação dos campos do formulário
    return (
      formValidation.cc &&
      formValidation.cvc &&
      formValidation.data &&
      formValidation.nome &&
      formValidation.cpf &&
      formValidation.cep &&
      formValidation.uf &&
      formValidation.logradouro &&
      formValidation.numero
    );
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onOverlayClick={onModalClose}
      onClose={onModalClose}
      size={"50vw"}
    >
      <ModalOverlay />
      <ModalContent w={"50vw"}>
        <ModalCloseButton />
        <div className="font-inter flex flex-col items-center justify-center gap-4 py-6">
          <h1 className="font-bold text-xl">Finalizar pagamento</h1>
          <form
            className="flex justify-center items-wrap w-full h-fit"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center justify-center w-1/2 border-r-2 gap-4 border-gray-600">
              {/* Número do cartão */}
              <section
                className={`w-11/12 flex items-center justify-between ${
                  !isValid && "border-red-600"
                }`}
              >
                <div
                  className={`relative border-[1px] ${
                    !formValidation.cc ? "border-red-600" : "border-gray-300"
                  } rounded-md w-full h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.cc ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="cc"
                  >
                    Número do cartão
                  </label>
                  <InputMask
                    mask={"9999 9999 9999 9999"}
                    value={formValues.cc}
                    onChange={handleChangeInput}
                  >
                    <input
                      type="text"
                      title="Cartão de crédito"
                      className={`w-full h-10 outline-none ${
                        !formValidation.cc
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      placeholder="1234 1234 1234 1234"
                      id="cc"
                      name="cc"
                    />
                  </InputMask>
                </div>
              </section>

              {/* Validade e CVC */}
              <section className="flex items-center justify-between w-11/12 gap-4">
                <div
                  className={`relative border-[1px] ${
                    !formValidation.data ? "border-red-600" : "border-gray-300"
                  } rounded-md w-[45%] h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.data ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="data"
                  >
                    Validade
                  </label>
                  <InputMask
                    mask={"99/99"}
                    value={formValues.data}
                    onChange={handleChangeInput}
                  >
                    <input
                      type="text"
                      title="Validade"
                      className={`w-full h-10 outline-none ${
                        !formValidation.data
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      placeholder="12/24"
                      id="data"
                      name="data"
                    />
                  </InputMask>
                </div>
                <div
                  className={`relative border-[1px] ${
                    !formValidation.cvc ? "border-red-600" : "border-gray-300"
                  } rounded-md w-[45%] h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.cvc ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="cvc"
                  >
                    CVC
                  </label>
                  <InputMask
                    mask={"999"}
                    value={formValues.cvc}
                    onChange={handleChangeInput}
                  >
                    <input
                      type="text"
                      title="CVC"
                      className={`w-full h-10 outline-none ${
                        !formValidation.cvc
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      placeholder="999"
                      id="cvc"
                      name="cvc"
                    />
                  </InputMask>
                </div>
              </section>

              {/* Nome do titular */}
              <section
                className={`w-11/12 flex items-center justify-between ${
                  !isValid && "border-red-600"
                }`}
              >
                <div
                  className={`relative border-[1px] ${
                    !formValidation.nome ? "border-red-600" : "border-gray-300"
                  } rounded-md w-full h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.nome ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="nome"
                  >
                    Nome do titular
                  </label>
                  <input
                    type="text"
                    className={`w-full h-full outline-none ${
                      !formValidation.nome
                        ? "border-red-600"
                        : "border-gray-300"
                    }`}
                    placeholder="João da Silva"
                    id="nome"
                    name="nome"
                    value={formValues.nome}
                    onChange={handleChangeInput}
                  />
                </div>
              </section>

              {/* CPF */}
              <section
                className={`w-11/12 flex items-center justify-between ${
                  !isValid && "border-red-600"
                }`}
              >
                <div
                  className={`relative border-[1px] ${
                    !formValidation.cpf ? "border-red-600" : "border-gray-300"
                  } rounded-md w-full h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.cpf ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="cpf"
                  >
                    CPF
                  </label>
                  <InputMask
                    mask={"999.999.999-**"}
                    value={formValues.cpf}
                    onChange={handleChangeInput}
                  >
                    <input
                      type="text"
                      title="CPF"
                      className={`w-full h-10 outline-none ${
                        !formValidation.cpf
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      placeholder="123.456.789-XX"
                      id="cpf"
                      name="cpf"
                    />
                  </InputMask>
                </div>
              </section>

              {/* CEP e UF */}
              <section
                className={`w-11/12 flex items-center justify-between ${
                  !isValid && "border-red-600"
                }`}
              >
                <div
                  className={`relative border-[1px] ${
                    !formValidation.cep ? "border-red-600" : "border-gray-300"
                  } rounded-md w-[45%] h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.cep ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="cep"
                  >
                    CEP
                  </label>
                  <InputMask
                    mask={"99999-999"}
                    value={formValues.cep}
                    onChange={handleChangeInput}
                  >
                    <input
                      type="text"
                      title="CEP"
                      className={`w-full h-10 outline-none ${
                        !formValidation.cep
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      placeholder="12345-678"
                      id="cep"
                      name="cep"
                    />
                  </InputMask>
                </div>
                <div
                  className={`relative border-[1px] ${
                    !formValidation.uf ? "border-red-600" : "border-gray-300"
                  } rounded-md w-[45%] h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.uf ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="uf"
                  >
                    UF
                  </label>
                  <InputMask
                    mask={"aa"}
                    value={formValues.uf}
                    onChange={handleChangeInput}
                  >
                    <input
                      type="text"
                      title="UF"
                      className={`w-full h-10 outline-none ${
                        !formValidation.uf
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      placeholder="SP"
                      id="uf"
                      name="uf"
                    />
                  </InputMask>
                </div>
              </section>

              {/* Logradouro */}
              <section
                className={`w-11/12 flex items-center justify-between ${
                  !isValid && "border-red-600"
                }`}
              >
                <div
                  className={`relative border-[1px] ${
                    !formValidation.logradouro
                      ? "border-red-600"
                      : "border-gray-300"
                  } rounded-md w-full h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.logradouro
                        ? "text-red-600"
                        : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="logradouro"
                  >
                    Logradouro
                  </label>
                  <input
                    type="text"
                    className={`w-full h-full outline-none ${
                      !formValidation.logradouro
                        ? "border-red-600"
                        : "border-gray-300"
                    }`}
                    placeholder="Rua Exemplo, 123"
                    id="logradouro"
                    name="logradouro"
                    value={formValues.logradouro}
                    onChange={handleChangeInput}
                  />
                </div>
              </section>

              {/* Número */}
              <section
                className={`w-11/12 flex items-center justify-between ${
                  !isValid && "border-red-600"
                }`}
              >
                <div
                  className={`relative border-[1px] ${
                    !formValidation.numero
                      ? "border-red-600"
                      : "border-gray-300"
                  } rounded-md w-full h-12 flex items-center justify-center p-4`}
                >
                  <label
                    className={`absolute ${
                      !formValidation.numero ? "text-red-600" : "text-gray-300"
                    } -top-3 left-4 bg-white px-1 font-medium`}
                    htmlFor="numero"
                  >
                    Número
                  </label>
                  <input
                    type="text"
                    className={`w-full h-full outline-none ${
                      !formValidation.numero
                        ? "border-red-600"
                        : "border-gray-300"
                    }`}
                    placeholder="123"
                    id="numero"
                    name="numero"
                    value={formValues.numero}
                    onChange={handleChangeInput}
                  />
                </div>
              </section>
            </div>

            {/* Lado direito do formulário */}
            <div className="w-1/2 flex flex-col items-center justify-start gap-2 relative">
              {/* Informações de pagamento */}
              <h4 className="w-11/12 font-medium text-lg">Você pagará:</h4>
              <span className="w-11/12 text-md flex items-center justify-between">
                <p>1x Assistência Emergencial</p>
                <p>R$ 50</p>
              </span>
              <span className="w-11/12 text-md font-medium flex items-center justify-between">
                <p>Total</p>
                <p className="text-lg font-semibold">R$ 50</p>
              </span>

              {/* Checkbox dos termos de serviço */}
              <span className="flex items-center justify-start w-11/12 gap-4">
                <Checkbox size={"lg"} />
                <p className="font-medium line-clamp-3">
                  Ao finalizar o pedido você concorda com os nossos{" "}
                  <span className="text-blue-800 font-medium hover:underline transition-all cursor-pointer">
                    Termos de serviço
                  </span>
                </p>
              </span>

              {/* Botão de finalizar pagamento */}
              <button
                type="submit"
                className="text-white bg-degrade rounded-md shadow-md px-6 py-2 text-center w-11/12 font-bold text-xl transition-all hover:opacity-75"
              >
                Finalizar pagamento
              </button>

              {/* Imagem de compra segura */}
              <Image
                src={comprasegura}
                alt="Compra segura"
                className="absolute bottom-8 w-11/12 h-auto"
              />
            </div>
          </form>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalPagamento;
