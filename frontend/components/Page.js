import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'LiuJianMaoCao';
  src: url('/static/LiuJianMaoCao-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url('/static/Lato-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}

html {
  /* --red: #e73b2e; */
  --red: #dc584a;
  --brown: #bb6d3d;
  --orange: #f7b257;
  --green: #5b8b51;
  --pink: #cd8980;
  --lightpink: #e7cfc2;
  --white: #f4f2e8;
  --offwhite: var(--white);
  --grey: #4c5a55;
  --gray: var(--grey);
  /* --black: #1d1d1d; */
  --black: #1b1a16;
  --maxWidth: 1440px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  background:var(--white);
  box-sizing: border-box;
  font-size: 10px;

}  
*,*:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-size: 1.5rem;
  margin: 0;
}
h1, h2, h3 {
    font-family: 'LiuJianMaoCao', cursive;
    font-weight: normal;
    font-style: normal;
  }
  h2 {
    font-size: 2.8em;
    margin: 0 0 0.5em 0
  }
  h3 {
    font-size: 2em;
    margin: 0 0 0.5em 0
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
  /* max-width: var(--maxWidth); */
  margin: 0 auto;
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
