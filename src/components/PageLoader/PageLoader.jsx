import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./PageLoader.module.css";
import loadingimage from "../../assets/img/logo/logo-redimensionada.png"

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      // Simulação do carregamento do site
      const totalSteps = 100;
      for (let step = 1; step <= totalSteps; step++) {
        await new Promise((resolve) => setTimeout(resolve, 20));
        const progress = (step / totalSteps) * 100;
        setProgress(progress);
      }

      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className={cn(styles.preloader)}>
        <div className={cn(styles.spinner)}>
        <img className={cn(styles.loadingimage)} src={loadingimage} alt="Loading" />
        <div className={cn(styles["progress-bar"])} style={{ width: `${progress}%`}}></div>
        </div>        
      </div>
    );
  } else {
    return null;
  }
};

export default PageLoader;
