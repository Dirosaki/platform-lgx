type HelperProps = {
  message?: string
}

export const Helper = ({ message }: HelperProps) => {
  if (!message) return null

  return <span className="text-balance text-sm text-placeholder">{message}</span>
}
