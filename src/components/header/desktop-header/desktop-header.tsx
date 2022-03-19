import * as React from "react";
import styled from "@emotion/styled";
import { Pane, ListItem, UnorderedList, majorScale } from "evergreen-ui";
import sneakerslogo from "../../../assets/images/logo.svg";
import UserCart from "../../user-cart/user-cart";

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

function DesktopHeader() {
  // const isLaptop = useMediaQuery({
  //   query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  // });

  return (
    <>
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
        height="10vh"
      >
        <Pane display="flex" alignItems="center" height="100%">
          <div>
            <img
              src={sneakerslogo}
              alt="Ticketsir logo"
              style={{ verticalAlign: "middle" }}
            />
          </div>

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
                <ListItem
                  key={i}
                  fontSize="inherit"
                  // border="1px solid green"
                  //  paddingY={majorScale(2)}
                  height="inherit"
                  // display="flex"
                  // alignItems="center"
                  // justifyContent="center"
                  // marginY="auto"
                >
                  {/* <NavLink
                 exact={navItem.exact}
                 to={
                   navItem.path
                 }
                  activeStyle={{ borderBottom: "1px solid #fff" }}
                  style={{
                    display: "inline-block",
                    padding: "8px 0",
                    color: "#fff",
                    marginRight: "40px",
                  }}
                >
                  {navItem.title}
                </NavLink> */}
                  <NavLink>{navItem.title}</NavLink>
                </ListItem>
              ))}
            </UnorderedList>
          </Pane>
        </Pane>
        {/* <Pane> */}
        <UserCart />
        {/* </Pane> */}
      </Pane>
    </>
  );
}

export default DesktopHeader;
