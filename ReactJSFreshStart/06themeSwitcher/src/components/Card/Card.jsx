import React from "react";

function Card() {
  return (
    <div>
      <div className="relative flex justify-center top-[200px]">
        <div className="relative w-[40%] h-[560px] flex flex-col bg-[#004953] rounded-[20px] text-white">
          <div className="relative flex justify-center top-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JQVBGtZMqgU?si=IqRHZqBumTeDYv5l"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="relative top-6 text-center text-2xl p-6">
            <div>
              <h1>
                Context API crash course with projects - different approach in
                different projects
              </h1>
            </div>
            <div className="relative flex gap-32 justify-center top-5">
              <h2 className="relative text-3xl p-4 w-40">$430</h2>
              <button className="relative bg-green-600 text-3xl p-4 w-40 rounded-full">
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
