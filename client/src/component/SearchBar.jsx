import React from "react";
import IconManager from "../assets/IconManager";


const SearchBar = ({
  handleChange,
  search,
  setCurrentButton,
  setSize,
  setLoader,
}) => {
  return (
    <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col">
      <form className="w-full">
        <div className="rounded-md max-w-xl relative mx-5 mt-5 mb-4">
          <input
            type={!search ? "text" : "search"}
            className="formInput "
            placeholder="Search  here..."
            onChange={(e) => {
              handleChange(e);

              setCurrentButton(1);
            }}
          />
          {!search && (
            <div className="absolute right-0  rounded-md  h-12 w-12 flex cursor-pointer items-center justify-center text-xl bottom-0.5 text-[#007057a6]">
              <IconManager icon="search" />
            </div>
          )}
        </div>
      </form>
      <div className=" pr-6  ">
        <select
          name=""
          id=""
          className="focus:outline-none rounded py-2 bg-gray-50 shadow-xl px-2"
          onChange={(e) => {
            setLoader(true);
            setSize(e.target.value);
            setCurrentButton(1);
          }}
        >
          <option value="10">Choose page size</option>

          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
