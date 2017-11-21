import css from 'styled-jsx/css'

const fonts = `
@font-face {
  font-family: 'open_sansbold';
  src: url('/static/fonts/OpenSans-Bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sansbold_italic';
  src: url('/static/fonts/OpenSans-BoldItalic-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sansextrabold';
  src: url('/static/fonts/OpenSans-ExtraBold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sansextrabold_italic';
  src: url('/static/fonts/OpenSans-ExtraBoldItalic-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sansitalic';
  src: url('/static/fonts/OpenSans-Italic-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sanslight';
  src: url('/static/fonts/OpenSans-Light-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sanslight_italic';
  src: url('/static/fonts/OpenSans-LightItalic-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sansregular';
  src: url('/static/fonts/OpenSans-Regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sanssemibold';
  src: url('/static/fonts/OpenSans-Semibold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'open_sanssemibold_italic';
  src: url('/static/fonts/OpenSans-SemiboldItalic-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
`;

export default css`
  ${fonts}

  :root {
    --primary-color: #f00;
    --secondary-color: #071e22;
    --tertiary-color: #292f36;
    --quaternary-color: #3e78b2;
    --quinary-color: #fff;

    --shadow-color: #292f3680;
  }

  * {
    font-family: 'open_sansregular', Arial, sans-serif;
  }

  body {
    margin: 0;
  }

  input[type="text"],
  input[type="search"] {
    border-radius: 0;
    border: 1px solid var(--secondary-color);
    display: block;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
  }
`;