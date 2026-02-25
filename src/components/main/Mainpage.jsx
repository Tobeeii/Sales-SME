import "./Mainpage.css"
import Search from "../../assets/search.png"
import Notification from "../../assets/notification-bing.png"
import Star from "../../assets/star.png"
import Menu from "../../assets/mage_dots-menu.png"
import Ellipse from "../../assets/Ellipse 2.png"
import Group from "../../assets/Group.png"
import Dash from "../../assets/dash.png"
import Book from "../../assets/book.png"
import Product from "../../assets/product.png"
import Order from "../../assets/order.png"
import Inventory from "../../assets/inventory.png"
import Invoice from "../../assets/invoice.png"
import Transaction from "../../assets/trans.png"
import Customers from "../../assets/custom.png"
import Supplies from "../../assets/supply.png"
import Staff from "../../assets/staff.png"

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
        </div>
    </div>
      </aside>
      {/* aside */}

      {/* main */}
      <main>
        
      </main>
      {/* main */}

    </div>
  )
}

export default Mainpage
