import React, { useState } from "react";

function SVG0() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const handleMainButtonClick = () => {
    setExpanded(!expanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <svg width="728" viewBox="0 0 169 228" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="phone">
          <g id="phone_2" filter="url(#filter0_d)">
            <rect x="30" y="13" width="113" height="204" rx="18" fill="#F9F9F9" />
          </g>
          <text x="60" y="40" fill="black" fontSize="12" fontFamily="Arial">Hangman</text>

          {/* Main Button */}
          <g
            id="main-button"
            onClick={handleMainButtonClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <rect
              x="72"
              y="180"
              width="30"
              height="30"
              rx="15"
              fill={isHovered ? "yellow" : "rgba(0, 7, 14, 0.5)"} // Change color on hover
              style={{ transition: "fill 1s ease-in-out" }} // Apply the transition
            />
          </g>

          {/* Side buttons */}
          {expanded && (
            <g id="side-buttons">
              {/* Left button */}
              <g style={{ animation: "expand 0.5s forwards" }}>
                <rect x="74" y="140" width="30" height="30" rx="15" fill="#60FF52" />
                <text x="75" y="155" fill="black" fontSize="5" fontFamily="Times New Roman">
                  Source Code
                </text>
              </g>

              {/* Right button */}
              <g style={{ animation: "expand 0.5s forwards 0.1s" }}>
                <rect x="74" y="100" width="30" height="30" rx="15" fill="#60FF52" />
                <text x="76" y="115" fill="black" fontSize="6" fontFamily="Times New Roman">
                  Open App
                </text>
              </g>

              {/* Third button */}
              <g style={{ animation: "expand 0.5s forwards 0.2s" }}>
                <rect x="74" y="60" width="30" height="30" rx="15" fill="#60FF52" />
                <text x="76" y="76" fill="black" fontSize="7" fontFamily="Times New Roman">
                  App Info
                </text>
              </g>
            </g>
          )}
        </g>

        <style>{`
          #side-buttons g {
            transform-origin: center;
          }

          @keyframes expand {
            from {
              transform: scale(0);
            }
            to {
              transform: scale(1);
            }
          }
        `}</style>
      </svg>
    </>
  );
}

export default SVG0;
