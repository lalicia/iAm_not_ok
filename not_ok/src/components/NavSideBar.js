import React from "react";

//create NavSideBar function that renders the navigation bar for the side of some of the pages
function NavSideBar() {
  return (
    <div className="nav-bar">
        <div className="nav-list">
            <li className="nav-list-item"><a href="/write-out" className="nav-link">I'd like to get something out</a></li>
            <li className="nav-list-item"><a href="/happy-dose" className="nav-link">I'd like a little dose of happiness</a></li>
            <li className="nav-list-item"><a href="/tools" className="nav-link">
                I'd like some suggestions for tools to help me deal with how I'm feeling
            </a>
            <li className="nav-list-item"></li><a href="/right-now-contacts" className="nav-link">
                I think I need more help and might need to speak to someone right now
            </a></li>
        </div>
    </div>
  );
}

export default NavSideBar;
