import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  width: 100%;
  /* border-bottom: 2px solid var(--red);
  border-top: 2px solid var(--red); */
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      background: var(--red);
      color: white;
    }
  }
  & > * {
    margin: 0;
    padding: 15px 30px;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
