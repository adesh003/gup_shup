import React from "react";
import User from "./User";
import Message from "./Message";
import { IoSend } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className="h-screen w-full flex flex-col border-l border-l-white/10">
      {/* Top user section */}
      <div className="p-1 border-b border-b-white/10">
        <User />
      </div>

      {/* Messages area - grows to fill space */}
      <div className="flex-1 overflow-y-auto mt-5 p-4">
        <Message />
      </div>

      {/* Input box fixed at bottom */}
      <div className="p-3 border-t border-t-white/10">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-primary w-full"
        />
        <IoSend></IoSend>
      </div>
    </div>
  );
};

export default MessageContainer;
