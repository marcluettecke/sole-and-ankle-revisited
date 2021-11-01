import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Open search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={toggleMenu}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
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
  border-bottom: 1px solid var(--color-gray-300);
  border-top: 4px solid var(--color-gray-900);
  overflow: auto;


  @media ${p => p.theme.queries.tabletAndDown} {
    justify-content: space-between;
    align-items: center;

  }
  @media ${p => p.theme.queries.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }

`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0 48px;

  @media ${p => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${p => p.theme.queries.tabletAndDown} {
    gap: 32px;
    display: flex;
  }
  @media ${p => p.theme.queries.phoneAndDown} {
    gap: 16px;
  }

`

const LogoWrapper = styled.div`
  flex: revert;
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  @media ${p => p.theme.queries.tabletAndDown} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
