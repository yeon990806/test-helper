import { useNavigate } from "@remix-run/react";
import MenuButton from "~/components/MenuButton";
import { MenuList } from "~/libs/defines/const";

export default function Menu () {
  const navigate = useNavigate()

  return (
    <main className="grid items-center h-full">
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2">
        {MenuList.map((v, i) => (
          <MenuButton key={`menu-list-button-${i}`} onClick={() => navigate(v.menuRoute)}>
            {v.menuName}
          </MenuButton>
        ))}
      </div>
    </main>
  )
}