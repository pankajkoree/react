"use client";

const Clicker = ({ data }) => {
  //   function getFullImage(image) {
  //     // console.log(image)
  //     // const imgDiv = document.createElement("div");
  //     // imgDiv.innerHTML = `
  //     // <<img src={image} alt="" />
  //     // `;
  //     // document.body.appendChild(imgDiv);
  //     console.log(image);
  //   }
  return (
    <div className="relative bg-blue-500 flex left-28 p-2 rounded-lg w-[120px]">
      <button
        onClick={() => {
          alert(data);
        }}
      >
        Get Full Image
      </button>
      <img src="" alt="" />
    </div>
  );
};

export default Clicker;
