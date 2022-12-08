import React from "react";
import IconManager from "../assets/IconManager";
import Profile from "../assets/Images/biraj.jpeg";

const RepoList = ({ allRepo, totalCount, setSort }) => {
  return (
    <div className="w-full px-5 h-full my-4 flex flex-col mt-4">
      <div className="mb-4">
        <div className="text-xl font-semibold text-gray-600 pl-4">
          <span>
            Total Repos:<span className="text-[#007057a6]">{totalCount}</span>
          </span>{" "}
        </div>
      </div>

      <div className="flex flex-col border-gray-300 overflow-x-auto border divide-y divide-gray-300 rounded-md">
        <table
          className="table-fixed overflow-x-auto"
          style={{ minWidth: 900 }}
        >
          <thead>
            <tr className="bg-[#007057a6] border-b border-gray-300 w-full text-sm text-white">
              <th className="py-3 w-48">Author</th>

              <th className="py-3 w-48 md:w-40">
                <div className="flex items-center justify-center  ">
                  <div
                    onClick={() => setSort(`sort=stars&order=asc`)}
                    className="cursor-pointer"
                  >
                    <IconManager icon={"asc"} />
                  </div>
                  <div>No of Stars</div>
                  <div
                    onClick={() => setSort(`sort=stars&order=desc`)}
                    className="cursor-pointer"
                  >
                    <IconManager icon={"desc"} />
                  </div>
                </div>
              </th>

     
              <th className="py-3 w-60">
                <div className="flex items-center justify-center  ">
                  <div
                    onClick={() => setSort(`sort=watchers&order=asc`)}
                    className="cursor-pointer"
                  >
                    <IconManager icon={"asc"} />
                  </div>
                  <div>No of Watchers</div>
                  <div
                    onClick={() => setSort(`sort=watchers&order=desc`)}
                    className="cursor-pointer"
                  >
                    <IconManager icon={"desc"} />
                  </div>
                </div>
              </th>


              <th className="py-3  w-48 md:w-40">
                <div className="flex items-center justify-center  ">
                  <div
                    onClick={() => setSort(`sort=forks&order=asc`)}
                    className="cursor-pointer"
                  >
                    <IconManager icon={"asc"} />
                  </div>
                  <div>No of Forks</div>
                  <div
                    onClick={() => setSort(`sort=forks&order=desc`)}
                    className="cursor-pointer"
                  >
                    <IconManager icon={"desc"} />
                  </div>
                </div>
              </th>

              <th className="py-3 w-96">Description</th>

              <th className="py-3">Updated Date</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {allRepo?.map((repo) => {
              return (
                <tr
                  className="text-gray-600 hover:bg-gray-50 cursor-pointer"
                  key={repo?.id}
                >
                  <td className="text-center py-2 ">{repo?.owner?.login}</td>

                  <td className="text-center py-2  ">
                    {repo?.stargazers_count}
                  </td>

                  <td className="text-center py-2 ">
                    {repo?.watchers_count}
                  </td>
                  <td className="text-center py-2  ">
                    {repo?.forks_count}
                  </td>

                  <td className="text-center py-2 ">
                    <div>
                      {repo?.description === ""
                        ? "N/A"
                        : repo?.description?.length > 30
                        ? repo?.description?.substring(0, 30) + "..."
                        : repo?.description}
                    </div>
                  </td>
                  <td className="w-32 text-center mx-auto py-2 select-none">
                    <div
                      className={`${
                         "bg-green-200" 
                      } px-2 text-xs uppercase rounded-full p-1`}
                    >
                      {repo?.updated_at?.split("T")?.[0]}
                    </div>
                  </td>

                  {/* actions */}
                  <td className="w-32 mx-auto">
                    <div className="flex items-center justify-center">
                      <div
                        data-tip
                        data-for="detailTip"
                        className="cursor-pointer text-xl p-1 px-3"
                        onClick={
                          () => console.log("hhr")
                          // router.push(`/dashboard/blog/blog-details/${slug}`)
                        }
                      >
                        <span className="text-[#007057a6]">
                          <IconManager icon="detail" />
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepoList;
