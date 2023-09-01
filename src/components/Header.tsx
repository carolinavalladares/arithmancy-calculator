import React from "react";

const Header = () => {
  return (
    <header className="py-7 bg-white bg-opacity-10">
      <div className="max-w-5xl mx-auto px-4">
        <div>
          <span>
            <a
              className="text-white hover:text-inherit"
              title="Arithmancy"
              href="/"
            >
              Arithmancy
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
