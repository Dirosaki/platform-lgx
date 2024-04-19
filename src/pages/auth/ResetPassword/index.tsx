import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input } from '@/components/form'

import { useResetPassword } from './hooks/useResetPassword'

export const ResetPassword = () => {
  const { register, handleSubmit, errors, isSubmitting } = useResetPassword()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Redefinir senha</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">Insira sua nova senha</p>

      <div className="flex w-full flex-col gap-[6px]">
        <label className="inline-flex self-start text-sm text-white" htmlFor="newPassword">
          Senha
        </label>
        <Input
          id="newPassword"
          placeholder="Sua nova senha"
          type="password"
          {...register('newPassword')}
        />
        {errors.newPassword?.message && (
          <span className="text-sm text-placeholder">{errors.newPassword.message}</span>
        )}
      </div>

      <div className="mt-4 flex w-full flex-col gap-[6px]">
        <label className="inline-flex self-start text-sm text-white" htmlFor="passwordConfirm">
          Confirmar senha
        </label>
        <Input
          id="passwordConfirm"
          placeholder="Confirmação da sua nova senha"
          type="password"
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm?.message && (
          <span className="text-sm text-placeholder">{errors.passwordConfirm.message}</span>
        )}
      </div>

      <Button className="mt-6 md:mt-8" isLoading={isSubmitting} type="submit" onClick={() => {}}>
        Salvar nova senha
      </Button>
    </Card>
  )
}
