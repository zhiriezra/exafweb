/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

// import { addPropertyControls } from "framer"
import { forwardRef, useEffect, useRef, useState } from "react";

// --------------------------------
// Shared Styles
// --------------------------------

const colors = {
  primary: "#000000",
  primaryForeground: "#ffffff",
  secondary: "#f3f4f6",
  secondaryForeground: "#1f2937",
  accent: "#f3f4f6",
  accentForeground: "#1f2937",
  destructive: "#ef4444",
  destructiveForeground: "#ffffff",
  muted: "#f3f4f6",
  mutedForeground: "#6b7280",
  border: "#e5e7eb",
  input: "#e5e7eb",
  background: "#ffffff",
  foreground: "#1f2937",
  card: "#ffffff",
  cardForeground: "#1f2937",
  popover: "#ffffff",
  popoverForeground: "#1f2937",
  ring: "#22c55e", // Green color
};

// --------------------------------
// API Functions
// --------------------------------

const getStatesFromApi = async (): Promise<any[]> => {
  try {
    const response = await fetch("https://nigerian-states-and-lga.vercel.app/");

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const json = await response.json();

    // Validate the response structure
    if (!Array.isArray(json)) {
      console.error("API did not return an array:", json);
      return [];
    }

    return json;
  } catch (error) {
    console.error("Error in getStatesFromApi:", error);
    // Return empty array instead of throwing
    return [];
  }
};

// --------------------------------
// UI Components Implementation
// --------------------------------

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "destructive"
    | "ghost"
    | "link"
    | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const buttonStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.2s",
    outline: "none",
    position: "relative",
    cursor: "pointer",
  },
  variants: {
    default: {
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    outline: {
      backgroundColor: "transparent",
      color: colors.foreground,
      border: `1px solid ${colors.border}`,
    },
    destructive: {
      backgroundColor: colors.destructive,
      color: colors.destructiveForeground,
    },
    ghost: {
      backgroundColor: "transparent",
      color: colors.foreground,
    },
    link: {
      backgroundColor: "transparent",
      color: colors.primary,
      textDecoration: "underline",
      textUnderlineOffset: "4px",
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.secondaryForeground,
    },
  },
  sizes: {
    default: {
      height: "2.5rem",
      padding: "0.5rem 1rem",
    },
    sm: {
      height: "2.25rem",
      padding: "0.375rem 0.75rem",
      fontSize: "0.75rem",
    },
    lg: {
      height: "2.75rem",
      padding: "0.5rem 2rem",
    },
    icon: {
      height: "2.5rem",
      width: "2.5rem",
      padding: 0,
    },
  },
  hover: {
    default: {
      backgroundColor: "rgba(34, 197, 94, 0.9)", // Green hover color
    },
    outline: {
      backgroundColor: colors.accent,
      color: colors.accentForeground,
    },
    destructive: {
      backgroundColor: "rgba(239, 68, 68, 0.9)",
    },
    ghost: {
      backgroundColor: colors.accent,
      color: colors.accentForeground,
    },
    link: {
      textDecoration: "underline",
    },
    secondary: {
      backgroundColor: "rgba(243, 244, 246, 0.8)",
    },
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      asChild = false,
      style,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyle = buttonStyles.variants[variant];
    const sizeStyle = buttonStyles.sizes[size];
    const hoverStyle = buttonStyles.hover[variant];

    const computedStyle = {
      ...buttonStyles.base,
      ...variantStyle,
      ...sizeStyle,
      ...(disabled ? buttonStyles.disabled : {}),
      ...style,
    };

    return (
      <button
        ref={ref}
        style={computedStyle as any}
        disabled={disabled}
        onMouseOver={(e) => {
          if (!disabled) {
            Object.assign(e.currentTarget.style, hoverStyle);
          }
        }}
        onMouseOut={(e) => {
          if (!disabled) {
            Object.assign(e.currentTarget.style, variantStyle);
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputStyles = {
  base: {
    display: "flex",
    height: "2.5rem",
    width: "100%",
    borderRadius: "0.375rem",
    border: `1px solid ${colors.primary}`,
    backgroundColor: colors.background,
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.2s",
  },
  focus: {
    boxShadow: `0 0 0 2px rgba(34, 197, 94, 0.5)`, // Green focus shadow
    borderColor: colors.primary,
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: colors.muted,
  },
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ style, disabled, ...props }, ref) => {
    const computedStyle = {
      ...inputStyles.base,
      ...(disabled ? inputStyles.disabled : {}),
      ...style,
    };

    return (
      <input
        ref={ref}
        style={computedStyle}
        disabled={disabled}
        onFocus={(e) => {
          if (!disabled) {
            Object.assign(e.currentTarget.style, {
              ...computedStyle,
              // ...inputStyles.focus,
            });
          }
        }}
        onBlur={(e) => {
          if (!disabled) {
            Object.assign(e.currentTarget.style, computedStyle);
          }
        }}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Label Component
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const labelStyles = {
  base: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1,
    userSelect: "none",
    display: "block",
    marginBottom: "0.5rem",
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ style, ...props }, ref) => {
    const computedStyle = {
      ...labelStyles.base,
      ...style,
    };

    return <label ref={ref} style={computedStyle as any} {...props} />;
  }
);
Label.displayName = "Label";

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const cardStyles = {
  card: {
    borderRadius: "0.5rem",
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.card,
    color: colors.cardForeground,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.2s",
  },
  hover: {
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ style, onMouseOver, onMouseOut, ...props }, ref) => {
    const computedStyle = {
      ...cardStyles.card,
      ...style,
    };

    return (
      <div
        ref={ref}
        style={computedStyle}
        onMouseOver={(e) => {
          Object.assign(e.currentTarget.style, {
            ...computedStyle,
            ...cardStyles.hover,
          });
          onMouseOver?.(e);
        }}
        onMouseOut={(e) => {
          Object.assign(e.currentTarget.style, computedStyle);
          onMouseOut?.(e);
        }}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const cardHeaderStyles = {
  header: {
    display: "flex",
    flexDirection: "column" as const,
    padding: "1.5rem",
  },
};

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ style, ...props }, ref) => {
    const computedStyle = {
      ...cardHeaderStyles.header,
      ...style,
    };

    return <div ref={ref} style={computedStyle} {...props} />;
  }
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const cardTitleStyles = {
  title: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "-0.025em",
  },
};

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ style, ...props }, ref) => {
    const computedStyle = {
      ...cardTitleStyles.title,
      ...style,
    };

    return <h3 ref={ref} style={computedStyle} {...props} />;
  }
);
CardTitle.displayName = "CardTitle";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const cardContentStyles = {
  content: {
    padding: "1.5rem",
    paddingTop: 0,
  },
};

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ style, ...props }, ref) => {
    const computedStyle = {
      ...cardContentStyles.content,
      ...style,
    };

    return <div ref={ref} style={computedStyle} {...props} />;
  }
);
CardContent.displayName = "CardContent";

