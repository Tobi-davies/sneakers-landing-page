import * as React from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./mobile-header/mobile-header";
import DesktopHeader from "./desktop-header/desktop-header";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

const Header = () => {
  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  return <>{!isLaptop ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
