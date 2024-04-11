import { ReactNode } from "react";
import { cn } from "~/libs/utils/func";

interface IconButtonProps {
  addingClss?: string;
  children: ReactNode
  onClick: VoidFunction
}

const IconButton = ({
  addingClss="",
  children,
  onClick
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={cn("p-2 border-2 rounded bg-slate-300 border-slate-400 text-slate-600", addingClss)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default IconButton