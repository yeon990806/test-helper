import { ProblemCount } from "~/libs/defines/const"
import useTestStore from "~/store/useTestStore"

interface SelectCountProps {
  onClick: (v: number) => void;
}

export default function SelectCount ({
  onClick
}: SelectCountProps) {
  const { content } = useTestStore()
  const testCounterList = [content.length, ...ProblemCount].filter(v => v <= content.length).sort()

  return (
    <section className="grid h-full gap-4 p-4 grid-rows-layout">
      <h2 className="text-2xl text-slate-800">
        시험 문항수를 선택해주세요.
      </h2>
      <div className="grid gap-2 grid-rows-12">
        {testCounterList.map((v, i) => (
          <button
            key={`test-count-${i}`}
            className="border-2 border-b-4 border-solid rounded bg-slate-300 border-slate-400 text-slate-600 hover:drop-shadow-md"
            onClick={() => onClick(v)}
          >
            {v} 문제
          </button>
        ))}
      </div>
    </section>
  )
}