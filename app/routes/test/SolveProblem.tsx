import { useMemo, useState } from "react"
import { cn } from "~/libs/utils/func"

interface SolveProblemProps {
  problemCount: number
}

export default function SolveProblem ({
  problemCount
}: SolveProblemProps) {
  const [currentCount, setCurrentCount] = useState<number>(4)
  
  const processingTest = useMemo(() => (currentCount ? (currentCount / (problemCount - 1)) * 100 : 0), [currentCount, problemCount])

  return (
    <>
      <section className="grid h-full gap-4 p-4 grid-rows-layout">
        <h2 className="text-2xl text-slate-800">
          
        </h2>
        <div className="grid gap-2 grid-rows-12">
        </div>
      </section>
      <div className="h-[8px] bg-slate-300">
        <div className={cn("h-full rounded-r-lg bg-slate-600 drop-shadow-md", currentCount == problemCount - 1 && 'rounded-none')} style={{ width: `${processingTest}%` }} />
      </div>
    </>
  )
}