import { describe, it, expect } from "vitest";
import sortProductsByPrice from "./sortProductsByPrice";

const initialProducts = [
  {
    id: 1,
    name: "ipad",
    price: 300,
  },
  {
    id: 2,
    name: "iphone",
    price: 500,
  },
  {
    id: 3,
    name: "apple mouse",
    price: 100,
  },
];

describe("sortProductsByPrice Unit Tests", () => {
  it("should sort products by price in ascending order", () => {
    const sorted = sortProductsByPrice(initialProducts);

    expect(sorted[0].name).toEqual("apple mouse");
  });
});
