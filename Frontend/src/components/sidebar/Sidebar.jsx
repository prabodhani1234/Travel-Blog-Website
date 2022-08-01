import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img className="mainimg"
          src="https://w0.peakpx.com/wallpaper/112/494/HD-wallpaper-zen-stone-beach-sea-sun.jpg"
          alt=""
        />
        <p>
        The word “blog” is short for “weblog". When it comes to generating booking
        and sales for your business, blogging can be an influential marketing tool.
        Anything related to tourist attractions for entertainment can be entered here with photos

        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList"></ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
        <div className="emailtext">
          <p>wanderer@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
