export enum ColorVariation {
  Primary = "isPrimary",
  Success = "isSuccess",
  Hazarding = "isHazarding",
  Warning = "isWarning",
}

export interface ColorVariationAttributes {
  colorVariation?: ColorVariation;
}
