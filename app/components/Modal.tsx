import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  display: boolean
  modalTitle?: string
  children: ReactNode
  modalFooter?: ReactNode
  onClose: VoidFunction
}

const Modal = ({
  display = false,
  modalTitle,
  children,
  modalFooter,
  onClose
}: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let modalRootTemp = document.getElementById('modal-root')
    if (!modalRootTemp) {
      modalRootTemp = document.createElement('div');
      modalRootTemp.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRootTemp);
    }
    setModalRoot(modalRootTemp);

    return () => {
      if (modalRootTemp!.parentNode) modalRootTemp!.parentNode.removeChild(modalRootTemp!)
    }
  }, [])

  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {display && (
        <motion.div
          className="fixed inset-0 grid items-center justify-center w-full h-full p-3 bg-gray-400/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key="modal"
        >
          <div className="p-4 rounded bg-slate-100 drop-shadow-md min-w-40">
            <header className="flex items-center gap-2">
              <h3 className="flex-1 text-lg text-slate-600">{modalTitle}</h3>
              <button type="button" onClick={onClose}>
                <AiOutlineClose size={24} className="fill-slate-800 stroke-slate-800" />
              </button>
            </header>
            <section className="pt-4">{children}</section>
            {modalFooter && <footer>{modalFooter}</footer>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  )
}
export default Modal