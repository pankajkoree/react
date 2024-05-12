import React, { useState } from "react";
import Model from "./Model";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>Contact page</h1>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={
          <p className="text-3xl text-center font-bold text-red-400">Hi ✋</p>
        }
        footer={
          <div className="flex justify-center bg-slate-400">
            <button className="text-2xl font-bold text-white">Okay 😂</button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure libero
          ab natus dignissimos? Corporis, pariatur. Illo asperiores facere ipsum
          animi quam nulla laudantium? Suscipit consequuntur vero, harum aliquid
          excepturi sapiente.
        </p>
      </Model>
    </>
  );
}
