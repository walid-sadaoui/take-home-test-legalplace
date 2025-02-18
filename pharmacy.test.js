import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
  it("should decrease the benefit and expiresIn for Dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)],
    );
  });
  it("should decrease expiresIn for and keep benefit to 0 if negative Dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 0)],
    );
  });
});