// Toast Hook
type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
};

const toastStyles = {
  container: {
    position: "fixed" as const,
    top: "1rem",
    right: "1rem",
    zIndex: 50,
    borderRadius: "0.375rem",
    padding: "1rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  default: {
    backgroundColor: colors.background,
    color: colors.foreground,
    borderLeft: `4px solid ${colors.primary}`,
  },
  success: {
    backgroundColor: colors.background,
    color: colors.foreground,
    borderLeft: `4px solid #22c55e`, // Green for success
  },
  destructive: {
    backgroundColor: colors.background,
    color: colors.foreground,
    borderLeft: `4px solid ${colors.destructive}`, // Red for errors
  },
  title: {
    fontWeight: 500,
  },
  description: {
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
};

function toast({
  title,
  description,
  variant = "default",
}: ToastProps & { variant?: "default" | "destructive" | "success" }) {
  // Simple implementation that just logs to console
  console.log(`Toast (${variant}): ${title} - ${description}`);

  // In a real implementation, this would show a toast notification
  // For now, we'll create a temporary visual element
  const toastEl = document.createElement("div");
  const containerStyle = {
    ...toastStyles.container,
    ...(variant === "destructive"
      ? toastStyles.destructive
      : variant === "success"
      ? toastStyles.success
      : toastStyles.default),
  };

  Object.assign(toastEl.style, containerStyle);

  const titleEl = document.createElement("div");
  Object.assign(titleEl.style, toastStyles.title);
  titleEl.textContent = title || "";

  const descEl = document.createElement("div");
  Object.assign(descEl.style, toastStyles.description);
  descEl.textContent = description || "";

  toastEl.appendChild(titleEl);
  toastEl.appendChild(descEl);
  document.body.appendChild(toastEl);

  setTimeout(() => {
    toastEl.style.opacity = "0";
    toastEl.style.transition = "opacity 0.3s";
    setTimeout(() => {
      document.body.removeChild(toastEl);
    }, 300);
  }, 3000);
}

// --------------------------------
// Google Maps Integration
// --------------------------------

// Your Google Maps API key
const API_KEY = "AIzaSyDvUlNDxZtGRT8sS1ZgDOD7BV_3fOrvuFA";

// Common countries with their coordinates (as fallback)
const COUNTRIES = [
  { name: "Nigeria", lat: 9.082, lng: 8.6753 },
  { name: "Kenya", lat: -0.0236, lng: 37.9062 },
  { name: "Rwanda", lat: -1.9403, lng: 29.8739 },
  { name: "Ghana", lat: 7.9465, lng: -1.0232 },
];

// Declare global types
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

// Helper function to geocode an address
async function geocodeAddress(address: string): Promise<{
  lat: number;
  lng: number;
  formattedAddress: string;
  bounds?: { north: number; south: number; east: number; west: number };
} | null> {
  try {
    // Use the Google Maps Geocoding API directly
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${API_KEY}`
    );

    const data = await response.json();

    if (data.status === "OK" && data.results && data.results.length > 0) {
      const result = data.results[0];
      const location = result.geometry.location;
      const bounds = result.geometry.bounds || result.geometry.viewport;

      return {
        lat: location.lat,
        lng: location.lng,
        formattedAddress: result.formatted_address,
        bounds: bounds
          ? {
              north: bounds.northeast.lat,
              south: bounds.southwest.lat,
              east: bounds.northeast.lng,
              west: bounds.southwest.lng,
            }
          : undefined,
      };
    }
    return null;
  } catch (error) {
    console.error("Error geocoding address:", error);
    return null;
  }
}

// Helper function to reverse geocode coordinates
async function reverseGeocodeCoordinates(
  lat: number,
  lng: number
): Promise<{
  country: string;
  state?: string;
  formattedAddress: string;
  bounds?: { north: number; south: number; east: number; west: number };
} | null> {
  try {
    // Use the Google Maps Geocoding API directly for reverse geocoding
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    );

    const data = await response.json();

    if (data.status === "OK" && data.results && data.results.length > 0) {
      // Find the administrative_area_level_1 result (state level)
      const stateResult = data.results.find((result: any) =>
        result.types.includes("administrative_area_level_1")
      );

      // Find the country result
      const countryResult = data.results.find((result: any) =>
        result.types.includes("country")
      );

      const result = stateResult || data.results[0];
      const addressComponents = result.address_components;
      const bounds = result.geometry.bounds || result.geometry.viewport;

      let country = "";
      let state = "";

      for (const component of addressComponents) {
        if (component.types.includes("country")) {
          country = component.long_name;
        }
        if (component.types.includes("administrative_area_level_1")) {
          state = component.long_name;
        }
      }

      if (country) {
        return {
          country,
          state,
          formattedAddress: result.formatted_address,
          bounds: bounds
            ? {
                north: bounds.northeast.lat,
                south: bounds.southwest.lat,
                east: bounds.northeast.lng,
                west: bounds.southwest.lng,
              }
            : undefined,
        };
      }
    }
    return null;
  } catch (error) {
    console.error("Error reverse geocoding:", error);
    return null;
  }
}

// Google Map Component
interface GoogleMapProps {
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  onMapClick?: (lat: number, lng: number) => void;
  markers?: Array<{ lat: number; lng: number; title?: string }>;
  selectedLocation?: {
    lat: number;
    lng: number;
    name: string;
    bounds?: { north: number; south: number; east: number; west: number };
  } | null;
  lgaMarkers?: Array<{ lat: number; lng: number; title: string }>;
}

const googleMapStyles = {
  container: {
    position: "relative" as const,
    width: "100%",
    height: "100%",
    minHeight: "400px",
    borderRadius: "0.5rem",
    overflow: "hidden",
    border: `1px solid ${colors.border}`,
  },
  loadingOverlay: {
    position: "absolute" as const,
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(243, 244, 246, 0.75)",
    zIndex: 10,
  },
  loadingSpinner: {
    width: "3rem",
    height: "3rem",
    borderRadius: "9999px",
    border: `4px solid ${colors.primary}`,
    borderTopColor: "transparent",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "0.5rem",
    fontSize: "0.875rem",
    color: colors.mutedForeground,
  },
  map: {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    borderRadius: "0.5rem",
    transition: "opacity 0.3s",
  },
};

const spinAnimation = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

function GoogleMap({
  apiKey,
  center = { lat: 9.082, lng: 8.6753 },
  zoom = 5,
  onMapClick,
  markers = [],
  selectedLocation,
  lgaMarkers = [],
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any | null>(null);
  const [mapMarkers, setMapMarkers] = useState<any[]>([]);
  const [lgaMapMarkers, setLgaMapMarkers] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Add animation keyframes to document
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = spinAnimation;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Load Google Maps API
  useEffect(() => {
    if (typeof window.google?.maps !== "undefined") {
      setIsLoaded(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geocoding&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      (window as any).initMap = undefined;
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey]);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const mapOptions: any = {
      center,
      zoom,
      mapTypeId: "terrain",
      mapTypeControl: true,
      gestureHandling: "greedy",
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ visibility: "on" }],
        },
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          stylers: [{ visibility: "off" }],
        },
      ],
    };

    const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(newMap);

    // Add click listener
    if (onMapClick) {
      newMap.addListener("click", (e: any) => {
        if (e.latLng) {
          onMapClick(e.latLng.lat(), e.latLng.lng());
        }
      });
    }

    return () => {
      // Clean up markers
      mapMarkers.forEach((marker) => marker.setMap(null));
      lgaMapMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [isLoaded, center, zoom, onMapClick]);

  // Update markers when they change
  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    mapMarkers.forEach((marker) => marker.setMap(null));

    // Create new markers
    const newMarkers = markers.map(({ lat, lng, title }) => {
      return new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title,
        animation: window.google.maps.Animation.DROP,
      });
    });

    setMapMarkers(newMarkers);

    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [map, markers]);

  // Update LGA markers when they change
  useEffect(() => {
    if (!map) return;

    // Clear existing LGA markers
    lgaMapMarkers.forEach((marker) => marker.setMap(null));

    // Create new LGA markers with a different icon
    const newLgaMarkers = lgaMarkers.map(({ lat, lng, title }) => {
      return new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title,
        animation: window.google.maps.Animation.DROP,
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
    <svg fill="#22c55e" width="20" height="20" viewBox="0 0 24 24" id="user" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
      <path id="primary" d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z" style="fill: #000000;"></path>
    </svg>
  `),
          scaledSize: new window.google.maps.Size(30, 30),
          anchor: new window.google.maps.Point(15, 15),
        },
      });
    });

    setLgaMapMarkers(newLgaMarkers);

    return () => {
      newLgaMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [map, lgaMarkers]);

  // Handle selected location changes
  useEffect(() => {
    if (!map || !selectedLocation) return;

    if (selectedLocation.bounds) {
      // If we have bounds, fit the map to those bounds
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(
        new window.google.maps.LatLng(
          selectedLocation.bounds.south,
          selectedLocation.bounds.west
        )
      );
      bounds.extend(
        new window.google.maps.LatLng(
          selectedLocation.bounds.north,
          selectedLocation.bounds.east
        )
      );
      map.fitBounds(bounds);
    } else {
      // Otherwise just pan to the location
      map.panTo({
        lat: selectedLocation.lat,
        lng: selectedLocation.lng,
      });

      // Smooth zoom animation
      setTimeout(() => {
        map.setZoom(selectedLocation.name.includes(",") ? 8 : 5);
      }, 300);
    }
  }, [map, selectedLocation]);

  return (
    <div style={googleMapStyles.container}>
      {isLoading && (
        <div style={googleMapStyles.loadingOverlay}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={googleMapStyles.loadingSpinner}></div>
            <p style={googleMapStyles.loadingText}>Loading map...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        style={{
          ...googleMapStyles.map,
          opacity: isLoading ? 0.3 : 1,
        }}
      />
    </div>
  );
}

// --------------------------------
// Country Selector Component
// --------------------------------

interface CountrySelectorProps {
  onLocationSelect: (location: {
    lat: number;
    lng: number;
    name: string;
    zoom?: number;
    bounds?: { north: number; south: number; east: number; west: number };
  }) => void;
  onLgaMarkersChange?: (
    markers: Array<{ lat: number; lng: number; title: string }>
  ) => void;
}

const countrySelectorStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    marginTop: 10,
    height: "fit-content",
  },
  field: {
    marginBottom: "0.5rem",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    marginBottom: "0.25rem",
  },
  buttonsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5rem",
  },
  infoBox: {
    marginTop: "1rem",
    padding: "0.75rem",
    backgroundColor: colors.muted,
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
  },
  infoTitle: {
    fontWeight: 500,
  },
  infoText: {
    marginTop: "0.25rem",
    color: colors.mutedForeground,
  },
  select: {
    display: "flex",
    height: "2.5rem",
    width: "100%",
    borderRadius: "0.375rem",
    border: `1px solid ${colors.primary}`,
    backgroundColor: colors.background,
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.2s",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.75rem center",
    backgroundSize: "16px 16px",
  },
  focus: {
    boxShadow: `0 0 0 2px rgba(34, 197, 94, 0.5)`, // Green focus shadow
    borderColor: colors.primary,
  },
};

