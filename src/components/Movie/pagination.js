import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({ currentPage, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-5 mb-6">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-3 border rounded"
      >
        <IoIosArrowBack />
      </button>
      <span className="mx-2 py-3 px-2">{currentPage}</span>
      <button onClick={handleNext} className="p-3 border rounded">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
