import {CombatType, Path} from "~/types/generated/characters.g"

export const getCharacterImage = (characterId: string, variant: "full" | "small") => {
  if (variant === "full") {
    return new URL(`../assets/img/characters/${characterId}.webp`, import.meta.url).toString()
  } else {
    return new URL(`../assets/img/characters/${characterId}_small.webp`, import.meta.url).toString()
  }
}

export const getCombatTypeImage = (type: CombatType) => {
  return new URL(`../assets/img/combat-types/${type}.webp`, import.meta.url).toString()
}

export const getPathImage = (path: Path) => {
  return new URL(`../assets/img/paths/${path}.webp`, import.meta.url).toString()
}