import { FaHome, FaUsers, FaSearch } from "react-icons/fa";

export const sidebarItemsMock = [
  {
    id: 1,
    tela: "home",
    path: "/",
    label: "Home",
    icon: FaHome,
    end: true,
  },
  {
    id: 2,
    tela: "colaborador",
    path: "/colaboradores",
    label: "Colaboradores",
    icon: FaUsers,
    end: false,
  },
];
