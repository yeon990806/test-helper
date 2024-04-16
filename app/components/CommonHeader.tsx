import { useNavigate } from "@remix-run/react";
import { AiOutlineLeft } from "react-icons/ai";
import IconButton from "./IconButton";

interface CommonHeader {}

const CommonHeader = () => {
  const navigate = useNavigate()

  return (
    <header className="p-4">
      <IconButton onClick={() => navigate(-1)}>
        <AiOutlineLeft size={18} />
      </IconButton>
    </header>
  )
}
export default CommonHeader