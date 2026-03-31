"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_USERNAME = "admiretech";
const DEFAULT_EVENT = "30min";

interface CalBookingButtonProps {
  children: React.ReactNode;
  className?: string;
  eventSlug?: string;
}

export function CalBookingButton({
  children,
  className = "",
  eventSlug = DEFAULT_EVENT,
}: CalBookingButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#FF6B2B",
            "cal-brand-emphasis": "#FFA040",
            "cal-brand-text": "#FFFFFF",
            "cal-text": "#FFFFFF",
            "cal-text-emphasis": "#FFFFFF",
            "cal-text-muted": "#A0A0A0",
            "cal-bg": "#0D0D0D",
            "cal-bg-emphasis": "#1A1A1A",
            "cal-bg-muted": "#242424",
            "cal-border": "rgba(255,255,255,0.08)",
            "cal-border-emphasis": "rgba(255,255,255,0.15)",
          },
          light: {
            "cal-brand": "#FF6B2B",
            "cal-brand-emphasis": "#FFA040",
            "cal-brand-text": "#FFFFFF",
            "cal-text": "#0D0D0D",
            "cal-text-emphasis": "#0D0D0D",
            "cal-text-muted": "#6B6B6B",
            "cal-bg": "#FFFFFF",
            "cal-bg-emphasis": "#F5F5F5",
            "cal-bg-muted": "#FAFAFA",
            "cal-border": "rgba(0,0,0,0.08)",
            "cal-border-emphasis": "rgba(0,0,0,0.15)",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={`${CAL_USERNAME}/${eventSlug}`}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
