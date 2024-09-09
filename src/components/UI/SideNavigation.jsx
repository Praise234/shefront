import Image from "./Image";
import logo from "../../assets/images/logo-white.svg";
import { NavLink, useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaMoneyCheck, FaUsers } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiLockFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const SideNavigation = () => {
    const {pathname} = useLocation();

    const navlinkCSSActive = `flex gap-3 font-[600]  w-[188px] h-[44px] px-6 items-center rounded-lg bg-custom-navitembg text-custom-linkactive hover:text-custom-link`;
    const navlinkCSS = `flex gap-3 hover:bg-custom-navitembg w-[188px] h-[44px] px-6 items-center rounded-lg text-custom-link hover:text-custom-linkactive`;
  return (
    <div className="bg-custom-black flex-[1] flex flex-col pl-7 pr-7 gap-6">
      <div className="my-8 px-6">
        <Image alt="logo" className="h-[19px] w-[124px] my-8" src={logo} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex-1 font-lato text-[18px] font-[400] leading-[21.6px] flex flex-col gap-7">
          <NavLink to="/dashboard" className={pathname === "/dashboard" ? navlinkCSSActive : navlinkCSS}>
            <GoHomeFill size={24} />
            Dashboard
          </NavLink>
          <NavLink to="/users" className={pathname === "/users" ? navlinkCSSActive : navlinkCSS}>
            <FaUsers size={24} />
            Users
          </NavLink>
          <NavLink to="/loans" className={pathname === "/loans" ? navlinkCSSActive : navlinkCSS}>
            <FaMoneyBillTransfer size={24} />
            Loans
          </NavLink>
          <NavLink to="/admin" className={pathname === "/admin" ? navlinkCSSActive : navlinkCSS}>
            <RiLockFill size={24} />
            Admin
          </NavLink>
          <NavLink to="/transactions" className={pathname === "/transactions" ? navlinkCSSActive : navlinkCSS}>
            <FaMoneyCheck size={24} />
            Transactions
          </NavLink>
        </div>
        <div className="flex-1 mb-8 items-end flex">
          <NavLink className={navlinkCSS}>
            <IoLogOut size={24} />
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
