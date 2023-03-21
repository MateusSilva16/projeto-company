import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {

  const [breakpoint, setBreakpoint] = useState('');
  const [isOpened, setOpened] = useState(true);

  const verifyBreackpoints = (value) => {
    switch (true) {
      case value <= 600:
        return "xs";
      case value > 600 && value < 960:
        return "sm";
      case value >= 960 && value < 1264:
        return "md";
      case value >=  1264 && value < 1904:
          return "lg";
      default:
        return "xl"
    }
  };
  

  const getWindowSize = () => {
    if (typeof window === "undefined") return null;
    const { innerWidth, innerHeight } = window;
    setBreakpoint(verifyBreackpoints(innerWidth))
    return { innerWidth, innerHeight };
  };

  const [user, setUser] = useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize);


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{ user, setUser, isOpened, setOpened, breakpoint, windowSize }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const contextApp = () => React.useContext(AppContext);

export default AppProvider;
