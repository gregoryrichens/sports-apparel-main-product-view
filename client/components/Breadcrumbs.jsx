import React from 'react';
import styled from 'styled-components';

const BreadcrumbList = styled.ol`
  position: absolute;
  top: 30px;
  left: 20px;
  z-index: 49;
  text-shadow: 1px 1px 0 #ebedee;
  display: flex;
  align-items: baseline;
  font-size: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BackButtonListItem = styled.li`
  display: initial;
  margin-right: 20px;
  height: 13px;
  text-transform: uppercase;
  font-family: AdiHaus,Helvetica,Arial,sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 11px;
  line-height: 15px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: underline;
  transition: color .1s cubic-bezier(.3,0,.45,1),background-color .1s cubic-bezier(.3,0,.45,1);
  vertical-align: bottom;
`;

const BackButton = styled.button`
  text-decoration: underline;
  margin: 0;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  padding: 0;
  text-align: inherit;
  text-transform: inherit;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  touch-action: manipulation;
  appearance: button;
  -webkit-tap-highlight-color: #000;
  -webkit-writing-mode: horizontal-tb !important;
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  align-items: flex-start;
  cursor: default;
`;

const BackArrow = styled.svg`
  top: -6px;
  margin-right: 7px;
  position: relative;
  height: 19px;
  width: 19px;
  display: inline-block;
  vertical-align: text-top;
  overflow: hidden;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  box-sizing: border-box;
  display: list-item;
  text-align: match-parent;
  text-align: -webkit-match-parent;
`;

const ListItemA = styled.a`
  background-color: transparent;
  color: #000;
  cursor: pointer;
  display: inline;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: underline;
  transition: color .1s cubic-bezier(.3,0,.45,1),background-color .1s cubic-bezier(.3,0,.45,1);
  vertical-align: bottom;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  -webkit-tap-highlight-color: #000;
  touch-action: manipulation;
  box-sizing: border-box;
`;

const TextSpan = styled.span`
  box-sizing: border-box;
`;

const SeparatorSpan = styled.span`
  margin: 0 5px;
  box-sizing: border-box;
`;

const Breadcrumbs = function Breadcrumbs() {
  return (
    <BreadcrumbList>
      <BackButtonListItem>
        <BackButton>
          <BackArrow id="arrow-back" viewBox="0 0 16 24">
            <title>arrow-back</title>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
              <path d="M15 18v-6H2"></path>
              <path d="M6.5 7l-5 5 5 5"></path>
            </g>
          </BackArrow>
          Back
        </BackButton>
      </BackButtonListItem>
      <ListItem>
        <ListItemA href='https://www.adidas.com/us/'>
          <TextSpan property='name'>Home</TextSpan>
        </ListItemA>
        <meta property="position" content="1"></meta>
      </ListItem>
      <ListItem>
        <SeparatorSpan>/</SeparatorSpan>
        <ListItemA href='https://www.adidas.com/us/originals'>
          <TextSpan property='name'>Originals</TextSpan>
        </ListItemA>
      </ListItem>
      <ListItem>
        <SeparatorSpan>/</SeparatorSpan>
        <ListItemA href='https://www.adidas.com/us/originals-shoes'>
          <TextSpan property='name'>Shoes</TextSpan>
        </ListItemA>
      </ListItem>
    </BreadcrumbList>
  );
};

export default Breadcrumbs;
