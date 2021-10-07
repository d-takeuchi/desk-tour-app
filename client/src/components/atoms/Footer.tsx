import React from "react";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021
            <a
              href="https://www.tailwind-elements.com/"
              className="text-gray-600 ml-1"
            >
              Takeuchi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
