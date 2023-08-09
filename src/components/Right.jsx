import React from "react";
import { users } from "../content/content";
import { AiTwotoneSound, AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import { FaPen } from "react-icons/fa";

const Right = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 mr-4">
      {/* Top */}
      <div className="flex flex-col bg-white rounded-xl p-4 shadow-3xl gap-2">
        {users.map((user) => (
          <div key={user.id} className="flex flex-row items-center gap-2">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={user.img}
              alt={user.username}
            />
            <p className="text-darkVariant text-[12px]">{user.username}</p>
          </div>
        ))}
      </div>
      <p className="text-xl font-semibold">Reminders</p>
      {/* Bottom */}
      <div className="flex flex-col gap-4">
        {/* Item 1 */}
        <div className="flex flex-row w-full justify-between bg-white items-center p-4 rounded-xl shadow-3xl">
          <div className="flex flex-row gap-4">
            <div className="bg-success rounded-md p-2">
              <AiTwotoneSound className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px]">Workshop</p>
              <p className="text-[10px] text-darkVariant">
                08:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <AiOutlineMore className="text-[24px] cursor-pointer" />
        </div>
        {/* Item 2 */}
        <div className="flex flex-row w-full justify-between bg-white items-center p-4 rounded-xl shadow-3xl">
          <div className="flex flex-row gap-4">
            <div className="bg-danger rounded-md p-2">
              <FaPen className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px]">Workshop</p>
              <p className="text-[10px] text-darkVariant">
                08:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <AiOutlineMore className="text-[24px] cursor-pointer" />
        </div>
        {/* Add Item */}
        <div className="flex flex-row w-full justify-center items-center border-primary border-dotted border-[2px] bg-white p-4 gap-2 rounded-xl shadow-3xl cursor-pointer">
          <AiOutlinePlus className="text-primary" />
          <p className="text-[12px] text-primary">Add Reminders</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
