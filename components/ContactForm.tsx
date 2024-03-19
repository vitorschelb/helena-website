import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  nome: z.string(),
  email: z.string(),
  mensagem: z.string(),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  function handleFormContact(data: ContactFormSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormContact)} className="flex flex-col">
      <input
        tabIndex={0}
        aria-label="Nome"
        type="text"
        id="nome"
        placeholder="Nome"
        required
        className="mb-3 bg-whiteIce p-3 text-sm tracking-wider shadow-sm"
        {...register('nome')}
      />
      <input
        tabIndex={0}
        aria-label="E-mail"
        type="email"
        id="email"
        placeholder="E-mail"
        required
        className="mb-3 bg-whiteIce p-3 text-sm tracking-wider shadow-sm"
        {...register('email')}
      />
      <textarea
        tabIndex={0}
        aria-label="Mensagem"
        id="mensagem"
        rows={6}
        placeholder="Mensagem"
        {...register('mensagem')}
      />
      <button tabIndex={0} aria-label="Enviar" type="submit">
        Enviar
      </button>
    </form>
  )
}
