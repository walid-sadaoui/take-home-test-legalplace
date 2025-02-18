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
    this.drugs = this.drugs.map((drug) => {
      if (drug.name === "Magic Pill") return drug;
      drug.expiresIn = drug.expiresIn - 1;

      if (
        drug.name != "Herbal Tea" &&
        drug.name != "Fervex"
      ) {
        if (drug.name === "Dafalgan") {
          drug.benefit = drug.benefit - 2;
        } else {
          drug.benefit = drug.benefit - 1;
        }
      } else {
        drug.benefit = drug.benefit + 1;
        if (drug.name == "Fervex") {
          if (drug.expiresIn < 11) {
            drug.benefit = drug.benefit + 1;
          }
          if (drug.expiresIn < 6) {
            drug.benefit = drug.benefit + 1;
          }
        }
      }
      if (this.isDrugExpired(drug)) {
        if (drug.name != "Herbal Tea") {
          if (drug.name != "Fervex") {
            drug.benefit = drug.benefit - 1;
          } else {
            drug.benefit =
              drug.benefit - drug.benefit;
          }
        } else {
          drug.benefit = drug.benefit + 1;
        }
      }
      drug = this.validateDrugBenefit(drug);
      return drug;
    })

    return this.drugs;
  }

  isDrugExpired(drug) {
    return drug.expiresIn < 0;
  }

  validateDrugBenefit(drug) {
    if (drug.benefit > 50) drug.benefit = 50;
    if (drug.benefit < 0) drug.benefit = 0;
    return drug;
  }
}

