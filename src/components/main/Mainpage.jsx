import "./Mainpage.css";
import Search from "../../assets/search.png";
import Notification from "../../assets/notification-bing.png";
import Star from "../../assets/star.png";
import Menu from "../../assets/mage_dots-menu.png";
import Ellipse from "../../assets/Ellipse 2.png";
import Group from "../../assets/Group.png";
import Dash from "../../assets/dash.png";
import Book from "../../assets/book.png";
import Product from "../../assets/product.png";
import Order from "../../assets/order.png";
import Inventory from "../../assets/inventory.png";
import Invoice from "../../assets/invoice.png";
import Transaction from "../../assets/trans.png";
import Customers from "../../assets/custom.png";
import Supplies from "../../assets/supply.png";
import Staff from "../../assets/staff.png";
import Coupon from "../../assets/coupon.png";
import Sold from "../../assets/sold.png";
import Orde from "../../assets/orde.png";
import New from "../../assets/new.png";
import Visit from "../../assets/visit.png";
import Arrow from "../../assets/arrow.png";
import Percentage from "../../assets/percentage.png";
import Share from "../../assets/share.png";
import Web from "../../assets/web.png";
import Webb from "../../assets/webb.png";
import Copy from "../../assets/copy.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Logout from "../../assets/logout.png";

