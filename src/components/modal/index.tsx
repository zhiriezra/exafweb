/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import type React from "react";

import classNames from "classnames";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function ModalCustom({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = "md",
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!mounted || !isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="fixed inset-0 z-0" onClick={onClose} aria-hidden="true" />
      <div
        className={classNames(
          "relative z-10 bg-white rounded-lg shadow-lg w-full overflow-hidden",
          sizeClasses[size],
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-medium">{title}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalHeader({ className, ...props }: ModalHeaderProps) {
  return <div className={classNames("mb-4", className)} {...props} />;
}

export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalFooter({ className, ...props }: ModalFooterProps) {
  return (
    <div
      className={classNames("mt-6 flex justify-end gap-3", className)}
      {...props}
    />
  );
}
