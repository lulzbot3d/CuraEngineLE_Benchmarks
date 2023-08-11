window.BENCHMARK_DATA = {
  "lastUpdate": 1691758581224,
  "repoUrl": "https://github.com/Ultimaker/CuraEngine",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "a9e8eaaa9d7441f6579cba814a2207a552388b07",
          "message": "push benchmark results to seperate repo",
          "timestamp": "2023-08-11T14:11:36+02:00",
          "tree_id": "76e3727455104ad23aa6505bfe16c8aebac60cf0",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/a9e8eaaa9d7441f6579cba814a2207a552388b07"
        },
        "date": 1691757552789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5212990920000493,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5207001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.999614973372881,
            "unit": "ms/iter",
            "extra": "iterations: 338\ncpu: 4.997341124260355 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 49.49994639999886,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 49.48426666666667 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 216.48783728570768,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 216.44604285714294 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 716.9679389999715,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 716.8626499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1276.4008650000278,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1274.6297999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.673121387931298,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 9.67198362068965 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 38.79467919047589,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 38.788061904761875 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 96.8095801249973,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 96.79143749999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06012547374301366,
            "unit": "ms/iter",
            "extra": "iterations: 11635\ncpu: 0.060114568113450874 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2895074777975384,
            "unit": "ms/iter",
            "extra": "iterations: 563\ncpu: 1.2892570159857932 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.215252493976068,
            "unit": "ms/iter",
            "extra": "iterations: 83\ncpu: 8.212167469879516 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016744417776762912,
            "unit": "ms/iter",
            "extra": "iterations: 437650\ncpu: 0.001674125442705357 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009932428446685387,
            "unit": "ms/iter",
            "extra": "iterations: 71003\ncpu: 0.00993173387039985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027122976945359725,
            "unit": "ms/iter",
            "extra": "iterations: 25548\ncpu: 0.027118615938625246 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33790412b61f33e4f4bfe1af2512f2f621e7aff5",
          "message": "Update benchmark.yml",
          "timestamp": "2023-08-11T14:43:39+02:00",
          "tree_id": "733f873fa78e2669a07e91fc9402b369ac7fc5ff",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/33790412b61f33e4f4bfe1af2512f2f621e7aff5"
        },
        "date": 1691758260107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5681141688701913,
            "unit": "ms/iter",
            "extra": "iterations: 1664\ncpu: 0.5680083533653846 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 7.950745538859976,
            "unit": "ms/iter",
            "extra": "iterations: 193\ncpu: 7.949109844559585 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 62.835292761904036,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 62.82890476190476 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.78679983333845,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.70660000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 617.105862499983,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 617.0540500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1040.513313999952,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1040.458300000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.584531611510445,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.580905035971221 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.7512281851856,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.74878888888886 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.45773200000035,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.45171818181815 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.048144734646422056,
            "unit": "ms/iter",
            "extra": "iterations: 14622\ncpu: 0.048140739980850764 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0568420547944497,
            "unit": "ms/iter",
            "extra": "iterations: 657\ncpu: 1.056758904109587 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.775025990290911,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.774377669902917 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013567622009855096,
            "unit": "ms/iter",
            "extra": "iterations: 503320\ncpu: 0.001356626400699354 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007982862547504587,
            "unit": "ms/iter",
            "extra": "iterations: 87623\ncpu: 0.007982019561074114 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02234517461072581,
            "unit": "ms/iter",
            "extra": "iterations: 31533\ncpu: 0.022343503631116684 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "committer": {
            "name": "Ultimaker",
            "username": "Ultimaker"
          },
          "id": "adb598c41b8b207c61aca986b40cf9317292d810",
          "message": "Cura 10811 improve smooth",
          "timestamp": "2023-08-11T04:05:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1933/commits/adb598c41b8b207c61aca986b40cf9317292d810"
        },
        "date": 1691758580857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6301679129011512,
            "unit": "ms/iter",
            "extra": "iterations: 1527\ncpu: 0.6297958742632613 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.212948866279422,
            "unit": "ms/iter",
            "extra": "iterations: 172\ncpu: 9.21172558139535 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 83.0367548333331,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 83.03063888888886 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 319.78558125001655,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 319.7699249999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 565.9560020000072,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 565.9088999999992 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1053.2245259998945,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1053.1638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.245190882812281,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 8.233219531250002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 33.2468356153824,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 33.24492307692311 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 80.08500859999685,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 80.08110999999988 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04943621982974023,
            "unit": "ms/iter",
            "extra": "iterations: 13979\ncpu: 0.04943345732885051 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0905304898595676,
            "unit": "ms/iter",
            "extra": "iterations: 641\ncpu: 1.0904717628705145 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.700164769230154,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 6.6997855769230785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014024521911722046,
            "unit": "ms/iter",
            "extra": "iterations: 508358\ncpu: 0.0014023723438993747 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008420930423768366,
            "unit": "ms/iter",
            "extra": "iterations: 85259\ncpu: 0.008420323954069374 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.024191283169953132,
            "unit": "ms/iter",
            "extra": "iterations: 27849\ncpu: 0.024188753635678167 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}