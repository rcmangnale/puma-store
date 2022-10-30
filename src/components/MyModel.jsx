import React from "react";

export default function MyModal({ visible, onClose }) {
  
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
      };
    if (!visible) return null;
  
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Checkout Details 
        </h1>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="FullName"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Email"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Mobile Number"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Address"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button onClick={()=>{ alert('Order Placed'); }} className="px-5 py-2 bg-gray-700 text-white rounded">
            place Order
          </button>
        </div>
      </div>
    </div>
  );
}
