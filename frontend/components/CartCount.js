import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Dot = styled.button`
  position: relative;
  padding: 12px 10px;
  font-family: inherit;
  display: block;
  text-align: center;
  cursor: pointer;
  max-height: 50px;
  box-sizing: border-box;
  border: none;
  background: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='20' width='20'%3E%3Cpath d='M4.083 5a6.002 6.002 0 0111.834 0H20v14.986L0 20V5h4.083zM14 5c0-1.001-1.06-3.274-4-3.274S6 4.006 6 5c0 0 8 .012 8 0z' fill='%231b1a16'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  span {
    font-size: 1rem;
    font-weight: normal;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 6px;
    left: 0;
    width: 100%;
    font-feature-settings: 'tnum';
    font-varient-numeric: tabular-nums;
  }
`;

const AnimiationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(1.25) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotate(0);
  }
  .count-exit-active {
    transform: scale(1.25) rotateX(0.5turn);
  }
`;

export default function CartCount({ count }) {
  return (
    <AnimiationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className="count"
          classNames="count"
          key={count}
          timeout={{ enter: 400, exit: 400 }}
        >
          <Dot>
            <span>{count}</span>
          </Dot>
        </CSSTransition>
      </TransitionGroup>
    </AnimiationStyles>
  );
}
