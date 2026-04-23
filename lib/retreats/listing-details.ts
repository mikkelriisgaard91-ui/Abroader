/**
 * Optional long-form copy and media for retreat listing pages. Keyed by `RetreatListing.id`.
 * Surf-category entries live in `./listing-details/surf.ts`.
 */

import type {
  RetreatListingDetail,
  RetreatListingGalleryImage,
} from "./retreat-listing-detail.types";
import { SURF_LISTING_DETAILS } from "./listing-details/surf";

export type { RetreatListingDetail, RetreatListingGalleryImage };

const DETAILS: Record<string, RetreatListingDetail> = {
  ...SURF_LISTING_DETAILS,
};

export function getRetreatListingDetail(id: string): RetreatListingDetail | undefined {
  return DETAILS[id];
}
