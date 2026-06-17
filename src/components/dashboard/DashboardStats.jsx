// components/DashboardStats.jsx
import StatCard from "./StatCard";

export default function DashboardStats({ statsData }) {
  if (!statsData || statsData.length === 0) {
    return <p className="text-zinc-400">No stats available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6  ">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          Icon={stat.icon}
        />
      ))}
    </div>
  );
}