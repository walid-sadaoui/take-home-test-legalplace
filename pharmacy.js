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
      // If drug is Magic Pill nothing happens
      if (drug.name === "Magic Pill") return drug;
      
      // Expiration always decreases by one
      drug.expiresIn = drug.expiresIn - 1;

      // Handle benefit value depending on drug name
      this.handleSpecificCases(drug);

      // Update benefit value to fit required boundaries (min 0 and max 50)
      drug = this.validateDrugBenefit(drug);
      return drug;
    })

    return this.drugs;
  }

  // Check if drug item reached its expiration date
  isDrugExpired(drug) {
    return drug.expiresIn < 0;
  }

  // Update benefit value to fit required boundaries (min 0 and max 50)
  validateDrugBenefit(drug) {
    if (drug.benefit > 50) drug.benefit = 50;
    if (drug.benefit < 0) drug.benefit = 0;
    return drug;
  }

  handleSpecificCases(drug) {
    switch (drug.name) {
      case "Herbal Tea":
        // Increase benefit by 1, and add 1 if it's expired
        drug.benefit = drug.benefit + 1;
        if (this.isDrugExpired(drug)) drug.benefit = drug.benefit + 1;
        break;
        case "Fervex":
        // Set benefit to 0 if drug item expired
        if (this.isDrugExpired(drug)) {
          drug.benefit = 0;
        } else {
          // Increase benefit by one, add 1 if 10 days or less left, add 1 more if 5 days or less left 
          drug.benefit = drug.benefit + 1;
          if (drug.expiresIn < 11) drug.benefit = drug.benefit + 1;
          if (drug.expiresIn < 6) drug.benefit = drug.benefit + 1;
        }
        break;
      case "Dafalgan":
        // Decrease benefit by 2
        drug.benefit = drug.benefit - 2;
        break;
    
      default:
        // Decrease benefit by 2 if drug item expired, else decrease by 1
        if (this.isDrugExpired(drug)) {
          drug.benefit = drug.benefit - 2;
        } else {
          drug.benefit = drug.benefit - 1;
        }
        break;
    }
    return drug;
  }
}

