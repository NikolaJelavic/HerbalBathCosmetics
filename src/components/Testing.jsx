

import { Link } from "react-router-dom";

export default function Testing() {

  const links = [
    { label: "istqb", path: "/istqb" },
    { label: "pentest", path: "/pentest" },
    { label: "xss", path: "/xss" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="text-stone-900 hover:text-green-600 font-black text-xl flex"
      >
        {link.label}
      </Link>
    );
  });
    
  return (
    <div className="text-stone-900 font-black hover:text-green-600 text-xl">
        {renderedLinks}
    </div>
  );
}
