import { retreatCatalog, type RetreatListing } from "./catalog";

const ids = new Set(retreatCatalog.map((l) => l.id));

export function getRetreatListingById(id: string): RetreatListing | undefined {
  return retreatCatalog.find((l) => l.id === id);
}

export function getAllRetreatListingIds(): string[] {
  return retreatCatalog.map((l) => l.id);
}

export function isRetreatListingId(id: string): boolean {
  return ids.has(id);
}
