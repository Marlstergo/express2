import React from "react";
import PropTypes from "prop-types";


import Layout from "./Layout";

export default function LayoutMDX({ children }) {
  return (
    <Layout>
      {/* https://github.com/tailwindlabs/tailwindcss-typography */}
      <article
        style={{
          fontSize: "20" /* 20px */,
          lineHeight: 1.8,
        }}
        // tw="prose lg:prose-xl"
      >
        {children}
      </article>
    </Layout>
  );
}

LayoutMDX.propTypes = {
  children: PropTypes.node.isRequired,
};
