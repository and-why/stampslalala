import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem 0 0;
  text-align: left;
  /* margin-top: -3rem; */
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  a {
    background: var(--red);
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: left;
    color: white;
    padding: 1rem 2rem;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

export default Title;
