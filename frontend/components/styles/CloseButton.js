import styled from 'styled-components';

const CloseButton = styled.a`
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  span {
    cursor: pointer;
    margin: 0 5px;
    padding: 0 12px;
    background-position: 50%;
    background-size: 19px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.97 8.274L2.335.637.637 2.334 8.274 9.97.637 17.607l1.697 1.697 7.637-7.636 7.636 7.636 1.697-1.697-7.636-7.636 7.636-7.637L17.607.637 9.971 8.274z'/%3E%3C/svg%3E");
    fill: white;
    &:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.97 8.274L2.335.637.637 2.334 8.274 9.97.637 17.607l1.697 1.697 7.637-7.636 7.636 7.636 1.697-1.697-7.636-7.636 7.636-7.637L17.607.637 9.971 8.274z' fill='%230770cf'/%3E%3C/svg%3E");
    }
  }
`;

export default CloseButton;
