import React, { useState, useEffect } from "react";
import NothingFound from "./NothingFound";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import RepoList from "./RepoList";
import { debounce } from "lodash";
import ButtonLoader from "../common/Buttonloader/ButtonLoader";
import axios from "axios";

const SearchResult = () => {
  const [loader, setLoader] = useState(true);
  const [allRepo, setAllRepo] = useState([]);
  const [currentButton, setCurrentButton] = useState(1);
  const [page, setPage] = useState("");
  const [sort, setSort] = useState(`sort=&order=`);
  const [totalCount, setTotalCount] = useState("");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(10);
  console.log(search);
  //search optimization
  const handleChange = debounce(({ target: { value } }) => {
    setSearch(value);
    setLoader(true);
  }, 500);

  const getAllRepo = async (signal) => {
    await axios
      .get(
        `http://localhost:8001/repo/list?q=${
          search || "freecodecamp"
        }&page=${currentButton}&per_page=${size}&${sort}`,
        {
          signal,
        }
      )
      .then((res) => {
        setLoader(false);
        setPage(Math.ceil(res.data?.data?.total_count / size));
        setAllRepo(res.data?.data?.items);
        setTotalCount(res?.data?.data?.total_count);
      })
      .catch((err) => {
        if (err?.message === "canceled") return;
        console.log(err.message);
        setLoader(false);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    getAllRepo(signal);

    return () => controller.abort();
  }, [search, currentButton, sort, size]);
  console.log(allRepo);
  return (
    <div className=" px-12 md:px-24  py-12">
      <div className="flex flex-col p-8 ">
        <div className="bg-white rounded-lg shadow-xl border flex flex-col w-full py-8">
          <div className="flex relative justify-between items-center space-x-1 px-10 border-b border-gray-300 py-4 text-lg font-semibold uppercase tracking-wide w-full text-gray-700 ">
            <div>ALL REPOS</div>
          </div>

          <SearchBar
            handleChange={handleChange}
            search={search}
            setCurrentButton={setCurrentButton}
            setSize={setSize}
            setLoader={setLoader}
          />

          {loader ? (
            <ButtonLoader />
          ) : !loader && !totalCount ? (
            <NothingFound />
          ) : (
            <>
              <RepoList
                allRepo={allRepo}
                totalCount={totalCount}
                setSort={setSort}
              />
              <div className="mt-6 mb-3 py-3 rounded-lg mx-5">
                <Pagination
                  setCurrentButton={setCurrentButton}
                  currentButton={currentButton}
                  page={page}
                  setMainLoader={setLoader}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
