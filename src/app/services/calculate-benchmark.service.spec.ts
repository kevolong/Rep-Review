import { TestBed } from "@angular/core/testing";

import { CalculateBenchmarkService } from "./calculate-benchmark.service";

describe("CalculateBenchmarkService", () => {
  let service;
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [CalculateBenchmarkService] })
  );

  it("should be created", () => {
    service = TestBed.get(CalculateBenchmarkService);
    expect(service).toBeTruthy();
  });

  it("should calculate benchmarks for male squat in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const squatTest = service.calculateBenchmark(
      345,
      "lb",
      203,
      "squat",
      "male"
    );
    console.log("squatTest male:", squatTest);
    expect(squatTest.untrained).toBe(126);
    expect(squatTest.novice).toBe(234);
    expect(squatTest.intermediate).toBe(288);
    expect(squatTest.advanced).toBe(392);
    expect(squatTest.elite).toBe(510);
  });

  it("should calculate benchmarks for female squat in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const squatTest = service.calculateBenchmark(
      172,
      "lb",
      145,
      "squat",
      "female"
    );
    console.log("squatTest female:", squatTest);
    expect(squatTest.untrained).toBe(63);
    expect(squatTest.novice).toBe(118);
    expect(squatTest.intermediate).toBe(138);
    expect(squatTest.advanced).toBe(181);
    expect(squatTest.elite).toBe(228);
  });

  it("should calculate benchmarks for male deadlift in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const deadTest = service.calculateBenchmark(
      315,
      "lb",
      128,
      "deadlift",
      "male"
    );
    console.log("deadTest male:", deadTest);
    expect(deadTest.untrained).toBe(109);
    expect(deadTest.novice).toBe(202);
    expect(deadTest.intermediate).toBe(231);
    expect(deadTest.advanced).toBe(332);
    expect(deadTest.elite).toBe(427);
  });

  it("should calculate benchmarks for female deadlift in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const deadTest = service.calculateBenchmark(
      315,
      "lb",
      187,
      "deadlift",
      "female"
    );
    console.log("deadTest female:", deadTest);
    expect(deadTest.untrained).toBe(96);
    expect(deadTest.novice).toBe(178);
    expect(deadTest.intermediate).toBe(208);
    expect(deadTest.advanced).toBe(276);
    expect(deadTest.elite).toBe(336);
  });

  it("should calculate benchmarks for male press in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const pressTest = service.calculateBenchmark(
      180,
      "lb",
      227,
      "press",
      "male"
    );
    console.log("pressTest male:", pressTest);
    expect(pressTest.untrained).toBe(90);
    expect(pressTest.novice).toBe(123);
    expect(pressTest.intermediate).toBe(156);
    expect(pressTest.advanced).toBe(184);
    expect(pressTest.elite).toBe(257);
  });

  it("should calculate benchmarks for female press in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const pressTest = service.calculateBenchmark(
      105,
      "lb",
      100,
      "press",
      "female"
    );
    console.log("pressTest female:", pressTest);
    expect(pressTest.untrained).toBe(31);
    expect(pressTest.novice).toBe(43);
    expect(pressTest.intermediate).toBe(51);
    expect(pressTest.advanced).toBe(67);
    expect(pressTest.elite).toBe(87);
  });

  it("should calculate benchmarks for male bench in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const benchTest = service.calculateBenchmark(
      280,
      "lb",
      305,
      "bench",
      "male"
    );
    console.log("benchTest male:", benchTest);
    expect(benchTest.untrained).toBe(155);
    expect(benchTest.novice).toBe(198);
    expect(benchTest.intermediate).toBe(242);
    expect(benchTest.advanced).toBe(330);
    expect(benchTest.elite).toBe(413);
  });

  it("should calculate benchmarks for female bench in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const benchTest = service.calculateBenchmark(
      187,
      "lb",
      170,
      "bench",
      "female"
    );
    console.log("benchTest female:", benchTest);
    expect(benchTest.untrained).toBe(77);
    expect(benchTest.novice).toBe(99);
    expect(benchTest.intermediate).toBe(115);
    expect(benchTest.advanced).toBe(149);
    expect(benchTest.elite).toBe(185);
  });

  it("should calculate benchmarks for male clean in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const cleanTest = service.calculateBenchmark(
      290,
      "lb",
      179,
      "clean",
      "male"
    );
    console.log("cleanTest male:", cleanTest);
    expect(cleanTest.untrained).toBe(84);
    expect(cleanTest.novice).toBe(156);
    expect(cleanTest.intermediate).toBe(192);
    expect(cleanTest.advanced).toBe(261);
    expect(cleanTest.elite).toBe(307);
  });

  it("should calculate benchmarks for female clean in lb", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const cleanTest = service.calculateBenchmark(
      203,
      "lb",
      188,
      "clean",
      "female"
    );
    console.log("cleanTest female:", cleanTest);
    expect(cleanTest.untrained).toBe(55);
    expect(cleanTest.novice).toBe(103);
    expect(cleanTest.intermediate).toBe(120);
    expect(cleanTest.advanced).toBe(159);
    expect(cleanTest.elite).toBe(198);
  });

  it("should calculate benchmarks in kg", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const benchTest = service.calculateBenchmark(
      100,
      "kg",
      138,
      "bench",
      "male"
    );
    console.log("benchTest male:", benchTest);
    expect(benchTest.untrained).toBe(70);
    expect(benchTest.novice).toBe(89);
    expect(benchTest.intermediate).toBe(109);
    expect(benchTest.advanced).toBe(149);
    expect(benchTest.elite).toBe(187);
  });

  it("should retrieve male benchmark for lower than ref bw", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const benchTest = service.calculateBenchmark(
      100,
      "lb",
      98,
      "bench",
      "male"
    );
    console.log("benchTest male:", benchTest);
    expect(benchTest.untrained).toBe(84);
    expect(benchTest.novice).toBe(107);
    expect(benchTest.intermediate).toBe(130);
    expect(benchTest.advanced).toBe(179);
    expect(benchTest.elite).toBe(222);
  });

  it("should retrieve female benchmark for lower than ref bw", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const squatTest = service.calculateBenchmark(
      172,
      "lb",
      88,
      "squat",
      "female"
    );
    console.log("squatTest female:", squatTest);
    expect(squatTest.untrained).toBe(46);
    expect(squatTest.novice).toBe(84);
    expect(squatTest.intermediate).toBe(98);
    expect(squatTest.advanced).toBe(129);
    expect(squatTest.elite).toBe(163);
  });

  it("should retrieve male benchmark for same as ref bw", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const deadTest = service.calculateBenchmark(
      315,
      "lb",
      242,
      "deadlift",
      "male"
    );
    console.log("deadTest male:", deadTest);
    expect(deadTest.untrained).toBe(172);
    expect(deadTest.novice).toBe(318);
    expect(deadTest.intermediate).toBe(363);
    expect(deadTest.advanced).toBe(490);
    expect(deadTest.elite).toBe(596);
  });

  it("should retrieve female benchmark for same as ref bw", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const cleanTest = service.calculateBenchmark(
      203,
      "lb",
      123,
      "clean",
      "female"
    );
    console.log("cleanTest female:", cleanTest);
    expect(cleanTest.untrained).toBe(40);
    expect(cleanTest.novice).toBe(74);
    expect(cleanTest.intermediate).toBe(87);
    expect(cleanTest.advanced).toBe(115);
    expect(cleanTest.elite).toBe(143);
  });

  it("should retrieve female benchmark for greater than ref bw", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const pressTest = service.calculateBenchmark(
      180,
      "lb",
      345,
      "press",
      "male"
    );
    console.log("pressTest male:", pressTest);
    expect(pressTest.untrained).toBe(100);
    expect(pressTest.novice).toBe(136);
    expect(pressTest.intermediate).toBe(171);
    expect(pressTest.advanced).toBe(203);
    expect(pressTest.elite).toBe(284);
  });

  it("should retrieve female benchmark for greater than ref bw", () => {
    service = TestBed.get(CalculateBenchmarkService);
    const benchTest = service.calculateBenchmark(
      187,
      "lb",
      209,
      "bench",
      "female"
    );
    console.log("benchTest female:", benchTest);
    expect(benchTest.untrained).toBe(92);
    expect(benchTest.novice).toBe(118);
    expect(benchTest.intermediate).toBe(137);
    expect(benchTest.advanced).toBe(177);
    expect(benchTest.elite).toBe(217);
  });
});
