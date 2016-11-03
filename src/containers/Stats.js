import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as numbersActions from '../actions/numbersActions';
import '../styles/styles.css';
import ThisWeek from '../containers/ThisWeek';
import StatsOverview from '../containers/StatsOverview';

const DummyStats = {
  "calcStartDate": "1985-05-01T00:00:00.000Z",
  "calcEndDate": "2016-10-10T00:00:00.000Z",
  "firstDrawDate": "1996-05-11T00:00:00.000Z",
  "lastDrawDate": "2016-10-08T18:00:00.000Z",
  "ticket": {
    "email": "bjornarve@gmail.com",
    "registeredTimestamp": "2016-10-25T09:40:34.106Z",
    "row1": [
      2,
      7,
      10,
      12,
      19,
      29,
      30
    ],
    "row2": [
      6,
      7,
      9,
      12,
      16,
      22,
      28
    ],
    "row3": [
      3,
      6,
      7,
      10,
      11,
      18,
      19
    ],
    "row4": [
      4,
      5,
      17,
      18,
      22,
      29,
      31
    ],
    "row5": [
      4,
      6,
      18,
      23,
      28,
      29,
      30
    ],
    "row6": [
      3,
      6,
      7,
      14,
      17,
      23,
      31
    ],
    "row7": [
      8,
      12,
      14,
      26,
      27,
      28,
      31
    ],
    "row8": [
      5,
      17,
      24,
      25,
      29,
      33,
      34
    ],
    "row9": [
      1,
      3,
      13,
      15,
      16,
      19,
      29
    ],
    "row10": [
      7,
      11,
      16,
      18,
      19,
      22,
      34
    ],
    "id": "580f289267caeb0003008e22"
  },
  "rowCount": 10,
  "drawCount": 1065,
  "rowsInDraws": 10650,
  "drawsWithWinCount": 66,
  "drawsWithWinPct": 6.2,
  "drawsWithoutWinCount": 999,
  "drawsWithoutWinPct": 93.8,
  "rowsWithWin": 72,
  "balance": {
    "total": {
      "profit": 11976,
      "cost": 37910,
      "profitVsCost": -25934
    },
    "row1": {
      "profit": 7240,
      "cost": 3791,
      "profitVsCost": 3449
    },
    "row2": {
      "profit": 460,
      "cost": 3791,
      "profitVsCost": -3331
    },
    "row3": {
      "profit": 690,
      "cost": 3791,
      "profitVsCost": -3101
    },
    "row4": {
      "profit": 479,
      "cost": 3791,
      "profitVsCost": -3312
    },
    "row5": {
      "profit": 370,
      "cost": 3791,
      "profitVsCost": -3421
    },
    "row6": {
      "profit": 750,
      "cost": 3791,
      "profitVsCost": -3041
    },
    "row7": {
      "profit": 694,
      "cost": 3791,
      "profitVsCost": -3097
    },
    "row8": {
      "profit": 598,
      "cost": 3791,
      "profitVsCost": -3193
    },
    "row9": {
      "profit": 345,
      "cost": 3791,
      "profitVsCost": -3446
    },
    "row10": {
      "profit": 350,
      "cost": 3791,
      "profitVsCost": -3441
    }
  },
  "winsByPrizeType": {
    "5": 11,
    "6": 1,
    "4+1": 60
  },
  "wins": [
    {
      "date": "1996-11-02T00:00:00.000Z",
      "prizeType": "5",
      "prize": 141,
      "numbersMatch": [
        4,
        5,
        22,
        29,
        31
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "26",
        "numbers": [
          4,
          5,
          7,
          16,
          22,
          29,
          31
        ],
        "addNumbers": [
          6,
          34
        ]
      },
      "rowNo": 4
    },
    {
      "date": "1996-12-21T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 48,
      "numbersMatch": [
        5,
        17,
        18,
        29
      ],
      "addNumbersMatch": [
        22
      ],
      "lottoResult": {
        "drawId": "33",
        "numbers": [
          5,
          8,
          14,
          17,
          18,
          25,
          29
        ],
        "addNumbers": [
          22,
          34
        ]
      },
      "rowNo": 4
    },
    {
      "date": "1996-12-21T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 48,
      "numbersMatch": [
        5,
        17,
        25,
        29
      ],
      "addNumbersMatch": [
        34
      ],
      "lottoResult": {
        "drawId": "33",
        "numbers": [
          5,
          8,
          14,
          17,
          18,
          25,
          29
        ],
        "addNumbers": [
          22,
          34
        ]
      },
      "rowNo": 8
    },
    {
      "date": "1997-02-01T00:00:00.000Z",
      "prizeType": "5",
      "prize": 154,
      "numbersMatch": [
        8,
        12,
        26,
        27,
        31
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "39",
        "numbers": [
          8,
          12,
          13,
          23,
          26,
          27,
          31
        ],
        "addNumbers": [
          10,
          25
        ]
      },
      "rowNo": 7
    },
    {
      "date": "1997-09-27T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        14,
        26,
        27,
        28
      ],
      "addNumbersMatch": [
        12
      ],
      "lottoResult": {
        "drawId": "73",
        "numbers": [
          14,
          21,
          26,
          27,
          28,
          30,
          33
        ],
        "addNumbers": [
          7,
          12,
          20
        ]
      },
      "rowNo": 7
    },
    {
      "date": "1997-12-20T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        4,
        18,
        22,
        31
      ],
      "addNumbersMatch": [
        29
      ],
      "lottoResult": {
        "drawId": "85",
        "numbers": [
          4,
          18,
          21,
          22,
          27,
          30,
          31
        ],
        "addNumbers": [
          8,
          29,
          32
        ]
      },
      "rowNo": 4
    },
    {
      "date": "1998-08-22T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        12,
        14,
        26,
        28
      ],
      "addNumbersMatch": [
        8
      ],
      "lottoResult": {
        "drawId": "120",
        "numbers": [
          5,
          12,
          14,
          22,
          26,
          28,
          34
        ],
        "addNumbers": [
          8,
          9,
          30
        ]
      },
      "rowNo": 7
    },
    {
      "date": "1998-08-29T00:00:00.000Z",
      "prizeType": "6",
      "prize": 6995,
      "numbersMatch": [
        7,
        10,
        12,
        19,
        29,
        30
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "121",
        "numbers": [
          7,
          10,
          12,
          19,
          23,
          29,
          30
        ],
        "addNumbers": [
          9,
          27,
          28
        ]
      },
      "rowNo": 1
    },
    {
      "date": "1999-05-08T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        11,
        18,
        22,
        34
      ],
      "addNumbersMatch": [
        16
      ],
      "lottoResult": {
        "drawId": "157",
        "numbers": [
          1,
          9,
          10,
          11,
          18,
          22,
          34
        ],
        "addNumbers": [
          15,
          16,
          29
        ]
      },
      "rowNo": 10
    },
    {
      "date": "1999-06-12T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        3,
        6,
        10,
        11
      ],
      "addNumbersMatch": [
        18
      ],
      "lottoResult": {
        "drawId": "162",
        "numbers": [
          3,
          6,
          10,
          11,
          24,
          28,
          33
        ],
        "addNumbers": [
          2,
          14,
          18
        ]
      },
      "rowNo": 3
    },
    {
      "date": "1999-06-26T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        6,
        7,
        16,
        22
      ],
      "addNumbersMatch": [
        12
      ],
      "lottoResult": {
        "drawId": "164",
        "numbers": [
          6,
          7,
          10,
          15,
          16,
          22,
          23
        ],
        "addNumbers": [
          8,
          12,
          33
        ]
      },
      "rowNo": 2
    },
    {
      "date": "1999-09-18T00:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        2,
        7,
        12,
        30
      ],
      "addNumbersMatch": [
        10
      ],
      "lottoResult": {
        "drawId": "176",
        "numbers": [
          2,
          7,
          12,
          27,
          28,
          30,
          31
        ],
        "addNumbers": [
          10,
          13,
          20
        ]
      },
      "rowNo": 1
    },
    {
      "date": "2000-08-19T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        1,
        3,
        19,
        29
      ],
      "addNumbersMatch": [
        16
      ],
      "lottoResult": {
        "drawId": "224",
        "numbers": [
          1,
          3,
          12,
          19,
          22,
          29,
          34
        ],
        "addNumbers": [
          6,
          14,
          16
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2000-09-23T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        5,
        17,
        18,
        29
      ],
      "addNumbersMatch": [
        31
      ],
      "lottoResult": {
        "drawId": "229",
        "numbers": [
          5,
          6,
          17,
          18,
          24,
          25,
          29
        ],
        "addNumbers": [
          12,
          19,
          31
        ]
      },
      "rowNo": 4
    },
    {
      "date": "2000-09-23T18:00:00.000Z",
      "prizeType": "5",
      "prize": 210,
      "numbersMatch": [
        5,
        17,
        24,
        25,
        29
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "229",
        "numbers": [
          5,
          6,
          17,
          18,
          24,
          25,
          29
        ],
        "addNumbers": [
          12,
          19,
          31
        ]
      },
      "rowNo": 8
    },
    {
      "date": "2000-12-16T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        7,
        16,
        22,
        34
      ],
      "addNumbersMatch": [
        11,
        18
      ],
      "lottoResult": {
        "drawId": "241",
        "numbers": [
          7,
          12,
          16,
          22,
          23,
          25,
          34
        ],
        "addNumbers": [
          11,
          14,
          18
        ]
      },
      "rowNo": 10
    },
    {
      "date": "2001-02-17T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        8,
        27,
        28,
        31
      ],
      "addNumbersMatch": [
        14,
        26
      ],
      "lottoResult": {
        "drawId": "250",
        "numbers": [
          5,
          8,
          23,
          27,
          28,
          29,
          31
        ],
        "addNumbers": [
          2,
          14,
          26
        ]
      },
      "rowNo": 7
    },
    {
      "date": "2001-06-09T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        4,
        18,
        22,
        31
      ],
      "addNumbersMatch": [
        17
      ],
      "lottoResult": {
        "drawId": "266",
        "numbers": [
          1,
          2,
          4,
          18,
          21,
          22,
          31
        ],
        "addNumbers": [
          17,
          27,
          33
        ]
      },
      "rowNo": 4
    },
    {
      "date": "2002-03-02T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        10,
        12,
        19,
        30
      ],
      "addNumbersMatch": [
        7,
        29
      ],
      "lottoResult": {
        "drawId": "304",
        "numbers": [
          10,
          12,
          19,
          21,
          23,
          26,
          30
        ],
        "addNumbers": [
          4,
          7,
          29
        ]
      },
      "rowNo": 1
    },
    {
      "date": "2002-03-16T18:00:00.000Z",
      "prizeType": "5",
      "prize": 195,
      "numbersMatch": [
        3,
        6,
        7,
        11,
        19
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "306",
        "numbers": [
          3,
          4,
          6,
          7,
          11,
          15,
          19
        ],
        "addNumbers": [
          2,
          13,
          33
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2002-05-11T18:00:00.000Z",
      "prizeType": "5",
      "prize": 240,
      "numbersMatch": [
        5,
        17,
        24,
        29,
        34
      ],
      "addNumbersMatch": [
        33
      ],
      "lottoResult": {
        "drawId": "314",
        "numbers": [
          5,
          17,
          19,
          24,
          29,
          31,
          34
        ],
        "addNumbers": [
          7,
          32,
          33
        ]
      },
      "rowNo": 8
    },
    {
      "date": "2002-10-12T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        6,
        23,
        28,
        29
      ],
      "addNumbersMatch": [
        4
      ],
      "lottoResult": {
        "drawId": "336",
        "numbers": [
          1,
          6,
          13,
          23,
          27,
          28,
          29
        ],
        "addNumbers": [
          3,
          4,
          26
        ]
      },
      "rowNo": 5
    },
    {
      "date": "2002-11-09T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        11,
        18,
        19,
        22
      ],
      "addNumbersMatch": [
        34
      ],
      "lottoResult": {
        "drawId": "340",
        "numbers": [
          11,
          17,
          18,
          19,
          21,
          22,
          23
        ],
        "addNumbers": [
          12,
          14,
          34
        ]
      },
      "rowNo": 10
    },
    {
      "date": "2002-11-16T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        13,
        15,
        16,
        19
      ],
      "addNumbersMatch": [
        29
      ],
      "lottoResult": {
        "drawId": "341",
        "numbers": [
          7,
          13,
          15,
          16,
          19,
          21,
          33
        ],
        "addNumbers": [
          8,
          27,
          29
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2002-12-28T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        7,
        12,
        16,
        28
      ],
      "addNumbersMatch": [
        6
      ],
      "lottoResult": {
        "drawId": "347",
        "numbers": [
          7,
          12,
          15,
          16,
          27,
          28,
          33
        ],
        "addNumbers": [
          3,
          6,
          23
        ]
      },
      "rowNo": 2
    },
    {
      "date": "2003-04-26T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        6,
        23,
        28,
        29
      ],
      "addNumbersMatch": [
        30
      ],
      "lottoResult": {
        "drawId": "364",
        "numbers": [
          6,
          7,
          11,
          15,
          23,
          28,
          29
        ],
        "addNumbers": [
          16,
          27,
          30
        ]
      },
      "rowNo": 5
    },
    {
      "date": "2003-08-30T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        6,
        12,
        22,
        28
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "382",
        "numbers": [
          6,
          8,
          12,
          19,
          20,
          22,
          28
        ],
        "addNumbers": [
          7,
          10,
          34
        ]
      },
      "rowNo": 2
    },
    {
      "date": "2004-01-31T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        6,
        10,
        11,
        19
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "404",
        "numbers": [
          6,
          10,
          11,
          14,
          19,
          20,
          31
        ],
        "addNumbers": [
          7,
          15,
          17
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2004-03-06T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        9,
        12,
        22,
        28
      ],
      "addNumbersMatch": [
        6
      ],
      "lottoResult": {
        "drawId": "409",
        "numbers": [
          9,
          11,
          12,
          22,
          23,
          24,
          28
        ],
        "addNumbers": [
          6,
          15,
          25
        ]
      },
      "rowNo": 2
    },
    {
      "date": "2004-04-03T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        7,
        10,
        12,
        30
      ],
      "addNumbersMatch": [
        29
      ],
      "lottoResult": {
        "drawId": "413",
        "numbers": [
          7,
          10,
          12,
          15,
          18,
          24,
          30
        ],
        "addNumbers": [
          4,
          25,
          29
        ]
      },
      "rowNo": 1
    },
    {
      "date": "2004-06-05T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        3,
        6,
        23,
        31
      ],
      "addNumbersMatch": [
        17
      ],
      "lottoResult": {
        "drawId": "422",
        "numbers": [
          3,
          6,
          15,
          21,
          23,
          27,
          31
        ],
        "addNumbers": [
          17,
          19,
          20
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2004-08-14T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        6,
        7,
        9,
        16
      ],
      "addNumbersMatch": [
        12
      ],
      "lottoResult": {
        "drawId": "432",
        "numbers": [
          6,
          7,
          9,
          13,
          16,
          23,
          31
        ],
        "addNumbers": [
          3,
          12,
          25
        ]
      },
      "rowNo": 2
    },
    {
      "date": "2004-08-14T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        6,
        7,
        23,
        31
      ],
      "addNumbersMatch": [
        3
      ],
      "lottoResult": {
        "drawId": "432",
        "numbers": [
          6,
          7,
          9,
          13,
          16,
          23,
          31
        ],
        "addNumbers": [
          3,
          12,
          25
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2005-01-15T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        17,
        24,
        25,
        29
      ],
      "addNumbersMatch": [
        5
      ],
      "lottoResult": {
        "drawId": "454",
        "numbers": [
          3,
          7,
          17,
          24,
          25,
          28,
          29
        ],
        "addNumbers": [
          5,
          16,
          23
        ]
      },
      "rowNo": 8
    },
    {
      "date": "2005-07-09T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        17,
        18,
        22,
        29
      ],
      "addNumbersMatch": [
        31
      ],
      "lottoResult": {
        "drawId": "479",
        "numbers": [
          9,
          17,
          18,
          20,
          22,
          29,
          32
        ],
        "addNumbers": [
          11,
          26,
          31
        ]
      },
      "rowNo": 4
    },
    {
      "date": "2005-09-17T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        1,
        3,
        13,
        16
      ],
      "addNumbersMatch": [
        15
      ],
      "lottoResult": {
        "drawId": "489",
        "numbers": [
          1,
          3,
          10,
          12,
          13,
          16,
          34
        ],
        "addNumbers": [
          2,
          8,
          15
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2006-03-18T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        1,
        3,
        15,
        29
      ],
      "addNumbersMatch": [
        13
      ],
      "lottoResult": {
        "drawId": "515",
        "numbers": [
          1,
          3,
          6,
          15,
          18,
          21,
          29
        ],
        "addNumbers": [
          4,
          13,
          25
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2006-04-01T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        8,
        26,
        27,
        31
      ],
      "addNumbersMatch": [
        14
      ],
      "lottoResult": {
        "drawId": "517",
        "numbers": [
          1,
          8,
          26,
          27,
          30,
          31,
          32
        ],
        "addNumbers": [
          10,
          14,
          29
        ]
      },
      "rowNo": 7
    },
    {
      "date": "2006-06-17T18:00:00.000Z",
      "prizeType": "5",
      "prize": 165,
      "numbersMatch": [
        3,
        7,
        14,
        17,
        23
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "528",
        "numbers": [
          3,
          7,
          9,
          14,
          17,
          23,
          26
        ],
        "addNumbers": [
          16,
          25,
          33
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2006-07-08T18:00:00.000Z",
      "prizeType": "5",
      "prize": 175,
      "numbersMatch": [
        6,
        18,
        23,
        28,
        30
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "531",
        "numbers": [
          1,
          6,
          12,
          18,
          23,
          28,
          30
        ],
        "addNumbers": [
          5,
          19,
          33
        ]
      },
      "rowNo": 5
    },
    {
      "date": "2006-12-09T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        6,
        11,
        18,
        19
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "553",
        "numbers": [
          5,
          6,
          11,
          12,
          18,
          19,
          33
        ],
        "addNumbers": [
          1,
          7,
          9
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2007-01-06T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        3,
        6,
        17,
        31
      ],
      "addNumbersMatch": [
        14
      ],
      "lottoResult": {
        "drawId": "557",
        "numbers": [
          3,
          6,
          15,
          17,
          19,
          31,
          32
        ],
        "addNumbers": [
          14,
          28,
          34
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2007-07-21T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        4,
        18,
        28,
        29
      ],
      "addNumbersMatch": [
        23
      ],
      "lottoResult": {
        "drawId": "585",
        "numbers": [
          4,
          9,
          18,
          24,
          26,
          28,
          29
        ],
        "addNumbers": [
          7,
          23,
          31
        ]
      },
      "rowNo": 5
    },
    {
      "date": "2007-10-27T18:00:00.000Z",
      "prizeType": "5",
      "prize": 205,
      "numbersMatch": [
        3,
        7,
        14,
        23,
        31
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "599",
        "numbers": [
          3,
          7,
          14,
          23,
          26,
          30,
          31
        ],
        "addNumbers": [
          8,
          21,
          33
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2007-11-17T18:00:00.000Z",
      "prizeType": "5",
      "prize": 175,
      "numbersMatch": [
        6,
        12,
        16,
        22,
        28
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "602",
        "numbers": [
          6,
          8,
          12,
          14,
          16,
          22,
          28
        ],
        "addNumbers": [
          5,
          21,
          27
        ]
      },
      "rowNo": 2
    },
    {
      "date": "2007-11-17T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        8,
        12,
        14,
        28
      ],
      "addNumbersMatch": [
        27
      ],
      "lottoResult": {
        "drawId": "602",
        "numbers": [
          6,
          8,
          12,
          14,
          16,
          22,
          28
        ],
        "addNumbers": [
          5,
          21,
          27
        ]
      },
      "rowNo": 7
    },
    {
      "date": "2008-04-19T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        3,
        6,
        17,
        31
      ],
      "addNumbersMatch": [
        23
      ],
      "lottoResult": {
        "drawId": "624",
        "numbers": [
          3,
          4,
          6,
          11,
          17,
          27,
          31
        ],
        "addNumbers": [
          1,
          20,
          23
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2008-06-07T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        7,
        11,
        18,
        22
      ],
      "addNumbersMatch": [
        16
      ],
      "lottoResult": {
        "drawId": "631",
        "numbers": [
          7,
          11,
          14,
          15,
          18,
          22,
          28
        ],
        "addNumbers": [
          16,
          21,
          27
        ]
      },
      "rowNo": 10
    },
    {
      "date": "2008-07-26T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        7,
        10,
        18,
        19
      ],
      "addNumbersMatch": [
        11
      ],
      "lottoResult": {
        "drawId": "638",
        "numbers": [
          7,
          10,
          18,
          19,
          21,
          22,
          23
        ],
        "addNumbers": [
          11,
          25,
          34
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2008-07-26T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        7,
        18,
        19,
        22
      ],
      "addNumbersMatch": [
        11,
        34
      ],
      "lottoResult": {
        "drawId": "638",
        "numbers": [
          7,
          10,
          18,
          19,
          21,
          22,
          23
        ],
        "addNumbers": [
          11,
          25,
          34
        ]
      },
      "rowNo": 10
    },
    {
      "date": "2008-10-04T18:00:00.000Z",
      "prizeType": "5",
      "prize": 195,
      "numbersMatch": [
        6,
        10,
        11,
        18,
        19
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "648",
        "numbers": [
          1,
          6,
          10,
          11,
          18,
          19,
          20
        ],
        "addNumbers": [
          13,
          17,
          22
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2008-12-20T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        17,
        24,
        25,
        29
      ],
      "addNumbersMatch": [
        33
      ],
      "lottoResult": {
        "drawId": "659",
        "numbers": [
          2,
          17,
          19,
          24,
          25,
          27,
          29
        ],
        "addNumbers": [
          4,
          10,
          33
        ]
      },
      "rowNo": 8
    },
    {
      "date": "2009-03-14T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        4,
        5,
        22,
        31
      ],
      "addNumbersMatch": [
        17
      ],
      "lottoResult": {
        "drawId": "671",
        "numbers": [
          4,
          5,
          22,
          24,
          26,
          30,
          31
        ],
        "addNumbers": [
          3,
          17,
          28
        ]
      },
      "rowNo": 4
    },
    {
      "date": "2009-04-18T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        2,
        7,
        19,
        29
      ],
      "addNumbersMatch": [
        10
      ],
      "lottoResult": {
        "drawId": "676",
        "numbers": [
          2,
          3,
          7,
          15,
          19,
          29,
          34
        ],
        "addNumbers": [
          1,
          10,
          28
        ]
      },
      "rowNo": 1
    },
    {
      "date": "2009-04-18T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        3,
        15,
        19,
        29
      ],
      "addNumbersMatch": [
        1
      ],
      "lottoResult": {
        "drawId": "676",
        "numbers": [
          2,
          3,
          7,
          15,
          19,
          29,
          34
        ],
        "addNumbers": [
          1,
          10,
          28
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2009-05-16T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        3,
        6,
        7,
        11
      ],
      "addNumbersMatch": [
        19
      ],
      "lottoResult": {
        "drawId": "680",
        "numbers": [
          3,
          5,
          6,
          7,
          11,
          16,
          32
        ],
        "addNumbers": [
          12,
          19,
          28
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2009-06-06T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        3,
        14,
        17,
        31
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "683",
        "numbers": [
          3,
          9,
          14,
          17,
          21,
          31,
          33
        ],
        "addNumbers": [
          1,
          7,
          34
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2009-10-03T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        18,
        28,
        29,
        30
      ],
      "addNumbersMatch": [
        6,
        23
      ],
      "lottoResult": {
        "drawId": "700",
        "numbers": [
          1,
          12,
          18,
          25,
          28,
          29,
          30
        ],
        "addNumbers": [
          6,
          7,
          23
        ]
      },
      "rowNo": 5
    },
    {
      "date": "2010-05-08T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 55,
      "numbersMatch": [
        1,
        13,
        15,
        16
      ],
      "addNumbersMatch": [
        19
      ],
      "lottoResult": {
        "drawId": "731",
        "numbers": [
          1,
          5,
          13,
          15,
          16,
          17,
          34
        ],
        "addNumbers": [
          14,
          19,
          21
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2010-08-28T18:00:00.000Z",
      "prizeType": "5",
      "prize": 215,
      "numbersMatch": [
        8,
        12,
        14,
        28,
        31
      ],
      "addNumbersMatch": [],
      "lottoResult": {
        "drawId": "747",
        "numbers": [
          7,
          8,
          12,
          13,
          14,
          28,
          31
        ],
        "addNumbers": [
          25,
          30,
          33
        ]
      },
      "rowNo": 7
    },
    {
      "date": "2011-09-03T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        7,
        9,
        16,
        28
      ],
      "addNumbersMatch": [
        6,
        12
      ],
      "lottoResult": {
        "drawId": "800",
        "numbers": [
          5,
          7,
          9,
          13,
          16,
          28,
          34
        ],
        "addNumbers": [
          6,
          12,
          15
        ]
      },
      "rowNo": 2
    },
    {
      "date": "2011-11-12T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        3,
        7,
        23,
        31
      ],
      "addNumbersMatch": [
        17
      ],
      "lottoResult": {
        "drawId": "810",
        "numbers": [
          3,
          7,
          9,
          20,
          23,
          29,
          31
        ],
        "addNumbers": [
          17,
          22,
          30
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2012-05-19T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        11,
        16,
        19,
        22
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "837",
        "numbers": [
          8,
          11,
          14,
          16,
          19,
          22,
          28
        ],
        "addNumbers": [
          4,
          7,
          24
        ]
      },
      "rowNo": 10
    },
    {
      "date": "2012-06-23T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        3,
        6,
        14,
        17
      ],
      "addNumbersMatch": [
        23
      ],
      "lottoResult": {
        "drawId": "842",
        "numbers": [
          3,
          6,
          12,
          14,
          17,
          25,
          33
        ],
        "addNumbers": [
          10,
          23,
          32
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2013-10-12T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        3,
        6,
        17,
        31
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "910",
        "numbers": [
          1,
          3,
          6,
          17,
          24,
          30,
          31
        ],
        "addNumbers": [
          7,
          12,
          32
        ]
      },
      "rowNo": 6
    },
    {
      "date": "2013-12-28T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 40,
      "numbersMatch": [
        8,
        12,
        27,
        28
      ],
      "addNumbersMatch": [
        26
      ],
      "lottoResult": {
        "drawId": "921",
        "numbers": [
          8,
          12,
          17,
          22,
          23,
          27,
          28
        ],
        "addNumbers": [
          4,
          5,
          26
        ]
      },
      "rowNo": 7
    },
    {
      "date": "2014-07-19T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        10,
        12,
        29,
        30
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "950",
        "numbers": [
          6,
          10,
          12,
          25,
          28,
          29,
          30
        ],
        "addNumbers": [
          7,
          15,
          33
        ]
      },
      "rowNo": 1
    },
    {
      "date": "2014-09-13T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        13,
        15,
        16,
        19
      ],
      "addNumbersMatch": [
        3
      ],
      "lottoResult": {
        "drawId": "958",
        "numbers": [
          6,
          8,
          13,
          15,
          16,
          19,
          33
        ],
        "addNumbers": [
          3,
          23,
          24
        ]
      },
      "rowNo": 9
    },
    {
      "date": "2015-01-17T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        8,
        14,
        27,
        28
      ],
      "addNumbersMatch": [
        31
      ],
      "lottoResult": {
        "drawId": "976",
        "numbers": [
          5,
          8,
          14,
          18,
          20,
          27,
          28
        ],
        "addNumbers": [
          1,
          30,
          31
        ]
      },
      "rowNo": 7
    },
    {
      "date": "2015-03-21T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 40,
      "numbersMatch": [
        5,
        17,
        18,
        29
      ],
      "addNumbersMatch": [
        22
      ],
      "lottoResult": {
        "drawId": "985",
        "numbers": [
          5,
          9,
          12,
          14,
          17,
          18,
          29
        ],
        "addNumbers": [
          22
        ]
      },
      "rowNo": 4
    },
    {
      "date": "2016-02-20T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 45,
      "numbersMatch": [
        3,
        7,
        11,
        19
      ],
      "addNumbersMatch": [
        10
      ],
      "lottoResult": {
        "drawId": "1033",
        "numbers": [
          3,
          7,
          11,
          19,
          23,
          31,
          33
        ],
        "addNumbers": [
          10
        ]
      },
      "rowNo": 3
    },
    {
      "date": "2016-08-20T18:00:00.000Z",
      "prizeType": "4+1",
      "prize": 50,
      "numbersMatch": [
        16,
        18,
        19,
        34
      ],
      "addNumbersMatch": [
        7
      ],
      "lottoResult": {
        "drawId": "1059",
        "numbers": [
          8,
          16,
          17,
          18,
          19,
          21,
          34
        ],
        "addNumbers": [
          7
        ]
      },
      "rowNo": 10
    }
  ]
};

class Stats extends Component {
  componentWillMount(){
    this.props.stats.ticket ? console.log('Got Stats. Throwing Dummy') : this.props.dispatch(numbersActions.importStats(DummyStats));
  }

  render() {
    return (
    <div className="col-sm-12 no-pad statoverview">
      <ThisWeek link={'/main'} linkText={'Tilbake til Nippetukongen'}/>
      <StatsOverview rows={10}/>
    </div>
    );
  }
}

Stats.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    stats: state.stats
  }
}

export default connect(mapStateToProps)(Stats);
