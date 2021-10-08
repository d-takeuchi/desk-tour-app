import React, { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col ">
          <p className="text-gray-500 text-sm text-center">© 2021 Takeuchi</p>
        </div>
      </div>
    </footer>
  );
};
