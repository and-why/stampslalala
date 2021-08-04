import NextLink from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 3rem;
  a {
    color: var(--red, #834122);
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--red, #834122);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    border-bottom: 1px solid var(--red, #834122);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <NextLink href="/">Stamps la la la</NextLink>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>search...</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
