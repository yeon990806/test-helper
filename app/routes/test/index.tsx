import { useMemo, useState } from "react";
import SelectCount from "./SelectCount";
import SolveProblem from "./SolveProblem";

export default function Test () {
  const [pageStep, setPageStep] = useState<number>(0)
  const [pCount, setPCount] = useState<number | null>(null)

  const onNextPage = () => setPageStep(prev => prev += 1)
  const onPrevPage = () => setPageStep(next => next -= 1)

  const renderPage = useMemo(() => {
    switch (pageStep) {
      case 0:
        return <SelectCount
          onClick={(v: number) => {
            setPCount(v)
            onNextPage()
          }}
        />
      case 1:
        return <SolveProblem
          problemCount={pCount!}
        />
    }
  }, [pageStep])

  return (
    <main className="flex flex-col h-full">
      {renderPage}
    </main>
  )
}