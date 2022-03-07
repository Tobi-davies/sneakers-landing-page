import * as React from "react";
import {
  Pane,
  ListItem,
  UnorderedList,
  minorScale,
  SideSheet,
  majorScale,
} from "evergreen-ui";
import sneakerslogo from "../../../assets/images/logo.svg";
import harmburger from "../../../assets/images/icon-menu.svg";
import { ReactComponent as HamburgerIcon } from "../../../assets/images/icon-menu.svg";
import Cart from "../../../assets/images/icon-cart.svg";
import Avatar from "../../../assets/images/image-avatar.png";
import UserCart from "../../user-cart/user-cart";

function MobileHeader() {
  return (
    <Pane
      display="flex"
      width="90%"
      margin="auto"
      justifyContent="space-between"
      alignItems="center"
    >
      <Pane display="flex">
        {/* <HamburgerIcon /> */}
        <div>
          <img
            src={harmburger}
            alt="Ticketsir logo"
            style={{ verticalAlign: "middle" }}
          />
        </div>
        <div>
          <img
            src={sneakerslogo}
            alt="Ticketsir logo"
            style={{ verticalAlign: "middle" }}
          />
        </div>
      </Pane>

      <UserCart />
    </Pane>
  );
}

export default MobileHeader;
