import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./PageLoader.module.css";
import loadingimage from "../../assets/img/logo/logo-redimensionada.png"

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className={cn(styles.preloader)}>
        <div className={cn(styles.spinner)}>
        <img className={cn(styles.loadingimage)} src={loadingimage} alt="Loading" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PageLoader;
