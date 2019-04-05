import { TestBed } from "@angular/core/testing";

import { CalculateRepsService } from "./calculate-reps.service";

describe("CalculateRepsService", () => {
  let service;
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [CalculateRepsService] })
  );

  it("should be created", () => {
    service = TestBed.get(CalculateRepsService);
    expect(service).toBeTruthy();
  });

  it("should calculate reps for 314 1RM", () => {
    service = TestBed.get(CalculateRepsService);
    const repsTest = service.calculateReps(314);
    //Rep Numbers
    expect(repsTest[0].rep).toBe(2);
    expect(repsTest[1].rep).toBe(3);
    expect(repsTest[2].rep).toBe(4);
    expect(repsTest[3].rep).toBe(5);
    expect(repsTest[4].rep).toBe(6);
    expect(repsTest[5].rep).toBe(7);
    expect(repsTest[6].rep).toBe(8);
    expect(repsTest[7].rep).toBe(9);
    expect(repsTest[8].rep).toBe(10);
    expect(repsTest[9].rep).toBe(12);
    expect(repsTest[10].rep).toBe(15);
    expect(repsTest[11].rep).toBe(20);
    //Low Weight
    expect(repsTest[0].weightLow).toBe(288); //92%
    expect(repsTest[1].weightLow).toBe(282); //90%
    expect(repsTest[2].weightLow).toBe(273); //87%
    expect(repsTest[3].weightLow).toBe(266); //85%
    expect(repsTest[4].weightLow).toBe(257); //82%
    expect(repsTest[5].weightLow).toBe(251); //80%
    expect(repsTest[6].weightLow).toBe(235); //75%
    expect(repsTest[7].weightLow).toBe(229); //73%
    expect(repsTest[8].weightLow).toBe(219); //70%
    expect(repsTest[9].weightLow).toBe(204); //65%
    expect(repsTest[10].weightLow).toBe(188); //60%
    expect(repsTest[11].weightLow).toBe(157); //50%
    //High Weight
    expect(repsTest[0].weightHigh).toBe(298); //95%
    expect(repsTest[1].weightHigh).toBe(292); //93%
    expect(repsTest[2].weightHigh).toBe(282); //90%
    expect(repsTest[3].weightHigh).toBe(273); //87%
    expect(repsTest[4].weightHigh).toBe(266); //85%
    expect(repsTest[5].weightHigh).toBe(260); //83%
    expect(repsTest[6].weightHigh).toBe(251); //80%
    expect(repsTest[7].weightHigh).toBe(241); //77%
    expect(repsTest[8].weightHigh).toBe(235); //75%
    expect(repsTest[9].weightHigh).toBe(219); //70%
    expect(repsTest[10].weightHigh).toBe(204); //65%
    expect(repsTest[11].weightHigh).toBe(188); //60%
    //Low Percent
    expect(repsTest[0].percentLow).toBe(92); //92%
    expect(repsTest[1].percentLow).toBe(90); //90%
    expect(repsTest[2].percentLow).toBe(87); //87%
    expect(repsTest[3].percentLow).toBe(85); //85%
    expect(repsTest[4].percentLow).toBe(82); //82%
    expect(repsTest[5].percentLow).toBe(80); //80%
    expect(repsTest[6].percentLow).toBe(75); //75%
    expect(repsTest[7].percentLow).toBe(73); //73%
    expect(repsTest[8].percentLow).toBe(70); //70%
    expect(repsTest[9].percentLow).toBe(65); //65%
    expect(repsTest[10].percentLow).toBe(60); //60%
    expect(repsTest[11].percentLow).toBe(50); //50%
    //High Percent
    expect(repsTest[0].percentHigh).toBe(95); //95%
    expect(repsTest[1].percentHigh).toBe(93); //93%
    expect(repsTest[2].percentHigh).toBe(90); //90%
    expect(repsTest[3].percentHigh).toBe(87); //87%
    expect(repsTest[4].percentHigh).toBe(85); //85%
    expect(repsTest[5].percentHigh).toBe(83); //83%
    expect(repsTest[6].percentHigh).toBe(80); //80%
    expect(repsTest[7].percentHigh).toBe(77); //77%
    expect(repsTest[8].percentHigh).toBe(75); //75%
    expect(repsTest[9].percentHigh).toBe(70); //70%
    expect(repsTest[10].percentHigh).toBe(65); //65%
    expect(repsTest[11].percentHigh).toBe(60); //60%
  });
});
