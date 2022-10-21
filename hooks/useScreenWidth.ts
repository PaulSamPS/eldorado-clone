import React from 'react';

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = React.useState<number>(1000);

  const debounce = (func: () => void) => {
    let timer: number | undefined;
    return (event: UIEvent) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 150, event);
    };
  };

  React.useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', debounce(resizeWindow));
    resizeWindow();
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return screenWidth;
};
