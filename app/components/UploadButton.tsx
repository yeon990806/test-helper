import { ReactNode } from "react"

interface UploadButtonProps {
  children: ReactNode
  onClick: VoidFunction
}

const UploadButton = ({
  children,
  onClick
}: UploadButtonProps) => {
  return (
    <button
      type="button"
      className="w-5/12 p-4 transition duration-300 ease-in-out delay-150 rounded max-w-80 aspect-video bg-slate-300 drop-shadow-md text-slate-600 hover:drop-shadow-lg"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center h-full p-4 border-2 border-dashed border-slate-400">
        {children}
      </div>
    </button>
  )
}
export default UploadButton