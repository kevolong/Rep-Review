import { TestBed } from "@angular/core/testing";

import { CalculateOneRepMaxService } from "./calculate-one-rep-max.service";

describe("CalculateOneRepMaxService", () => {
  let service;
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [CalculateOneRepMaxService] })
  );

  it("should be created", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    expect(service).toBeTruthy();
  });

  it("should calculate brzycki", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const brzyckiTest = service.calculateOneRepMax(304, 4, "brzycki");
    console.log(brzyckiTest);
    expect(brzyckiTest).toBe(331);
  });

  it("should calculate epley", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const epleyTest = service.calculateOneRepMax(158, 7, "epley");
    console.log(epleyTest);
    expect(epleyTest).toBe(194);
  });

  it("should calculate baechle", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const baechleTest = service.calculateOneRepMax(246, 2, "baechle");
    console.log(baechleTest);
    expect(baechleTest).toBe(262);
  });

  it("should calculate lander", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const landerTest = service.calculateOneRepMax(402, 5, "lander");
    console.log(landerTest);
    expect(landerTest).toBe(457);
  });

  it("should calculate oconner", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const oconnerTest = service.calculateOneRepMax(189, 10, "oconner");
    console.log(oconnerTest);
    expect(oconnerTest).toBe(236);
  });

  it("should calculate lombardi", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const lombardiTest = service.calculateOneRepMax(245, 8, "lombardi");
    console.log(lombardiTest);
    expect(lombardiTest).toBe(301);
  });

  it("should calculate mayhew", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const mayhewTest = service.calculateOneRepMax(315, 5, "mayhew");
    console.log(mayhewTest);
    expect(mayhewTest).toBe(374);
  });

  it("should calculate wathen", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const wathenTest = service.calculateOneRepMax(401, 3, "wathen");
    console.log(wathenTest);
    expect(wathenTest).toBe(437);
  });

  it("should calculate average", () => {
    service = TestBed.get(CalculateOneRepMaxService);
    const averageTest = service.calculateOneRepMax(296, 5, "average");
    // 333, 345, 344, 336, 333, 347, 352, 345
    console.log(averageTest);
    expect(averageTest).toBe(341);
  });
});
