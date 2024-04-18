import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ChangeEvent, Fragment, useRef, useState } from "react";
import { AiFillFile, AiFillFileExcel, AiFillQuestionCircle } from "react-icons/ai";
import Modal from "~/components/Modal";
import UploadButton from "~/components/UploadButton";
import useTest from "~/hooks/useTest";
import { ExcelTemplateLink, ProblemType } from "~/libs/defines/const";
import { detectMobileDevice } from "~/libs/utils/func";

export const meta: MetaFunction = () => {
  return [
    { title: "Test Helper" },
    { name: "description", content: "This web application will help you prepare for tests effectively." },
  ];
};

export default function Index() {
  const [displayInfoPopup, setDisplayInfoPopup] = useState<boolean>(false)
  const { onHandleXlsxFile } = useTest()
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickButton = () => {
    if (!inputRef.current) return
    inputRef.current.click()
  }

  const onToggleDisplayInfoPopup = () => setDisplayInfoPopup(prev => !prev)

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <UploadButton onClick={onClickButton}>
        <h2 className="inline-flex items-center gap-1 text-lg font-semibold">
          <AiFillFile size={18} />
          파일 업로드
        </h2>
        { !detectMobileDevice(window.navigator.userAgent) && <p className="mt-2 leading-tight text-md">
          버튼을 클릭하거나, 파일을 끌어다 놓으세요.
        </p> }
      </UploadButton>
      <div className="inline-flex items-center gap-1 rounded text-slate-600 hover:bg-neutral-200 text-md">
        <Link to={ExcelTemplateLink} target="_blank" className="inline-flex items-center gap-1 p-2" rel="noreferrer">
          <AiFillFileExcel size={16} />
          엑셀 스니펫 다운로드
        </Link>
        <AiFillQuestionCircle
          size={16}
          className="cursor-pointer"
          onClick={onToggleDisplayInfoPopup}
        />
      </div>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target || e.target!.files!.length < 1) return
          onHandleXlsxFile(e.target!.files![0])
        }}
      />
      <Modal
        display={displayInfoPopup}
        onClose={() => setDisplayInfoPopup(false)}
        modalTitle="엑셀시트 사용법"  
      >
        <h4 className="text-slate-600">
          Word Column
        </h4>
        <p className="mt-1 text-sm text-slate-500">
          용어, 단어 등을 작성합니다.
        </p>
        <h4 className="mt-3 text-slate-600">
          Description Column
        </h4>
        <p className="mt-1 text-sm text-slate-500">
          World Column에 작성한 텍스트의 뜻이나 설명 등을 작성합니다.
        </p>
        <h4 className="mt-3 text-slate-600">
          Key Column
        </h4>
        <p className="mt-1 text-sm text-slate-500">
          문제 유형을 작성합니다.
        </p>
        <dl className="px-2 mt-1 text-slate-600">
          {ProblemType.map((v, i) => (
            <Fragment key={`problem-type-${i}`}>
              <dt className="text-[15px] font-semibold mt-2">
                {v.type}
              </dt>
              <dd className="text-sm leading-tight">
                {v.desc}
              </dd>
            </Fragment>
          ))}
        </dl>
        <h4 className="mt-3 text-slate-600">
          rel. Column
        </h4>
        <p className="mt-1 text-sm text-slate-500">
          둘 이상의 row에 같은 id를 부여하세요. <br />
          연관 또는 상반되는 개념으로 판단합니다.
        </p>
      </Modal>
    </main>
  );
}
