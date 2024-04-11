import { useEffect, useRef, useState } from "react"
import { AiFillEye, AiOutlineLeft, AiOutlineRight, AiOutlineUndo } from "react-icons/ai";
import IconButton from "~/components/IconButton";
import { cn, shuffleArray } from "~/libs/utils/func";
import useTestStore from "~/store/useTestStore"

export default function Study () {
  const { content } = useTestStore()
  const [wordList, setWordList] = useState<Array<string[]>>(content)
  const [anchor, setAnchor] = useState<number>(0);
  const [isBlinkMode, setIsBlinkMode] = useState<boolean>(false);
  const timeRef = useRef<number | null>(null);

  const onToggleBlinkMode = () => setIsBlinkMode(prev => !prev)

  const onShuffleList = () => {
    setWordList(prevList => shuffleArray([...prevList]));
    setAnchor(0);
  };

  const onPrevAnchor = () => {
    if (anchor > 0) setAnchor(prev => prev -= 1)
  }

  const onNextAnchor = () => {
    if (anchor < wordList.length - 1) setAnchor(prev => prev += 1)
  }

  useEffect(() => {
    if (isBlinkMode) {
      timeRef.current = window.setInterval(() => {
        setAnchor(prev => (prev < wordList.length - 1 ? prev + 1 : 0));
      }, 2000);
    } else {
      if (timeRef.current) window.clearInterval(timeRef.current);
      timeRef.current = null;
    }
  }, [isBlinkMode, wordList.length]);

  return (
    <main className="flex flex-col h-full">
      <section className="grid flex-1 grid-rows-2 gap-6 p-8">
        <article className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-slate-800">
            {wordList[anchor][0]}
          </h2>
        </article>
        <article className="flex items-center justify-center border-2 rounded bg-slate-300 border-slate-400 text-slate-600">
          <h3 className={cn("text-xl", isBlinkMode && 'opacity-0 fade-in-1s')} key={`study-word-${anchor}`}>
            {wordList[anchor][1]}
          </h3>
        </article>
      </section>
      <nav className="flex items-center justify-between px-4 pb-4">
        <div className="inline-flex gap-2">
          <IconButton onClick={onToggleBlinkMode}>
            <AiFillEye size={18} />
          </IconButton>
          <IconButton onClick={onShuffleList}>
            <AiOutlineUndo size={18} />
          </IconButton>
        </div>
        <div className="inline-flex gap-2">
          {anchor > 0 && <IconButton onClick={onPrevAnchor}>
            <AiOutlineLeft size={18} />
          </IconButton>}
          {anchor < wordList.length - 1 && <IconButton onClick={onNextAnchor}>
            <AiOutlineRight size={18} />
          </IconButton>}
        </div>
      </nav>
    </main>
  )
}