import React, { useState } from "react";

function SVG2() {
  const [expanded, setExpanded] = useState(false);

  const handleMainButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <svg width="728" viewBox="0 0 169 228" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="phone">
          <g id="phone_2" filter="url(#filter0_d)">
            <rect x="30" y="13" width="113" height="204" rx="18" fill="#F9F9F9" />
          </g>
            <text x='39' y='40' fill="black" fontSize='8' fontFamily="Arial">Hangman for blind people</text>
          <g id="main-button" onClick={handleMainButtonClick} style={{ cursor: "pointer" }}>
            <rect x="72" y="180" width="30" height="30" rx="15" fill="rgba(0, 7, 14, 0.5)" />
            
          </g>

          {expanded && (
  <g id="side-buttons">
    {/* Left button */}
    <g style={{ animation: "expand 0.5s forwards" }}>
      <rect x="74" y="140" width="30" height="30" rx="15" fill="#60FF52" />
      <text x="80" y="158" fill="black" fontSize="5" fontFamily="Arial">
        Source Code
      </text>
    </g>
    
    {/* Right button */}
    <g style={{ animation: "expand 0.5s forwards 0.1s" }}>
      <rect x="74" y="100" width="30" height="30" rx="15" fill="#60FF52" />
      <text x="77" y="119" fill="black" fontSize="6" fontFamily="Arial">
        Open App
      </text>
      
    </g>

    {/* Third button */}
    <g style={{ animation: "expand 0.5s forwards 0.2s" }}>
      <rect x="74" y="60" width="30" height="30" rx="15" fill="#60FF52" />
      <text x="77" y="79" fill="black" fontSize="7" fontFamily="Arial">
        App Info
      </text>
    </g>
  </g>
)}

        </g>

        <style >{`
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
        `}

        </style>
      </svg>
    </>
  );
}

export default SVG2;
