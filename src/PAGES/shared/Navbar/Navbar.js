import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useBill } from "../../../CONTEXT/BillProvider/BillProvider";

const Navbar = () => {
  const { setClsModal } = useBill();
  return (
    <section className="navbar bg-primary">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Power Hack
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

        <label
          htmlFor="add-new-bill"
          className="btn btn-accent"
          onClick={() => setClsModal(true)}
        >
          Add New Bill
        </label>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 ">
              <HiOutlineUserCircle size={"2.5rem"} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/bills">Bill List</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to={"/registration"}>Registration</Link>
            </li>
            {/* <li>
              <a>Logout</a>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
