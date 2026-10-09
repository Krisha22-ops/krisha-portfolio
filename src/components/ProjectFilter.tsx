"use client";

import { useState } from "react";

type ProjectFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export default function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => onSelectCategory("All")}
          className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
            selectedCategory === "All"
              ? "bg-[var(--charcoal)] text-[var(--warm-white)] shadow-md"
              : "border border-[var(--border)] bg-[var(--warm-white)] text-[var(--charcoal)]/80 hover:bg-[var(--border)]/40"
          }`}
        >
          All Work ({categories.length ? "All" : ""})
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === category
                ? "bg-[var(--charcoal)] text-[var(--warm-white)] shadow-md"
                : "border border-[var(--border)] bg-[var(--warm-white)] text-[var(--charcoal)]/80 hover:bg-[var(--border)]/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input Box */}
      <div className="relative w-full lg:w-72">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search SQL, Power BI, Python..."
          className="w-full rounded-full border border-[var(--border)] bg-[var(--warm-white)] px-5 py-2.5 pl-10 text-xs text-[var(--charcoal)] placeholder:text-[var(--muted)] focus:border-[var(--charcoal)] focus:outline-none focus:ring-1 focus:ring-[var(--charcoal)]"
        />
        <svg
          className="absolute left-3.5 top-3 h-4 w-4 text-[var(--muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3.5 top-2.5 text-xs text-[var(--muted)] hover:text-[var(--charcoal)]"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
