import React, { useState, useEffect, useMemo } from "react";
const Pagination = ({
  page,
  setCurrentButton,
  currentButton,
 setMainLoader,
}) => {
  const noOfPages = page;
  const [currentPage, setCurrentPage] = useState(1);

  //Set number of pages
  // Current active button number

  const numberOfPages = useMemo(() => {
    let numOfPages = [];
    for (let i = 1; i <= noOfPages; i++) {
      numOfPages.push(i);
    }
    return numOfPages;
    // eslint-disable-next-line
  }, [page]);

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    //Temp no of Pages
    let tempNumberOfPages = [...arrOfCurrButtons];

    //Set dots
    let dotsInitial = "...";
    let dotsLeft = "...";
    let dotsRight = "...";

    if (numberOfPages.length < 6) {
      //num of pages < 6
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      //current button 1 to 3
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      //current button 4
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 2); // sliced2 (5, 5+2) -> [6,7]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, 7,'...', 10]
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice last 4 [7, 8, 9, 10]
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      // [1, "...", 5, 6, 7, 8, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 6 + 2 = 8
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      // [1, "...", 5, 6, 7, 8, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 6 - 2 = 4
      setCurrentButton(arrOfCurrButtons[3] - 2);
    } else if (numberOfPages.length < currentButton) {
      setCurrentButton(1);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton, numberOfPages, currentPage, numberOfPages.length]);

  //for prevuous button
  const handlePrevious = () => {
    if(currentButton<=1){
      setCurrentButton(currentButton)
    }
    else{
      setCurrentButton(currentButton+1)

      setMainLoader(true)
    }
   
  
  };

  //for next
  const handleNext = () => {
    if(currentButton===page){
      setCurrentButton(currentButton)
   

    }
    else{
      setCurrentButton(currentButton+1)
      setMainLoader(true)

    }
   
    
  

   
  };

  //const

  return (
    <>
      <div className="bg-white flex items-center space-x-1.5 mx-auto md:mx-0 justify-center py-3">
        {/* Previous Button */}
        <div
          className={`block py-1.5 px-2 rounded-md ml-0 leading-tight border bg-slate-100 border-slate-200 text-gray-600 + ${
            currentButton === 1
              ? "cursor-not-allowed"
              : " cursor-pointer hover:bg-slate-200 hover:text-slate-700"
          }`}
          onClick={handlePrevious}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        {/* Array of Current Buttons */}
        {arrOfCurrButtons.map((item, index) => {
          return (
            <div
              key={index}
              className={`px-3 py-1 rounded-md  cursor-pointer border border-slate-200 + ${
                currentButton === item
                  ? "bg-[#007057a6] text-white"
                  : "bg-slate-100 text-gray-600 hover:bg-slate-200 hover:text-slate-700"
              }`}
              onClick={() => {
              if(item!=="..."){
                setCurrentButton(item)
                setMainLoader(true)
              }
              }}
            >
              {item}
            </div>
          );
        })}

        {/* Next Button */}
        <div
          className={`block py-1.5 px-2 rounded-md ml-0 leading-tight border bg-slate-100 border-slate-200 text-gray-600 + ${
            currentButton === page
              ? "cursor-not-allowed"
              : " cursor-pointer hover:bg-slate-200 hover:text-slate-700"
          }`}
          onClick={handleNext}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Pagination;
