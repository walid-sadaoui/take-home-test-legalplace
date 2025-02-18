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
  it("should increase benefit by 2 when less than 10 days left for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 12)],
    );
  });
  it("should increase benefit by 3 when less than 5 days left for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 13)],
    );
  });
  it("should drop benefit to 0 after expiration for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)],
    );
  });
});
