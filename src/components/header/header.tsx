import * as React from "react";
import styled from "@emotion/styled";

import { useMediaQuery } from "react-responsive";
import {
  Pane,
  ListItem,
  UnorderedList,
  majorScale,
  minorScale,
} from "evergreen-ui";
import { VIEWPORT_BREAKPOINTS } from "../../enums";
import sneakerslogo from "../../assets/images/logo.svg";
import UserCart from "../user-cart/user-cart";
import harmburger from "../../assets/images/icon-menu.svg";
// import MobileHeader from "./mobile-header/mobile-header";
// import DesktopHeader from "./desktop-header/desktop-header";
// import { VIEWPORT_BREAKPOINTS } from "../../enums";

const NavLink = styled.a`
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--dark-grayish-blue);

  &:active {
    border-bottom: 2px solid var(--primary-orange-color);
  }
  &:hover {
    border-bottom: 2px solid var(--primary-orange-color);
  }
`;

const NAV_ITEMS = [
  {
    exact: true,
    title: "Collections",
    path: "/",
  },
  {
    exact: true,
    title: "Men",
    path: "/",
  },
  { exact: true, title: "Women", path: "/" },
  { exact: true, title: "About", path: "/" },
  { exact: true, title: "Contact", path: "/" },
];

const Header = () => {
  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  return (
    <>
      {/* {!isLaptop ? <MobileHeader /> : <DesktopHeader />} */}
      {/* {!isLaptop ? <DesktopHeader /> : <DesktopHeader />} */}

      <Pane
        is="header"
        // width="80%"
        // margin="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        fontSize="0.9rem"
        // border="1px solid red"
        // paddingY={majorScale(2)}
        borderBottom="1px solid var( --light-grayish-blue)"
        height={isLaptop ? "10vh" : "7vh"}
        width={isLaptop ? "100%" : "90%"}
        margin={isLaptop ? "unset" : "auto"}
      >
        <Pane display="flex" alignItems="center" height="100%">
          {!isLaptop && (
            <Pane marginRight={minorScale(3)}>
              <img
                src={harmburger}
                alt="Ticketsir logo"
                style={{ verticalAlign: "middle" }}
              />
            </Pane>
          )}

          <div>
            <img
              src={sneakerslogo}
              alt="Ticketsir logo"
              style={{ verticalAlign: "middle" }}
            />
          </div>

          {isLaptop && (
            <Pane
              is="nav"
              marginLeft={majorScale(5)}
              display="flex"
              alignItems="center"
              fontSize="1em"
              // border="1px solid red"
              height="inherit"
            >
              <UnorderedList
                display="flex"
                columnGap={majorScale(3)}
                alignItems="center"
                height="inherit"
              >
                {NAV_ITEMS.map((navItem, i) => (
                  <ListItem key={i} fontSize="inherit" height="inherit">
                    <NavLink>{navItem.title}</NavLink>
                  </ListItem>
                ))}
              </UnorderedList>
            </Pane>
          )}
        </Pane>
        <UserCart />
      </Pane>
    </>
  );
};

export default Header;
