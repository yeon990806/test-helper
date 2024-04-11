import { ReactNode } from "react"

interface MenuButtonProps {
  children: ReactNode
  onClick?: VoidFunction
}

const MenuButton = ({children, onClick}: MenuButtonProps) => {
  return (
    <button
      type="button"
      className="w-full p-4 border-2 border-b-4 rounded bg-slate-300 border-slate-400 text-slate-600 hover:drop-shadow-sm"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default MenuButton