import { LoaderCircle } from 'lucide-react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Group, Helper, Input, Label } from '@/components/form'

import { useResetPassword } from './hooks/useResetPassword'

export const ResetPassword = () => {
  const { register, handleSubmit, errors, isSubmitting } = useResetPassword()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Redefinir senha</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">Insira sua nova senha.</p>

      <Group>
        <Label htmlFor="newPassword">Senha</Label>
        <Input
          autoComplete="new-password"
          id="newPassword"
          placeholder="Sua nova senha"
          type="password"
          {...register('newPassword')}
        />
        <Helper message={errors.newPassword?.message} />
      </Group>

      <Group>
        <Label htmlFor="passwordConfirm">Confirmar senha</Label>
        <Input
          autoComplete="new-password"
          id="passwordConfirm"
          placeholder="Confirmação da sua nova senha"
          type="password"
          {...register('passwordConfirm')}
        />
        <Helper message={errors.passwordConfirm?.message} />
      </Group>

      <Button className="mt-6 md:mt-8" type="submit">
        {isSubmitting ? (
          <LoaderCircle className="animate-spin duration-700" />
        ) : (
          'Salvar nova senha'
        )}
      </Button>
    </Card>
  )
}
