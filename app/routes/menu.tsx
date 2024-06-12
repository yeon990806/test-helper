import { Tooltip } from "react-tooltip";
import { useNavigate } from "@remix-run/react";
import MenuButton from "~/components/MenuButton";
import { MenuList } from "~/libs/defines/const";
// import { sendMessage } from "~/libs/utils/func";

export default function Menu () {
  const navigate = useNavigate()

  return (
    <main className="grid items-center h-full">
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2">
        {MenuList.map((v, i) => {
          if (v.ready)
            return (
              <MenuButton key={`menu-list-button-${i}`} onClick={() => navigate(v.menuRoute)}>
                {v.menuName}
              </MenuButton>
            )
          else
            return (
              <MenuButton
                key={`menu-list-button-${i}-${v.ready.toString()}`}
                // onClick={() => navigate(v.menuRoute)}
                // onClick={() => sendMessage('123')}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="준비 중입니다."
                data-tooltip-place="top"
              >
                {v.menuName}
                <Tooltip id="my-tooltip" />
              </MenuButton>
            )
        })}
      </div>
    </main>
  )
}