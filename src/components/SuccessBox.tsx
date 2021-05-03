import { HTMLAttributes, useEffect, useState } from 'react';

import './SuccessBox.css';

interface SuccessBoxProps extends HTMLAttributes<HTMLOrSVGElement> {
  success?: Boolean;
}

export default function SuccessBox({success, children}: SuccessBoxProps) {
  const [fade, setFade] = useState('');
  const [display, setDisplay] = useState('none')
  useEffect(() => {
    if(success) setDisplay('flex');
    
    const fadeTime = setTimeout(() => {
      setFade('fade');
    }, 3000);
  
    const noDisplayTime =setTimeout(() => {
      setDisplay('none')
    }, 5001);

    return () => {
      clearTimeout(fadeTime)
      clearTimeout(noDisplayTime)
    }
  }, [success, children]);


  return (
    <h2 className={'SuccessBox ' + fade} style={{display}}>
      {children}
    </h2>
  );
}
