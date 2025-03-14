"use client";

import type React from "react";

import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  items: DropdownItem[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
}

export function DropdownCustom({
  items,
  placeholder = "Select an option",
  value,
  onChange,
  className,
  buttonClassName,
  menuClassName,
  itemClassName,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    items.find((item) => item.value === value)
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedItem(items.find((item) => item.value === value));
  }, [value, items]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange?.(item.value);
  };

  return (
    <div className={classNames("relative", className)} ref={dropdownRef}>
      <button
        type="button"
        className={classNames(
          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2",
          buttonClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedItem?.label || placeholder}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div
          className={classNames(
            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",
            menuClassName
          )}
          role="listbox"
        >
          {items.map((item) => (
            <div
              key={item.value}
              className={classNames(
                "flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100",
                selectedItem?.value === item.value &&
                  "bg-green-50 text-green-700",
                itemClassName
              )}
              onClick={() => handleSelect(item)}
              role="option"
              aria-selected={selectedItem?.value === item.value}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
