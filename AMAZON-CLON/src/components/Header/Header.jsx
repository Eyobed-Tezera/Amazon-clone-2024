import React, { useContext } from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utils/firebase";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* logo section */}
            <div className={classes.logo_container}>
              <Link to="/">
                <img src={logo} alt="amazon logo" />
              </Link>
              {/* Delivery section */}
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* search section*/}
            <div className={classes.search}>
              <select name="" id="" style={{ width: 60 }}>
                <option value="">All</option>
                <option value="">All Departments</option>
                <option value="">Arts & Carfts</option>
                <option value="">Automotive</option>
                <option value="">Baby</option>
                <option value="">Beauty & Personal Care</option>
                <option value="">Books</option>
                <option value="">Boy's Fashion</option>
                <option value="">Computer</option>
                <option value="">Deals</option>
                <option value="">Digital Music</option>
                <option value="">Electronic</option>
              </select>
              <input type="text" name="" id="" placeholder="Search Amazon" />
              <BsSearch size={38} />
            </div>
            {/* Orders section */}
            <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              {/* Three components inside the orders */}
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello, Sign in</p>
                      <span>
                        {" "}
                        <div>
                          <span className={classes.TheFont}>
                            Account & Lists
                          </span>
                        </div>
                      </span>
                    </>
                  )}
                </div>
              </Link>

              <Link to="/orders">
                <p>Returns</p>
                <span className={classes.TheFont}>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <div className={classes.margin}>
                  <BiCart size={35} />
                  cart
                  <span>{totalItem}</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
