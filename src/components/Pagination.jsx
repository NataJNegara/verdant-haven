import { useEffect } from "react";

export default function Pagination({
  setCurrentPage,
  pageCount,
  currentPage,
  plantsCount,
  indexOfLastItem,
}) {
  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage]);

  const handleNext = () => {
    if (pageCount === currentPage) return;
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (pageCount === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="font-semibold">
        Showing {currentPage === pageCount ? plantsCount : indexOfLastItem}{" "}
        result of {plantsCount}
      </p>
      <div className="grid max-w-sm grid-cols-2 join">
        <button
          className="join-item btn btn-outline"
          disabled={currentPage === 1}
          onClick={handlePrevious}>
          Previous page
        </button>
        <button
          className="join-item btn btn-outline"
          disabled={currentPage === pageCount}
          onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
