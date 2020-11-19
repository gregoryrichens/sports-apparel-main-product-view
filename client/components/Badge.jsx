import React from 'react';
import styled from 'styled-components';

const BadgeDiv = styled.div`
  transform: translate(0) rotate(270deg);
  right: 34px;
  left: auto;
  top: 20px;
  transition: transform .6s;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 1.1em;
  max-width: 90%;
  overflow: hidden;
  padding: 1px 2px;
  position: absolute;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  transform-origin: right top;
  white-space: nowrap;
  background-color: #fff;
  color: #000;
  box-sizing: border-box;
`;

const Badge = function Badge() {
  return (
    <BadgeDiv>-30% CODE GETSHOES</BadgeDiv>
  );
};

export default Badge;
