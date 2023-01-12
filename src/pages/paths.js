import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import SkillProviderList from "./SkillProviderList";
import Users from "./Users";
import History from "./History";
import Setting from "./Setting";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
const paths = [
  {
    path: "/",
    exact: true,
    main: () => <LoginPage />,
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",

    main: () => <Dashboard />,
  },
  {
    title: "Approve Skill Provider",
    path: "/SkillProviderList",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    main: () => <SkillProviderList />,
  },
  {
    title: "Users",
    path: "/Users",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    main: () => <Users />,
  },
  {
    title: "History",
    path: "/History",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    main: () => <History />,
  },
  {
    title: "Setting",
    path: "/Setting",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    main: () => <Setting />,
  },
];
export default paths;
