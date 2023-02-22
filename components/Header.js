import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/login");
  };
  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log("get startted");
  };

  const handleLogout = (e) => {
    localStorage.clear();
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  const handleOpenMenu = (e) => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <nav className="my_navbar shadow">
        <div className="container-fluid">
          {/* Desktop menus on the top */}
          <div className="header_right_side">
            
            {/* Mobile hamburger menu hidden on desktop */}
            <div className="hamburger" id="hamburger" onClick={() => handleOpenMenu()}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            {/* Mobile hamburger menu hidden on desktop */}

            <div className="other_options">
              <div className="search_box">
                <button onClick={handleSearch}>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
                <input type="text" placeholder="Search..." />
              </div>
              <div className="menu_right_buttons">
                <div className="login_btn" onClick={handleLogin} title="Login">
                  <ion-icon name="lock-open-outline"></ion-icon>
                </div>
                <div className="get_started_btn">
                  <button onClick={handleGetStarted}>Get Started</button>
                </div>
              </div>
            </div>

            {/* Desktop menus on the top */}
          </div>
        </div>
      </nav>
      {/* Header */}

      {/* Sidebar Desktop */}
      <div className="custom_sidebar">
        {/*Logo*/}
        <div className="custom_logo">
          <Link href="/">
            <Image
              src="/images/dashboard-logo.png"
              height={80}
              width={220}
              alt="Course Logo"
              style={{ borderRadius: "5px" }}
            />
          </Link>
        </div>
        {/*Logo*/}

        <div className="sidebar_profile">
          <div className="sidebar_profile_image">
          <img
              src="https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Person Image"
            />
          </div>
          <div className="sidebar_profile_text">
            <div>Phill Collins</div>
            <small>admin</small>
          </div>
        </div>

        <Link href="/">
          <div
            className="sidebar_menu_name"
            style={{
              color: router.pathname === "/" ? "#fff" : "##777281",
              background: router.pathname === "/" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="home-outline"></ion-icon>
            <span>Home</span>
          </div>
        </Link>

        <Link href="/videos">
          <div
            className="sidebar_menu_name"
            style={{
              color: router.pathname === "/videos" ? "#fff" : "##777281",
              background: router.pathname === "/videos" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="book-outline"></ion-icon>
            <span>Courses/Videos</span>
          </div>
        </Link>

        <Link href="/earnings">
          <div
            className="sidebar_menu_name"
            style={{
              color: router.pathname === "/earnings" ? "#fff" : "##777281",
              background: router.pathname === "/earnings" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="trending-up-outline"></ion-icon>
            <span>Earnings</span>
          </div>
        </Link>

        <Link href="/users">
          <div
            className="sidebar_menu_name"
            style={{
              color: router.pathname === "/users" ? "#fff" : "##777281",
              background: router.pathname === "/users" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="person-outline"></ion-icon>
            <span>Users</span>
          </div>
        </Link>
        
        <Link href="/comments">
          <div
            className="sidebar_menu_name"
            style={{
              color: router.pathname === "/comments" ? "#fff" : "##777281",
              background: router.pathname === "/comments" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="reader-outline"></ion-icon>
            <span>Comments/Doubts</span>
          </div>
        </Link>

        <div className="sidebar_menu_name" onClick={handleLogout}>
          <ion-icon name="log-out-outline"></ion-icon>
          <span>Logout</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`link-wrap ${openMenu ? "slideOut" : "slideIn"}`}>
        {/*Logo*/}
        <Link href="/">
          <Image
            src="/images/logo-black.png"
            height={80}
            width={220}
            alt="Course Logo"
            style={{ borderRadius: "5px" }}
          />
        </Link>
        {/*Logo*/}

        <div className="mobile_menu_close">
            <button onClick={() => setOpenMenu(false)}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>

        <div className="sidebar_profile">
          <div className="sidebar_profile_image">
            <img
              src="https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Person Image"
              // style={{ borderRadius: "50%", border:"2px solid #fff" }}
            />
          </div>
          <div className="sidebar_profile_text">
            <div>Phill Collins</div>
            <small>admin</small>
          </div>
        </div>

        <Link href="/">
          <div
            className="sidebar_menu_name"
            style={{
              // color: router.pathname === "/" ? "#fff" : "##777281",
              background: router.pathname === "/" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="home-outline"></ion-icon>
            <span>Home</span>
          </div>
        </Link>

        <Link href="/videos">
          <div
            className="sidebar_menu_name"
            style={{
              // color: router.pathname === "/videos" ? "#fff" : "##777281",
              background: router.pathname === "/videos" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="book-outline"></ion-icon>
            <span>Courses/Videos</span>
          </div>
        </Link>

        <Link href="/earnings">
          <div
            className="sidebar_menu_name"
            style={{
              // color: router.pathname === "/earnings" ? "#fff" : "##777281",
              background: router.pathname === "/earnings" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="trending-up-outline"></ion-icon>
            <span>Earnings</span>
          </div>
        </Link>

        <Link href="/users">
          <div
            className="sidebar_menu_name"
            style={{
              // color: router.pathname === "/users" ? "#fff" : "##777281",
              background: router.pathname === "/users" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="person-outline"></ion-icon>
            <span>Users</span>
          </div>
        </Link>
        
        <Link href="/comments">
          <div
            className="sidebar_menu_name"
            style={{
              // color: router.pathname === "/comments" ? "#fff" : "##777281",
              background: router.pathname === "/comments" ? "#000" : "#fff",
            }}
          >
            <ion-icon name="reader-outline"></ion-icon>
            <span>Comments/Doubts</span>
          </div>
        </Link>

        <div className="sidebar_menu_name" onClick={handleLogout}>
          <ion-icon name="log-out-outline"></ion-icon>
          <span>Logout</span>
        </div>

        <div className="sidebar_menu_name mobile_search">
          <button onClick={handleSearch}>
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <input type="text" placeholder="Search..." />
        </div>
        {/* Mobile Menu */}
      </div>

      {/* Sidebar */}
    </>
  );
};
