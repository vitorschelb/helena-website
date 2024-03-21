import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/app/shared/Data'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from './ui/toaster'

type ContactFormSchema = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })
  const { toast } = useToast()

  async function handleFormContact(data: ContactFormSchema) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      reset()
      toast({
        title: 'Mensagem enviada com sucesso!',
      })
    } else {
      toast({
        title: 'Erro ao enviar mensagem, entre em contato pelo LinkedIN!',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormContact)}
      className="flex h-full w-full flex-col"
    >
      <input
        tabIndex={0}
        aria-label="Nome"
        type="text"
        id="nome"
        placeholder="Nome"
        required
        className="mb-3  bg-whiteIce p-3 text-sm tracking-wider shadow-sm ring-1 ring-lightSand focus:outline-0 "
        {...register('nome')}
      />
      <input
        tabIndex={0}
        aria-label="E-mail"
        type="email"
        id="email"
        placeholder="E-mail"
        required
        className=" mb-3 bg-whiteIce p-3 text-sm tracking-wider shadow-sm ring-1 ring-lightSand focus:outline-0 "
        {...register('email')}
      />
      <textarea
        tabIndex={0}
        aria-label="Mensagem"
        id="mensagem"
        rows={6}
        placeholder="Mensagem"
        className=" mb-3 resize-none bg-whiteIce p-3 text-sm tracking-wider shadow-sm ring-1 ring-lightSand focus:outline-0 "
        {...register('mensagem')}
      />
      <button
        tabIndex={0}
        aria-label="Enviar"
        type="submit"
        className="w-28 border border-transparent bg-darkSand p-3 font-dosis uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg focus:outline-0"
      >
        Enviar
      </button>
      <Toaster />
    </form>
  )
}
