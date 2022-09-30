import { useState, useEffect } from 'react';

import { Desktop } from './desktop';
import { Laptop } from './laptop';
import { Mobile } from './mobile';
import { Ipad } from './ipad';


export const Loader = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setResize();
  });

  const setResize = () => {
    const resize = window.innerWidth;
    if (resize >= 0 && resize <= 999) {
      setIsMobile(true);
    } else if (resize >= 1000 && resize <= 1199) {
      setIsIpad(true);
    } else if (resize >= 1200 && resize <= 1679) {
      setIsLaptop(true);
    } else if (resize >= 1680) {
      setIsDesktop(true);
    }
  }

  return (
    <>
      {isDesktop && <Desktop />}
      {isLaptop && <Laptop />}
      {isIpad && <Ipad />}
      {isMobile && <Mobile />}
    </>
  )

}