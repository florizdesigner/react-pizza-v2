import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./index.module.scss";

export const LoaderItem = (props) => (
  <div className={styles.loader_item}>
    <ContentLoader
      speed={2}
      width={220}
      height={436}
      viewBox="0 0 220 436"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="16" y="NaN" rx="0" ry="0" width="220" height="NaN" />
      <circle cx="110" cy="110" r="110" />
      <rect x="0" y="284" rx="10" ry="10" width="220" height="73" />
      <rect x="-1" y="240" rx="10" ry="10" width="220" height="24" />
      <rect x="0" y="377" rx="15" ry="15" width="100" height="36" />
      <rect x="120" y="377" rx="15" ry="15" width="100" height="36" />
    </ContentLoader>
  </div>
);
