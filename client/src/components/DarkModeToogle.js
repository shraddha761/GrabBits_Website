import React, { useState } from "react";
import styled from "styled-components";
import { MdSunny, MdBrightness2 } from "react-icons/md";


export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Update the CSS styles dynamically based on the isDarkMode state
  const themeStyles = `
    body {
      background-color: ${isDarkMode ? "#222222" : "#ffffff"};
      color: ${isDarkMode ? "#222222" : "#222222"};
    }
  `;

  return (
    <Wrapper>
      <style>{themeStyles}</style>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {isDarkMode ? <MdSunny size = {25}/>: <MdBrightness2 size = {25}/>}
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .theme-toggle {
    position: fixed;
    top: 10px;
    right: 600px;
    z-index: 9999;
  }
  .theme-toggle button {
    font-size: 2.4rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: black;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 15px 5px;
    border-radius: 50%;
    position: fixed;
    top: 10px;
    right: 600px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
  }
`;
