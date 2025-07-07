import { Bubble } from "@matechat/react";
import avatar from "./avatar.png";

export default function BubbleDemo() {
  return (
    <div className="bg-[#f9fafb] p-4 rounded-[12px] shadow-md mb-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 justify-start">
          <img src={avatar} alt="Bot" className="w-8 h-8 rounded-full" />
          <Bubble text="您好，请问有什么可以帮您？" />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Bubble text="我想了解一下产品功能！" />
          <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex items-center gap-2 justify-start">
          <img src={avatar} alt="Bot" className="w-8 h-8 rounded-full" />
          <Bubble text="好的，请稍等..." isPending />
        </div>
      </div>
    </div>
  );
}
