import React from "react";
import logo from "../../assets/img/logo.png";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
function Header() {
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          {/* logo section */}
          <div className={classes.logo_container}>
            <a href="#">
              <img src={logo} alt="amazon logo" />
            </a>
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
            <BsSearch size={25} />
          </div>
          {/* Orders section */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* Three components inside the orders */}
            <a href="">
              <div>
                <p>Hello, Sign in</p>
                <span className={classes.TheFont}>Account & Lists</span>
              </div>
            </a>

            <a href="">
              <p>Returns</p>
              <span className={classes.TheFont}>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <div className={classes.margin}>
                <BiCart size={35} />
                cart
                <span>0</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
