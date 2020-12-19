import { toast } from 'react-toastify'

export const notify = (text: string) => {
  toast(text, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: text,
    updateId: text,
  })
}
