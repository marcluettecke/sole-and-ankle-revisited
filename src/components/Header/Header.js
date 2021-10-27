import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SmallWrapper>
          <StyledIcon id="shopping-bag" strokeWidth={1} />
          <StyledIcon id="search" strokeWidth={1} />
          <StyledIcon id="menu" strokeWidth={1} />
        </SmallWrapper>
        <RightSide />
        {/*<button onClick={() => setShowMobileMenu(true)}>Test</button>*/}

      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]} @media ${p => p.theme.queries.laptopAndDown} {
    width: 100%;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;

  @media ${p => p.theme.queries.laptopAndDown} {
    display: none;
  }
`;

const SmallWrapper = styled.div`
  display: none;

  @media ${p => p.theme.queries.laptopAndDown} {
    display: flex;
  }
`

const StyledIcon = styled(Icon)`
  :not(:last-child){
    margin-right: 24px;
  }
`

const Side = styled.div`
  flex: 1;
`;

const RightSide = styled(Side)`
  @media ${p => p.theme.queries.laptopAndDown} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
