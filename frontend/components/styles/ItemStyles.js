import styled from 'styled-components';

const ItemStyles = styled.div`
  /* border: 1px solid var(--offwhite); */
  /* box-shadow: var(--bs); */
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;

  /* &:nth-child(odd) {
    background: var(--pink);
  } */
  img {
    width: 100%;
    height: 400px;
    background-color: white;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
