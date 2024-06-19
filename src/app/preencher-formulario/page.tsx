import "@/app/preencher-formulario/page.css";

export default function PreencherFormulario() {
  return (
    <main className="min-h-[85vh] max-h-fit py-10 mt-[10vh] flex flex-col gap-6 items-center justify-center text-[#223591]">
      <h1 className="text-3xl">Formulário Técnico</h1>
      <div className="bg-degrade w-fit h-fit px-8 py-8 gap-16 flex flex-col justify-center items-center rounded-xl shadow-md">
        <section className="flex flex-col items-center justify-center w-full">
          <h3 className="text-white text-xl">Dados pessoais</h3>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-1/3">
              <input
                type="text"
                className="form__field"
                placeholder="Nome"
                name="name"
                id="name"
                required
              />
              <label htmlFor="name" className="form__label">
                Nome
              </label>
            </div>
            <div className="form__group field w-1/3">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field w-1/3">
              <input
                type="text"
                className="form__field"
                placeholder="Telefone"
                name="telefone"
                id="telefone"
                required
              />
              <label htmlFor="telefone" className="form__label">
                Telefone
              </label>
            </div>
          </div>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-2/5">
              <input
                type="text"
                className="form__field"
                placeholder="Endereço"
                name="endereco"
                id="endereco"
                required
              />
              <label htmlFor="endereco" className="form__label">
                Endereço
              </label>
            </div>
            <div className="form__group field w-1/5">
              <input
                type="text"
                className="form__field"
                placeholder="Número"
                name="numero"
                id="numero"
                required
              />
              <label htmlFor="numero" className="form__label">
                Número
              </label>
            </div>
            <div className="form__group field w-1/5">
              <input
                type="text"
                className="form__field"
                placeholder="Estado"
                name="estado"
                id="estado"
                required
              />
              <label htmlFor="estado" className="form__label">
                Estado
              </label>
            </div>
            <div className="form__group field w-1/5">
              <input
                type="text"
                className="form__field"
                placeholder="CEP"
                name="cep"
                id="cep"
                required
              />
              <label htmlFor="cep" className="form__label">
                CEP
              </label>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full">
          <h3 className="text-white text-xl">Dados do Aparelho</h3>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-1/3">
              <input
                type="text"
                className="form__field"
                placeholder="Marca"
                name="marca"
                id="marca"
                required
              />
              <label htmlFor="marca" className="form__label">
                Marca
              </label>
            </div>
            <div className="form__group field w-2/3">
              <input
                type="email"
                className="form__field"
                placeholder="Modelo"
                name="modelo"
                id="modelo"
                required
              />
              <label htmlFor="modelo" className="form__label">
                Modelo
              </label>
            </div>
          </div>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-1/3">
              <input
                type="text"
                className="form__field"
                placeholder="IMEI"
                name="imei"
                id="imei"
                required
              />
              <label htmlFor="imei" className="form__label">
                IMEI
              </label>
            </div>
            <div className="form__group field w-1/3">
              <input
                type="text"
                className="form__field"
                placeholder="Número de Série"
                name="num-serie"
                id="num-serie"
                required
              />
              <label htmlFor="num-serie" className="form__label">
                Número de Série
              </label>
            </div>
            <div className="form__group field w-1/3">
              <input
                type="text"
                className="form__field"
                placeholder="Estado da Garantia"
                name="estado-garantia"
                id="estado-garantia"
                required
              />
              <label htmlFor="estado-garantia" className="form__label">
                Estado da Garantia
              </label>
            </div>
          </div>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-full">
              <input
                type="text"
                className="form__field"
                placeholder="Outras Especificações"
                name="outras-specs"
                id="outras-specs"
                required
              />
              <label htmlFor="outras-specs" className="form__label">
                Outras Especificações
              </label>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full">
          <h3 className="text-white text-xl">Problemas</h3>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-full">
              <input
                type="text"
                className="form__field"
                placeholder="Descrição do Problema"
                name="desc-problema"
                id="desc-problema"
                required
              />
              <label htmlFor="desc-problema" className="form__label">
                Descrição do Problema
              </label>
            </div>
          </div>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-1/2">
              <input
                type="text"
                className="form__field"
                placeholder="Conduta do Aparelho"
                name="conduta"
                id="conduta"
                required
              />
              <label htmlFor="conduta" className="form__label">
                Conduta do Aparelho
              </label>
            </div>
            <div className="form__group field w-1/2">
              <input
                type="text"
                className="form__field"
                placeholder="Sintomas"
                name="sintomas"
                id="sintomas"
                required
              />
              <label htmlFor="sintomas" className="form__label">
                Sintomas
              </label>
            </div>
          </div>
          <div className="flex gap-8 w-11/12">
            <div className="form__group field w-1/2">
              <input
                type="text"
                className="form__field"
                placeholder="Erros e/ou Alertas"
                name="erros-alertas"
                id="erros-alertas"
                required
              />
              <label htmlFor="erros-alertas" className="form__label">
                Erros e/ou Alertas
              </label>
            </div>
            <div className="form__group field w-1/2">
              <input
                type="text"
                className="form__field"
                placeholder="Comportamentos"
                name="comportamentos"
                id="comportamentos"
                required
              />
              <label htmlFor="comportamentos" className="form__label">
                Comportamentos
              </label>
            </div>
          </div>

        </section>
      </div>
      <div className="flex justify-center items-center gap-6">
        <button className="bg-degrade px-6 py-2 text-white text-md rounded-md shadow-md transition-all hover:brightness-110">Enviar</button>
        <button className="bg-red-700 px-6 py-2 text-white text-md rounded-md shadow-md transition-all hover:brightness-110">Enviar como emergencial</button>
      </div>
    </main>
  );
}
