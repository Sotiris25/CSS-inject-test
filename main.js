// lol this is some weird test I did in JS

// CSS that will be injected.

// (default code, changes images into CIRCLE AND RAINBOWWWWWWWWWWWWW);
const CSS_CODE = `
    img {
      border-radius: 100%;
    }
    
    
    @keyframes textRainbowAnimation {
        0% {
           color: red;
        }
        
        25% {
           color: green;
        }
        
        50% {
           color: blue;
        }
        
        75% {
          color: orange;
        }
        
        100% {
          color: purple;
        }
    }
    
    div, li, ul, p, h1, h2, h3, h4, h5, h6, a {
        transition: 1.1s;
        animation: textRainbowAnimation 1s linear infinite;
        animation-direction: alternate;
    }
`;

// create the required style tag
let styleTag = document.createElement('style');
styleTag.appendChild(document.createTextNode(CSS_CODE));

// add it to the website
document.head.appendChild(styleTag);
