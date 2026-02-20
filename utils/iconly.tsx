import createIconSet from "@expo/vector-icons/createIconSet";

export const iconlyGlyphMap = {
  search: 0xe000,
  saved: 0xe001,
  profile: 0xe002,
  home: 0xe003,
  arrow: 0xe004,
  refresh: 0xe00C,
  star: 0xe00A,
  "star-f": 0xe009,
  "saved-f": 0xe005,
  "home-f": 0xe006,
  "profile-f": 0xe007,
  "search-f": 0xe008,
  "wifi-failed": 0xe00B,
} as const;

const Iconly = createIconSet(
  iconlyGlyphMap,
  "Iconly",
  require("../assets/fonts/iconly.ttf")
);

export type IconlyName = keyof typeof iconlyGlyphMap;
export default Iconly;

