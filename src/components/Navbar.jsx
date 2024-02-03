import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown1 from "./Dropdown1";
import Coding from "./Coding";
// import Dropdown3 from "./ISTQB";
import Testing from "./Testing";

export default function Navbar() {
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible1(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible1(false);
  };
  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };

  const handleMouseEnter3 = () => {
    setDropdownVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setDropdownVisible3(false);
  };
  return (
    <nav className="w-full bg-blue-600 flex pt-4 h-20">
      <ul className="flex justify-around w-full">
        <Link
          to="/"
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          Home
        </Link>
         <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          <div>Dropdown1</div>
          {isDropdownVisible1 && <Dropdown1 />}
        </div>
        <div
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          <div>Coding</div>
          {isDropdownVisible2 && <Coding />}
        </div>
      
        <div
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          <div>Testing</div>
          {isDropdownVisible3 && <Testing />}
        </div>
      </ul>
    </nav>
  );
}
