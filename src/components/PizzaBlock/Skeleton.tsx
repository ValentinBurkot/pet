import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="129" r="131" />
    <rect x="9" y="420" rx="10" ry="10" width="90" height="27" />
    <rect x="123" y="411" rx="26" ry="26" width="152" height="45" />
    <rect x="1" y="306" rx="6" ry="6" width="280" height="89" />
    <rect x="3" y="270" rx="0" ry="0" width="280" height="27" />
    <rect x="182" y="116" rx="0" ry="0" width="11" height="0" />
  </ContentLoader>
);

export default Skeleton;
