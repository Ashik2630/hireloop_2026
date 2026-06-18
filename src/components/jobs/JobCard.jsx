/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Button, Chip } from "@heroui/react";
import { Briefcase, MapPin, ArrowRight } from "@gravity-ui/icons";

export default function JobCard({ data }) {
  // Graceful fallback while data is loading or empty
  
  if (!data) {
    return <div className="text-zinc-500 text-sm">Loading job data...</div>;
  }

  // Safely extract values with default fallbacks
  const {
    _id,
    jobTitle = "Untitled Position",
    jobCategory = "General",
    jobType = "Full-time",
    minSalary,
    maxSalary,
    currency = "USD",
    deadline,
    responsibilities = "",
    isRemote = false,
    status = "active",
    logo = null,
  } = data;

  // Format salary (e.g., $130k - $200k)
  const formatSalary = (min, max, curr) => {
    if (!min || !max) return "Competitive";
    const symbol = curr === "USD" ? "$" : `${curr} `;
    const minK = parseInt(min) / 1000;
    const maxK = parseInt(max) / 1000;
    return `${symbol}${minK}k - ${maxK}k`;
  };

  return (
    <Card className="w-full max-w-100 border border-zinc-800 bg-zinc-900/50 p-5 text-zinc-100 backdrop-blur-md rounded-2xl">
      {/* Header Section: Logo, Title, and Verification Status */}
      <Card.Header className="flex flex-col items-start gap-4 p-0">
        <div className="flex w-full items-start justify-between">
          {/* Company Dynamic Initials Placeholder */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl  shadow-lg text-white font-bold text-lg  uppercase">
            {logo ? (<img src={logo} alt={`${jobTitle} logo`} className="h-10 w-10 object-cover rounded-lg" />) : jobTitle.slice(0, 2)}
          </div>

          {/* Status Badge */}
          {status === "active" && (
            <Chip
              size="sm"
              variant="flat"
              className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider"
            >
              ✓ Verified
            </Chip>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold tracking-tight text-white line-clamp-1">
            {jobTitle}
          </h3>
          <p className="text-sm text-zinc-400 font-medium line-clamp-2">
            {responsibilities}
          </p>
        </div>
      </Card.Header>

      {/* Content Section: Category, Workplace Type, and Salary */}
      <Card.Content className="flex flex-col gap-4 px-0 py-5">
        {/* Metadata Chips */}
        <div className="flex flex-wrap gap-2">
          <Chip
            variant="bordered"
            className="border-zinc-800 text-zinc-300 bg-zinc-900 text-xs capitalize px-2"
          >
            <div className="flex items-center gap-1.5">
              <Briefcase className="text-zinc-400" width={14} />
              <span>{jobCategory}</span>
            </div>
          </Chip>

          <Chip
            variant="bordered"
            className="border-zinc-800 text-zinc-300 bg-zinc-900 text-xs capitalize px-2"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="text-zinc-400" width={14} />
              <span>
                {isRemote ? "Remote" : "On-site"} • {jobType}
              </span>
            </div>
          </Chip>
        </div>

        {/* Salary Display */}
        <div className="flex flex-col gap-1 pt-1">
          <span className="text-xs uppercase font-semibold tracking-wider text-zinc-500">
            Est. Salary Range
          </span>
          <span className="text-lg font-bold text-zinc-200">
            {formatSalary(minSalary, maxSalary, currency)}
          </span>
        </div>
      </Card.Content>

      <hr className="border-zinc-800/80 my-1" />

      {/* Footer Section: Deadline & Apply Action */}
      <Card.Footer className="flex items-center justify-between p-0 pt-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-medium tracking-wider text-zinc-500">
            Apply Before
          </span>
          <span className="text-xs font-medium text-zinc-400">
            {deadline || "N/A"}
          </span>
        </div>

        <Button
          as="a"
          href={`/jobs/${_id?.$oid || ""}`}
          endContent={<ArrowRight width={16} />}
          className="bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors shadow-sm text-sm px-4 h-9 rounded-xl"
        >
          View Openings
        </Button>
      </Card.Footer>
    </Card>
  );
}
