import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import HomeMovieBar from "./moviebar/HomeMovieBar";
function Combine() {
  // var for menu to show
  const [menu, setMenu] = useState("/movie/now_playing");
  useEffect(() => {
    // console.log(menu);
  }, [menu]);
  return (
    <div className="HomePage">
      <div className="pages sideBar">
        {/* left side bar containing menus */}
        <Sidebar setMenu={setMenu} />
      </div>
      <div className="pages homeMovieBar">
        {/* main movie bar for homepage */}
        <HomeMovieBar url={menu} />
      </div>
    </div>
  );
}

export default Combine;
