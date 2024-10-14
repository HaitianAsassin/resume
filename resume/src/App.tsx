import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SVG0 from '../components/hangman'
import SVG1 from '../components/library'
import SVG2 from '../components/HangmanForBlindPeps'
import SVG3 from '../components/ChessGPT'
import AccordionDemo from '../components/accordian'
import { gold } from '@radix-ui/colors'
function App() {

  return (
    <>
      <table id='aboutMe'>
  <thead>
    <tr>
      <th>About Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>I am a self-taught fullstack developer proficient in</td>
    </tr>
  </tbody>
</table>

<table id='Logos'>
  <tbody>
    <tr>
      <td>
        <img src='HTML_Logo.SVG.webp' alt="Illustration" width={150} height={150}/>
      </td>
      <td>
      {/* <video width="320" height="240" autoPlay loop muted>
  <source src="Lion.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
        <img src='CSS_Logo.webp' alt='Illustration' width={150} height={150} />
      </td>
      <td>
        <img src='JS_Logo.webp' alt='Illustration' width={150} height={150} />
      </td>
      <td>
        <img src='Node_Logo.webp' alt='Illustration' width={150} height={150} />
      </td>
      <td>
        <img src='Express_Logo.webp' alt='Illustration' width={150} height={150} />
      </td>
  </tr>
      <td>
        <img src='MongoDb_Logo.jpg' alt='Illustration' width={150} height={150} />
      </td>
      <td>
        <img src="data:image/png;base64,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" alt="Exploring Mongoose: An In-Depth Guide ..." width={200} height={150}/>
      </td>
      <td>
        <img src="data:image/png;base64,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" alt="Dox a tool that run python (or others ..." width={150} height={150}/>
      </td>
      <td>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="150" height="150">
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#FFEC8B", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <style>
      {`
        .text { font: bold 48px sans-serif; fill: url(#gold-gradient); }
        .react-circle { fill: none; stroke: #61DAFB; stroke-width: 15; }
      `}
    </style>
    <g transform="translate(200,200)">
      <ellipse rx="180" ry="70" className="react-circle" />
      <ellipse rx="180" ry="70" className="react-circle" transform="rotate(60)" />
      <ellipse rx="180" ry="70" className="react-circle" transform="rotate(120)" />
      <circle r="25" fill="#61DAFB" />
    </g>
    <text x="135" y="170" className="text">React</text>
  </svg>
</td>


  </tbody>
</table>

<table>
  <thead>
    <th>
      <tr>
        <td>
        <SVG0 />
        </td>        
      </tr>
      <tr>
        <td>
          <SVG1 />
        </td>
      </tr>
      <tr>
        <td>
          <SVG2 />
        </td>
      </tr>
      <tr>
        <td>
          <SVG3 />
        </td>
      </tr>
    </th>
  </thead>
</table>

<table id="contactMe" style={{ margin: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "transparent" }}>
      <thead>
        <tr>
          <th style={{ color: "#00FFFF", fontSize: "20px", textAlign: "left" }}>
            Contact Info: exlab55@gmail.com
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ paddingTop: "10px" }}>
            {/* LinkedIn Logo with link */}
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
                width="50"
                height="50"
                fill="#0A66C2"
                style={{ cursor: "pointer" }}
              >
                <path d="M34,17A17,17,0,1,0,17,34,17,17,0,0,0,34,17ZM10.48,25.51H5.94V13.53h4.54ZM8.21,11.64H8.18A2.27,2.27,0,1,1,8.25,7.1,2.28,2.28,0,1,1,8.21,11.64ZM28.06,25.51h-4.54v-5.7c0-1.43-.51-2.4-1.79-2.4a1.94,1.94,0,0,0-1.83,1.31,2.44,2.44,0,0,0-.12.86v5.94H15.25s.06-9.63,0-10.62h4.54v1.5a4.49,4.49,0,0,1,4.08-2.25c2.98,0,5.23,1.94,5.23,6.11ZM22.84,25.51H18.3V13.53h4.54ZM27.49,7.1A2.29,2.29,0,1,1,25.2,9.37,2.28,2.28,0,0,1,27.49,7.1Z" />
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default App
