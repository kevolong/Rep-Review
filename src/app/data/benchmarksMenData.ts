/**Benchmarks Chart Data for Men
 * One-Rep Max benchmarks based on weight and experience category
 * {
 *  bodyweights: []
 *  lifts:
 *  {
 *      lift:
 *      {
 *          bodyweight:
 *          {   untrained: 1rm,
 *              novice: 1rm,
 *              intermediate: 1rm,
 *              advanced: 1rm,
 *              elite: 1rm
 *           }
 *       }
 *  }
 * }
 */

const benchmarksMenData = {
  bodyweights: [114, 123, 132, 148, 165, 181, 198, 220, 242, 275, 319, 320],
  lifts: {
    press: {
      114: {
        untrained: 53,
        novice: 72,
        intermediate: 90,
        advanced: 107,
        elite: 129
      },
      123: {
        untrained: 57,
        novice: 78,
        intermediate: 98,
        advanced: 116,
        elite: 141
      },
      132: {
        untrained: 61,
        novice: 84,
        intermediate: 105,
        advanced: 125,
        elite: 151
      },
      148: {
        untrained: 69,
        novice: 94,
        intermediate: 119,
        advanced: 140,
        elite: 169
      },
      165: {
        untrained: 75,
        novice: 102,
        intermediate: 129,
        advanced: 153,
        elite: 186
      },
      181: {
        untrained: 81,
        novice: 110,
        intermediate: 138,
        advanced: 164,
        elite: 218
      },
      198: {
        untrained: 85,
        novice: 116,
        intermediate: 146,
        advanced: 173,
        elite: 234
      },
      220: {
        untrained: 89,
        novice: 122,
        intermediate: 155,
        advanced: 183,
        elite: 255
      },
      242: {
        untrained: 93,
        novice: 127,
        intermediate: 159,
        advanced: 189,
        elite: 264
      },
      275: {
        untrained: 96,
        novice: 131,
        intermediate: 164,
        advanced: 194,
        elite: 272
      },
      319: {
        untrained: 98,
        novice: 133,
        intermediate: 167,
        advanced: 199,
        elite: 278
      },
      320: {
        untrained: 100,
        novice: 136,
        intermediate: 171,
        advanced: 203,
        elite: 284
      }
    },
    bench: {
      114: {
        untrained: 84,
        novice: 107,
        intermediate: 130,
        advanced: 179,
        elite: 222
      },
      123: {
        untrained: 91,
        novice: 116,
        intermediate: 142,
        advanced: 194,
        elite: 242
      },
      132: {
        untrained: 98,
        novice: 125,
        intermediate: 153,
        advanced: 208,
        elite: 260
      },
      148: {
        untrained: 109,
        novice: 140,
        intermediate: 172,
        advanced: 234,
        elite: 291
      },
      165: {
        untrained: 119,
        novice: 152,
        intermediate: 187,
        advanced: 255,
        elite: 319
      },
      181: {
        untrained: 128,
        novice: 164,
        intermediate: 201,
        advanced: 275,
        elite: 343
      },
      198: {
        untrained: 135,
        novice: 173,
        intermediate: 213,
        advanced: 289,
        elite: 362
      },
      220: {
        untrained: 142,
        novice: 183,
        intermediate: 225,
        advanced: 306,
        elite: 381
      },
      242: {
        untrained: 149,
        novice: 190,
        intermediate: 232,
        advanced: 316,
        elite: 395
      },
      275: {
        untrained: 153,
        novice: 196,
        intermediate: 239,
        advanced: 325,
        elite: 407
      },
      319: {
        untrained: 156,
        novice: 199,
        intermediate: 244,
        advanced: 333,
        elite: 416
      },
      320: {
        untrained: 159,
        novice: 204,
        intermediate: 248,
        advanced: 340,
        elite: 425
      }
    },
    squat: {
      114: {
        untrained: 78,
        novice: 144,
        intermediate: 174,
        advanced: 240,
        elite: 320
      },
      123: {
        untrained: 84,
        novice: 155,
        intermediate: 190,
        advanced: 259,
        elite: 346
      },
      132: {
        untrained: 91,
        novice: 168,
        intermediate: 205,
        advanced: 278,
        elite: 369
      },
      148: {
        untrained: 101,
        novice: 188,
        intermediate: 230,
        advanced: 313,
        elite: 410
      },
      165: {
        untrained: 110,
        novice: 204,
        intermediate: 250,
        advanced: 342,
        elite: 445
      },
      181: {
        untrained: 119,
        novice: 220,
        intermediate: 269,
        advanced: 367,
        elite: 479
      },
      198: {
        untrained: 125,
        novice: 232,
        intermediate: 285,
        advanced: 387,
        elite: 504
      },
      220: {
        untrained: 132,
        novice: 244,
        intermediate: 301,
        advanced: 409,
        elite: 532
      },
      242: {
        untrained: 137,
        novice: 255,
        intermediate: 311,
        advanced: 423,
        elite: 551
      },
      275: {
        untrained: 141,
        novice: 261,
        intermediate: 319,
        advanced: 435,
        elite: 567
      },
      319: {
        untrained: 144,
        novice: 267,
        intermediate: 326,
        advanced: 445,
        elite: 580
      },
      320: {
        untrained: 147,
        novice: 272,
        intermediate: 332,
        advanced: 454,
        elite: 593
      }
    },
    deadlift: {
      114: {
        untrained: 97,
        novice: 179,
        intermediate: 204,
        advanced: 299,
        elite: 387
      },
      123: {
        untrained: 105,
        novice: 194,
        intermediate: 222,
        advanced: 320,
        elite: 414
      },
      132: {
        untrained: 113,
        novice: 209,
        intermediate: 239,
        advanced: 342,
        elite: 438
      },
      148: {
        untrained: 126,
        novice: 234,
        intermediate: 269,
        advanced: 380,
        elite: 482
      },
      165: {
        untrained: 137,
        novice: 254,
        intermediate: 293,
        advanced: 411,
        elite: 518
      },
      181: {
        untrained: 148,
        novice: 274,
        intermediate: 315,
        advanced: 438,
        elite: 548
      },
      198: {
        untrained: 156,
        novice: 289,
        intermediate: 333,
        advanced: 457,
        elite: 567
      },
      220: {
        untrained: 164,
        novice: 305,
        intermediate: 351,
        advanced: 479,
        elite: 586
      },
      242: {
        untrained: 172,
        novice: 318,
        intermediate: 363,
        advanced: 490,
        elite: 596
      },
      275: {
        untrained: 176,
        novice: 326,
        intermediate: 373,
        advanced: 499,
        elite: 602
      },
      319: {
        untrained: 180,
        novice: 333,
        intermediate: 381,
        advanced: 506,
        elite: 608
      },
      320: {
        untrained: 183,
        novice: 340,
        intermediate: 388,
        advanced: 512,
        elite: 617
      }
    },
    clean: {
      114: {
        untrained: 56,
        novice: 103,
        intermediate: 125,
        advanced: 173,
        elite: 207
      },
      123: {
        untrained: 60,
        novice: 112,
        intermediate: 137,
        advanced: 186,
        elite: 224
      },
      132: {
        untrained: 65,
        novice: 121,
        intermediate: 148,
        advanced: 200,
        elite: 239
      },
      148: {
        untrained: 73,
        novice: 135,
        intermediate: 166,
        advanced: 225,
        elite: 266
      },
      165: {
        untrained: 79,
        novice: 147,
        intermediate: 180,
        advanced: 246,
        elite: 288
      },
      181: {
        untrained: 85,
        novice: 158,
        intermediate: 194,
        advanced: 264,
        elite: 310
      },
      198: {
        untrained: 90,
        novice: 167,
        intermediate: 205,
        advanced: 279,
        elite: 327
      },
      220: {
        untrained: 95,
        novice: 176,
        intermediate: 217,
        advanced: 294,
        elite: 345
      },
      242: {
        untrained: 99,
        novice: 183,
        intermediate: 224,
        advanced: 305,
        elite: 357
      },
      275: {
        untrained: 102,
        novice: 188,
        intermediate: 230,
        advanced: 313,
        elite: 367
      },
      319: {
        untrained: 104,
        novice: 192,
        intermediate: 235,
        advanced: 320,
        elite: 376
      },
      320: {
        untrained: 106,
        novice: 196,
        intermediate: 239,
        advanced: 327,
        elite: 384
      }
    }
  }
};

export default benchmarksMenData;
