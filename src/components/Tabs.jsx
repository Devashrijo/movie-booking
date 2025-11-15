import React, { useState, useRef, useEffect } from "react";
import "./Tabs.css";

const tabs = ["Now Showing", "Upcoming Movies", "Trailers", "Offers"];

const Tabs = ({ scrollToSection }) => {
  const [activeTab, setActiveTab] = useState("Now Showing");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    const currentIndex = tabs.indexOf(activeTab);
    const currentTab = tabRefs.current[currentIndex];

    if (currentTab) {
      setUnderlineStyle({
        width: currentTab.offsetWidth + "px",
        left: currentTab.offsetLeft + "px",
      });
    }

    // Scroll to section when tab changes
    if (scrollToSection) {
      if (activeTab === "Now Showing") scrollToSection("NowShowing");
      else if (activeTab === "Upcoming Movies") scrollToSection("Upcoming");
      else if (activeTab === "Trailers") scrollToSection("Trailers");
      else if (activeTab === "Offers") scrollToSection("Offers");
    }
  }, [activeTab, scrollToSection]);

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <div
          key={tab}
          ref={(el) => (tabRefs.current[index] = el)}
          className={`tab-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
      <div className="underline" style={underlineStyle} />
    </div>
  );
};

export default Tabs;
