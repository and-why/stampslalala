import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Dancing Script';
  src: url('/static/DancingScript-Medium.ttf') format("truetype");
  font-weight: medium;
  font-style: normal;
}
@font-face {
  font-family: 'Dancing Script';
  src: url('/static/DancingScript-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Dancing Script';
  src: url('/static/DancingScript-Bold.ttf') format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Libre Baskerville';
  src: url('/static/LibreBaskerville-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}

html {
  --red: #e73b2e;
  --brown: #bb6d3d;
  --pink: #cd8980;
  --lightpink: #e7cfc2;
  --white: #faf6f1;
  --offwhite: #f0eae2;
  --black: #5d5d5d;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  background: var(--white);
  box-sizing: border-box;
}  
*,*:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'Libre Baskerville', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-size: 1.25rem;
}
h1, h2, h3 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
  }
  a {
    text-decoration: none;
    color: var(--red);
  }
  a:hover {
    text-decoration: underline;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <InnerStyles>
        <Header />
        {children}
      </InnerStyles>
    </>
  );
}

// don't really need
Page.propTypes = {
  children: PropTypes.any,
};
