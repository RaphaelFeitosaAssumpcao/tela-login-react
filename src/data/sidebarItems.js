import { FaHome, FaUsers, FaKey } from "react-icons/fa";

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
    tela: "acessos",
    path: "/acessos",
    label: "Acessos",
    icon: FaKey,
    end: true,
  },
  {
    id: 3,
    tela: "colaborador",
    path: "/colaboradores",
    label: "Colaboradores",
    icon: FaUsers,
    end: false,
  },
];
