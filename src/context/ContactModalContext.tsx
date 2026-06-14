import { createContext, useContext, useState, useCallback } from 'react'

interface ContactModalCtx {
  open: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalCtx>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
})

export const useContactModal = () => useContext(ContactModalContext)

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <ContactModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}
