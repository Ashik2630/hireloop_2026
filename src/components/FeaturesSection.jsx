import React from 'react';
// Assuming lucide-react is used for the icons based on your design language
import { 
  Search, 
  TrendingUp, 
  Building2, 
  Bookmark, 
  MousePointerClick, 
  FileText, 
  Hexagon, 
  ArrowUpRight 
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Search className="h-5 w-5 text-purple-400" />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters."
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-purple-400" />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently."
    },
    {
      icon: <Building2 className="h-5 w-5 text-purple-400" />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring."
    },
    {
      icon: <Bookmark className="h-5 w-5 text-purple-400" />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard."
    },
    {
      icon: <MousePointerClick className="h-5 w-5 text-purple-400" />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!"
    },
    {
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates."
    },
    {
      icon: <Hexagon className="h-5 w-5 text-purple-400" />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience."
    },
    {
      icon: <ArrowUpRight className="h-5 w-5 text-purple-400" />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips."
    }
  ];

  return (
    <section className="w-full bg-[#0B0B0F] py-20 px-6 md:px-12 lg:px-24 text-zinc-100 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-sm"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Features Job
          </span>
          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-sm"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight max-w-xl mb-16 bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Everything you need to succeed
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 group">
              
              {/* Icon Container with subtle gradient border & inner glow */}
              <div className="flex items-center justify-center h-12 w-12 shrink-0 rounded-xl bg-linear-to-b from-zinc-900 to-zinc-950 border border-zinc-800 shadow-md group-hover:border-zinc-700 transition-colors duration-200">
                {feature.icon}
              </div>

              {/* Text Meta */}
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="text-[15px] font-medium text-zinc-200 group-hover:text-white transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-55">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}