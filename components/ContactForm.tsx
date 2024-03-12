export default function ContacForm() {
  return (
    <div className="flex flex-col">
      <input
        tabIndex={0}
        aria-label="Nome"
        name="Nome"
        type="text"
        id="nome"
        placeholder="Nome"
        required
        className="mb-3 bg-whiteIce p-3 text-sm tracking-wider shadow-sm"
      />
      <input
        tabIndex={0}
        aria-label="E-mail"
        name="email"
        type="email"
        id="email"
        placeholder="E-mail"
        required
        className="mb-3 bg-whiteIce p-3 text-sm tracking-wider shadow-sm"
      />
      <textarea
        tabIndex={0}
        aria-label="Mensagem"
        name="mensagem"
        id="mensagem"
        rows={6}
        placeholder="Mensagem"
      />
      <button tabIndex={0} aria-label="Enviar" type="submit">
        Enviar
      </button>
    </div>
  )
}
