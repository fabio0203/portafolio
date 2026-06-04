interface Props { label: string }

export function Tag({ label }: Props) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border"
      style={{
        borderColor: 'var(--color-border)',
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {label}
    </span>
  )
}
