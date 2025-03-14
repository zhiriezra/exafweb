"use client";

import classNames from "classnames";
import type React from "react";

import { useState } from "react";
interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
  variant?: "underline" | "pills" | "boxed";
}

export function TabsCustom({
  tabs,
  defaultTab,
  className,
  tabsClassName,
  contentClassName,
  variant = "underline",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const getTabStyles = (tabId: string) => {
    const isActive = activeTab === tabId;

    if (variant === "underline") {
      return classNames(
        "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
        isActive
          ? "border-green-600 text-green-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      );
    }

    if (variant === "pills") {
      return classNames(
        "px-4 py-2 text-sm font-medium rounded-full transition-colors",
        isActive
          ? "bg-green-600 text-white"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
      );
    }

    if (variant === "boxed") {
      return classNames(
        "px-4 py-2 text-sm font-medium border transition-colors",
        isActive
          ? "bg-white border-gray-200 border-b-white rounded-t-lg"
          : "border-transparent text-gray-500 hover:text-gray-700"
      );
    }

    return "";
  };

  return (
    <div className={className}>
      <div
        className={classNames(
          "flex",
          variant === "underline" && "border-b border-gray-200",
          variant === "pills" && "space-x-2",
          variant === "boxed" && "border-b border-gray-200",
          tabsClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={getTabStyles(tab.id)}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={classNames("mt-4", contentClassName)}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
