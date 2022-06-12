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
          <h3 className=" p-1 text-2xl rounded-t-md border-b-2 border-slate-500 bg-slate-200">
            Portraits
          </h3>
          <div className="flex justify-center">
            <p className="font-bold text-xl p-1 m-1">Description:</p>
            <p className="text-lg p-1 m-1 w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellendus laborum, animi accusantium maxime dolorum iste quaerat
              ab odit error omnis nihil numquam, dicta nam delectus iusto eos
              quos recusandae?
            </p>
          </div>
        </div>

        <div className="border-2 border-slate-400 rounded-lg p-2 m-2">
          <h3 className="p-1 text-2xl rounded-t-md border-b-2 border-slate-500 bg-slate-200">
            Weddings
          </h3>
          <div className="flex justify-center">
            <p className="font-bold text-xl p-1 m-1">Description:</p>
            <p className="text-lg p-1 m-1 w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellendus laborum, animi accusantium maxime dolorum iste quaerat
              ab odit error omnis nihil numquam, dicta nam delectus iusto eos
              quos recusandae?
            </p>
          </div>
        </div>

        <div className="border-2 border-slate-400 rounded-lg p-2 m-2">
          <h3 className="p-1 text-2xl rounded-t-md border-b-2 border-slate-500 bg-slate-200">
            Real Estate
          </h3>
          <div className="flex justify-center">
            <p className="font-bold text-xl p-1 m-1">Description:</p>
            <p className="text-lg p-1 m-1 w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellendus laborum, animi accusantium maxime dolorum iste quaerat
              ab odit error omnis nihil numquam, dicta nam delectus iusto eos
              quos recusandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
