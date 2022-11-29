import React from "react";
import { Link } from "react-router-dom";
import { sideBarOpen } from "../../../../store/sideBar";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const AuthLinks = ({ setOpen, open, entities, totalPrice }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-6 cursor-pointer md:hidden text-2xl"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto md:text-white text-black z-10 transition-all duration-500 ${
          open
            ? "w-full bg-indigo-300 p-4 left-0 top-16"
            : "top-[-490px] w-full left-0"
        }`}
      >
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link className="mr-5" to="/favourite">
            <i className="bi bi-suit-heart-fill text-[25px]"></i>
          </Link>
        </li>
        <li className="md:ml-2 text-xl md:my-0 my-7">
          <Link to="/admin">Админ</Link>
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <button>Выйти</button>
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7 ">
          <div
            className="bg-[#D9D9D9] bg-opacity-25 p-2 rounded-[10px] w-full"
            role="button"
            onClick={() => dispatch(sideBarOpen())}
          >
            <div className="ml-28 md:ml-0">
              <span className="border-r-[1px] pr-2">{totalPrice} ₽</span>
              <i className="bi bi-cart4 text-[25px] text-[18px] pl-2"></i>
              <span className="ml-2">{entities.length}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
AuthLinks.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  entities: PropTypes.array,
  totalPrice: PropTypes.number
};

export default AuthLinks;
