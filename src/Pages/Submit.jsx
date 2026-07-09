import React from 'react';
import { useLocation } from 'react-router-dom';
import Last from '../component/Last';

export default function Submit() {
  const location = useLocation();
  const selectedWallet = location.state?.selectedWallet;

  return (
    <>
      <Last selectedWallet={selectedWallet} />
      
    </>
  );
}
