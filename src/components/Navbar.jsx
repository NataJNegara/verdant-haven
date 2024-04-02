import { LuShoppingCart, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

export default function Navbar() {
  const { user } = useUser();
  const { isLogout, logout } = useLogout();

  return (
    <>
      <div className="fixed z-10 shadow-sm navbar bg-base-100 lg:px-16">
        <div className="hidden navbar-start lg:block">
          <div className="flex gap-4 font-medium">
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="navbar-start lg:navbar-center lg:justify-center">
          <Link to="/" className="font-serif text-xl font-bold">
            Verdant Haven
          </Link>
        </div>
        <div className="gap-2 navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <div className="indicator">
                <LuShoppingCart className="text-xl" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="bg-green-500 btn text-green-50 hover:bg-green-600 btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div>
                <LuUser className="text-xl" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {!user ? (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Sign up</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-red-50"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      disabled={isLogout}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Are you sure to logout?</h3>
          <p className="py-4">
            Change you made may not be saved. Make sure to complete the
            transactions before leaving.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="bg-red-500 btn hover:bg-red-600 text-red-50"
                onClick={logout}>
                Logout
              </button>
            </form>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
