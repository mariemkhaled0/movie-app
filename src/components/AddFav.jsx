import React from "react";

const AddFav = () => {
  return (
    <>
      <span className="m-1">Add to favorite</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="red"
        className="bi bi-heart-fill mt-1"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
    </>
  );
};

export default AddFav;
