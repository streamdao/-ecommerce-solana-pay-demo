import React, { useContext } from "react";

// COMPONENTS
import ShopContext from "components/pages/shop/context";
import Topbar from "./topbar";

// STYLES
import Styles from "./style.module.scss";

const Layout: React.FC = ({ children }) => {
  // PROPS
  const { color, dotColor } = useContext(ShopContext);

  return (
    <main className={Styles.main} style={{ background: color }}>
      <Topbar />
      <div className={Styles.circle} style={{ background: dotColor }} />
      <div className={Styles.content}>{children}</div>
    </main>
  );
};

export default Layout;
