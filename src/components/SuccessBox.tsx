import { HTMLAttributes, useEffect, useState } from 'react';

import './SuccessBox.css';

interface SuccessBoxProps extends HTMLAttributes<HTMLOrSVGElement> {
  success?: Boolean;
}

export default function SuccessBox({success, children}: SuccessBoxProps) {
  const [fade, setFade] = useState('');
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    console.log(success, children)
    if(success) setDisplay('flex');

    setTimeout(() => {
      setFade('fade');
    }, 3000);

    setTimeout(() => {
      setDisplay('none')
    }, 5001);
  }, []);


  return (
    <span className={'SuccessBox ' + fade} style={{display}}>
      {children}
    </span>
  );
}
