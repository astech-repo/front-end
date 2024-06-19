"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { FormInput } from "./form-input";
import { FormSection } from "./form-section";
import { redirect, useSearchParams } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";

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
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonToSend = {
      usuario: {
        nome: formValues.nome,
        email: formValues.email,
        telefone: formValues.telefone,
        endereco_rua: formValues.endereco,
        endereco_numero: formValues.numero,
        endereco_estado: formValues.estado,
        endereco_cep: formValues.cep,
      },
      aparelho: {
        tipo_aparelho: t,
        marca: formValues.marca,
        modelo: formValues.modelo,
        imei: formValues.imei,
        numero_serie: formValues.numSerie,
        estado_garantia: formValues.estadoGarantia,
        outras_especificacoes: formValues.outrasEspecificacoes,
      },
      problema: {
        descricao: formValues.descProblema,
        conduta: formValues.conduta,
        sintomas: formValues.sintomas,
        comportamento: formValues.comportamentos,
        erro_alerta: formValues.errosAlertas,
      },
    };

    // lógica para enviar o formulário
    console.log(jsonToSend);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[85vh] max-h-fit py-10 mt-[10vh] flex flex-col gap-6 items-center justify-center text-[#223591]"
    >
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
              type="text"
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
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
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
                type="text"
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
            />
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

      <div className="flex justify-center items-center gap-6">
        <button className="bg-degrade px-6 py-2 text-white text-md rounded-md shadow-md transition-all hover:brightness-110">
          Enviar
        </button>
        <button className="bg-red-700 px-6 py-2 text-white text-md rounded-md shadow-md transition-all hover:brightness-110">
          Enviar como emergencial
        </button>
      </div>
    </form>
  );
};

export default PreencherFormulario;
