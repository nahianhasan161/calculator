import React from "react";

export const TextInput = ({ label, id, unit }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between">
        <div className="w-24">
          <label htmlFor={id} className="mr-2 font-bold">
            {label}
          </label>
        </div>

        <input
          type="text"
          id={id}
          className="border rounded px-2 py-1 bg-[#D9D9D9]"
        />
        <label htmlFor={id} className="ml-2 font-semibold">
          {unit}
        </label>
      </div>
    </div>
  );
};

export const CheckboxInput = ({ label }) => {
    return (
      <div className="flex flex-col items-start ">
        <div className="flex items-center justify-between">
          <div className="w-28">
            <label className=" font-bold">{label}</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              className="form-checkbox bg-[##D9D9D9] rounded-full h-5 w-5 text-indigo-600"
            />
          </div>
        </div>
      </div>
    );
  };
  