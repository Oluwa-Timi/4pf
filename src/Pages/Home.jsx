import React, { useState } from "react";
import { Link } from "react-router-dom";
import First from "../component/First";
import Landing from "../component/Landing";
import Selection from "../component/Selection";
import Wallet from "../component/Wallet";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Wallet setIsOpen={setIsOpen} />}
      <First isOpen={isOpen} setIsOpen={setIsOpen} />
      <Landing isOpen={isOpen} setIsOpen={setIsOpen} />
      <Selection />
    </>
  );
}
