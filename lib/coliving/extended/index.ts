import type { ColivingExtendedContent } from "./types";
import { BANSKO_EXTENDED } from "./bansko";
import { CAPE_TOWN_EXTENDED } from "./cape-town";
import { FLORIANOPOLIS_EXTENDED } from "./florianopolis";
import { MADEIRA_EXTENDED } from "./madeira";
import { MEDELLIN_EXTENDED } from "./medellin";
import { PUERTO_ESCONDIDO_EXTENDED } from "./puerto-escondido";
import { TAGHAZOUT_EXTENDED } from "./taghazout";
import { TARIFA_EXTENDED } from "./tarifa";

const BY_ID: Record<string, ColivingExtendedContent> = {
  tarifa: TARIFA_EXTENDED,
  bansko: BANSKO_EXTENDED,
  madeira: MADEIRA_EXTENDED,
  taghazout: TAGHAZOUT_EXTENDED,
  "cape-town": CAPE_TOWN_EXTENDED,
  "puerto-escondido": PUERTO_ESCONDIDO_EXTENDED,
  medellin: MEDELLIN_EXTENDED,
  florianopolis: FLORIANOPOLIS_EXTENDED,
};

export type { ColivingExtendedContent } from "./types";

export function getColivingExtendedContent(listingId: string): ColivingExtendedContent | undefined {
  return BY_ID[listingId];
}
