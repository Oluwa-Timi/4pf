import React from 'react';
import { Link } from 'react-router-dom';
import First from '../component/First';
import Landing from '../component/Landing';
import Selection from '../component/Selection';

export default function Home() {
  return (
    <>
      <First />
      <Landing />
      <Selection />
      
    </>
  );
}
