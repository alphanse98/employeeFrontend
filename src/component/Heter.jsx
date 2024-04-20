import React from "react";

const Heter = () => {
    // let history = useHistory();
    return (
    <div className="w-full text-gray-700 bg-white p-5 flex justify-between">
      <p>Employee Management app</p>
      <div className="flex gap-8">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="login">Login</a>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="Register">Resigter</a>
      </div>
    </div>
  );
};

export default Heter;
