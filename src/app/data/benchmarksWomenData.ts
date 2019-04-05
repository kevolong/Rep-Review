/**Benchmarks Chart Data for Women
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

const benchmarksWomenData = {
  bodyweights: [97, 105, 114, 123, 132, 148, 165, 181, 198, 199],
  lifts: {
    press: {
      97: {
        untrained: 31,
        novice: 42,
        intermediate: 50,
        advanced: 66,
        elite: 85
      },
      105: {
        untrained: 33,
        novice: 46,
        intermediate: 53,
        advanced: 71,
        elite: 91
      },
      114: {
        untrained: 36,
        novice: 49,
        intermediate: 58,
        advanced: 76,
        elite: 97
      },
      123: {
        untrained: 38,
        novice: 52,
        intermediate: 61,
        advanced: 81,
        elite: 104
      },
      132: {
        untrained: 40,
        novice: 55,
        intermediate: 65,
        advanced: 85,
        elite: 110
      },
      148: {
        untrained: 44,
        novice: 60,
        intermediate: 72,
        advanced: 94,
        elite: 121
      },
      165: {
        untrained: 48,
        novice: 65,
        intermediate: 77,
        advanced: 102,
        elite: 134
      },
      181: {
        untrained: 51,
        novice: 70,
        intermediate: 83,
        advanced: 110,
        elite: 140
      },
      198: {
        untrained: 55,
        novice: 75,
        intermediate: 88,
        advanced: 117,
        elite: 151
      },
      199: {
        untrained: 58,
        novice: 79,
        intermediate: 93,
        advanced: 123,
        elite: 159
      }
    },
    bench: {
      97: {
        untrained: 49,
        novice: 63,
        intermediate: 73,
        advanced: 94,
        elite: 116
      },
      105: {
        untrained: 53,
        novice: 68,
        intermediate: 79,
        advanced: 102,
        elite: 124
      },
      114: {
        untrained: 57,
        novice: 73,
        intermediate: 85,
        advanced: 109,
        elite: 133
      },
      123: {
        untrained: 60,
        novice: 77,
        intermediate: 90,
        advanced: 116,
        elite: 142
      },
      132: {
        untrained: 64,
        novice: 82,
        intermediate: 95,
        advanced: 122,
        elite: 150
      },
      148: {
        untrained: 70,
        novice: 90,
        intermediate: 105,
        advanced: 135,
        elite: 165
      },
      165: {
        untrained: 76,
        novice: 97,
        intermediate: 113,
        advanced: 146,
        elite: 183
      },
      181: {
        untrained: 81,
        novice: 104,
        intermediate: 122,
        advanced: 158,
        elite: 192
      },
      198: {
        untrained: 88,
        novice: 112,
        intermediate: 130,
        advanced: 167,
        elite: 205
      },
      199: {
        untrained: 92,
        novice: 118,
        intermediate: 137,
        advanced: 177,
        elite: 217
      }
    },
    squat: {
      97: {
        untrained: 46,
        novice: 84,
        intermediate: 98,
        advanced: 129,
        elite: 163
      },
      105: {
        untrained: 49,
        novice: 91,
        intermediate: 106,
        advanced: 140,
        elite: 174
      },
      114: {
        untrained: 53,
        novice: 98,
        intermediate: 114,
        advanced: 150,
        elite: 187
      },
      123: {
        untrained: 56,
        novice: 103,
        intermediate: 121,
        advanced: 160,
        elite: 199
      },
      132: {
        untrained: 59,
        novice: 110,
        intermediate: 127,
        advanced: 168,
        elite: 211
      },
      148: {
        untrained: 65,
        novice: 121,
        intermediate: 141,
        advanced: 185,
        elite: 232
      },
      165: {
        untrained: 70,
        novice: 130,
        intermediate: 151,
        advanced: 200,
        elite: 256
      },
      181: {
        untrained: 75,
        novice: 139,
        intermediate: 164,
        advanced: 215,
        elite: 268
      },
      198: {
        untrained: 81,
        novice: 150,
        intermediate: 174,
        advanced: 229,
        elite: 288
      },
      199: {
        untrained: 85,
        novice: 158,
        intermediate: 184,
        advanced: 242,
        elite: 303
      }
    },
    deadlift: {
      97: {
        untrained: 57,
        novice: 105,
        intermediate: 122,
        advanced: 175,
        elite: 232
      },
      105: {
        untrained: 61,
        novice: 114,
        intermediate: 132,
        advanced: 189,
        elite: 242
      },
      114: {
        untrained: 66,
        novice: 122,
        intermediate: 142,
        advanced: 200,
        elite: 253
      },
      123: {
        untrained: 70,
        novice: 129,
        intermediate: 151,
        advanced: 211,
        elite: 263
      },
      132: {
        untrained: 74,
        novice: 137,
        intermediate: 159,
        advanced: 220,
        elite: 273
      },
      148: {
        untrained: 81,
        novice: 151,
        intermediate: 176,
        advanced: 241,
        elite: 295
      },
      165: {
        untrained: 88,
        novice: 162,
        intermediate: 189,
        advanced: 258,
        elite: 319
      },
      181: {
        untrained: 94,
        novice: 174,
        intermediate: 204,
        advanced: 273,
        elite: 329
      },
      198: {
        untrained: 101,
        novice: 187,
        intermediate: 217,
        advanced: 284,
        elite: 349
      },
      199: {
        untrained: 107,
        novice: 197,
        intermediate: 229,
        advanced: 297,
        elite: 364
      }
    },
    clean: {
      97: {
        untrained: 33,
        novice: 61,
        intermediate: 70,
        advanced: 93,
        elite: 117
      },
      105: {
        untrained: 35,
        novice: 66,
        intermediate: 76,
        advanced: 101,
        elite: 125
      },
      114: {
        untrained: 38,
        novice: 70,
        intermediate: 82,
        advanced: 108,
        elite: 135
      },
      123: {
        untrained: 40,
        novice: 74,
        intermediate: 87,
        advanced: 115,
        elite: 143
      },
      132: {
        untrained: 43,
        novice: 79,
        intermediate: 92,
        advanced: 121,
        elite: 152
      },
      148: {
        untrained: 47,
        novice: 87,
        intermediate: 101,
        advanced: 133,
        elite: 167
      },
      165: {
        untrained: 50,
        novice: 93,
        intermediate: 109,
        advanced: 144,
        elite: 184
      },
      181: {
        untrained: 54,
        novice: 100,
        intermediate: 118,
        advanced: 155,
        elite: 193
      },
      198: {
        untrained: 58,
        novice: 108,
        intermediate: 125,
        advanced: 165,
        elite: 207
      },
      199: {
        untrained: 61,
        novice: 114,
        intermediate: 132,
        advanced: 174,
        elite: 218
      }
    }
  }
};

export default benchmarksWomenData;
