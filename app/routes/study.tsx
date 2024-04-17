/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from "react"
import { AiFillEye, AiOutlineLeft, AiOutlineRight, AiOutlineUndo, AiFillProfile } from "react-icons/ai";
import IconButton from "~/components/IconButton";
import { cn, shuffleArray } from "~/libs/utils/func";
import useTestStore from "~/store/useTestStore"

export default function Study () {
  const { content } = useTestStore()
  const [wordList, setWordList] = useState<Array<string[]>>(content)
  const [anchor, setAnchor] = useState<number>(0);
  const [isBlinkMode, setIsBlinkMode] = useState<boolean>(false);
  const [isHideMode, setIsHideMode] = useState<boolean>(false);
  const [displayDesc, setDisplayDesc] = useState<boolean>(false);
  const timeRef = useRef<number | null>(null);

  const onToggleBlinkMode = () => {
    setIsHideMode(false);
    setDisplayDesc(true);
    setIsBlinkMode(prev => !prev);
  }

  const onToggleHideDesc = () => {
    setIsBlinkMode(false);
    setIsHideMode(prev => !prev);
  }

  const onToggleDisplayDesc = () => {
    if (isHideMode) setDisplayDesc(prev => !prev);
  }

  const onShuffleList = () => {
    setWordList(prevList => shuffleArray([...prevList]));
    setAnchor(0);
  };

  const onPrevAnchor = () => {
    if (anchor > 0) setAnchor(prev => prev -= 1)
    else setAnchor(wordList.length - 1)
  }

  const onNextAnchor = () => {
    if (anchor < wordList.length - 1) setAnchor(prev => prev += 1)
    else setAnchor(0)
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

  useEffect(() => {
    setAnchor(0)
    if (!isBlinkMode) setDisplayDesc(true)
  }, [isBlinkMode, isHideMode])

  useEffect(() => {
    if (isHideMode) {
      setDisplayDesc(false)
    }
  }, [isHideMode, anchor])

  return (
    <main className="flex flex-col h-full">
      <section className="grid flex-1 grid-rows-2 gap-6 p-4">
        <article className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-slate-800">
            {wordList[anchor][0]}
          </h2>
        </article>
        <article className="flex items-center justify-center p-6 border-2 rounded bg-slate-300 border-slate-400 text-slate-600" onClick={onToggleDisplayDesc}>
          <h3 className={cn("text-xl whitespace-pre-wrap", isBlinkMode && 'opacity-0 fade-in-1s')} key={`study-word-${anchor}`}>
            {(!isHideMode || displayDesc) && wordList[anchor][1]}
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
          <IconButton onClick={onToggleHideDesc}>
            <AiFillProfile size={18} />
          </IconButton>
        </div>
        <div className="inline-flex gap-2">
          <div className="inline-flex items-center gap-2 mr-4 text-slate-400">
            <span className="text-slate-500">
              {anchor + 1}
            </span>
            / {wordList.length}
          </div>
          <IconButton onClick={onPrevAnchor}>
            <AiOutlineLeft size={18} />
          </IconButton>
          <IconButton onClick={onNextAnchor}>
            <AiOutlineRight size={18} />
          </IconButton>
        </div>
      </nav>
    </main>
  )
}