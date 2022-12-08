import { FiEdit } from "react-icons/fi";
import{AiOutlineSortAscending,AiOutlineSortDescending} from "react-icons/ai"

import { BiSearch,BiDetail } from "react-icons/bi";

export default function IconManager({ icon }) {
  if (icon === "search") {
    return <BiSearch color="" />;
  } else if (icon === "detail") {
    return <BiDetail />;
  }
  else if (icon === "asc") {
    return <AiOutlineSortAscending size={22} />;
  }
  else if (icon === "desc") {
    return <AiOutlineSortDescending size={22} />;
  }
}
