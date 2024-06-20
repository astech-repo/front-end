"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { FormInput } from "./form-input";
import { FormSection } from "./form-section";
import { redirect, useSearchParams } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import { estados, garantias } from "./success.seed";
import { Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import ModalSuccess from "./modal-success";
import ModalPagamento from "./modal-pagamento";

export interface FormValues {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  numero: string;
  estado: string;
  cep: string;
  marca: string;
  modelo: string;
  imei: string;
  numSerie: string;
  estadoGarantia: string;
  outrasEspecificacoes: string;
  descProblema: string;
  conduta: string;
  sintomas: string;
  errosAlertas: string;
  comportamentos: string;
}

const PreencherFormulario: React.FC = () => {
  const searchParams = useSearchParams();
  const t = searchParams.get("t");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [whatModal, setWhatModal] = useState<string>("d");

  useEffect(() => {
    const handleRedirect = () => {
      if (t === null) {
        redirect("/");
      }
    };
    handleRedirect();
  }, [t]);

  const initialFormState: FormValues = {
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    numero: "",
    estado: "",
    cep: "",
    marca: "",
    modelo: "",
    imei: "",
    numSerie: "",
    estadoGarantia: "",
    outrasEspecificacoes: "",
    descProblema: "",
    conduta: "",
    sintomas: "",
    errosAlertas: "",
    comportamentos: "",
  };

  const [formValues, setFormValues] = useState<FormValues>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "numero") {
      const maxLength = 5;
      const newValue = value.replace(/\D/g, "").slice(0, maxLength);
      setFormValues({ ...formValues, [name]: newValue });
    } else if (name === "imei") {
      const maxLength = 15;
      const newValue = value.replace(/\D/g, "").slice(0, maxLength);
      setFormValues({ ...formValues, [name]: newValue });
    } else if (name === "estado") {
      const estadoEncontrado = estados.find(
        (estado) =>
          estado.sigla === value.toUpperCase() ||
          estado.nome.toLowerCase() === value.toLowerCase()
      );

      if (estadoEncontrado) {
        setFormValues({ ...formValues, [name]: estadoEncontrado.sigla });
      } else {
        setFormValues({ ...formValues, [name]: "" });
      }
    } else if (name === "estadoGarantia") {
      const garantiaEncontrada = garantias.find(
        (garantia) => garantia.garantia === value
      );
      if (garantiaEncontrada) {
        setFormValues({ ...formValues, [name]: garantiaEncontrada.garantia });
      } else {
        setFormValues({ ...formValues, [name]: "" });
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const SendModal = (tipoModal: string) => {
    setIsLoading(true);
    const anyFieldEmpty = Object.values(formValues).some(
      (value) => value === ""
    );
    const mailValidation = Object.values(formValues).some(
      (value) => value.includes("@") && value.includes(".com")
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    if (anyFieldEmpty || !mailValidation) {
      toast({
        title: "Envio não realizado",
        description: "Preencha todos os campos corretamente.",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
      return;
    }
    const jsonToSend = {
      usuario: {
        id_usuario: 0,
        nome: formValues.nome,
        email: formValues.email,
        telefone: formValues.telefone,
        enderecoRua: formValues.endereco,
        enderecoNumero: parseInt(formValues.numero),
        enderecoEstado: formValues.estado,
        enderecoCep: formValues.cep,
        meioDeContato: "telefone",
      },
      aparelho: {
        id_aparelho: 0,
        tipoAparelho: t,
        marca: formValues.marca,
        modelo: formValues.modelo,
        imei: formValues.imei,
        numeroSerie: formValues.numSerie,
        estadoGarantia: formValues.estadoGarantia == "Com garantia",
        outrasEspecificacoes: formValues.outrasEspecificacoes,
        id_usuario: 0,
      },
      problema: {
        id_problema: 0,
        descricao: formValues.descProblema,
        conduta: formValues.conduta,
        sintomas: formValues.sintomas,
        comportamento: formValues.comportamentos,
        erroAlerta: formValues.errosAlertas,
        id_aparelho: 0,
      },
    };
    // lógica para enviar o formulário

    setWhatModal(tipoModal);

    console.log(jsonToSend);

    setTimeout(() => {
      onOpen();
      setTimeout(() => {
        onClose();
      }, 8000);
    }, 2000);
  };

  return (
    <div className="min-h-[85vh] max-h-fit py-10 mt-[10vh] flex flex-col gap-6 items-center justify-center text-[#223591]">
      <h1 className="text-3xl w-2/3 text-center relative">
        <BsChevronLeft
          onClick={() => (window.location.href = "/selecionar-aparelho")}
          className="absolute left-0 cursor-pointer transition-opacity hover
"
        />{" "}
        Formulário Técnico
      </h1>
      <div className="bg-degrade w-fit h-fit px-8 py-8 gap-16 flex flex-col justify-center items-center rounded-xl shadow-md">
        <FormSection title="Dados pessoais">
          <div className="flex gap-8 w-11/12">
            <FormInput
              label="Nome"
              name="nome"
              type="text"
              value={formValues.nome}
              onChange={handleChange}
              required
              wdth="w-1/3"
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              required
              wdth="w-1/3"
            />
            <FormInput
              label="Telefone"
              name="telefone"
              type="text"
              value={formValues.telefone}
              onChange={handleChange}
              required
              wdth="w-1/3"
              mask="telefone"
            />
          </div>
          <div className="flex items-end gap-8 w-11/12">
            <FormInput
              label="Endereço"
              name="endereco"
              type="text"
              value={formValues.endereco}
              onChange={handleChange}
              required
              wdth="w-2/5"
            />
            <FormInput
              label="Número"
              name="numero"
              type="number"
              value={formValues.numero}
              onChange={handleChange}
              required
              wdth="w-1/5"
            />
            <FormInput
              label="Estado"
              name="estado"
              type="text"
              value={formValues.estado}
              onChange={handleChange}
              required
              wdth="w-1/5"
              list="estados"
            />
            <datalist id="estados">
              {estados.map((estado, index) => (
                <option key={index++} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </datalist>
            <FormInput
              label="CEP"
              name="cep"
              type="text"
              value={formValues.cep}
              onChange={handleChange}
              required
              wdth="w-1/5"
              mask="cep"
            />
          </div>
        </FormSection>

        <FormSection title="Dados do Aparelho">
          <div className="flex gap-8 w-11/12">
            <FormInput
              label="Marca"
              name="marca"
              type="text"
              value={formValues.marca}
              onChange={handleChange}
              required
              wdth="w-1/2"
            />
            <FormInput
              label="Modelo"
              name="modelo"
              type="text"
              value={formValues.modelo}
              onChange={handleChange}
              required
              wdth="w-1/2"
            />
          </div>
          <div className="flex gap-8 w-11/12">
            {t === "smartphone" ? (
              <FormInput
                label="IMEI"
                name="imei"
                type="number"
                value={formValues.imei}
                onChange={handleChange}
                required
                wdth="w-1/3"
              />
            ) : (
              ""
            )}
            <FormInput
              label="Número de Série"
              name="numSerie"
              type="text"
              value={formValues.numSerie}
              onChange={handleChange}
              required
              wdth={t === "smartphone" ? "w-1/3" : "w-1/2"}
            />
            <FormInput
              label="Estado da Garantia"
              name="estadoGarantia"
              type="text"
              value={formValues.estadoGarantia}
              onChange={handleChange}
              required
              wdth={t === "smartphone" ? "w-1/3" : "w-1/2"}
              list="garantia"
            />
            <datalist id="garantia">
              {garantias.map((garantia, index) => (
                <option key={index++} value={garantia.garantia}>
                  {garantia.garantia}
                </option>
              ))}
            </datalist>
          </div>
          <div className="flex gap-8 w-11/12">
            <FormInput
              label="Outras Especificações"
              name="outrasEspecificacoes"
              type="text"
              value={formValues.outrasEspecificacoes}
              onChange={handleChange}
              required
              wdth="w-full"
            />
          </div>
        </FormSection>

        <FormSection title="Problemas">
          <div className="flex gap-8 w-11/12">
            <FormInput
              label="Descrição do Problema"
              name="descProblema"
              type="text"
              value={formValues.descProblema}
              onChange={handleChange}
              required
              wdth="w-full"
            />
          </div>
          <div className="flex gap-8 w-11/12">
            <FormInput
              label="Conduta do Aparelho"
              name="conduta"
              type="text"
              value={formValues.conduta}
              onChange={handleChange}
              required
              wdth="w-1/2"
            />
            <FormInput
              label="Sintomas"
              name="sintomas"
              type="text"
              value={formValues.sintomas}
              onChange={handleChange}
              required
              wdth="w-1/2"
            />
          </div>
          <div className="flex gap-8 w-11/12">
            <FormInput
              label="Erros e/ou Alertas"
              name="errosAlertas"
              type="text"
              value={formValues.errosAlertas}
              onChange={handleChange}
              required
              wdth="w-1/2"
            />
            <FormInput
              label="Comportamentos"
              name="comportamentos"
              type="text"
              value={formValues.comportamentos}
              onChange={handleChange}
              required
              wdth="w-1/2"
            />
          </div>
        </FormSection>
      </div>
      {whatModal === "n" ? (
        <ModalSuccess onModalClose={onClose} isModalOpen={isOpen} />
      ) : (
        <ModalPagamento onModalClose={onClose} isModalOpen={isOpen} />
      )}

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => SendModal("n")}
          className={`bg-degrade h-10 w-32 px-6 py-2 text-white text-md rounded-md shadow-md transition-all hover:brightness-110 ${
            isLoading ? "cursor-not-allowed opacity-60" : ""
          }`}
        >
          {isLoading ? <Spinner /> : "Enviar"}
        </button>
        <button
          onClick={() => SendModal("e")}
          className={`bg-red-700 h-10 w-[18rem] px-6 py-2 text-white text-md rounded-md shadow-md transition-all hover:brightness-110 ${
            isLoading ? "cursor-not-allowed opacity-60" : ""
          }`}
        >
          {isLoading ? <Spinner /> : "Enviar como emergencial"}
        </button>
      </div>
    </div>
  );
};

export default PreencherFormulario;