const Mainpage = () => {
  return (
    <div className="main-con">
      {/* Header */}
      <header>
        <div className="search-bar">
          <div className="search">
            <img src={Search} alt="" />
            <input type="text" placeholder="search" />
          </div>
          <div className="icon">
            <img src={Notification} alt="" />
            <img src={Star} alt="" />
            <img className="ellipse" src={Ellipse} alt="" />
            <img src={Menu} alt="" />
          </div>
        </div>
        <div className="dashboard">
          <h1>Dashboard</h1>
        </div>
      </header>
      {/* Header */}

      {/* Aside */}
      <aside>
        <div className="content">
          <div className="img">
            <img src={Group} alt="" />
          </div>
          <div className="content-body">
            <div className="side-bars dashboard">
              <img src={Dash} alt="" />
              <p>Dashboard</p>
            </div>
            <div className="side-bars">
              <img src={Book} alt="" />
              <p>Bookings</p>
            </div>
            <div className="side-bars">
              <img src={Product} alt="" />
              <p>Products</p>
            </div>
            <div className="side-bars">
              <img src={Order} alt="" />
              <p>Orders</p>
            </div>
            <div className="side-bars">
              <img src={Inventory} alt="" />
              <p>Inventory</p>
            </div>
            <div className="side-bars">
              <img src={Invoice} alt="" />
              <p>Inoice</p>
            </div>
            <div className="side-bars">
              <img src={Transaction} alt="" />
              <p>Transactions</p>
            </div>
            <div className="side-bars">
              <img src={Customers} alt="" />
              <p>Customers</p>
            </div>
            <div className="side-bars">
              <img src={Supplies} alt="" />
              <p>Suppliers</p>
            </div>
            <div className="side-bars">
              <img src={Staff} alt="" />
              <p>Staff management</p>
            </div>
            <div className="side-bars">
              <img src={Coupon} alt="" />
              <p>Coupons</p>
            </div>
          </div>
          <div className="logout">
            <img src={Logout} alt="" />
            <button>Logout</button>
          </div>
        </div>
      </aside>
      {/* aside */}

      {/* main */}
      <main>
        <section className="section-1">
          <div className="head">
            <div className="dashboard-text">
              <h2>
                Welcome Back, <span className="here">here’s</span> <br />
                what has happened with your{" "}
                <span className="business">business</span> 😂
              </h2>
              <p>
                Maximize product sales and store management in order to get the
                best result
              </p>
            </div>
            <div className="dashboard-button">
              <div className="button">
                <div className="button-1">
                  <img src="" alt="" />
                  <p>This month</p>
                  <select name="" id=""></select>
                </div>
                <button>Download Report</button>
              </div>
            </div>
          </div>
          <div className="tail">
            <div className="total-sales-1">
              <p>Sales Chart for the year</p>
              <div className="bar-chart">
                <div className="bar bar-1">
                  <p>Sept</p>
                </div>
                <div className="bar bar-2">
                  <p>Oct</p>
                </div>
                <div className="bar bar-3">
                  <p>Nov</p>
                </div>
                <div className="bar bar-4">
                  <p>Dec</p>
                </div>
                <div className="bar bar-5">
                  <p>Jan</p>
                </div>
                <div className="bar bar-6">
                  <p>Feb</p>
                </div>
              </div>
            </div>
            <div className="total-sales-2">
              <div className="top">
                <div className="target">
                  <p>Store Profit Target</p>
                  <p>N1,000,000/yr</p>
                </div>
                <input type="range" name="" id="" />
                <p className="price">N450,000</p>
              </div>
              <div className="bottom">
                <p>This month product sales report</p>
                <p className="price">N450,000</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="sec-up">
            <div className="sec-up-top">
              <p>Total sales</p>
              <div className="month">
                <p>This month</p>
                <select name="" id=""></select>
              </div>
            </div>
            <p className="price">N450,000</p>
          </div>
          <div className="sec-down">
            <div className="box box-1">
              <div className="head">
                <p>Products Sold</p>
                <img src={Sold} alt="" />
              </div>
              <p>20</p>
            </div>
            <div className="box box-2">
              <div className="head">
                <p>Orders</p>
                <img src={Orde} alt="" />
              </div>
              <p>20</p>
            </div>
            <div className="box box-3">
              <div className="head">
                <p>New Customer</p>
                <img src={New} alt="" />
              </div>
              <p>20</p>
            </div>
            <div className="box box-4">
              <div className="head">
                <p>Website Visit</p>
                <img src={Visit} alt="" />
              </div>
              <p>20</p>
            </div>
          </div>
        </section>

        <section className="section-3">
          <div className="left">
            <div className="top">
              <p className="complete">Complete Account Setup</p>
              <p className="get">Get the best experience</p>
            </div>
            <div className="bot">
              <img src={Percentage} alt="" />
              <div className="others">
                <div className="details detail-1">
                  <p>Add Bank Details</p>
                  <img src={Arrow} alt="" />
                </div>
                <div className="details">
                  <p>Connect your Instagram Page</p>
                  <img src={Arrow} alt="" />
                </div>
                <div className="details">
                  <p>Customize your website</p>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="site">
              <div className="up">
                <p>Chickity</p>
                <div className="link">
                  <a href="">chickcity.salesunbox.com</a>
                  <img src={Copy} alt="" />
                </div>
              </div>
              <div className="down">
                <div className="share share-1">
                  <img src={Web} alt="" />
                  <p>Visit site</p>
                </div>
                <div className="share share-2">
                  <img src={Share} alt="" />
                  <p>Visit site</p>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="store">
                <p>Mimistore</p>
                <div className="visit">
                  <p>Visit site</p>
                  <img src={Webb} alt="" />
                </div>
              </div>
              <div className="link">
                <div className="link-up">
                  <p>Mimistore.salesbox.com</p>
                  <img src={Copy} alt="" />
                </div>
                <div className="link-down">
                  <p>Share link</p>
                  <img src={Share} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-4">
          <div className="head">
            <p className="most">Most sold stocks</p>
            <button className="view">View all products</button>
          </div>
          <div className="list">
            <div className="product">
              <img src={Img1} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Black Winter Hoodie</p>
                <p className="product-price">N23000</p>
                <div className="product-available">
                  <p className="instock">50+ in stock</p>
                  <div className="publish">
                    <div className="ellipse-green"></div>
                    <p className="published">Published</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img2} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Lakme Enrich Matte</p>
                <p className="product-price">N23000</p>
                <div className="product-available">
                  <p className="instock">hytrse.com</p>
                  <div className="publish">
                    <div className="ellipse-green"></div>
                    <p className="published">Published</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img3} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">D7200 Digital Camera</p>
                <p className="product-price">N140000</p>
                <div className="product-available">
                  <p className="outstock">Out of stock</p>
                  <div className="publish">
                    <div className="ellipse-red"></div>
                    <p className="published">Published</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img4} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Fake Jordan Nike</p>
                <p className="product-price">N23000</p>
                <div className="product-available">
                  <p className="instock">8 in stock</p>
                  <div className="publish">
                    <div className="ellipse-red"></div>
                    <p className="unpublished">Unpublished</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img5} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Realme 7</p>
                <p className="product-price">N79000</p>
                <div className="product-available">
                  <p className="outstock">Out of stock</p>
                  <div className="publish">
                    <div className="ellipse-red"></div>
                    <p className="unpublished">Unpublished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-5">
          <div className="head">
            <p>Recent Orders</p>
            <button>See all orders</button>
          </div>
          <div className="blogs">
            <div className="orders">
              <div className="up">
                <div className="info">
                  <p className="order-no">#SUOrder0403</p>
                  <p className="order-date">10/02/2025</p>
                </div>
                <button className="order-status-ship">Shipped</button>
              </div>
              <div className="down">
                <div className="price">N95000</div>
                <div className="name">David Ajala</div>
              </div>
            </div>
            <div className="orders">
              <div className="up">
                <div className="info">
                  <p className="order-no">#SUOrder0403</p>
                  <p className="order-date">10/02/2025</p>
                </div>
                <button className="order-status-placed">Order placed</button>
              </div>
              <div className="down">
                <div className="price">N95000</div>
                <div className="name">David Ajala</div>
              </div>
            </div>
            <div className="orders">
              <div className="up">
                <div className="info">
                  <p className="order-no">#SUOrder0403</p>
                  <p className="order-date">10/02/2025</p>
                </div>
                <button className="order-status-deliver">Delivered</button>
              </div>
              <div className="down">
                <div className="price">N95000</div>
                <div className="name">David Ajala</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-6">
          <div className="head">
            <p className="most">Out of Stock</p>
            <button className="view">View all products</button>
          </div>
          <div className="list">
            <div className="product">
              <img src={Img1} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Black Winter Hoodie</p>
                <p className="product-price">N23000</p>
                <div className="product-available">
                  <p className="instock">50+ in stock</p>
                  <div className="publish">
                    <div className="ellipse-green"></div>
                    <p className="published">Published</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img2} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Lakme Enrich Matte</p>
                <p className="product-price">N23000</p>
                <div className="product-available">
                  <p className="instock">hytrse.com</p>
                  <div className="publish">
                    <div className="ellipse-green"></div>
                    <p className="published">Published</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img3} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">D7200 Digital Camera</p>
                <p className="product-price">N140000</p>
                <div className="product-available">
                  <p className="outstock">Out of stock</p>
                  <div className="publish">
                    <div className="ellipse-red"></div>
                    <p className="published">Published</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img4} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Fake Jordan Nike</p>
                <p className="product-price">N23000</p>
                <div className="product-available">
                  <p className="instock">8 in stock</p>
                  <div className="publish">
                    <div className="ellipse-red"></div>
                    <p className="unpublished">Unpublished</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={Img5} alt="" className="product-img" />
              <div className="product-details">
                <p className="product-name">Realme 7</p>
                <p className="product-price">N79000</p>
                <div className="product-available">
                  <p className="outstock">Out of stock</p>
                  <div className="publish">
                    <div className="ellipse-red"></div>
                    <p className="unpublished">Unpublished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* main */}
    </div>
  );
};

export default Mainpage;
