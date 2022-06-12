import React from "react";

function Services() {
  return (
    <div className="grid justify-center">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-5 m-2 border-b-2 border-slate-400">
          Services
        </h1>
      </div>
      <div className="grid justify-center w-96">
        <div className="border-2 border-slate-400 rounded-lg p-2 m-2">
          <h3 className="text-xl border-b-2 border-slate-500">
            Service number 1
          </h3>
          <p>Description:</p>
          <ul>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>

        <div className="border-2 border-slate-400 rounded-lg p-2 m-2">
          <h3 className="text-xl border-b-2 border-slate-500">
            Service number 2
          </h3>
          <p>Description:</p>
          <ul>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>

        <div className="border-2 border-slate-400 rounded-lg p-2 m-2">
          <h3 className="text-xl border-b-2 border-slate-500">
            Service number 3
          </h3>
          <p>Description:</p>
          <ul>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
