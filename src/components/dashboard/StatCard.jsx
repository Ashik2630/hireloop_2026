// components/StatCard.jsx
import { Card } from "@heroui/react";

export default function StatCard({ title, value, Icon }) {
  return (
    <Card className="bg-[#18181b] border border-white/10 rounded-xl w-full">
      {/* Updated to use HeroUI v3 dot notation */}
      <Card.Content className="p-5 flex flex-col justify-between min-h-35">
        
        {/* Icon Wrapper */}
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4">
          <Icon width={20} height={20} />
        </div>
        
        {/* Text Details */}
        <div className="flex flex-col gap-2">
          <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
            {title}
          </p>
          <h4 className="text-2xl sm:text-3xl font-semibold text-white">
            {value}
          </h4>
        </div>

      </Card.Content>
    </Card>
  );
}