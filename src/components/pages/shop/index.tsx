import React, { useState } from "react";

// COMPONENTS
import ShopContent from "./components/content";
import Layout from "components/layout";

// ENV
import ShopContext, { defFormData } from "./context";

const ShopPage: React.FC = () => {
  // FORM
  const [formData] = useState<ShopContext>({ ...defFormData });

  return (
    <ShopContext.Provider value={{ ...formData }}>
      <Layout>
        <ShopContent />
      </Layout>
    </ShopContext.Provider>
  );
};

export default ShopPage;
