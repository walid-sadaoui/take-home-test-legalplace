export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (
        drug.name != "Herbal Tea" &&
        drug.name != "Fervex"
      ) {
        if (drug.benefit > 0) {
          if (drug.name === "Dafalgan") {
            drug.benefit = drug.benefit - 2 >= 0 ? drug.benefit - 2 : 0;
          } else if (drug.name != "Magic Pill") {
            drug.benefit = drug.benefit - 1;
          }
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
          if (drug.name == "Fervex") {
            if (drug.expiresIn < 11) {
              if (drug.benefit < 50) {
                drug.benefit = drug.benefit + 1;
              }
            }
            if (drug.expiresIn < 6) {
              if (drug.benefit < 50) {
                drug.benefit = drug.benefit + 1;
              }
            }
          }
        }
      }
      if (drug.name != "Magic Pill") {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drug.name != "Herbal Tea") {
          if (drug.name != "Fervex") {
            if (drug.benefit > 0) {
              if (drug.name != "Magic Pill") {
                drug.benefit = drug.benefit - 1;
              }
            }
          } else {
            drug.benefit =
              drug.benefit - drug.benefit;
          }
        } else {
          if (drug.benefit < 50) {
            drug.benefit = drug.benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
