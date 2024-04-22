import { LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Group, Helper, Input, Label } from '@/components/form'

import { useRegister } from './hooks/useRegister'

export const Register = () => {
  const { register, handleSubmit, errors, isSubmitting } = useRegister()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Cadastre-se</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">
        Insira suas informações para realizar seu cadastro na plataforma.
      </p>

      <Group>
        <Label htmlFor="email">E-mail</Label>
        <Input
          autoComplete="email"
          id="email"
          inputMode="email"
          placeholder="Seu e-mail"
          type="text"
          {...register('email')}
        />
        <Helper message={errors.email?.message} />
      </Group>

      <Group>
        <Label htmlFor="password">Senha</Label>
        <Input
          autoComplete="new-password"
          id="password"
          placeholder="Sua senha"
          type="password"
          {...register('password')}
        />
        <Helper message={errors.password?.message} />
      </Group>

      <p className="mt-4 text-sm text-white">
        Ao se cadastrar, você concorda com nossos{' '}
        <a
          className="underline underline-offset-4 transition-colors hover:text-primary"
          href="#terms-of-use"
        >
          termos
        </a>{' '}
        e{' '}
        <a
          className="underline underline-offset-4 transition-colors hover:text-primary"
          href="#privacy-policy"
        >
          política de privacidade
        </a>
        .
      </p>

      <Button className="mt-5 md:mt-6" type="submit">
        {isSubmitting ? <LoaderCircle className="animate-spin duration-700" /> : 'Cadastrar'}
      </Button>

      <span className="mx-auto mt-8 text-center text-white">
        Já tem uma conta?{' '}
        <Link
          className="underline underline-offset-4 transition-colors hover:text-primary"
          to="/auth/login"
        >
          Fazer login
        </Link>
      </span>
    </Card>
  )
}