const findAnAgentFormStyles = {
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },
  gridMd: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  field: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  agentCount: {
    backgroundColor: colors.muted,
    padding: "1rem",
    borderRadius: "0.5rem",
    textAlign: "center" as const,
  },
  agentCountText: {
    fontSize: "1.125rem",
    fontWeight: "bold",
  },
  lgaList: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#f3f4f6",
    borderRadius: "0.5rem",
  },
  lgaTitle: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  lgaItem: {
    fontSize: "0.875rem",
    padding: "0.25rem 0",
    display: "flex",
    alignItems: "center",
  },
  lgaMarker: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#22c55e",
    marginRight: "0.5rem",
    display: "inline-block",
  },
};

function CountrySelector({
  onLocationSelect,
  onLgaMarkersChange,
}: CountrySelectorProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [states, setStates] = useState<string[]>([]);
  const [lgas, setLgas] = useState<
    Array<{ name: string; lat: number; lng: number }>
  >([]);
  const [displayLgas, setDisplayLgas] = useState<string[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingLgas, setLoadingLgas] = useState(false);
  const fixedCountries = ["Nigeria", "Kenya", "Rwanda", "Ghana"];
  const [countries] = useState(fixedCountries);
  const [agents, setAgents] = useState<any[]>([]);
  const [filteredAgentCount, setFilteredAgentCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isLoadingLgas, setisLoadingLgas] = useState(false);
  const [totalAgents, setTotalAgents] = useState(0);
  const [uniqueLgaCount, setUniqueLgaCount] = useState(0);
  const [totalLgas, setTotalLgas] = useState(0);

  // Your endpoints and API keys
  const AGENTS_SHEET_ID = "19OvCjQkTY6wmp4tlUWiLMk8C7UvBxNvmwbK0aGaBImQ";
  const SUBMISSIONS_SHEET_ID = "1tevS-A3CkXNGuNdJlt-roTg5qoctVHxJ_8juYeGK4NY";
  const SHEETS_API_KEY = "YOUR_ACTUAL_API_KEY";

  const agentsDataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${AGENTS_SHEET_ID}/values/Agents!A2:E?key=${SHEETS_API_KEY}`;
  const submissionUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SUBMISSIONS_SHEET_ID}/values/Submissions!A1:append?valueInputOption=USER_ENTERED&key=${SHEETS_API_KEY}`;

  const [formData, setFormData] = useState({
    country: selectedCountry,
    state: selectedState,
    serviceType: "",
    serviceSize: "",
    name: "",
    email: "",
    occupation: "",
    organization: "",
  });

  // Fetch Nigerian states from API
  // Update the useEffect for fetching Nigerian states
  useEffect(() => {
    if (selectedCountry === "Nigeria") {
      const fetchNigerianStates = async () => {
        try {
          setLoadingStates(true);
          const statesData = await getStatesFromApi();

          // Check if statesData is valid and has the expected structure
          if (Array.isArray(statesData) && statesData.length > 0) {
            const stateNames = statesData
              .map((state: any) => state.name || "")
              .filter((name) => name.trim() !== ""); // Filter out empty names
            setStates(stateNames);
          } else {
            // Fallback if data structure is unexpected
            console.error("Invalid state data structure:", statesData);
            setStates([
              "Lagos",
              "Kano",
              "Abuja",
              "Ogun",
              "Oyo",
              "Rivers",
              "Kaduna",
              "Enugu",
            ]);
          }
        } catch (error) {
          console.error("Error fetching Nigerian states:", error);
          // Fallback to predefined states
          setStates([
            "Lagos",
            "Kano",
            "Abuja",
            "Ogun",
            "Oyo",
            "Rivers",
            "Kaduna",
            "Enugu",
          ]);
        } finally {
          setLoadingStates(false);
        }
      };
      fetchNigerianStates();
    } else if (selectedCountry) {
      // For other countries, set some default states/regions
      setLoadingStates(true);
      setTimeout(() => {
        if (selectedCountry === "Kenya") {
          setStates(["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"]);
        } else if (selectedCountry === "Rwanda") {
          setStates([
            "Kigali",
            "Northern Province",
            "Eastern Province",
            "Southern Province",
            "Western Province",
          ]);
        } else if (selectedCountry === "Ghana") {
          setStates([
            "Greater Accra",
            "Ashanti",
            "Western",
            "Eastern",
            "Central",
          ]);
        } else {
          setStates([]);
        }
        setLoadingStates(false);
      }, 500);
    }
  }, [selectedCountry]);

  // Fetch LGAs when a Nigerian state is selected
  // Update the LGA fetching useEffect in CountrySelector component
  useEffect(() => {
    if (!selectedState || !selectedCountry) {
      setLgas([]);
      setDisplayLgas([]);
      setTotalAgents(0);
      setUniqueLgaCount(0);
      if (onLgaMarkersChange) onLgaMarkersChange([]);
      return;
    }

    setLoadingLgas(true);

    // Use a constant country value to avoid dependency issues
    const countryValue = "Nigeria";

    // Use the new API endpoint to get agents and LGAs

    fetch(
      `https://nigerian-states-and-lga.vercel.app/state/?name=${selectedState.toLocaleLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        const datas = data.lgas?.length || 0;
        setTotalLgas(datas);
      })
      .catch((err) => console.error("Error fetching agents:", err));

    fetch(
      `https://company.extensionafrica.com/api/agents?country=${countryValue}&state=${encodeURIComponent(
        selectedState.toLowerCase()
      )}`
    )
      .then((response) => {
        setisLoadingLgas(true);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(async (data) => {
        if (data.data) {
          // Set total agents and unique LGA count
          setTotalAgents(data.data.total_agents);
          setUniqueLgaCount(data.data.total_lgas_with_agents);

          // Process LGAs
          const lgasFromApi = data.data.lgas || [];

          // Display LGA names
          setDisplayLgas(lgasFromApi.map((lga: any) => lga.name));

          // Get coordinates for each LGA using Google Maps Geocoding API
          const lgaCoordinates = [];

          for (const lga of lgasFromApi) {
            try {
              // Use geocoding to get coordinates
              const geocodeResult = await geocodeAddress(
                `${lga.name}, ${selectedState}, ${countryValue}`
              );

              if (geocodeResult) {
                lgaCoordinates.push({
                  name: lga.name,
                  lat: geocodeResult.lat,
                  lng: geocodeResult.lng,
                  count: lga.agents_count,
                });
                continue;
              }

              // If geocoding fails, use random coordinates around the state center
              const stateGeocode = await geocodeAddress(
                `${selectedState}, ${countryValue}`
              );

              if (stateGeocode) {
                lgaCoordinates.push({
                  name: lga.name,
                  lat: stateGeocode.lat + (Math.random() - 0.5) * 0.5,
                  lng: stateGeocode.lng + (Math.random() - 0.5) * 0.5,
                  count: lga.agents_count,
                });
                continue;
              }

              // Last resort fallback
              lgaCoordinates.push({
                name: lga.name,
                lat: 9.082 + (Math.random() - 0.5) * 0.5,
                lng: 8.6753 + (Math.random() - 0.5) * 0.5,
                count: lga.agents_count,
              });
            } catch (error) {
              console.error(`Error geocoding LGA ${lga.name}:`, error);
              lgaCoordinates.push({
                name: lga.name,
                lat: 9.082 + (Math.random() - 0.5) * 0.5,
                lng: 8.6753 + (Math.random() - 0.5) * 0.5,
                count: lga.agents_count,
              });
            }
          }

          setLgas(lgaCoordinates);

          // Update map markers
          if (onLgaMarkersChange) {
            onLgaMarkersChange(
              lgaCoordinates.map((lga: any) => ({
                lat: lga.lat,
                lng: lga.lng,
                title: `${lga.name} (${lga.agents_count || 0} ${
                  (lga.agents_count || 0) > 1 ? "agents" : "agent"
                })`,
              }))
            );
          }
        } else {
          setLgas([]);
          setDisplayLgas([]);
          setTotalAgents(0);
          setUniqueLgaCount(0);
          if (onLgaMarkersChange) onLgaMarkersChange([]);
        }
        setLoadingLgas(false);
      })
      .catch((error) => {
        console.error("Error fetching LGAs and agents:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch location data",
        });
        setLgas([]);
        setDisplayLgas([]);
        setTotalAgents(0);
        setUniqueLgaCount(0);
        if (onLgaMarkersChange) onLgaMarkersChange([]);
        setLoadingLgas(false);
      });
  }, [selectedState]);

  const handleCountrySelect = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setSelectedState("");
    setFormData({ ...formData, country: value, state: "" });

    try {
      // Use geocoding to get coordinates
      const locationData = await geocodeAddress(value);

      if (locationData) {
        onLocationSelect({
          lat: locationData.lat,
          lng: locationData.lng,
          name: value,
          zoom: 5, // Zoom level for countries
          bounds: locationData.bounds,
        });
      } else {
        // Fallback to predefined coordinates if geocoding fails
        const country = COUNTRIES.find((c) => c.name === value);
        if (country) {
          onLocationSelect({
            lat: country.lat,
            lng: country.lng,
            name: value,
            zoom: 5,
          });
        }
      }
    } catch (error) {
      console.error("Error geocoding country:", error);

      // Fallback to predefined coordinates if geocoding fails
      const country = COUNTRIES.find((c) => c.name === value);
      if (country) {
        onLocationSelect({
          lat: country.lat,
          lng: country.lng,
          name: value,
          zoom: 5,
        });
      }
    }
  };

  const handleStateSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedState(value);
    setFormData({ ...formData, state: value });

    if (!selectedCountry) return;

    try {
      const searchQuery = `${value}, ${selectedCountry}`;
      const locationData = await geocodeAddress(searchQuery);

      if (locationData) {
        onLocationSelect({
          lat: locationData.lat,
          lng: locationData.lng,
          name: searchQuery,
          zoom: 8,
          bounds: locationData.bounds,
        });
      } else {
        // Fallback to country coordinates with zoom
        const country = COUNTRIES.find((c) => c.name === selectedCountry);
        if (country) {
          onLocationSelect({
            lat: country.lat,
            lng: country.lng,
            name: selectedCountry,
            zoom: 5,
          });
        }
      }
    } catch (error) {
      console.error("Error geocoding state:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not find location details for this state",
      });
    }
  };

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch agents data
  useEffect(() => {
    fetch(agentsDataUrl)
      .then((res) => res.json())
      .then((data) => {
        const sheetData = data.values || [];
        const agents = sheetData.map((row: any) => ({
          country: row[0],
          state: row[1],
          serviceType: row[2],
          name: row[3],
          email: row[4],
        }));
        setAgents(agents);
      })
      .catch((err) => console.error("Error fetching agents:", err));
  }, []);

  useEffect(() => {
    if (formData.country && formData.state) {
      const count = agents.filter(
        (agent) =>
          agent.country?.toLowerCase() === formData.country.toLowerCase() &&
          agent.state?.toLowerCase() === formData.state.toLowerCase()
      ).length;
      setFilteredAgentCount(count);
    } else {
      setFilteredAgentCount(10);
    }
  }, [formData.country, formData.state]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        variant: "success",
        title: "Success",
        description:
          "Your request is received, our business department will reach out to you",
      });
      setFormData({
        country: selectedCountry,
        state: selectedState,
        serviceType: "",
        serviceSize: "",
        name: "",
        email: "",
        occupation: "",
        organization: "",
      });
    }, 1500);
  };

  return (
    <div style={countrySelectorStyles.container}>
      <div>
        <Label htmlFor="country-select">Select a country</Label>
        <select
          id="country-select"
          style={countrySelectorStyles.select as any}
          value={selectedCountry}
          onChange={handleCountrySelect}
        >
          <option value="" disabled>
            Select a country
          </option>
          {COUNTRIES.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <Label htmlFor="state-select">
            {loadingStates
              ? "Loading..."
              : `Select a ${
                  selectedCountry === "Kenya"
                    ? "county"
                    : selectedCountry === "Rwanda"
                    ? "province"
                    : selectedCountry === "Ghana"
                    ? "region"
                    : "state"
                }`}
          </Label>
          <select
            id="state-select"
            style={countrySelectorStyles.select as any}
            value={selectedState}
            onChange={handleStateSelect}
            disabled={loadingStates}
          >
            <option value="" disabled>
              {loadingStates
                ? "Loading..."
                : `Select a ${
                    selectedCountry === "Kenya"
                      ? "county"
                      : selectedCountry === "Rwanda"
                      ? "province"
                      : selectedCountry === "Ghana"
                      ? "region"
                      : "state"
                  }`}
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}

      <form onSubmit={handleSubmit} style={findAnAgentFormStyles.form}>
        {selectedCountry && selectedState && isLoadingLgas && (
          <>
            {selectedCountry && selectedState && isLoadingLgas && (
              <div style={findAnAgentFormStyles.agentCount}>
                <span style={findAnAgentFormStyles.agentCountText}>
                  {loadingLgas
                    ? "Loading..."
                    : `${totalAgents} ${
                        totalAgents > 1 ? "Agents" : "Agent"
                      }   Available in ${uniqueLgaCount}/${totalLgas} LGAs`}
                </span>
              </div>
            )}

            <div
              style={
                isMobile
                  ? findAnAgentFormStyles.grid
                  : findAnAgentFormStyles.gridMd
              }
            >
              <div style={findAnAgentFormStyles.field}>
                <Label htmlFor="service-type">Service Type</Label>
                <select
                  id="service-type"
                  style={countrySelectorStyles.select as any}
                  value={formData.serviceType}
                  onChange={(e) => handleChange("serviceType", e.target.value)}
                >
                  <option value="" disabled>
                    Select Service Type
                  </option>
                  <option value="Farm">Farm Management</option>
                  <option value="Farmer">Farmer / Agent Training</option>
                  <option value="Marketing">
                    Input Marketing & Distribution
                  </option>
                  <option value="Aggregation">
                    Commodity Aggregation & Supply
                  </option>
                  <option value="Service">Service Marketing</option>
                  <option value="Inclusion">Financial Inclusion</option>
                  <option value="Surveys">
                    Field Surveys / Farmer Profiling
                  </option>
                  <option value="Assessment">Project Impact Assessment</option>
                </select>
              </div>

              <div style={findAnAgentFormStyles.field}>
                <Label htmlFor="serviceSize">Service Size</Label>
                <Input
                  id="serviceSize"
                  placeholder="Service Size"
                  value={formData.serviceSize}
                  onChange={(e) => handleChange("serviceSize", e.target.value)}
                  required
                />
              </div>
            </div>

            <div
              style={
                isMobile
                  ? findAnAgentFormStyles.grid
                  : findAnAgentFormStyles.gridMd
              }
            >
              <div style={findAnAgentFormStyles.field}>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              <div style={findAnAgentFormStyles.field}>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            <div
              style={
                isMobile
                  ? findAnAgentFormStyles.grid
                  : findAnAgentFormStyles.gridMd
              }
            >
              <div style={findAnAgentFormStyles.field}>
                <Label htmlFor="occupation">Occupation</Label>
                <select
                  id="occupation"
                  style={countrySelectorStyles.select as any}
                  value={formData.occupation}
                  onChange={(e) => handleChange("occupation", e.target.value)}
                >
                  <option value="" disabled>
                    Select Occupation
                  </option>
                  <option value="Farmer">Farmer</option>
                  <option value="Agronomist">Agronomist</option>
                  <option value="Researcher">Investor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={findAnAgentFormStyles.field}>
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={(e) => handleChange("organization", e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </>
        )}
      </form>
    </div>
  );
}

// --------------------------------
// Main Application Component
// --------------------------------

function MapAndForm() {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    name: string;
    zoom?: number;
    bounds?: { north: number; south: number; east: number; west: number };
  } | null>(null);

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  // const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set mobile state once on mount without resize listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const [lgaMarkers, setLgaMarkers] = useState<
    Array<{ lat: number; lng: number; title: string }>
  >([]);

  const handleLocationSelect = (location: {
    lat: number;
    lng: number;
    name: string;
    zoom?: number;
    bounds?: { north: number; south: number; east: number; west: number };
  }) => {
    setSelectedLocation(location);

    // Only update country/state if they're different to avoid loops
    const parts = location.name.split(", ");
    if (parts.length >= 2) {
      const newState = parts[0];
      const newCountry = parts[1];

      if (newState !== selectedState) {
        setSelectedState(newState);
      }
      if (newCountry !== selectedCountry) {
        setSelectedCountry(newCountry);
      }
    } else if (location.name !== selectedCountry) {
      setSelectedCountry(location.name);
      setSelectedState("");
    }
  };

  const handleLgaMarkersChange = (
    markers: Array<{ lat: number; lng: number; title: string }>
  ) => {
    setLgaMarkers(markers);
  };

  const handleMapClick = async (lat: number, lng: number) => {
    try {
      // setIsLoading(true);
      const locationData = await reverseGeocodeCoordinates(lat, lng);

      if (locationData) {
        const { country, state, bounds } = locationData;

        handleLocationSelect({
          lat,
          lng,
          name: state ? `${state}, ${country}` : country,
          zoom: state ? 7 : 5,
          bounds,
        });
      }
      // setIsLoading(false);
    } catch (error) {
      console.error("Error geocoding location:", error);
      // setIsLoading(false);
    }
  };

  const appStyles = {
    main: {
      height: "100%",
      display: "flex",
      flexDirection: "column" as const,
      backgroundColor: "#f9fafb",
      justifyContent: "center",
    },
    container: {
      width: "100%",
      padding: "1rem",
      height: "fit-content",
    },
    content: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1.5rem",
      justifyContent: "center",
    },
    flexCol: {
      display: "flex",
      flexDirection: "column-reverse" as const,
      gap: "1.5rem",
      height: "auto",
    },
    flexRow: {
      display: "flex",
      flexDirection: "row" as const,
      gap: "1.5rem",
      height: "auto",
    },
    sidebar: {
      flex: isMobile ? undefined : 1,
      width: isMobile ? "100%" : undefined,
      minHeight: "auto",
    },
    mapContainer: {
      flex: isMobile ? undefined : 1,
      width: isMobile ? "100%" : undefined,
      height: "100%",
    },
    card: {
      overflow: "hidden",
      height: "100%",
      width: "100%",
    },
  };

  return (
    <main style={appStyles.main} className="my-20">
      <div style={appStyles.container}>
        <div style={appStyles.content}>
          <CardTitle style={{ textAlign: "center" }}>
            Find Extension Agent Now
          </CardTitle>
          <div style={isMobile ? appStyles.flexCol : appStyles.flexRow}>
            <div style={appStyles.sidebar}>
              <Card style={appStyles.card}>
                <CardContent>
                  <CountrySelector
                    onLocationSelect={handleLocationSelect}
                    onLgaMarkersChange={handleLgaMarkersChange}
                  />
                </CardContent>
              </Card>
            </div>
            <div style={appStyles.mapContainer}>
              <Card style={appStyles.card}>
                <CardContent
                  style={{
                    padding: 0,
                    height: "calc(100% - 53px)",
                  }}
                >
                  <GoogleMap
                    apiKey={API_KEY}
                    center={{ lat: 9.082, lng: 8.6753 }}
                    zoom={5}
                    onMapClick={handleMapClick}
                    markers={
                      selectedLocation
                        ? [
                            {
                              lat: selectedLocation.lat,
                              lng: selectedLocation.lng,
                              title: selectedLocation.name,
                            },
                          ]
                        : []
                    }
                    selectedLocation={selectedLocation}
                    lgaMarkers={lgaMarkers}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MapAndForm;
// addPropertyControls(Home, {})
