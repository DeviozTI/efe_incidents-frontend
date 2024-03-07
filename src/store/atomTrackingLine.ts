import { atomWithStorage } from "jotai/utils";

export const atomTrackingLine = atomWithStorage<any | null>(
  "trackingSelected",
  JSON.stringify({}) || null,
  localStorage
);
