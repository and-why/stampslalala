import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  font-size: 11px;
  background: white;
  justify-content: center;
  text-transform: uppercase;
  color: var(--black);
  letter-spacing: 0.3em;
  text-rendering: optimizeLegibility;
  border-bottom: 2px dotted var(--red);
  border-top: 2px dotted var(--red);
  a,
  button {
    margin: 0 0.5rem;
    padding: 2rem 2rem;
    text-rendering: optimizeLegibility;
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    border: 0;
    cursor: pointer;
    color: var(--black);
    @media (max-width: 700px) {
      font-size: 11px;
      padding: 10px 10px;
    }

    &:hover,
    &:focus {
      background: var(--red, red);
      color: var(--white, white);
      text-decoration: none;
      /* &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      } */
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export default NavStyles;
