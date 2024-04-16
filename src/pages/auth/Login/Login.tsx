import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input } from '@/components/form'

import { useLogin } from './hooks/useLogin'

export const Login = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLogin()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Entrar</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">Insira seu e-mail e senha para acessar a plataforma</p>

      <div className="flex w-full flex-col gap-[6px]">
        <label htmlFor="email" className="inline-flex self-start text-sm text-white">
          E-mail
        </label>
        <Input id="email" type="text" placeholder="Seu e-mail" {...register('email')} />
        <span className="text-sm text-placeholder">{errors.email?.message}</span>
      </div>

      <div className="mt-4 flex w-full flex-col gap-[6px]">
        <label htmlFor="password" className="inline-flex self-start text-sm text-white">
          Senha
        </label>
        <Input id="password" type="password" placeholder="Sua senha" {...register('password')} />
        <span className="text-balance text-sm text-placeholder">{errors.password?.message}</span>
      </div>

      <Link
        to="/auth/forgot-password"
        className="mt-4 text-sm text-white underline underline-offset-4 transition-colors hover:text-primary "
      >
        Esqueci minha senha
      </Link>

      <Button type="submit" isLoading={isSubmitting} className="mt-6 md:mt-8">
        Entrar
      </Button>

      <span className="mx-auto mt-8 text-center text-white">
        Não tem uma conta?{' '}
        <Link to="/auth/register" className="underline underline-offset-4 transition-colors hover:text-primary">
          Cadastre-se
        </Link>
      </span>
    </Card>
  )
}
