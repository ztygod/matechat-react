import { Bubble } from '@matechat/react';
import avatar from './avatar.png';

export default function BubbleDemo() {
  return (
    <div className="bg-[#f9fafb] p-4 rounded-[12px] shadow-md mb-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 justify-start">
          <img src={avatar} alt="Bot" className="w-8 h-8 rounded-full" />
          <Bubble text="Hello, how can I help you?" />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Bubble text="I want to know the product features!" />
          <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex items-center gap-2 justify-start">
          <img src={avatar} alt="Bot" className="w-8 h-8 rounded-full" />
          <Bubble text="OK, please wait..." isPending />
        </div>
      </div>
    </div>
  );
}