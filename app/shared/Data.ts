import { z } from 'zod'

export const contactFormSchema = z.object({
  nome: z.string().min(3, '* O nome deve ter pelo menos dois caracteres'),
  email: z.string().email('* Insira um email válido'),
  mensagem: z.string().min(1, '* Campo obrigatório'),
})
