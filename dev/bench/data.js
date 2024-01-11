window.BENCHMARK_DATA = {
  "lastUpdate": 1704969979534,
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
          "id": "af3d7273656ed3a17bc02f8281467f2e5a82ccbd",
          "message": "[CURA-10670] Re-enable Small Top/Bottom Width",
          "timestamp": "2023-08-11T04:05:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1923/commits/af3d7273656ed3a17bc02f8281467f2e5a82ccbd"
        },
        "date": 1691830989696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6618930565535874,
            "unit": "ms/iter",
            "extra": "iterations: 1503\ncpu: 0.6481308715901529 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.326516548192815,
            "unit": "ms/iter",
            "extra": "iterations: 166\ncpu: 9.297101807228916 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 71.38360021052617,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 71.37451052631579 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 239.66523660001258,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 239.63214 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 722.0602584999938,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 721.9543000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1172.2250209999174,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1172.0518999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.608165733333331,
            "unit": "ms/iter",
            "extra": "iterations: 120\ncpu: 8.607083333333332 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 34.12254612000197,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 34.11525999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 83.37827779999998,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 83.36524999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05335923573278897,
            "unit": "ms/iter",
            "extra": "iterations: 12739\ncpu: 0.05335288484182444 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2373852998235686,
            "unit": "ms/iter",
            "extra": "iterations: 567\ncpu: 1.237253439153439 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.514973337078976,
            "unit": "ms/iter",
            "extra": "iterations: 89\ncpu: 7.513429213483147 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015405479902604498,
            "unit": "ms/iter",
            "extra": "iterations: 447247\ncpu: 0.0015403942340585835 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008757902604899368,
            "unit": "ms/iter",
            "extra": "iterations: 79696\ncpu: 0.008756484641638229 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02664833834755921,
            "unit": "ms/iter",
            "extra": "iterations: 26591\ncpu: 0.026643552329735646 ms\nthreads: 1"
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
          "id": "a2ed0bc5f603604421d217365209045181c6ba5b",
          "message": "[CURA-10829] Option to not use small skin areas on top",
          "timestamp": "2023-08-11T04:05:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1925/commits/a2ed0bc5f603604421d217365209045181c6ba5b"
        },
        "date": 1691831073671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5694988465704143,
            "unit": "ms/iter",
            "extra": "iterations: 1662\ncpu: 0.5682891095066185 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 7.942291476684221,
            "unit": "ms/iter",
            "extra": "iterations: 193\ncpu: 7.941192746113991 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 62.8330328095271,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 62.82471428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.75129183334215,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.73053333333345 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 621.4419015000203,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 621.3981 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1031.888299000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1031.782699999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.600146453237259,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.599446043165473 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.749733592592243,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.74709259259261 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.47355954546062,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.46755454545452 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04804731594798102,
            "unit": "ms/iter",
            "extra": "iterations: 14610\ncpu: 0.04804258726899379 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0799704021407903,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 1.0798512232415924 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.762995576922803,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 6.762334615384601 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013376120417977276,
            "unit": "ms/iter",
            "extra": "iterations: 522613\ncpu: 0.001337497153725604 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007906009056568202,
            "unit": "ms/iter",
            "extra": "iterations: 87892\ncpu: 0.007905156328220968 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02257438759889309,
            "unit": "ms/iter",
            "extra": "iterations: 31094\ncpu: 0.02257145751591947 ms\nthreads: 1"
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
          "id": "f8818e13776a4a2368280a00a7f61cf5e66c3575",
          "message": "[CURA-10829] Option to not use small skin areas on top",
          "timestamp": "2023-08-14T00:37:13Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1925/commits/f8818e13776a4a2368280a00a7f61cf5e66c3575"
        },
        "date": 1692110497116,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6586257178153536,
            "unit": "ms/iter",
            "extra": "iterations: 1538\ncpu: 0.6404777633289986 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.127286204678361,
            "unit": "ms/iter",
            "extra": "iterations: 171\ncpu: 9.126202339181287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 80.43078699999897,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 80.42412222222222 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 312.8588972500097,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 312.83105 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 584.7185669999817,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 584.6806999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1017.8885880000053,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1017.785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.21624917424291,
            "unit": "ms/iter",
            "extra": "iterations: 132\ncpu: 8.214472727272724 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 33.54970029166774,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 33.545700000000046 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 81.70645839999224,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 81.69173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05068745199999967,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05068551999999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0655552167235074,
            "unit": "ms/iter",
            "extra": "iterations: 586\ncpu: 1.065429522184301 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.813707937500624,
            "unit": "ms/iter",
            "extra": "iterations: 80\ncpu: 6.812852500000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013843289314695506,
            "unit": "ms/iter",
            "extra": "iterations: 500697\ncpu: 0.0013841466995008938 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008234076577228812,
            "unit": "ms/iter",
            "extra": "iterations: 82962\ncpu: 0.008233176635085928 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.023269313934077388,
            "unit": "ms/iter",
            "extra": "iterations: 30551\ncpu: 0.02326595528787926 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a62296fa08373196e84bae0ac923305d4d522a95",
          "message": "[CURA-10670] Re-enable Small Top/Bottom Width (#1923)",
          "timestamp": "2023-08-15T16:39:57+02:00",
          "tree_id": "9e2b829752b00087624ef588c4a15d76955e3c37",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/a62296fa08373196e84bae0ac923305d4d522a95"
        },
        "date": 1692110888657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.49849328453307523,
            "unit": "ms/iter",
            "extra": "iterations: 2056\ncpu: 0.4979442120622568 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.145515301980268,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.14343118811881 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.24694475000115,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.241675 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.25136000000066,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.23734000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.2079980000092,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.1555000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1080.0000169999748,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1079.3877999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.032144319999816,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.03107899999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.343205687499704,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.341509374999962 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.03540000000028,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.03075384615381 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.036114731051718876,
            "unit": "ms/iter",
            "extra": "iterations: 19606\ncpu: 0.03611168009792921 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8494135652173387,
            "unit": "ms/iter",
            "extra": "iterations: 828\ncpu: 0.849326690821256 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.396930292307791,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.396528461538462 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010374445515108116,
            "unit": "ms/iter",
            "extra": "iterations: 684933\ncpu: 0.0010373849705007637 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005818706482294491,
            "unit": "ms/iter",
            "extra": "iterations: 120698\ncpu: 0.005818248852507916 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01700492269498217,
            "unit": "ms/iter",
            "extra": "iterations: 40683\ncpu: 0.01700359118059141 ms\nthreads: 1"
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
          "id": "b85dd9f20b63da829a5c8915b53f728189b7099d",
          "message": "[CURA-10829] Option to not use small skin areas on top",
          "timestamp": "2023-08-14T00:37:13Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1925/commits/b85dd9f20b63da829a5c8915b53f728189b7099d"
        },
        "date": 1692111935288,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5604085500000338,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5123067 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.349472164804603,
            "unit": "ms/iter",
            "extra": "iterations: 358\ncpu: 4.348608379888269 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.3409327999994,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.33718571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 143.9897468888805,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 143.95549999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 435.51284066666085,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 433.16876666666695 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 741.32826999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 741.2396000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.13936793103407,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 9.12277155172415 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.00149347826423,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.96502173913043 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 89.96067077777701,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 89.95019999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.056906265014215335,
            "unit": "ms/iter",
            "extra": "iterations: 12305\ncpu: 0.05689790329134488 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.289148627376507,
            "unit": "ms/iter",
            "extra": "iterations: 526\ncpu: 1.2890041825095058 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.137997488371331,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.13702790697675 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016222510014808887,
            "unit": "ms/iter",
            "extra": "iterations: 430113\ncpu: 0.0016220700141590725 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009569338804396905,
            "unit": "ms/iter",
            "extra": "iterations: 73051\ncpu: 0.009568438488179508 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02675014916979181,
            "unit": "ms/iter",
            "extra": "iterations: 26138\ncpu: 0.02674920422373555 ms\nthreads: 1"
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
          "id": "f278ed959b8fbdc3d82138791986bd29092cbfed",
          "message": "CuraEngine plugin architecture",
          "timestamp": "2023-09-08T16:38:03Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1878/commits/f278ed959b8fbdc3d82138791986bd29092cbfed"
        },
        "date": 1694417258552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5443275860000085,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.543478 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.573238314121098,
            "unit": "ms/iter",
            "extra": "iterations: 347\ncpu: 4.5716219020172915 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 40.55518476470819,
            "unit": "ms/iter",
            "extra": "iterations: 34\ncpu: 40.55092352941176 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 150.75112744444948,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 150.73038888888885 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 451.0521706666471,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 450.99163333333314 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 772.687344000019,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 772.5748999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.74552758558574,
            "unit": "ms/iter",
            "extra": "iterations: 111\ncpu: 9.720640540540547 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 39.32576577273039,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 39.32064090909091 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 93.57181355555137,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 93.48999999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06176336644547232,
            "unit": "ms/iter",
            "extra": "iterations: 10097\ncpu: 0.061752817668614395 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.315223007490568,
            "unit": "ms/iter",
            "extra": "iterations: 534\ncpu: 1.3151091760299627 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.120383141177252,
            "unit": "ms/iter",
            "extra": "iterations: 85\ncpu: 8.118756470588238 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001570973955956431,
            "unit": "ms/iter",
            "extra": "iterations: 444785\ncpu: 0.0015708151129197247 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009425766897689465,
            "unit": "ms/iter",
            "extra": "iterations: 74019\ncpu: 0.00942542050014185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02659107352774443,
            "unit": "ms/iter",
            "extra": "iterations: 26439\ncpu: 0.02659030598736718 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0072514830857027,
            "unit": "ns/iter",
            "extra": "iterations: 348658884\ncpu: 2.007165834902405 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.386113965918592,
            "unit": "ns/iter",
            "extra": "iterations: 294024498\ncpu: 2.3860620620802764 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": false,
          "id": "f278ed959b8fbdc3d82138791986bd29092cbfed",
          "message": "fix benchmarks\n\nContributes to CURA-10475 and CURA-10951",
          "timestamp": "2023-09-11T09:15:06+02:00",
          "tree_id": "ced6a3fdc51935f490e99a55194824476255e786",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/f278ed959b8fbdc3d82138791986bd29092cbfed"
        },
        "date": 1694428300088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5062939773413802,
            "unit": "ms/iter",
            "extra": "iterations: 1986\ncpu: 0.5060705941591138 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.166724509900597,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.165669801980195 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.48511425000083,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.47655499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.56368359998578,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.53152000000009 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 665.9679229999824,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 665.9067500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1075.420859000019,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1075.3049000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0815309399995385,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.080713000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.58652396875283,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.583153125000038 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.81368076922543,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.80489230769221 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037701811240666024,
            "unit": "ms/iter",
            "extra": "iterations: 18611\ncpu: 0.03769705013164254 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8512913114956829,
            "unit": "ms/iter",
            "extra": "iterations: 809\ncpu: 0.8511951792336234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.48300164062443,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 5.4823429687499985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010348768649261605,
            "unit": "ms/iter",
            "extra": "iterations: 680724\ncpu: 0.0010347762088599786 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00593043899692937,
            "unit": "ms/iter",
            "extra": "iterations: 117240\ncpu: 0.005929467758444244 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017183113144636487,
            "unit": "ms/iter",
            "extra": "iterations: 40488\ncpu: 0.017181038826318898 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4483885931869773,
            "unit": "ns/iter",
            "extra": "iterations: 287722471\ncpu: 2.448162972992123 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4493795866882073,
            "unit": "ns/iter",
            "extra": "iterations: 283820796\ncpu: 2.449107006239243 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b40dcd8b8d6c06a80380a5737def71b3e89245c",
          "message": "Cache extruder settings (#1867)",
          "timestamp": "2023-09-12T15:49:03+02:00",
          "tree_id": "21b749d3b4fe186642dbcbcb5984a65ec41f3753",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/9b40dcd8b8d6c06a80380a5737def71b3e89245c"
        },
        "date": 1694527171463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5021571659192796,
            "unit": "ms/iter",
            "extra": "iterations: 2007\ncpu: 0.5014373193821625 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.151068386138318,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.150448019801981 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.44800979999945,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.44261 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.40102779998597,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.38887999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1460695000064,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.1042000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1077.8943230000095,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1077.8420999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.049302180000723,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.048910999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.333870343751897,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.33239999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.30733369230935,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.30065384615389 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03637210161856704,
            "unit": "ms/iter",
            "extra": "iterations: 19091\ncpu: 0.036369435859829255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8475689097651818,
            "unit": "ms/iter",
            "extra": "iterations: 809\ncpu: 0.8475212608158232 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.358990907692574,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.358631538461531 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010300013533678103,
            "unit": "ms/iter",
            "extra": "iterations: 698997\ncpu: 0.0010299328895546048 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.006204794397998316,
            "unit": "ms/iter",
            "extra": "iterations: 119493\ncpu: 0.006204545036110892 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017149957470943958,
            "unit": "ms/iter",
            "extra": "iterations: 39667\ncpu: 0.017149686137091353 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4101195735368823,
            "unit": "ns/iter",
            "extra": "iterations: 288549966\ncpu: 2.4100314744102302 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4153527631963896,
            "unit": "ns/iter",
            "extra": "iterations: 284734451\ncpu: 2.4152419827834533 ns\nthreads: 1"
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
          "id": "f6d31c92215251099ee948a5cb6fc8facc138abd",
          "message": "[CURA-11019] speed-fix (ugly? raw pointer edition)",
          "timestamp": "2023-09-13T17:00:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1950/commits/f6d31c92215251099ee948a5cb6fc8facc138abd"
        },
        "date": 1694721631502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.505405459024623,
            "unit": "ms/iter",
            "extra": "iterations: 1989\ncpu: 0.5044556561085973 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.146104433497502,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.145601477832514 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.5497792499973,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.34105 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.3570447999855,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.34429999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.9921939999881,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.9555499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.0846719999317,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.0551000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0313535100001445,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.030687999999987 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.30908256249853,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.30720312500001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.076501384616186,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.07386923076923 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03779769747475114,
            "unit": "ms/iter",
            "extra": "iterations: 17820\ncpu: 0.03779610549943877 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8631095245700344,
            "unit": "ms/iter",
            "extra": "iterations: 814\ncpu: 0.8630353808353817 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.520084007873881,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.519659055118105 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010178574736193428,
            "unit": "ms/iter",
            "extra": "iterations: 701842\ncpu: 0.0010177899014308066 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0057948826892953486,
            "unit": "ms/iter",
            "extra": "iterations: 120671\ncpu: 0.005794436111410347 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017232993499324733,
            "unit": "ms/iter",
            "extra": "iterations: 39842\ncpu: 0.0172326439435771 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4094876480815395,
            "unit": "ns/iter",
            "extra": "iterations: 290436426\ncpu: 2.4094925338325086 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.440264247006797,
            "unit": "ns/iter",
            "extra": "iterations: 288876839\ncpu: 2.4399903517360233 ns\nthreads: 1"
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
          "id": "e171220546f94a513991d83bc5dd87e2ca7f44dd",
          "message": "[CURA-11019] fix slowdown better solution",
          "timestamp": "2023-09-13T17:00:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1951/commits/e171220546f94a513991d83bc5dd87e2ca7f44dd"
        },
        "date": 1694763381078,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6681361239782538,
            "unit": "ms/iter",
            "extra": "iterations: 1468\ncpu: 0.666174386920981 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.158220617284432,
            "unit": "ms/iter",
            "extra": "iterations: 162\ncpu: 9.156965432098765 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 69.67498899999961,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 69.66993684210524 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 227.55743099999108,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 227.53850000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 680.666959000007,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 680.5661499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1192.6073079999924,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1163.3620000000012 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.448544748032006,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 8.4476653543307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 34.060780791667376,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 34.05560416666664 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 83.12480133333287,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 83.11652222222203 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05600265096838118,
            "unit": "ms/iter",
            "extra": "iterations: 12082\ncpu: 0.0559961512994537 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1846267680673062,
            "unit": "ms/iter",
            "extra": "iterations: 595\ncpu: 1.1845149579831957 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.392184191489639,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 7.391239361702143 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014461375290569971,
            "unit": "ms/iter",
            "extra": "iterations: 462884\ncpu: 0.001445998349478487 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008728051608697418,
            "unit": "ms/iter",
            "extra": "iterations: 79754\ncpu: 0.008727282644130694 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02445119537965301,
            "unit": "ms/iter",
            "extra": "iterations: 27920\ncpu: 0.024449050859598823 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.8555442547152798,
            "unit": "ns/iter",
            "extra": "iterations: 383239932\ncpu: 1.8553862492596385 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9135391764523226,
            "unit": "ns/iter",
            "extra": "iterations: 373486114\ncpu: 1.9134100926708062 ns\nthreads: 1"
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
          "id": "b3fb6626654d2b384fd1b425a6d2cc5e7e348c56",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version.",
          "timestamp": "2023-09-13T17:00:17Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1952/commits/b3fb6626654d2b384fd1b425a6d2cc5e7e348c56"
        },
        "date": 1694778008735,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5859346525735206,
            "unit": "ms/iter",
            "extra": "iterations: 1632\ncpu: 0.5857688112745099 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.049979544973702,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.049216402116404 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.53303042857576,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.30760476190477 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.01209133333987,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.7619 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 615.227303499978,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 615.1511000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1032.8359930000488,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1032.7440000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.596876333333301,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.596262318840588 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.683417037039362,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.680833333333336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.25923354544581,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.2437636363636 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05032186290000027,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05031671000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1067941384863373,
            "unit": "ms/iter",
            "extra": "iterations: 621\ncpu: 1.10672495974235 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.918736588235618,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.917805882352939 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013451845357877786,
            "unit": "ms/iter",
            "extra": "iterations: 524760\ncpu: 0.0013451011891150266 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00786016302660858,
            "unit": "ms/iter",
            "extra": "iterations: 88918\ncpu: 0.00785930070401944 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022508856161966122,
            "unit": "ms/iter",
            "extra": "iterations: 31167\ncpu: 0.022507283344563138 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6737067271641783,
            "unit": "ns/iter",
            "extra": "iterations: 418159096\ncpu: 1.6735209318512534 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7340089107239602,
            "unit": "ns/iter",
            "extra": "iterations: 405107597\ncpu: 1.733802587760409 ns\nthreads: 1"
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
          "id": "12e9152dae56f7658319e4a144f19781d4bb7913",
          "message": "Apply nozzle temperature when set in gcode header",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1953/commits/12e9152dae56f7658319e4a144f19781d4bb7913"
        },
        "date": 1695049039304,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5883613214505345,
            "unit": "ms/iter",
            "extra": "iterations: 1627\ncpu: 0.5854596803933619 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.037720926315734,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.036575789473684 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.16591028571241,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.15877619047617 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.1920309999864,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.16811666666658 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 621.4673704999996,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 621.3983999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1065.5319280000413,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1065.3220999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.5789602302154355,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.578139568345324 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.77258318518472,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.766722222222224 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.54484854544965,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.5351636363637 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.049400340572553415,
            "unit": "ms/iter",
            "extra": "iterations: 14182\ncpu: 0.04939194753913411 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1107883901274094,
            "unit": "ms/iter",
            "extra": "iterations: 628\ncpu: 1.1106582802547755 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.91365661386143,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.9123643564356465 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013396944469376976,
            "unit": "ms/iter",
            "extra": "iterations: 523621\ncpu: 0.0013395198053554012 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007964708223379227,
            "unit": "ms/iter",
            "extra": "iterations: 88674\ncpu: 0.007963431219974285 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022251191933902008,
            "unit": "ms/iter",
            "extra": "iterations: 31589\ncpu: 0.022247627338630553 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736406919532734,
            "unit": "ns/iter",
            "extra": "iterations: 418426549\ncpu: 1.6734354014424635 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7463063786842379,
            "unit": "ns/iter",
            "extra": "iterations: 403935020\ncpu: 1.74604296502938 ns\nthreads: 1"
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
          "id": "74456d083079cc4025c7d7d68507d6a0152e97f6",
          "message": "[CURA-11019] fix slowdown better solution",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1951/commits/74456d083079cc4025c7d7d68507d6a0152e97f6"
        },
        "date": 1695120492847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.585456220245442,
            "unit": "ms/iter",
            "extra": "iterations: 1630\ncpu: 0.585148773006135 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.046012084656063,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.04521164021164 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.079520476191774,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.073780952380936 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.67428566666513,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.64983333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.167992000006,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.06045 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1048.5376330000236,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1048.3963000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.607833079710556,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.606796376811596 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.81581007407092,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.811359259259234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.09694209090131,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.08931818181811 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04920553936839082,
            "unit": "ms/iter",
            "extra": "iterations: 13996\ncpu: 0.04920270077164908 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0952899968846128,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 1.095180218068536 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8189908543696856,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.81842233009709 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013452244335821271,
            "unit": "ms/iter",
            "extra": "iterations: 516977\ncpu: 0.0013445656189733798 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007858897983712289,
            "unit": "ms/iter",
            "extra": "iterations: 89025\ncpu: 0.00785819601235607 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022278330618110694,
            "unit": "ms/iter",
            "extra": "iterations: 31305\ncpu: 0.022276623542565065 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.67378000503917,
            "unit": "ns/iter",
            "extra": "iterations: 418315027\ncpu: 1.6736807305753292 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7235892101517278,
            "unit": "ns/iter",
            "extra": "iterations: 406157817\ncpu: 1.7234416542080206 ns\nthreads: 1"
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
          "id": "7f01c3a075d280907b08c5e6b73daf6ea9e107bd",
          "message": "Fix min layer time for gradual flow",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1954/commits/7f01c3a075d280907b08c5e6b73daf6ea9e107bd"
        },
        "date": 1695127756163,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6938240489361345,
            "unit": "ms/iter",
            "extra": "iterations: 1410\ncpu: 0.6937107092198582 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.293710360759201,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 9.293070886075949 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.77429031578686,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 68.7674789473684 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 228.94694660001278,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 228.93168 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 683.4803044999944,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 683.4268500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1187.3179289999598,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1187.2159 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.410401250000632,
            "unit": "ms/iter",
            "extra": "iterations: 120\ncpu: 8.409605 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.894352600001184,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 32.89224400000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.52259509090867,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.51584545454547 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.056109139062501256,
            "unit": "ms/iter",
            "extra": "iterations: 12800\ncpu: 0.05610390625000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2669832692309073,
            "unit": "ms/iter",
            "extra": "iterations: 546\ncpu: 1.2668661172161173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.813583822221265,
            "unit": "ms/iter",
            "extra": "iterations: 90\ncpu: 7.8125666666666564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014477933832373212,
            "unit": "ms/iter",
            "extra": "iterations: 483862\ncpu: 0.0014476615233268958 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008937536542546797,
            "unit": "ms/iter",
            "extra": "iterations: 81453\ncpu: 0.008936867887002304 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02464488638836044,
            "unit": "ms/iter",
            "extra": "iterations: 26661\ncpu: 0.02464351299651164 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.852467592975303,
            "unit": "ns/iter",
            "extra": "iterations: 356823718\ncpu: 1.8524071317478938 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.925071732614116,
            "unit": "ns/iter",
            "extra": "iterations: 347573071\ncpu: 1.9248979734681522 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b9d5213f765035e0510cc027883600060188b5",
          "message": "Apply nozzle temperature when set in gcode header (#1953)",
          "timestamp": "2023-09-19T15:11:03+02:00",
          "tree_id": "097805ca8ced59d4c75fa1e0c8e4fa55ffb1e30e",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/23b9d5213f765035e0510cc027883600060188b5"
        },
        "date": 1695130864235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5044583536159633,
            "unit": "ms/iter",
            "extra": "iterations: 2005\ncpu: 0.5030651870324189 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.153456443349864,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.152482758620689 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.35782155000061,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.35062500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.64524120000078,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.62272000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 668.333192499972,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 668.2854500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1076.656398999944,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1076.5075999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0704635399999916,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.060363000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.41727075000233,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.413821874999964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.131200615384,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.129415384615456 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03704434942044605,
            "unit": "ms/iter",
            "extra": "iterations: 18980\ncpu: 0.03704156480505799 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8666100879121191,
            "unit": "ms/iter",
            "extra": "iterations: 819\ncpu: 0.8665318681318669 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.298094076922903,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.29727769230769 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001011918345359469,
            "unit": "ms/iter",
            "extra": "iterations: 693347\ncpu: 0.001011876448589234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0059537662668732545,
            "unit": "ms/iter",
            "extra": "iterations: 119645\ncpu: 0.005953474863136787 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01717313994790987,
            "unit": "ms/iter",
            "extra": "iterations: 40315\ncpu: 0.017171137293811225 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4094381952603645,
            "unit": "ns/iter",
            "extra": "iterations: 290497656\ncpu: 2.409276238703971 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4220269336221905,
            "unit": "ns/iter",
            "extra": "iterations: 289344078\ncpu: 2.4218525737374805 ns\nthreads: 1"
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
          "id": "4a6daa00e03f86747c00091e9870f7b06fb85119",
          "message": "Fix min layer time for gradual flow",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1954/commits/4a6daa00e03f86747c00091e9870f7b06fb85119"
        },
        "date": 1695131973995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5083209784461223,
            "unit": "ms/iter",
            "extra": "iterations: 1995\ncpu: 0.5032829072681704 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.18305455721369,
            "unit": "ms/iter",
            "extra": "iterations: 201\ncpu: 8.172912935323382 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.42474204999576,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.39143500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.75972759998058,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.60992000000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.4596130000054,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.4199999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1080.8540040000025,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1080.8117 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.083260250000194,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.077159000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.66033906249865,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.606253125000034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.7925473076997,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.78682307692307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03726025083505658,
            "unit": "ms/iter",
            "extra": "iterations: 18861\ncpu: 0.03725738295954612 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8666547398772945,
            "unit": "ms/iter",
            "extra": "iterations: 815\ncpu: 0.8665877300613483 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.540995714285138,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 5.540564285714288 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010131336361862873,
            "unit": "ms/iter",
            "extra": "iterations: 692305\ncpu: 0.0010128889723460034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005820839453480425,
            "unit": "ms/iter",
            "extra": "iterations: 117617\ncpu: 0.005820392460273587 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017399283817428016,
            "unit": "ms/iter",
            "extra": "iterations: 39765\ncpu: 0.017398191877278996 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.412006162038756,
            "unit": "ns/iter",
            "extra": "iterations: 290409074\ncpu: 2.4119008760724783 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.426273990973975,
            "unit": "ns/iter",
            "extra": "iterations: 290117440\ncpu: 2.426153698309208 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erwan.mathieu@ultimaker.com",
            "name": "Erwan MATHIEU",
            "username": "wawanbreton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cc0d89987d05508f1690882050209d3b2bb7ca",
          "message": "[CURA-11019] fix slowdown better solution (#1951)",
          "timestamp": "2023-09-19T16:09:13+02:00",
          "tree_id": "db2f82317eb1e57587f6cb5fa2572337f3eede5e",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/52cc0d89987d05508f1690882050209d3b2bb7ca"
        },
        "date": 1695133472082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.7010127710761017,
            "unit": "ms/iter",
            "extra": "iterations: 1459\ncpu: 0.7009426319396848 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 10.539297695364162,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 10.538484105960265 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 93.3852536250015,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 93.36781249999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 376.87563499999516,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 376.8382333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 672.3199010000371,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 664.3145999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1222.3519460000034,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1220.3584999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.041751809917521,
            "unit": "ms/iter",
            "extra": "iterations: 121\ncpu: 9.032501652892567 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.00310581818526,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 36.95269545454542 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 86.98668839999755,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 86.97591999999989 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0586870721441357,
            "unit": "ms/iter",
            "extra": "iterations: 12877\ncpu: 0.05867756465015135 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2578504931739252,
            "unit": "ms/iter",
            "extra": "iterations: 586\ncpu: 1.2577058020477836 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.724788076923407,
            "unit": "ms/iter",
            "extra": "iterations: 91\ncpu: 7.719816483516484 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015673844891908124,
            "unit": "ms/iter",
            "extra": "iterations: 469363\ncpu: 0.0015673267811906783 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009154924218133216,
            "unit": "ms/iter",
            "extra": "iterations: 73606\ncpu: 0.009153483411678385 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026348586930762787,
            "unit": "ms/iter",
            "extra": "iterations: 27010\ncpu: 0.026345594224361363 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.3710994291814225,
            "unit": "ns/iter",
            "extra": "iterations: 275525250\ncpu: 2.370631729759785 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.388542961105452,
            "unit": "ns/iter",
            "extra": "iterations: 286692786\ncpu: 2.3882787898262685 ns\nthreads: 1"
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
          "id": "803c2d914fa3cba96478b73082cdc0f67de7ab21",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version.",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1952/commits/803c2d914fa3cba96478b73082cdc0f67de7ab21"
        },
        "date": 1695135456983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6566908808395132,
            "unit": "ms/iter",
            "extra": "iterations: 1477\ncpu: 0.6479926201760325 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.95404850980366,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 9.950902614379084 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 96.28268731249534,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 96.13376874999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 366.2128533333468,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 366.16896666666645 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 673.5771520000071,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 673.1920000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1313.5322860000542,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1203.315599999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.880855675438955,
            "unit": "ms/iter",
            "extra": "iterations: 114\ncpu: 8.871685087719305 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.483889833334615,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 36.451429166666664 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 92.42950899999869,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 92.37384999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05370705650000218,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05365114999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1645696162080479,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 1.1644185015290527 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.82769032978775,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 7.826098936170204 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015815107800671645,
            "unit": "ms/iter",
            "extra": "iterations: 433578\ncpu: 0.0015811002864536483 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009047507855191081,
            "unit": "ms/iter",
            "extra": "iterations: 79056\ncpu: 0.009046172333535685 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026740512346143722,
            "unit": "ms/iter",
            "extra": "iterations: 26486\ncpu: 0.02673869969040239 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4008456780499356,
            "unit": "ns/iter",
            "extra": "iterations: 296346346\ncpu: 2.397192371658255 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3236674957983854,
            "unit": "ns/iter",
            "extra": "iterations: 314445350\ncpu: 2.3226592474654226 ns\nthreads: 1"
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
          "id": "cf0c484079e10b5cbe3b6fe6531a365c3dbe2ed9",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version.",
          "timestamp": "2023-09-16T15:02:40Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1952/commits/cf0c484079e10b5cbe3b6fe6531a365c3dbe2ed9"
        },
        "date": 1695188986357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5224675309999611,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5116388000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.440216958944327,
            "unit": "ms/iter",
            "extra": "iterations: 341\ncpu: 4.439809970674486 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.564639599997726,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.558508571428575 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 143.85269888888766,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 143.83774444444444 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 428.08873666668507,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 428.05980000000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 742.0799320000242,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 742.0023999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.119976626086258,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.117933913043476 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.826023956519826,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.8187565217391 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.68616377776561,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.67473333333326 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05819272437985741,
            "unit": "ms/iter",
            "extra": "iterations: 11973\ncpu: 0.05818636933099463 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3183675547171367,
            "unit": "ms/iter",
            "extra": "iterations: 530\ncpu: 1.3177190566037742 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.182773755813054,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.181689534883729 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016078736622575068,
            "unit": "ms/iter",
            "extra": "iterations: 433940\ncpu: 0.0016076900032262545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009557103648883902,
            "unit": "ms/iter",
            "extra": "iterations: 73913\ncpu: 0.00955665579803283 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02671555164734101,
            "unit": "ms/iter",
            "extra": "iterations: 26042\ncpu: 0.026713597265954996 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0076322261257156,
            "unit": "ns/iter",
            "extra": "iterations: 348698657\ncpu: 2.0075767025394557 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0793492526430906,
            "unit": "ns/iter",
            "extra": "iterations: 334081357\ncpu: 2.0791025462698838 ns\nthreads: 1"
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
          "id": "b65a05706bbbf06ccb8d079bdc0b1b906dbf9c25",
          "message": "[CURA-11035] Plugins specify a verion-range, slots just a version. (#1952)",
          "timestamp": "2023-09-20T07:38:54+02:00",
          "tree_id": "6340c73dba7cc5a47c2029e125a687cf798a92ca",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/b65a05706bbbf06ccb8d079bdc0b1b906dbf9c25"
        },
        "date": 1695189060323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5818776548995606,
            "unit": "ms/iter",
            "extra": "iterations: 1643\ncpu: 0.5816334753499696 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.055295574468374,
            "unit": "ms/iter",
            "extra": "iterations: 188\ncpu: 8.054534042553191 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.018334428566696,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.011471428571426 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.8423139999994,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.81881666666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 624.5036095000387,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 624.4507499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1069.7890180000513,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1069.6956000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.603692748201368,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.603020863309357 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.67434170370436,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.672148148148104 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.82576063636489,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.81985454545466 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05082471900284604,
            "unit": "ms/iter",
            "extra": "iterations: 13719\ncpu: 0.050821969531306854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.102670646789112,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 1.1026048929663597 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.831101174757527,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.830597087378638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013527807087135061,
            "unit": "ms/iter",
            "extra": "iterations: 523117\ncpu: 0.0013516100604644872 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007867448807286175,
            "unit": "ms/iter",
            "extra": "iterations: 88831\ncpu: 0.007866718825635177 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02226762980646942,
            "unit": "ms/iter",
            "extra": "iterations: 31416\ncpu: 0.02226680353959773 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673211268521789,
            "unit": "ns/iter",
            "extra": "iterations: 418444808\ncpu: 1.672930543327477 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.700103600283578,
            "unit": "ns/iter",
            "extra": "iterations: 416908126\ncpu: 1.700027549954735 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d67915b57c1e186da138f059e5d51fbccc55bc9",
          "message": "Fix min layer time for gradual flow (#1954)",
          "timestamp": "2023-09-20T10:11:40+02:00",
          "tree_id": "9fb855f31e627354b0991a1ab4eb298c28dcd2d5",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/7d67915b57c1e186da138f059e5d51fbccc55bc9"
        },
        "date": 1695198252608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5053158157099396,
            "unit": "ms/iter",
            "extra": "iterations: 1986\ncpu: 0.5036058912386707 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.171733428571203,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.162390640394088 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.38570589999904,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.35901500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.68726300000526,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.66704 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1820775000015,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.0566500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1084.0895630000205,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1083.9628999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.03143061999981,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.030775000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.291893406249045,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.288556249999985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.25647030768974,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.25149230769229 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03619678240230055,
            "unit": "ms/iter",
            "extra": "iterations: 18116\ncpu: 0.03619487193640972 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8494479322034771,
            "unit": "ms/iter",
            "extra": "iterations: 826\ncpu: 0.8493871670702173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.357083152671641,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.356370992366412 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010174854600598102,
            "unit": "ms/iter",
            "extra": "iterations: 692747\ncpu: 0.001015532510425886 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005772600557186136,
            "unit": "ms/iter",
            "extra": "iterations: 121324\ncpu: 0.005771851406152137 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017199496262304312,
            "unit": "ms/iter",
            "extra": "iterations: 40533\ncpu: 0.01719827547923915 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.411154276066755,
            "unit": "ns/iter",
            "extra": "iterations: 290540218\ncpu: 2.410944360205587 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.431529087133629,
            "unit": "ns/iter",
            "extra": "iterations: 285381729\ncpu: 2.4313928660793827 ns\nthreads: 1"
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
          "id": "7bdbe9acc8137cbb23245768737d5da6e3d62f4a",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/7bdbe9acc8137cbb23245768737d5da6e3d62f4a"
        },
        "date": 1695306027805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5031342911455897,
            "unit": "ms/iter",
            "extra": "iterations: 1999\ncpu: 0.5022620310155078 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.14142852709329,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.1399921182266 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.48005115000433,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.33892 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.9846462000005,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.24505999999988 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1579375000078,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.1337500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1087.9139420000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1087.8622999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.070342480000136,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.069989999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.510668531251724,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.508178125000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.48281538461679,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.47938461538474 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0364549480350937,
            "unit": "ms/iter",
            "extra": "iterations: 19263\ncpu: 0.03645364169651659 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8608727126435822,
            "unit": "ms/iter",
            "extra": "iterations: 783\ncpu: 0.8608711366538958 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.552239212598457,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.551807086614174 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001003013802201061,
            "unit": "ms/iter",
            "extra": "iterations: 694382\ncpu: 0.0010029705551123167 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005900996587756359,
            "unit": "ms/iter",
            "extra": "iterations: 122207\ncpu: 0.00590074463819586 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017221432729861312,
            "unit": "ms/iter",
            "extra": "iterations: 40709\ncpu: 0.01722009383674374 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4581024044766275,
            "unit": "ns/iter",
            "extra": "iterations: 287050888\ncpu: 2.4579808998883848 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4307719524342835,
            "unit": "ns/iter",
            "extra": "iterations: 288234158\ncpu: 2.430658825662164 ns\nthreads: 1"
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
          "id": "3820d3b8ad8eb67195ef93c446324dcf7388aa0a",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/3820d3b8ad8eb67195ef93c446324dcf7388aa0a"
        },
        "date": 1695388914976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5250195189998976,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5165642 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.8623502083331225,
            "unit": "ms/iter",
            "extra": "iterations: 336\ncpu: 4.853440178571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.84979483333321,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 47.81595666666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 203.49281428570976,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 203.3696 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 679.2685230000188,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 678.9720499999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1262.5620930000423,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1262.3467999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.581343618181522,
            "unit": "ms/iter",
            "extra": "iterations: 110\ncpu: 9.580027272727277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.49161300000335,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.48870000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 90.46101311110357,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 90.45252222222209 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0593366502343481,
            "unit": "ms/iter",
            "extra": "iterations: 11948\ncpu: 0.05933018915299636 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.232257438282643,
            "unit": "ms/iter",
            "extra": "iterations: 559\ncpu: 1.231910196779965 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.974385367815715,
            "unit": "ms/iter",
            "extra": "iterations: 87\ncpu: 7.9733804597701 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001628347306391025,
            "unit": "ms/iter",
            "extra": "iterations: 442232\ncpu: 0.0016255286817778941 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00981315455771521,
            "unit": "ms/iter",
            "extra": "iterations: 73403\ncpu: 0.009812299224827336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026880110916053346,
            "unit": "ms/iter",
            "extra": "iterations: 25064\ncpu: 0.02687926109160549 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.416647128210019,
            "unit": "ns/iter",
            "extra": "iterations: 285266476\ncpu: 2.4164648074525186 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.419541341855553,
            "unit": "ns/iter",
            "extra": "iterations: 285260431\ncpu: 2.4191287154018104 ns\nthreads: 1"
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
          "id": "e2203b07fd02668c1c7010c596ef84f6ff766b69",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/e2203b07fd02668c1c7010c596ef84f6ff766b69"
        },
        "date": 1695643602933,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5817306920289576,
            "unit": "ms/iter",
            "extra": "iterations: 1656\ncpu: 0.5799515096618357 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.070575396825113,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.044036507936509 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.189788238094565,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.17085714285715 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.6909326666605,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.66155 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 616.8313785000237,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 616.7925500000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1059.3684660000235,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1058.9355999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.59790470503582,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.596979856115111 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.65090444444094,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.647637037037004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.95997899999946,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.9511909090909 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04930889555831011,
            "unit": "ms/iter",
            "extra": "iterations: 13711\ncpu: 0.04930560134198812 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0959972267716414,
            "unit": "ms/iter",
            "extra": "iterations: 635\ncpu: 1.0958941732283454 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8224326601939005,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.8219446601941724 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013542853279754274,
            "unit": "ms/iter",
            "extra": "iterations: 516609\ncpu: 0.0013541937906617956 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00797098083930304,
            "unit": "ms/iter",
            "extra": "iterations: 88097\ncpu: 0.007970759503728818 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022517815095445152,
            "unit": "ms/iter",
            "extra": "iterations: 30751\ncpu: 0.022516214106858307 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736568998818473,
            "unit": "ns/iter",
            "extra": "iterations: 418224053\ncpu: 1.673560606998378 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.738490520838948,
            "unit": "ns/iter",
            "extra": "iterations: 403000860\ncpu: 1.7384094416076368 ns\nthreads: 1"
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
          "id": "26c7522af035fc5e629f72b398be78f8541f0a1f",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/26c7522af035fc5e629f72b398be78f8541f0a1f"
        },
        "date": 1695643882995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5512401519999912,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5511036 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.322654111445587,
            "unit": "ms/iter",
            "extra": "iterations: 332\ncpu: 5.320159036144578 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 49.72294030000436,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 49.71737000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 222.0222674285586,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 220.9916 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 958.6410189999697,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 958.4915999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1354.9696690001838,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1354.8293000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 10.124919818965422,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 10.123045689655182 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 42.10052095454971,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 42.09444545454544 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 96.51538111110212,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 96.50222222222224 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.09208208951468791,
            "unit": "ms/iter",
            "extra": "iterations: 12322\ncpu: 0.09207446843044964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3214455306552904,
            "unit": "ms/iter",
            "extra": "iterations: 473\ncpu: 1.3212579281183932 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.528087406592942,
            "unit": "ms/iter",
            "extra": "iterations: 91\ncpu: 8.526182417582428 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016928990210774366,
            "unit": "ms/iter",
            "extra": "iterations: 385526\ncpu: 0.00169276728417798 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009815261143254731,
            "unit": "ms/iter",
            "extra": "iterations: 74664\ncpu: 0.00981473936569166 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.028141020769913327,
            "unit": "ms/iter",
            "extra": "iterations: 25951\ncpu: 0.028138938769218982 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.607106323268284,
            "unit": "ns/iter",
            "extra": "iterations: 258239786\ncpu: 2.606740078385907 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.55802278584389,
            "unit": "ns/iter",
            "extra": "iterations: 292896588\ncpu: 2.5578932315865646 ns\nthreads: 1"
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
          "id": "321d564cda3865c4be12f8c29ccaeac9219a535f",
          "message": "Group outer wall order",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1957/commits/321d564cda3865c4be12f8c29ccaeac9219a535f"
        },
        "date": 1695647238011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5865448111588,
            "unit": "ms/iter",
            "extra": "iterations: 1631\ncpu: 0.5859690374003678 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.043294142856924,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.04234708994709 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.195030333331275,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.1875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.51376916667172,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 210.50388333333328 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.2673254999809,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.1996000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1045.1218519999657,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1044.9744 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.577782964028511,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.577267625899277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.61225296296386,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.607437037037037 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.57430627272805,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.56679999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04909356103878238,
            "unit": "ms/iter",
            "extra": "iterations: 14286\ncpu: 0.049089248215035644 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0849971242235423,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 1.0849566770186334 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.9077440297032,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.907496039603967 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013465900627014434,
            "unit": "ms/iter",
            "extra": "iterations: 516257\ncpu: 0.0013464729776061174 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007945636264942105,
            "unit": "ms/iter",
            "extra": "iterations: 87506\ncpu: 0.007945336319795191 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022512147809924127,
            "unit": "ms/iter",
            "extra": "iterations: 31209\ncpu: 0.022510471338395923 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6735567761087615,
            "unit": "ns/iter",
            "extra": "iterations: 418171587\ncpu: 1.673396332400745 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9996953260678683,
            "unit": "ns/iter",
            "extra": "iterations: 350410681\ncpu: 1.9995175318300344 ns\nthreads: 1"
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
          "id": "ec8bcfc3ad346fa21dde94b188caa84e18fcae06",
          "message": "Add setting to group outer walls",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1958/commits/ec8bcfc3ad346fa21dde94b188caa84e18fcae06"
        },
        "date": 1695648016271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5855678521472601,
            "unit": "ms/iter",
            "extra": "iterations: 1630\ncpu: 0.585055337423313 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.079200227513033,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.070053439153439 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.410711333333545,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.39824761904763 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.927600999985,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.88813333333326 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 635.6006670000056,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 634.7053000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1071.1443949999193,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1069.2299999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.608108920290279,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.60604420289854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.919756444446918,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.91101111111113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.92853854545378,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.92225454545446 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.050827197983897864,
            "unit": "ms/iter",
            "extra": "iterations: 13789\ncpu: 0.05082271375734278 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1025935437499967,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 1.1025045312500008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.913156019802252,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.912300000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013431173544204483,
            "unit": "ms/iter",
            "extra": "iterations: 517603\ncpu: 0.001343032787677043 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007962051852692916,
            "unit": "ms/iter",
            "extra": "iterations: 87980\ncpu: 0.007939371448056384 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022707783811639383,
            "unit": "ms/iter",
            "extra": "iterations: 31047\ncpu: 0.022702129030179957 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6743722846814635,
            "unit": "ns/iter",
            "extra": "iterations: 418111391\ncpu: 1.6739543936510441 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9947104841438146,
            "unit": "ns/iter",
            "extra": "iterations: 350564409\ncpu: 1.9944757141618514 ns\nthreads: 1"
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
          "id": "7b6453ce969ea8cc405e8bd6366103d4138626ff",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/7b6453ce969ea8cc405e8bd6366103d4138626ff"
        },
        "date": 1695656141867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5840885460048653,
            "unit": "ms/iter",
            "extra": "iterations: 1652\ncpu: 0.5817815375302664 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.082503153438724,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.065681481481482 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.20806542857142,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.20150476190476 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.01091033332386,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.98894999999993 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 614.5921429999817,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 614.5378 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1042.1787679999852,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1042.1101999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.607397999999743,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.606031654676267 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.949829370372214,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.945140740740772 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.9459349090826,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.93236363636365 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05007208663313503,
            "unit": "ms/iter",
            "extra": "iterations: 14117\ncpu: 0.05004759509810868 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.099468718354442,
            "unit": "ms/iter",
            "extra": "iterations: 632\ncpu: 1.0992789556962024 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.853879539215879,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.852815686274504 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013286956856526312,
            "unit": "ms/iter",
            "extra": "iterations: 525966\ncpu: 0.0013285090671260125 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007875061168268539,
            "unit": "ms/iter",
            "extra": "iterations: 88935\ncpu: 0.00787411367852926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022148113039609386,
            "unit": "ms/iter",
            "extra": "iterations: 31458\ncpu: 0.02214510140504795 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6746347922732419,
            "unit": "ns/iter",
            "extra": "iterations: 418072685\ncpu: 1.6744495039182057 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7704205773566852,
            "unit": "ns/iter",
            "extra": "iterations: 404476982\ncpu: 1.7702203879675849 ns\nthreads: 1"
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
          "id": "905afc76c22e111eea19ccdb62f8c4a8ffd0170b",
          "message": "Hardcode wall ordering",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1959/commits/905afc76c22e111eea19ccdb62f8c4a8ffd0170b"
        },
        "date": 1695674548562,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6395375298268062,
            "unit": "ms/iter",
            "extra": "iterations: 1559\ncpu: 0.6354638871071201 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.729184543859622,
            "unit": "ms/iter",
            "extra": "iterations: 171\ncpu: 9.711671929824561 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 91.73478805882282,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 91.7095235294118 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 368.14141566666575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 367.8349666666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 651.4322049999919,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 650.7511 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1153.3217049999394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1153.1344 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.583571484848562,
            "unit": "ms/iter",
            "extra": "iterations: 132\ncpu: 8.577388636363638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.10983475000277,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 36.08795833333334 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 80.017780000007,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 80.0137181818182 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.047606099789844404,
            "unit": "ms/iter",
            "extra": "iterations: 14751\ncpu: 0.047576435495898614 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.167909692939268,
            "unit": "ms/iter",
            "extra": "iterations: 609\ncpu: 1.1629804597701159 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.662103938144365,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 6.661512371134023 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013403882234346751,
            "unit": "ms/iter",
            "extra": "iterations: 531717\ncpu: 0.0013403000092154312 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008283506351119926,
            "unit": "ms/iter",
            "extra": "iterations: 92031\ncpu: 0.008281204159467986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.024520959877026183,
            "unit": "ms/iter",
            "extra": "iterations: 31877\ncpu: 0.024519841892273513 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.239663453533093,
            "unit": "ns/iter",
            "extra": "iterations: 309505671\ncpu: 2.2396087210951277 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.2375296442002757,
            "unit": "ns/iter",
            "extra": "iterations: 340901841\ncpu: 2.2365423365372794 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "40cd391f7d66b152c29522d44226133dce8a4071",
          "message": "[CURA-11084] Add missing 'perform_prime' member-variable. (#1960)",
          "timestamp": "2023-09-26T22:49:40+02:00",
          "tree_id": "d77ecc9d3c3dac5b7eaee0cd56ad843b19b5a1e1",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/40cd391f7d66b152c29522d44226133dce8a4071"
        },
        "date": 1695800685417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5043157348258708,
            "unit": "ms/iter",
            "extra": "iterations: 2010\ncpu: 0.5036074626865672 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.15091141871932,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.150275369458129 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.4188233000043,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.41258000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.43564100000913,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.42100000000013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.4938859999884,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.2986500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1079.1376160000254,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1079.052299999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.053187799999705,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.052373000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.523773625001468,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.52034375000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.9222046923045,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.816361538461564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03619452855245919,
            "unit": "ms/iter",
            "extra": "iterations: 19578\ncpu: 0.0361900704872816 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8388661575091281,
            "unit": "ms/iter",
            "extra": "iterations: 819\ncpu: 0.8387832722832712 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.378244755905781,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.377307874015735 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010164812630018827,
            "unit": "ms/iter",
            "extra": "iterations: 707584\ncpu: 0.0010164206652496384 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005822148598184653,
            "unit": "ms/iter",
            "extra": "iterations: 121307\ncpu: 0.005821412614276167 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017292454005788747,
            "unit": "ms/iter",
            "extra": "iterations: 40766\ncpu: 0.01729182652210173 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.443232083770332,
            "unit": "ns/iter",
            "extra": "iterations: 287145206\ncpu: 2.4431656365525423 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.524312184920775,
            "unit": "ns/iter",
            "extra": "iterations: 281247614\ncpu: 2.5242034586647253 ns\nthreads: 1"
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
          "id": "0acf5cfc5a6578742b6636fdfe1c1435bf388784",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/0acf5cfc5a6578742b6636fdfe1c1435bf388784"
        },
        "date": 1695802956741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.573021132000008,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5673193999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.430018913043291,
            "unit": "ms/iter",
            "extra": "iterations: 345\ncpu: 4.42863652173913 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.37754248571374,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.36922571428571 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 143.05788822221328,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 143.03158888888893 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 425.6326176666789,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 425.55966666666654 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 744.0631130000384,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 743.8846999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.114372356521017,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.112593913043485 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.03286239130213,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.02565217391304 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 90.42282377777155,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 90.40627777777763 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06109955354659924,
            "unit": "ms/iter",
            "extra": "iterations: 11504\ncpu: 0.061089142906814914 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3065132279410903,
            "unit": "ms/iter",
            "extra": "iterations: 544\ncpu: 1.3062167279411785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.139158767442252,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.136586046511612 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016222122457288087,
            "unit": "ms/iter",
            "extra": "iterations: 427349\ncpu: 0.0016219130031894277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00959387810392955,
            "unit": "ms/iter",
            "extra": "iterations: 72972\ncpu: 0.009591962670613382 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027158557543345476,
            "unit": "ms/iter",
            "extra": "iterations: 25433\ncpu: 0.027152998073369163 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.9987667082189513,
            "unit": "ns/iter",
            "extra": "iterations: 348447145\ncpu: 1.9984058127381112 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0509487319212396,
            "unit": "ns/iter",
            "extra": "iterations: 342906297\ncpu: 2.050424288358869 ns\nthreads: 1"
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
          "id": "f7a8e3d5441702aa4cb985bde0f0689b0f9af11e",
          "message": "Support brim printed only at layer 0",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1956/commits/f7a8e3d5441702aa4cb985bde0f0689b0f9af11e"
        },
        "date": 1695980694144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5855764621026972,
            "unit": "ms/iter",
            "extra": "iterations: 1636\ncpu: 0.5799981662591687 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.052858687830978,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.044993121693121 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.07417819047195,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.06597142857146 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.7977915000039,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.62076666666675 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 610.5083669999658,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 610.4392500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1023.6247770000091,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1023.5278000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.597022179856068,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.595946762589935 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.644685222219543,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.64183703703706 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.01723200000147,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.00499090909094 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05171471694260226,
            "unit": "ms/iter",
            "extra": "iterations: 13711\ncpu: 0.05170967836044055 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1033683807267005,
            "unit": "ms/iter",
            "extra": "iterations: 633\ncpu: 1.1032090047393386 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.903447215686177,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.902853921568622 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013440855039049506,
            "unit": "ms/iter",
            "extra": "iterations: 519602\ncpu: 0.0013439066824223172 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00795593264125633,
            "unit": "ms/iter",
            "extra": "iterations: 88333\ncpu: 0.007955321340835259 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022656755956871423,
            "unit": "ms/iter",
            "extra": "iterations: 30511\ncpu: 0.022654888400904617 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736551415860406,
            "unit": "ns/iter",
            "extra": "iterations: 418351028\ncpu: 1.6734401331505726 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9935865617884698,
            "unit": "ns/iter",
            "extra": "iterations: 351778239\ncpu: 1.9934180749594268 ns\nthreads: 1"
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
          "id": "f063b5ab7df6747b7c3092beec8ea90d042aa05b",
          "message": "Reverted the changes done in CURA-9521",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1961/commits/f063b5ab7df6747b7c3092beec8ea90d042aa05b"
        },
        "date": 1696329345734,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5085514742885795,
            "unit": "ms/iter",
            "extra": "iterations: 2003\ncpu: 0.5056359460808787 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.14349110344871,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.142908866995073 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.33942295000384,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.332975 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.2472077999946,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.23287999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 677.1275369999898,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 669.7213000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1083.8111790000085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1083.7260999999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.043579140000702,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.042712000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.317701875001376,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.31390625000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 61.93662323077066,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 61.93547692307697 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.035982129878542074,
            "unit": "ms/iter",
            "extra": "iterations: 18525\ncpu: 0.03597843454790822 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8697959432099174,
            "unit": "ms/iter",
            "extra": "iterations: 810\ncpu: 0.8697199999999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.522563133858179,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.52187244094488 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010547479106961751,
            "unit": "ms/iter",
            "extra": "iterations: 691259\ncpu: 0.0010546686553086475 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005905984866024248,
            "unit": "ms/iter",
            "extra": "iterations: 118343\ncpu: 0.005905271118697341 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017115034532305895,
            "unit": "ms/iter",
            "extra": "iterations: 41063\ncpu: 0.017113998003068405 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.428421671724951,
            "unit": "ns/iter",
            "extra": "iterations: 286498707\ncpu: 2.4284025826336464 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4550386186097355,
            "unit": "ns/iter",
            "extra": "iterations: 284010224\ncpu: 2.4548450762814826 ns\nthreads: 1"
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
          "id": "9b5ee37ecba93227b6a145ea7ab3ee84658128dd",
          "message": "Reverted the changes done in CURA-9521",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1961/commits/9b5ee37ecba93227b6a145ea7ab3ee84658128dd"
        },
        "date": 1696353682598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5871593217391265,
            "unit": "ms/iter",
            "extra": "iterations: 1610\ncpu: 0.5869310559006211 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.37938667195741,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.060299999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.13460257142976,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.1287476190476 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.16546416666884,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.1467499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 617.9317130000186,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 617.87415 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1052.357508,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1052.265199999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.647938644927341,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.647285507246371 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.959652518516933,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.95605185185189 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.83601927272461,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.8157818181819 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.050336616599997795,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05033201999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0943927530864124,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 1.0942674382716049 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.804683864077746,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.803945631067955 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013391526698627342,
            "unit": "ms/iter",
            "extra": "iterations: 524203\ncpu: 0.0013389328180113424 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007894397459657152,
            "unit": "ms/iter",
            "extra": "iterations: 88492\ncpu: 0.007893832210821303 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02265480904684931,
            "unit": "ms/iter",
            "extra": "iterations: 30950\ncpu: 0.02265338933764133 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6729571846763314,
            "unit": "ns/iter",
            "extra": "iterations: 418447309\ncpu: 1.6728161107615085 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.981945961110017,
            "unit": "ns/iter",
            "extra": "iterations: 351344596\ncpu: 1.9819157827604736 ns\nthreads: 1"
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
          "id": "873800b9a36cb736a5c21acfbbc1e436c9bbab87",
          "message": "CURA-11119-CURA-11121-correct-path-config",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1962/commits/873800b9a36cb736a5c21acfbbc1e436c9bbab87"
        },
        "date": 1696355756563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6494152763338096,
            "unit": "ms/iter",
            "extra": "iterations: 1462\ncpu: 0.6485772229822161 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.595129230303263,
            "unit": "ms/iter",
            "extra": "iterations: 165\ncpu: 9.593671515151517 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 88.5727662500031,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 88.55776875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 353.8505847500062,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 353.79067499999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 661.8464270000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 661.5541999999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1181.7515110000159,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1180.9831999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.242699428571678,
            "unit": "ms/iter",
            "extra": "iterations: 119\ncpu: 9.240963865546231 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.24468530434854,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.13533913043475 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.1049982222319,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.08597777777787 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05637743719867407,
            "unit": "ms/iter",
            "extra": "iterations: 11823\ncpu: 0.05637205447010076 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2100483390412753,
            "unit": "ms/iter",
            "extra": "iterations: 584\ncpu: 1.2095888698630155 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.5746398172042815,
            "unit": "ms/iter",
            "extra": "iterations: 93\ncpu: 7.5736451612903295 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015152634793443526,
            "unit": "ms/iter",
            "extra": "iterations: 460742\ncpu: 0.001514679147983034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009213462768934278,
            "unit": "ms/iter",
            "extra": "iterations: 75018\ncpu: 0.00921217441147459 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026508366660344687,
            "unit": "ms/iter",
            "extra": "iterations: 26365\ncpu: 0.026505120424805514 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.469119831533951,
            "unit": "ns/iter",
            "extra": "iterations: 281656705\ncpu: 2.4687170149206974 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3784527510525435,
            "unit": "ns/iter",
            "extra": "iterations: 262786141\ncpu: 2.377941612986363 ns\nthreads: 1"
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
          "id": "08dd09abf6ef354c5581fc68be8c2943ce3e06bd",
          "message": "Top surface inner outer wall config",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1963/commits/08dd09abf6ef354c5581fc68be8c2943ce3e06bd"
        },
        "date": 1696504423432,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.616513441176427,
            "unit": "ms/iter",
            "extra": "iterations: 1632\ncpu: 0.5810226102941176 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.052694275132309,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.048068253968255 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.22627761904815,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.21896666666665 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.4224641666642,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.38766666666675 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 613.1622499999594,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 613.0050500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1035.0886280000395,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1034.9735999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.598768834532002,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.597963309352526 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.65602311111164,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.65357407407408 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.92067236363883,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.91122727272726 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05058569240258835,
            "unit": "ms/iter",
            "extra": "iterations: 13781\ncpu: 0.05058286046005378 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1150991836420885,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 1.1149972222222218 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.794319769230565,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 6.7929192307692245 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013670099706456751,
            "unit": "ms/iter",
            "extra": "iterations: 507590\ncpu: 0.001366860852262653 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008010298730370242,
            "unit": "ms/iter",
            "extra": "iterations: 87112\ncpu: 0.008009460235099658 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02293863148444523,
            "unit": "ms/iter",
            "extra": "iterations: 30631\ncpu: 0.022937213933596746 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6735699160326736,
            "unit": "ns/iter",
            "extra": "iterations: 418192822\ncpu: 1.673467269603209 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.996204967604822,
            "unit": "ns/iter",
            "extra": "iterations: 350296351\ncpu: 1.9959842516315591 ns\nthreads: 1"
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
          "id": "65ad30f6630b5d65e4e4905dae5c96eee57ac79b",
          "message": "the length of brim is correctly calculated in case of no adhesion",
          "timestamp": "2023-09-20T20:29:47Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1964/commits/65ad30f6630b5d65e4e4905dae5c96eee57ac79b"
        },
        "date": 1696512852206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6760354631432631,
            "unit": "ms/iter",
            "extra": "iterations: 1438\ncpu: 0.6738488873435327 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 10.273369546052741,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 10.271661842105265 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 94.37039574999773,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 94.23274999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 359.8656312499884,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 359.78572499999984 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 668.3742230000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 668.3629000000009 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1200.2748280000333,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1199.4345999999991 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.866727418803631,
            "unit": "ms/iter",
            "extra": "iterations: 117\ncpu: 8.865815384615379 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.32149758333488,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 36.31627083333333 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.44831955554531,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.43686666666666 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.055635491836906206,
            "unit": "ms/iter",
            "extra": "iterations: 11699\ncpu: 0.05562281391571933 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2204814796609367,
            "unit": "ms/iter",
            "extra": "iterations: 590\ncpu: 1.220264576271185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.743447438201656,
            "unit": "ms/iter",
            "extra": "iterations: 89\ncpu: 7.741579775280899 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001612582230288733,
            "unit": "ms/iter",
            "extra": "iterations: 440221\ncpu: 0.0016120716640051248 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009632025508427216,
            "unit": "ms/iter",
            "extra": "iterations: 74642\ncpu: 0.009630352884435046 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02705706295046585,
            "unit": "ms/iter",
            "extra": "iterations: 26084\ncpu: 0.027053749424934742 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.444294760483879,
            "unit": "ns/iter",
            "extra": "iterations: 296607153\ncpu: 2.4384833362397043 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.2882782446521914,
            "unit": "ns/iter",
            "extra": "iterations: 289153561\ncpu: 2.287989460382266 ns\nthreads: 1"
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
          "id": "9dbcdf80ea06fbdee18769fce327e4a524170e83",
          "message": "the length of brim is correctly calculated in case of no adhesion",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1964/commits/9dbcdf80ea06fbdee18769fce327e4a524170e83"
        },
        "date": 1696583482107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5731150604477608,
            "unit": "ms/iter",
            "extra": "iterations: 1340\ncpu: 0.5424185074626866 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.094610312499981,
            "unit": "ms/iter",
            "extra": "iterations: 320\ncpu: 5.01078 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 50.82505755172343,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 50.72861379310345 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 211.13606485713328,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 211.10448571428566 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 717.2774194999647,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 717.16295 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1276.5645990000394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1275.5818000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.638118520832961,
            "unit": "ms/iter",
            "extra": "iterations: 96\ncpu: 9.63603854166667 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 40.3077064090925,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 40.30231363636361 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 97.4316022499977,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 97.41624999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06455102789570072,
            "unit": "ms/iter",
            "extra": "iterations: 11543\ncpu: 0.06454541280429688 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2516722929823325,
            "unit": "ms/iter",
            "extra": "iterations: 570\ncpu: 1.2514443859649138 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.117800888888066,
            "unit": "ms/iter",
            "extra": "iterations: 90\ncpu: 8.116915555555554 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001696906770724471,
            "unit": "ms/iter",
            "extra": "iterations: 385941\ncpu: 0.0016967119326529226 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.010056420510036643,
            "unit": "ms/iter",
            "extra": "iterations: 64505\ncpu: 0.010055746066196391 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.028736060833094875,
            "unit": "ms/iter",
            "extra": "iterations: 24559\ncpu: 0.02864407345575962 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.664252426183496,
            "unit": "ns/iter",
            "extra": "iterations: 274310149\ncpu: 2.664029758519802 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.63257718884236,
            "unit": "ns/iter",
            "extra": "iterations: 256813350\ncpu: 2.63198661596058 ns\nthreads: 1"
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
          "id": "00b71215d5d80f81a9b9ae4b5531beb593e4bd96",
          "message": "Cura 11100 scattered seam",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1967/commits/00b71215d5d80f81a9b9ae4b5531beb593e4bd96"
        },
        "date": 1696842772426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5065429839357058,
            "unit": "ms/iter",
            "extra": "iterations: 1992\ncpu: 0.5061601405622491 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.16189718719175,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.161351231527094 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.5314615999971,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.46374 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.34748200000286,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.33475999999987 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 665.8228960000088,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 665.7521500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.918511999973,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.8522999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.049866249999468,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.049063000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.60565568750073,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.599725000000017 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 63.3780016153808,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 63.37158461538455 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03653700133447182,
            "unit": "ms/iter",
            "extra": "iterations: 18734\ncpu: 0.036533415180954404 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8348875027547725,
            "unit": "ms/iter",
            "extra": "iterations: 726\ncpu: 0.8348005509641894 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.3880251472864,
            "unit": "ms/iter",
            "extra": "iterations: 129\ncpu: 5.387427131782947 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001019055047841987,
            "unit": "ms/iter",
            "extra": "iterations: 698447\ncpu: 0.001019000010022236 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005913427720758251,
            "unit": "ms/iter",
            "extra": "iterations: 116043\ncpu: 0.005912913316615412 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017697949382901094,
            "unit": "ms/iter",
            "extra": "iterations: 40026\ncpu: 0.0176924973767051 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4254358997254477,
            "unit": "ns/iter",
            "extra": "iterations: 290116838\ncpu: 2.421016666395637 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4668238173893684,
            "unit": "ns/iter",
            "extra": "iterations: 284817865\ncpu: 2.4667241291201996 ns\nthreads: 1"
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
          "id": "c72500c132e0d7c0f5dba6eafdddf7b68f4734f0",
          "message": "Cura 11100 scattered seam",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1967/commits/c72500c132e0d7c0f5dba6eafdddf7b68f4734f0"
        },
        "date": 1696842812123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5966534120543343,
            "unit": "ms/iter",
            "extra": "iterations: 1626\ncpu: 0.5813456334563346 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.037935057894318,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.03643210526316 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.11280700001156,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.103985714285706 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.6007790000082,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.57093333333327 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 618.7299959999564,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 618.6588500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1052.235496999856,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1052.0745999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.62146560869305,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.6203000000000065 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.86724259259831,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.864733333333348 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.62427254544805,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.61603636363634 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.051241593204229545,
            "unit": "ms/iter",
            "extra": "iterations: 13685\ncpu: 0.051234987212276255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.119900863207179,
            "unit": "ms/iter",
            "extra": "iterations: 636\ncpu: 1.1197820754716958 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.893786382355685,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.892655882352933 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013324118687523287,
            "unit": "ms/iter",
            "extra": "iterations: 522953\ncpu: 0.0013295311433341056 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007855298270089048,
            "unit": "ms/iter",
            "extra": "iterations: 89600\ncpu: 0.007838064732142871 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02252289755509979,
            "unit": "ms/iter",
            "extra": "iterations: 30758\ncpu: 0.022519848494700578 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6734061889778973,
            "unit": "ns/iter",
            "extra": "iterations: 418214309\ncpu: 1.6733576181870877 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7434045898833428,
            "unit": "ns/iter",
            "extra": "iterations: 402361749\ncpu: 1.743218637813413 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b394e78022670744b37a9d99bdb4407b03fd32d1",
          "message": "the length of brim is correctly calculated in case of no adhesion (#1964)",
          "timestamp": "2023-10-06T13:08:21+02:00",
          "tree_id": "dc65ec8bab5cc7e298e23253d77516e307bb2b65",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/b394e78022670744b37a9d99bdb4407b03fd32d1"
        },
        "date": 1696844021927,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6564602641128842,
            "unit": "ms/iter",
            "extra": "iterations: 1488\ncpu: 0.6527241935483871 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.925729728477123,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 9.924113907284768 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 90.79171981250056,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 90.78225 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 379.23687666667166,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 379.21153333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 652.6358849999951,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 652.5067999999994 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1212.1352589999788,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1211.9424999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.14731145238143,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 8.1462119047619 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.65482330768831,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 32.6507 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 76.91200700000164,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 76.90229999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04875791121229645,
            "unit": "ms/iter",
            "extra": "iterations: 14056\ncpu: 0.048748804780876474 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0495370552487628,
            "unit": "ms/iter",
            "extra": "iterations: 724\ncpu: 1.0494244475138128 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.008259135416732,
            "unit": "ms/iter",
            "extra": "iterations: 96\ncpu: 7.00732083333333 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013905045311202655,
            "unit": "ms/iter",
            "extra": "iterations: 476924\ncpu: 0.001390429502394508 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008171799004383409,
            "unit": "ms/iter",
            "extra": "iterations: 89191\ncpu: 0.00817102173986162 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02241726566491869,
            "unit": "ms/iter",
            "extra": "iterations: 29748\ncpu: 0.022414804356595413 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.209572509345715,
            "unit": "ns/iter",
            "extra": "iterations: 316092875\ncpu: 2.2092348649111426 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0750382931105897,
            "unit": "ns/iter",
            "extra": "iterations: 323264416\ncpu: 2.0747009779139987 ns\nthreads: 1"
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
          "id": "edd9b398369e06a4b90a6b5de9532febcfc11954",
          "message": "[CURA-11100] scattered seam",
          "timestamp": "2023-10-06T08:27:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1967/commits/edd9b398369e06a4b90a6b5de9532febcfc11954"
        },
        "date": 1696858634310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5036812585170102,
            "unit": "ms/iter",
            "extra": "iterations: 1996\ncpu: 0.5034051603206413 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.149706717821717,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.149120792079207 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.43668050000247,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.429085 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.54938919999677,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.5276599999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.6112634999877,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.5610500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.5930220000637,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.5090999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.035244040000634,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.034856000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.600132312498914,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.593481249999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 63.71778500000311,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 63.606984615384555 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03649605886055957,
            "unit": "ms/iter",
            "extra": "iterations: 19062\ncpu: 0.03643007029692585 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8485569055689884,
            "unit": "ms/iter",
            "extra": "iterations: 826\ncpu: 0.8485077481840192 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.410605884615577,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.410158461538459 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010224699861691186,
            "unit": "ms/iter",
            "extra": "iterations: 684701\ncpu: 0.0010224330036030331 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005925247041821027,
            "unit": "ms/iter",
            "extra": "iterations: 118316\ncpu: 0.005924709253186392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017407359861251477,
            "unit": "ms/iter",
            "extra": "iterations: 40649\ncpu: 0.017406113311520584 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.412631289850994,
            "unit": "ns/iter",
            "extra": "iterations: 290138002\ncpu: 2.4125112711019394 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.447767657598695,
            "unit": "ns/iter",
            "extra": "iterations: 282483368\ncpu: 2.44758516189881 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5d42bf10da0b5a556884cf9cfb4d77826fd5467c",
          "message": "[CURA-11100] scattered seam (#1967)",
          "timestamp": "2023-10-09T17:03:24+02:00",
          "tree_id": "49cad8acf1fc225d1125fe4d5e519c1c520f2e2d",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/5d42bf10da0b5a556884cf9cfb4d77826fd5467c"
        },
        "date": 1696927801052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5242067330000282,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5224970000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.882362029940406,
            "unit": "ms/iter",
            "extra": "iterations: 334\ncpu: 4.772007185628743 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.61434648386964,
            "unit": "ms/iter",
            "extra": "iterations: 31\ncpu: 48.554861290322584 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 206.4371938571412,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 206.30402857142866 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 672.8234015000112,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 671.68115 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1238.4414850000667,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1238.1694000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.441840373913534,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.440921739130436 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.26224926086893,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 37.24093478260872 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 91.23965588888596,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 91.22632222222234 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.058642647738045714,
            "unit": "ms/iter",
            "extra": "iterations: 11605\ncpu: 0.058630348987505465 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2585826612318367,
            "unit": "ms/iter",
            "extra": "iterations: 552\ncpu: 1.258422282608698 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.082555556818896,
            "unit": "ms/iter",
            "extra": "iterations: 88\ncpu: 8.08039204545453 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016073205325082308,
            "unit": "ms/iter",
            "extra": "iterations: 438904\ncpu: 0.0016070639593168418 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00977007822483661,
            "unit": "ms/iter",
            "extra": "iterations: 69019\ncpu: 0.009768147901302518 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027000217015795247,
            "unit": "ms/iter",
            "extra": "iterations: 26399\ncpu: 0.026995329368536554 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4897736742412895,
            "unit": "ns/iter",
            "extra": "iterations: 284319957\ncpu: 2.4894903877605685 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4006170694306204,
            "unit": "ns/iter",
            "extra": "iterations: 282920189\ncpu: 2.400160279830726 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "0503a4c7a2e554bf8f2e9cb3e0e3824df0a54fa8",
          "message": "set version to 5.5.0-beta.2",
          "timestamp": "2023-10-10T10:40:52+02:00",
          "tree_id": "54e3d0f34f3a9551b6eda028af79f643d57d6fd6",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/0503a4c7a2e554bf8f2e9cb3e0e3824df0a54fa8"
        },
        "date": 1696928017016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5975033497536699,
            "unit": "ms/iter",
            "extra": "iterations: 1624\ncpu: 0.591045197044335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.045531116402696,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.044797354497355 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.007166238094214,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.001180952380956 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.86443466666074,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.84743333333336 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 611.9711645000052,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 611.8754499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1020.5204320000121,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1018.9256000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.635841919707268,
            "unit": "ms/iter",
            "extra": "iterations: 137\ncpu: 7.633139416058392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.964188296294466,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.96223703703699 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.7216829999967,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.71385454545462 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04990705534627871,
            "unit": "ms/iter",
            "extra": "iterations: 13804\ncpu: 0.04989980440452037 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0929639347825204,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 1.0928731366459639 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.897378009804086,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.875613725490209 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001345268247269167,
            "unit": "ms/iter",
            "extra": "iterations: 523640\ncpu: 0.0013451525857459323 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007896519025995271,
            "unit": "ms/iter",
            "extra": "iterations: 88747\ncpu: 0.007895908594093322 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022594280582082196,
            "unit": "ms/iter",
            "extra": "iterations: 30786\ncpu: 0.02259223348275194 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6727215820968384,
            "unit": "ns/iter",
            "extra": "iterations: 418451812\ncpu: 1.672666194596382 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7314406148394639,
            "unit": "ns/iter",
            "extra": "iterations: 408873728\ncpu: 1.731385392411418 ns\nthreads: 1"
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
          "id": "de2c993285915c9c2baf067fd807c97e0910f398",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/de2c993285915c9c2baf067fd807c97e0910f398"
        },
        "date": 1697019655231,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6176331459493215,
            "unit": "ms/iter",
            "extra": "iterations: 1617\ncpu: 0.5856831787260359 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.039923423280376,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.039197354497356 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.158105666665115,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.14981428571431 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.52288666666163,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.49261666666678 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 615.6888699999854,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 615.6421 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1043.9698169999474,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1043.880800000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.613063891303715,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.6123413043478285 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.740294518518905,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.738492592592575 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.42994509090732,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.41209090909094 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05180878453404108,
            "unit": "ms/iter",
            "extra": "iterations: 13617\ncpu: 0.05180351766174641 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1146356703125804,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 1.1145465625000017 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.844115852940751,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.843353921568638 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013431083499872022,
            "unit": "ms/iter",
            "extra": "iterations: 516899\ncpu: 0.0013429700966726575 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007946141462474016,
            "unit": "ms/iter",
            "extra": "iterations: 88193\ncpu: 0.007945601124805822 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02265496038963311,
            "unit": "ms/iter",
            "extra": "iterations: 30901\ncpu: 0.022652360765023784 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673194497222048,
            "unit": "ns/iter",
            "extra": "iterations: 418431051\ncpu: 1.6730751657338152 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9953875131115877,
            "unit": "ns/iter",
            "extra": "iterations: 350209776\ncpu: 1.995236706356247 ns\nthreads: 1"
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
          "id": "9eab6b4f413dc76e1eab21bc5315214f172f1097",
          "message": "Cura 10783 prime tower with raft",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/9eab6b4f413dc76e1eab21bc5315214f172f1097"
        },
        "date": 1697192297525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5870652459627523,
            "unit": "ms/iter",
            "extra": "iterations: 1610\ncpu: 0.5863482608695653 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.206672206349607,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.047192063492062 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.20419238095166,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.16251428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.1957290000058,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 208.9928833333333 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 619.2418885000279,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 618.4821000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1054.727615000047,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1054.543699999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.64599941304332,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.645150724637688 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.962360703702636,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.961155555555564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.90542709091518,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.8984727272728 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05123518558402884,
            "unit": "ms/iter",
            "extra": "iterations: 13929\ncpu: 0.05123214157513102 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1136809582689424,
            "unit": "ms/iter",
            "extra": "iterations: 647\ncpu: 1.1136134466769696 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8172821747573185,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 6.816931067961159 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001337597203544768,
            "unit": "ms/iter",
            "extra": "iterations: 522018\ncpu: 0.0013372678719890873 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007818649552998543,
            "unit": "ms/iter",
            "extra": "iterations: 89597\ncpu: 0.007818144580733702 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022351128931616095,
            "unit": "ms/iter",
            "extra": "iterations: 31412\ncpu: 0.022350614414873342 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6726941085549742,
            "unit": "ns/iter",
            "extra": "iterations: 418385784\ncpu: 1.672618016103527 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9908051388246475,
            "unit": "ns/iter",
            "extra": "iterations: 357527747\ncpu: 1.990759894783773 ns\nthreads: 1"
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
          "id": "9e958a99e1e33fc559a776754450342b2cad723f",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/9e958a99e1e33fc559a776754450342b2cad723f"
        },
        "date": 1697201485959,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.503699307117945,
            "unit": "ms/iter",
            "extra": "iterations: 2009\ncpu: 0.5032567446490791 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.340238108910578,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.155711386138615 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.44864435000204,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.43861 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 237.0774429999983,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 236.94990000000013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.6501919999964,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.6184499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1082.8723760000685,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1082.8006000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.045888650000052,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.045171999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.58331071875253,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.58138124999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.669471461539125,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.66340769230771 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.036501167811783475,
            "unit": "ms/iter",
            "extra": "iterations: 19212\ncpu: 0.03649811576098271 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8503460191847068,
            "unit": "ms/iter",
            "extra": "iterations: 834\ncpu: 0.8502794964028765 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.362710274809393,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.362129770992367 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010506758302568702,
            "unit": "ms/iter",
            "extra": "iterations: 678555\ncpu: 0.0010505820456705819 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005882637812964141,
            "unit": "ms/iter",
            "extra": "iterations: 119303\ncpu: 0.005882044877329144 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017588508461940378,
            "unit": "ms/iter",
            "extra": "iterations: 40239\ncpu: 0.017587271055443693 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.414757968907124,
            "unit": "ns/iter",
            "extra": "iterations: 290298755\ncpu: 2.4146703626062687 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.532846616233302,
            "unit": "ns/iter",
            "extra": "iterations: 278873018\ncpu: 2.5326548443636065 ns\nthreads: 1"
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
          "id": "68e6f05a00e87279e2ae9630dbf8532824385ee3",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/68e6f05a00e87279e2ae9630dbf8532824385ee3"
        },
        "date": 1697202227214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5821079791539435,
            "unit": "ms/iter",
            "extra": "iterations: 1631\ncpu: 0.5802961373390557 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.029192321052841,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.028423684210525 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.09566285714633,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.089533333333335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.15711683333407,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.14495000000008 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 626.0239920000004,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 625.6697500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1039.1490769999336,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1039.0666999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.569870201439162,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.569017266187053 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.616254555558985,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.612818518518512 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.78175281818048,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.77695454545442 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05117504159988105,
            "unit": "ms/iter",
            "extra": "iterations: 13726\ncpu: 0.05117085093982227 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1136236363635572,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 1.1135272727272727 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8554275588237,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.853484313725496 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001344341334348655,
            "unit": "ms/iter",
            "extra": "iterations: 520059\ncpu: 0.001341633353138779 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00795154984407682,
            "unit": "ms/iter",
            "extra": "iterations: 88185\ncpu: 0.007950724046039572 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.0227103595852938,
            "unit": "ms/iter",
            "extra": "iterations: 31058\ncpu: 0.022708271620838338 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6730580287175412,
            "unit": "ns/iter",
            "extra": "iterations: 418361529\ncpu: 1.6729114688745677 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7235766976642808,
            "unit": "ns/iter",
            "extra": "iterations: 409459210\ncpu: 1.7234661787190004 ns\nthreads: 1"
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
          "id": "830c56a1179f6690c8694fa67fcb33e4f8cc18fa",
          "message": "[CURA-11041] fractional support gap",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/830c56a1179f6690c8694fa67fcb33e4f8cc18fa"
        },
        "date": 1697207394680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5920945033475897,
            "unit": "ms/iter",
            "extra": "iterations: 1643\ncpu: 0.5802576384662202 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.108385157895196,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.107289473684212 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.257292095240054,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.249885714285696 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.0879905000094,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 210.05228333333335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.1895364999928,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.1057999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1048.9661090000482,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1048.8447 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.618118384058285,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.615472463768113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.831423962964706,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.82085925925926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.78177554545792,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.7663545454545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05090449220000437,
            "unit": "ms/iter",
            "extra": "iterations: 10000\ncpu: 0.05089902000000013 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0902152695925222,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 1.0900120689655168 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.877818666665979,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.87689607843136 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001332585557464434,
            "unit": "ms/iter",
            "extra": "iterations: 524437\ncpu: 0.001329639975821693 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007853387607728564,
            "unit": "ms/iter",
            "extra": "iterations: 88765\ncpu: 0.007852857545203647 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022674735370360567,
            "unit": "ms/iter",
            "extra": "iterations: 30862\ncpu: 0.022672082172250675 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.674448597999396,
            "unit": "ns/iter",
            "extra": "iterations: 418069439\ncpu: 1.6741824077698204 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.755255670808929,
            "unit": "ns/iter",
            "extra": "iterations: 399362389\ncpu: 1.755078393223451 ns\nthreads: 1"
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
          "id": "4682128777e104805e295d5c1a0aa2428a3b8410",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-11T05:54:59Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/4682128777e104805e295d5c1a0aa2428a3b8410"
        },
        "date": 1697225620339,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6015750611994876,
            "unit": "ms/iter",
            "extra": "iterations: 1634\ncpu: 0.5793568543451653 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.042546305263219,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.040791052631578 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.07679919047175,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.06327142857142 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.37411150000193,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.35540000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 620.2322565000031,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 620.1303999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1044.9688259999448,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1043.6216999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.590863366906417,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.589471223021585 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.79174633333221,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.788451851851832 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.99913218181486,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.99149090909096 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05087499619416624,
            "unit": "ms/iter",
            "extra": "iterations: 13926\ncpu: 0.0508726841878501 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.105738566666657,
            "unit": "ms/iter",
            "extra": "iterations: 630\ncpu: 1.1054557142857153 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.877611534652697,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 6.877186138613862 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013270040231491585,
            "unit": "ms/iter",
            "extra": "iterations: 525459\ncpu: 0.0013269280762152704 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007850417061452068,
            "unit": "ms/iter",
            "extra": "iterations: 88867\ncpu: 0.007849370407462834 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022510462462947762,
            "unit": "ms/iter",
            "extra": "iterations: 31036\ncpu: 0.02250914099755123 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673791220001573,
            "unit": "ns/iter",
            "extra": "iterations: 418319277\ncpu: 1.6735712134059773 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7439838363263171,
            "unit": "ns/iter",
            "extra": "iterations: 399213208\ncpu: 1.743824818541573 ns\nthreads: 1"
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
          "id": "5e5dc4222ba7969f35fc94cd44dad74f1252e681",
          "message": "CURA-11140",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1969/commits/5e5dc4222ba7969f35fc94cd44dad74f1252e681"
        },
        "date": 1697448061038,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6410008627316558,
            "unit": "ms/iter",
            "extra": "iterations: 1457\ncpu: 0.6392894989704874 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.163850526011903,
            "unit": "ms/iter",
            "extra": "iterations: 173\ncpu: 9.138761271676302 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 82.1554275555564,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 82.04286666666668 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 317.35075849999816,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 317.1738750000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 548.1138190000365,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 548.0792000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1010.609344000045,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1010.3941999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.944056941606458,
            "unit": "ms/iter",
            "extra": "iterations: 137\ncpu: 7.941943795620439 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.884791888890234,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 32.87524444444447 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 76.76819945454967,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 76.75921818181808 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04744372160790407,
            "unit": "ms/iter",
            "extra": "iterations: 14379\ncpu: 0.04743907782182354 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0253097038122387,
            "unit": "ms/iter",
            "extra": "iterations: 682\ncpu: 1.025185630498533 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.643679598131091,
            "unit": "ms/iter",
            "extra": "iterations: 107\ncpu: 6.610552336448606 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013988435379136861,
            "unit": "ms/iter",
            "extra": "iterations: 450141\ncpu: 0.0013976514025605313 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008432010689248693,
            "unit": "ms/iter",
            "extra": "iterations: 86442\ncpu: 0.00842833344901784 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022979966301953498,
            "unit": "ms/iter",
            "extra": "iterations: 30892\ncpu: 0.022976903405412356 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.041441426648548,
            "unit": "ns/iter",
            "extra": "iterations: 340682504\ncpu: 2.0395458875692647 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.126139765157622,
            "unit": "ns/iter",
            "extra": "iterations: 329459207\ncpu: 2.1258944510237927 ns\nthreads: 1"
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
          "id": "fde402ab1627c720898107ae2004073e134fadd6",
          "message": "CURA-11140",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1969/commits/fde402ab1627c720898107ae2004073e134fadd6"
        },
        "date": 1697449159855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5056753460190101,
            "unit": "ms/iter",
            "extra": "iterations: 1997\ncpu: 0.5055470205307963 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.23953789603982,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.163627722772278 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.43219594999823,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.42539500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.68496159999177,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.63428000000013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.9901839999852,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.9371999999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1083.7011960001064,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1083.6437000000014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.056020720000333,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.055572999999988 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.380214312499817,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.37836562500001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.21044869230005,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.20806923076926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037545823872679025,
            "unit": "ms/iter",
            "extra": "iterations: 18850\ncpu: 0.03754370291777185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8419326358172987,
            "unit": "ms/iter",
            "extra": "iterations: 832\ncpu: 0.8418645432692308 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.359387480915625,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.358877862595413 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010017297192970388,
            "unit": "ms/iter",
            "extra": "iterations: 691692\ncpu: 0.0010016695292124264 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005895254593220248,
            "unit": "ms/iter",
            "extra": "iterations: 117619\ncpu: 0.0058946182164446225 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017051586367649238,
            "unit": "ms/iter",
            "extra": "iterations: 40756\ncpu: 0.01705086367651392 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4096772834269236,
            "unit": "ns/iter",
            "extra": "iterations: 290476560\ncpu: 2.409552770798443 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.423643553795836,
            "unit": "ns/iter",
            "extra": "iterations: 289408676\ncpu: 2.4234691568127014 ns\nthreads: 1"
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
          "id": "5e5dc4222ba7969f35fc94cd44dad74f1252e681",
          "message": "CURA-11140",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1969/commits/5e5dc4222ba7969f35fc94cd44dad74f1252e681"
        },
        "date": 1697450145345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5048758977443498,
            "unit": "ms/iter",
            "extra": "iterations: 1995\ncpu: 0.504777694235589 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.15892285643517,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.157768811881189 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.41312345000006,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.40872 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.48368920001485,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.45586000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.481243500049,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.4359499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1081.5814030000865,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1081.5118000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.04805108999949,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.047199000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.38133368749962,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.37807812499998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.404902076921715,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.39833076923076 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037058052191276634,
            "unit": "ms/iter",
            "extra": "iterations: 18528\ncpu: 0.03705626079447324 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8485653607361764,
            "unit": "ms/iter",
            "extra": "iterations: 815\ncpu: 0.8484942331288338 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.359362653845997,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.358561538461533 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0009993795823987545,
            "unit": "ms/iter",
            "extra": "iterations: 692814\ncpu: 0.0009992928838043118 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0059269766891579066,
            "unit": "ms/iter",
            "extra": "iterations: 116641\ncpu: 0.005926266064248438 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017009817840098033,
            "unit": "ms/iter",
            "extra": "iterations: 40437\ncpu: 0.01700771817889557 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.426235378548788,
            "unit": "ns/iter",
            "extra": "iterations: 288968066\ncpu: 2.426081226567097 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4137983376782772,
            "unit": "ns/iter",
            "extra": "iterations: 289289311\ncpu: 2.4136536451566224 ns\nthreads: 1"
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
          "id": "3bea2989ad1c0b2cb4e8a5cec651fbba6bbacb28",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-14T14:54:15Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/3bea2989ad1c0b2cb4e8a5cec651fbba6bbacb28"
        },
        "date": 1697551944758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5069869128693041,
            "unit": "ms/iter",
            "extra": "iterations: 1997\ncpu: 0.5058106659989985 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.14446936945795,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.143520197044335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.47335145000102,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.467235 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.60753799998201,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.5911200000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.1011770000064,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.0637499999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1079.3348180000066,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1079.2588999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.044033889999355,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.042190999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.314864156248063,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.311950000000028 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.13078299999954,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.062499999999964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03617776426161213,
            "unit": "ms/iter",
            "extra": "iterations: 18669\ncpu: 0.036173405110075545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8662422638889901,
            "unit": "ms/iter",
            "extra": "iterations: 792\ncpu: 0.8661843434343444 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.57201146456711,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 5.571290551181093 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010689371713639764,
            "unit": "ms/iter",
            "extra": "iterations: 660495\ncpu: 0.0010688382198199827 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005865954485707575,
            "unit": "ms/iter",
            "extra": "iterations: 120204\ncpu: 0.005865264051113086 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017552001435860814,
            "unit": "ms/iter",
            "extra": "iterations: 39001\ncpu: 0.017550829465911095 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.431020590932934,
            "unit": "ns/iter",
            "extra": "iterations: 290299718\ncpu: 2.430884896691499 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4674257029414726,
            "unit": "ns/iter",
            "extra": "iterations: 281013447\ncpu: 2.4672417188633635 ns\nthreads: 1"
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
          "id": "1fed8a72fe46b245ca4e56118651999d579f9093",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-17T15:30:27Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/1fed8a72fe46b245ca4e56118651999d579f9093"
        },
        "date": 1697615765660,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5084776178088621,
            "unit": "ms/iter",
            "extra": "iterations: 1999\ncpu: 0.5046074537268634 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.175069599009912,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.154841089108912 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.40538110000125,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.40150499999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.66536899998573,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.65929999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 665.450139499967,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 665.4187000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1082.7828769999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1082.7436000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.072266860000127,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.072176 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.72590803124919,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.724443749999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.7239333846144,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.72042307692311 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03838004168784503,
            "unit": "ms/iter",
            "extra": "iterations: 17703\ncpu: 0.038379218211602575 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8718226737765956,
            "unit": "ms/iter",
            "extra": "iterations: 797\ncpu: 0.8718141781681296 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.579629484126751,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 5.579411904761911 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010291910459995744,
            "unit": "ms/iter",
            "extra": "iterations: 692964\ncpu: 0.0010291749643560118 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005984091665608282,
            "unit": "ms/iter",
            "extra": "iterations: 118125\ncpu: 0.0059749434920634845 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01736638557626115,
            "unit": "ms/iter",
            "extra": "iterations: 39227\ncpu: 0.017365587478012576 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4121822274754408,
            "unit": "ns/iter",
            "extra": "iterations: 290587859\ncpu: 2.4120894190558713 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4176182659101113,
            "unit": "ns/iter",
            "extra": "iterations: 289298517\ncpu: 2.417549897084334 ns\nthreads: 1"
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
          "id": "9e1e888d4e6d7f49b9db2e55ea79504fb5527fdb",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-17T15:30:27Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/9e1e888d4e6d7f49b9db2e55ea79504fb5527fdb"
        },
        "date": 1697628317740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5030872756729734,
            "unit": "ms/iter",
            "extra": "iterations: 2006\ncpu: 0.5029689431704886 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.16643058620682,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 8.149697044334976 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.36365995000051,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.34958000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.06247139999323,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.0499800000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.3261380000449,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.2794500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.766392000034,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.7154999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.041296390000298,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.040983999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.499989875002683,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.4980125 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.566663000003096,
            "unit": "ms/iter",
            "extra": "iterations: 12\ncpu: 62.56381666666666 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03638547713568724,
            "unit": "ms/iter",
            "extra": "iterations: 18741\ncpu: 0.03638478736460175 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8515407761557136,
            "unit": "ms/iter",
            "extra": "iterations: 822\ncpu: 0.8515184914841867 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.406694084615538,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 5.40655999999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.00103220469545252,
            "unit": "ms/iter",
            "extra": "iterations: 683342\ncpu: 0.001032158128726171 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.006010730580137573,
            "unit": "ms/iter",
            "extra": "iterations: 117972\ncpu: 0.006010550808666469 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017397723044769154,
            "unit": "ms/iter",
            "extra": "iterations: 39714\ncpu: 0.017396547816890803 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.419432665714302,
            "unit": "ns/iter",
            "extra": "iterations: 289064603\ncpu: 2.4185022750779295 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4399223817568454,
            "unit": "ns/iter",
            "extra": "iterations: 283141168\ncpu: 2.438272063637169 ns\nthreads: 1"
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
          "id": "87fbc0aca0dfd1a90eee2d36c20ef98aa7b62460",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-17T15:30:27Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/87fbc0aca0dfd1a90eee2d36c20ef98aa7b62460"
        },
        "date": 1697704220325,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6678785236824635,
            "unit": "ms/iter",
            "extra": "iterations: 1499\ncpu: 0.66777631754503 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.006982697142771,
            "unit": "ms/iter",
            "extra": "iterations: 175\ncpu: 9.005808571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 80.49656038888821,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 80.48651666666665 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 315.8119965000026,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 315.3307249999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.2597749999723,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 550.2310999999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1036.3039490000574,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1036.2133 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.170222625000001,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 8.124575781250003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 32.19725173077082,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 32.1844192307692 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 82.76692311110563,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 82.7575 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04920403228660079,
            "unit": "ms/iter",
            "extra": "iterations: 13566\ncpu: 0.0491968524251806 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.080565799703336,
            "unit": "ms/iter",
            "extra": "iterations: 674\ncpu: 1.0804827893175082 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.673102388889321,
            "unit": "ms/iter",
            "extra": "iterations: 108\ncpu: 6.672661111111118 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014248555348537445,
            "unit": "ms/iter",
            "extra": "iterations: 505596\ncpu: 0.0014247666120776247 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008402511394134622,
            "unit": "ms/iter",
            "extra": "iterations: 81972\ncpu: 0.008401417557214668 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.023146199046967908,
            "unit": "ms/iter",
            "extra": "iterations: 29380\ncpu: 0.023140932607215815 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.1947190490937847,
            "unit": "ns/iter",
            "extra": "iterations: 326104376\ncpu: 2.1946114577744966 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.112729164494325,
            "unit": "ns/iter",
            "extra": "iterations: 314303598\ncpu: 2.112312440024945 ns\nthreads: 1"
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
          "id": "3a7f8c336f7317075870e85d0af0962be72b96ae",
          "message": "Moved target machine name to end of header",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1971/commits/3a7f8c336f7317075870e85d0af0962be72b96ae"
        },
        "date": 1698053937945,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5071277642928855,
            "unit": "ms/iter",
            "extra": "iterations: 1994\ncpu: 0.5068504012036109 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.164282529703137,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.162988613861387 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.43128840000077,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.42609000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.57110300001204,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.56383999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 667.0792095000024,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 667.0510500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.188325000042,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1078.1278000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0503012300002865,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.0497939999999915 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.386402562501132,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.383825000000027 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.28084130769345,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.2770076923077 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.036699594351869716,
            "unit": "ms/iter",
            "extra": "iterations: 19263\ncpu: 0.03669665680319781 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8541657928922055,
            "unit": "ms/iter",
            "extra": "iterations: 816\ncpu: 0.8541126225490205 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.4061339767442,
            "unit": "ms/iter",
            "extra": "iterations: 129\ncpu: 5.40554341085272 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010134707694044204,
            "unit": "ms/iter",
            "extra": "iterations: 690937\ncpu: 0.0010134129450297205 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005815368243214752,
            "unit": "ms/iter",
            "extra": "iterations: 120453\ncpu: 0.005814847284833104 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017248282375853366,
            "unit": "ms/iter",
            "extra": "iterations: 40053\ncpu: 0.017247532020073446 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4132082461434385,
            "unit": "ns/iter",
            "extra": "iterations: 290509471\ncpu: 2.413123047544299 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4141753029248187,
            "unit": "ns/iter",
            "extra": "iterations: 287012519\ncpu: 2.4141532307167384 ns\nthreads: 1"
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
          "id": "21ee7634cb7293337d3d1d0239d3b91a96863c3c",
          "message": "Moved target machine name to end of header",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1971/commits/21ee7634cb7293337d3d1d0239d3b91a96863c3c"
        },
        "date": 1698054210997,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5889731696818984,
            "unit": "ms/iter",
            "extra": "iterations: 1603\ncpu: 0.5888595134123518 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.067230433862422,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.066322751322751 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.27907671428485,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.27255714285711 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.77303050000273,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.7542166666666 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 621.4737409999884,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 621.4195999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1044.809250999947,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1044.6821999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.637702760869128,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.6369311594202935 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.984971703703565,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.981470370370406 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.5495842727214,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.54068181818171 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04879479899999849,
            "unit": "ms/iter",
            "extra": "iterations: 14000\ncpu: 0.04879261428571434 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.096524084127056,
            "unit": "ms/iter",
            "extra": "iterations: 630\ncpu: 1.0964152380952394 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8754120392146865,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.8607137254901875 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013423528697695311,
            "unit": "ms/iter",
            "extra": "iterations: 521453\ncpu: 0.0013422563490861148 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007879531332934656,
            "unit": "ms/iter",
            "extra": "iterations: 88549\ncpu: 0.007878472935888605 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022275402505448117,
            "unit": "ms/iter",
            "extra": "iterations: 31212\ncpu: 0.02227428232730999 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6741007525362606,
            "unit": "ns/iter",
            "extra": "iterations: 418073684\ncpu: 1.6740075416944955 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7311001613860728,
            "unit": "ns/iter",
            "extra": "iterations: 400843145\ncpu: 1.7309638661776283 ns\nthreads: 1"
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
          "id": "e911747ce06244b08a7edd1824c78d5b89a5a590",
          "message": "Cura 11205 raft top surface",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1972/commits/e911747ce06244b08a7edd1824c78d5b89a5a590"
        },
        "date": 1698078589594,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5225608039999088,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5194148 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.8435202537314295,
            "unit": "ms/iter",
            "extra": "iterations: 335\ncpu: 4.837074029850746 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 46.41111793333342,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 46.40574999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 208.22602014285556,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 208.18857142857146 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 701.0062975000437,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 700.9123999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1248.7127289999762,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1245.2374000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.648899982142975,
            "unit": "ms/iter",
            "extra": "iterations: 112\ncpu: 9.647366964285712 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 38.08254382609092,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 38.07736521739134 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 90.8197504444388,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 90.81083333333339 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05824061417663935,
            "unit": "ms/iter",
            "extra": "iterations: 11526\ncpu: 0.05822905604719763 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2800043910806886,
            "unit": "ms/iter",
            "extra": "iterations: 583\ncpu: 1.2797670668953711 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.041523770113871,
            "unit": "ms/iter",
            "extra": "iterations: 87\ncpu: 8.015210344827574 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016462155491070328,
            "unit": "ms/iter",
            "extra": "iterations: 405258\ncpu: 0.0016459191428670175 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009644856666253178,
            "unit": "ms/iter",
            "extra": "iterations: 72537\ncpu: 0.009642611356962646 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02752988909354361,
            "unit": "ms/iter",
            "extra": "iterations: 25517\ncpu: 0.02750474977466002 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.578883947422496,
            "unit": "ns/iter",
            "extra": "iterations: 282097337\ncpu: 2.5785759189921125 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.454128213576185,
            "unit": "ns/iter",
            "extra": "iterations: 289722268\ncpu: 2.4539245978842033 ns\nthreads: 1"
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
          "id": "7bc776566b8272796e04d5a363d8c5f4d75950b7",
          "message": "Cura 11205 raft top surface",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1972/commits/7bc776566b8272796e04d5a363d8c5f4d75950b7"
        },
        "date": 1698078599578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5024432940000452,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5020124 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.743763285294148,
            "unit": "ms/iter",
            "extra": "iterations: 340\ncpu: 4.743005882352941 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.285458870967915,
            "unit": "ms/iter",
            "extra": "iterations: 31\ncpu: 48.13775161290321 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 204.33994771428843,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 204.31034285714284 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 656.4514510000095,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 656.37575 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1197.0239810000294,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1196.8677999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.130468999999188,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 9.129513793103445 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 35.935381863639165,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 35.930195454545455 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 82.90207622222725,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 82.89676666666679 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.057552744655393326,
            "unit": "ms/iter",
            "extra": "iterations: 12536\ncpu: 0.05754308391831526 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1904640608694852,
            "unit": "ms/iter",
            "extra": "iterations: 575\ncpu: 1.1902907826086964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.911307211111307,
            "unit": "ms/iter",
            "extra": "iterations: 90\ncpu: 7.910558888888887 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001581528286667686,
            "unit": "ms/iter",
            "extra": "iterations: 448798\ncpu: 0.001581359765417849 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009252596967169912,
            "unit": "ms/iter",
            "extra": "iterations: 73133\ncpu: 0.009251344810140465 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02663823725821356,
            "unit": "ms/iter",
            "extra": "iterations: 26056\ncpu: 0.0266310523487873 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4180565398873552,
            "unit": "ns/iter",
            "extra": "iterations: 289450561\ncpu: 2.417648449470444 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.417794858962708,
            "unit": "ns/iter",
            "extra": "iterations: 290489338\ncpu: 2.4172635898946506 ns\nthreads: 1"
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
          "id": "f11ed7c34c52cea64c804cada44b4d8533ed2caf",
          "message": "[CURA-10783] prime tower with raft",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1968/commits/f11ed7c34c52cea64c804cada44b4d8533ed2caf"
        },
        "date": 1698158172043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6376093975903612,
            "unit": "ms/iter",
            "extra": "iterations: 1494\ncpu: 0.6368791834002676 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.680581098837122,
            "unit": "ms/iter",
            "extra": "iterations: 172\ncpu: 8.668226162790697 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 69.81985178946927,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 69.81035263157892 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 222.43100719999802,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 222.40848 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 678.6905619999857,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 678.6220999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1097.1613259999913,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1097.049499999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.405857984961981,
            "unit": "ms/iter",
            "extra": "iterations: 133\ncpu: 8.376560902255637 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 35.63806308333047,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 35.63258750000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 81.69115533332337,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 81.68151111111122 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05371689493183262,
            "unit": "ms/iter",
            "extra": "iterations: 13496\ncpu: 0.05371355216360403 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2228578982758178,
            "unit": "ms/iter",
            "extra": "iterations: 580\ncpu: 1.2227944827586188 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.490581802083322,
            "unit": "ms/iter",
            "extra": "iterations: 96\ncpu: 7.489443750000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014140412066552465,
            "unit": "ms/iter",
            "extra": "iterations: 469463\ncpu: 0.0014138566830612831 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008364419145967087,
            "unit": "ms/iter",
            "extra": "iterations: 77374\ncpu: 0.00836348515005041 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.023329904803292223,
            "unit": "ms/iter",
            "extra": "iterations: 29917\ncpu: 0.02332712838854173 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.7580382104176266,
            "unit": "ns/iter",
            "extra": "iterations: 368224343\ncpu: 1.7579511303520694 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0939544099346548,
            "unit": "ns/iter",
            "extra": "iterations: 345979545\ncpu: 2.0937934351003396 ns\nthreads: 1"
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
          "id": "e78f42c19bb46e314432f3e074dbdfa0e7f03976",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/e78f42c19bb46e314432f3e074dbdfa0e7f03976"
        },
        "date": 1698179123552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5788742876295105,
            "unit": "ms/iter",
            "extra": "iterations: 1641\ncpu: 0.5775600243753808 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.048330784210497,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 8.039190526315789 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.097693571427,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.09259047619048 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.11924216666952,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.1029666666667 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 619.1692699999862,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 619.1061500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1050.448379000045,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1050.2082 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.625643615942435,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.612313768115944 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.968681962964116,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.965385185185212 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.6585359999947,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.64387272727261 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04992275596042971,
            "unit": "ms/iter",
            "extra": "iterations: 14051\ncpu: 0.04991992029037078 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.0889660109373978,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 1.0889414062499991 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.850926343137123,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.845278431372549 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013485910702862476,
            "unit": "ms/iter",
            "extra": "iterations: 517441\ncpu: 0.0013485328762119764 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00792708438369884,
            "unit": "ms/iter",
            "extra": "iterations: 88382\ncpu: 0.007925939670973754 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.0223192521995975,
            "unit": "ms/iter",
            "extra": "iterations: 31483\ncpu: 0.022317869961566594 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6733603340786616,
            "unit": "ns/iter",
            "extra": "iterations: 418302528\ncpu: 1.673305211294349 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9811979835119646,
            "unit": "ns/iter",
            "extra": "iterations: 349519585\ncpu: 1.9811573649013126 ns\nthreads: 1"
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
          "id": "5ab2827632732feb4c613d7a8e5236d0913ac27d",
          "message": "5.5",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1973/commits/5ab2827632732feb4c613d7a8e5236d0913ac27d"
        },
        "date": 1698191459945,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5742968954164134,
            "unit": "ms/iter",
            "extra": "iterations: 1549\ncpu: 0.5742207230471272 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.363996569831942,
            "unit": "ms/iter",
            "extra": "iterations: 179\ncpu: 8.362814525139665 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.66701363636325,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 63.65683181818183 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 212.35957500000495,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.3265400000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 611.0954315000185,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 611.0346999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1049.0894389999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1048.950399999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.884759580000491,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.883844 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 29.623461928573697,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 29.61984285714284 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 71.40240790000689,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 71.39296000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05042604508284546,
            "unit": "ms/iter",
            "extra": "iterations: 14063\ncpu: 0.05042203654981151 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.116760299847733,
            "unit": "ms/iter",
            "extra": "iterations: 657\ncpu: 1.1166484018264826 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.722079514019089,
            "unit": "ms/iter",
            "extra": "iterations: 107\ncpu: 6.7210644859813105 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013553918706038085,
            "unit": "ms/iter",
            "extra": "iterations: 519891\ncpu: 0.0013552048410147494 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00750236739739765,
            "unit": "ms/iter",
            "extra": "iterations: 81699\ncpu: 0.007501334165656881 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.021649469524748634,
            "unit": "ms/iter",
            "extra": "iterations: 33519\ncpu: 0.021647934007577817 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6108098526242942,
            "unit": "ns/iter",
            "extra": "iterations: 447517683\ncpu: 1.6107122184934917 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.8479717839586711,
            "unit": "ns/iter",
            "extra": "iterations: 386136380\ncpu: 1.847798438468814 ns\nthreads: 1"
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
          "id": "491558639e67309ded80e3ba4b5942090ea2a343",
          "message": "5.5 (#1973)",
          "timestamp": "2023-10-25T01:38:54+02:00",
          "tree_id": "032e41566ee88f0a657324e6c565a76671c2ef2d",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/491558639e67309ded80e3ba4b5942090ea2a343"
        },
        "date": 1698191496576,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5309025729999348,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5107432000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.343254054285808,
            "unit": "ms/iter",
            "extra": "iterations: 350\ncpu: 4.3229299999999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 38.80794459999898,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 38.80471714285716 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 141.53061822221642,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 141.50531111111115 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 422.7850946666649,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 421.1187333333332 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 751.7992909999975,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 749.4880999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.94025312931035,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 8.938685344827592 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.48506978260743,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.47913478260873 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 86.962303666673,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 86.9497000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.060730495132246855,
            "unit": "ms/iter",
            "extra": "iterations: 11607\ncpu: 0.0607229775135695 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2875167218045336,
            "unit": "ms/iter",
            "extra": "iterations: 532\ncpu: 1.2871486842105258 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.020970318182465,
            "unit": "ms/iter",
            "extra": "iterations: 88\ncpu: 8.020024999999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015775220355012947,
            "unit": "ms/iter",
            "extra": "iterations: 448322\ncpu: 0.0015772540718501462 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009194400946532011,
            "unit": "ms/iter",
            "extra": "iterations: 75222\ncpu: 0.009193210762808761 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027206864387574373,
            "unit": "ms/iter",
            "extra": "iterations: 25595\ncpu: 0.027203821058800457 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0007414985587926,
            "unit": "ns/iter",
            "extra": "iterations: 351213090\ncpu: 2.000491781214641 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3821889080884087,
            "unit": "ns/iter",
            "extra": "iterations: 292948070\ncpu: 2.381949469747319 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "3493ae63097e8fe9a0f4664a2df07818633c704a",
          "message": "Set version to 5.5.0\n\nContributes to CURA-11218",
          "timestamp": "2023-10-25T10:13:21+02:00",
          "tree_id": "67e4910d3000866fc91d0240f7c6e2cc66180e6d",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/3493ae63097e8fe9a0f4664a2df07818633c704a"
        },
        "date": 1698222467863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.685772354196273,
            "unit": "ms/iter",
            "extra": "iterations: 1406\ncpu: 0.6856481507823613 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 10.103625687499829,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 9.9914575 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 75.63101370588168,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 75.61712941176472 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 249.88202319998436,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 249.85355999999985 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 748.3014940000317,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 748.0310000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1256.0765419999598,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1255.9182999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.104473843477416,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.103226956521743 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.82307034782555,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.8181217391304 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 89.36598866666321,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 89.35868888888896 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.060415781743713176,
            "unit": "ms/iter",
            "extra": "iterations: 11963\ncpu: 0.060406311125971855 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3072402277777604,
            "unit": "ms/iter",
            "extra": "iterations: 540\ncpu: 1.307110185185188 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.154144499999717,
            "unit": "ms/iter",
            "extra": "iterations: 86\ncpu: 8.152974418604657 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016021969993878877,
            "unit": "ms/iter",
            "extra": "iterations: 437844\ncpu: 0.001602069686920456 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009367317824149568,
            "unit": "ms/iter",
            "extra": "iterations: 74472\ncpu: 0.009366008701256857 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.026589798491052394,
            "unit": "ms/iter",
            "extra": "iterations: 26376\ncpu: 0.026585782529572406 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0052246389293527,
            "unit": "ns/iter",
            "extra": "iterations: 349240402\ncpu: 2.0049810846340717 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3847064090884857,
            "unit": "ns/iter",
            "extra": "iterations: 292342343\ncpu: 2.3843846664388257 ns\nthreads: 1"
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
          "id": "1609f0e97096d2877d299ce040c33e317b3e5fe7",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/1609f0e97096d2877d299ce040c33e317b3e5fe7"
        },
        "date": 1698241638536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5100849169550361,
            "unit": "ms/iter",
            "extra": "iterations: 2023\ncpu: 0.5021457241720217 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.14747661881218,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.146782673267326 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.42546190000007,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.41841500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.86607020000065,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.60852000000006 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.555982000034,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.5262999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1078.0124059999707,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1077.9753999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.056535230000236,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.055866000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.459944656249235,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.458965624999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.45861823077366,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.45150000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.037683452087107834,
            "unit": "ms/iter",
            "extra": "iterations: 18231\ncpu: 0.03768109812955959 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8929008543815042,
            "unit": "ms/iter",
            "extra": "iterations: 776\ncpu: 0.8928069587628861 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.515434484126427,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 5.515046031746027 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010298252692535616,
            "unit": "ms/iter",
            "extra": "iterations: 690056\ncpu: 0.0010297368619358416 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005923705023198537,
            "unit": "ms/iter",
            "extra": "iterations: 116599\ncpu: 0.005923402430552564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.017361295448111637,
            "unit": "ms/iter",
            "extra": "iterations: 38863\ncpu: 0.01736108895350329 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4358841612206636,
            "unit": "ns/iter",
            "extra": "iterations: 284447507\ncpu: 2.435868421936997 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.414176644568328,
            "unit": "ns/iter",
            "extra": "iterations: 289165506\ncpu: 2.4141157417302734 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9523056557e4bcd86dd1631e51267fc5c8a3502",
          "message": "[CURA-10783] prime tower with raft (#1968)",
          "timestamp": "2023-10-25T15:36:51+02:00",
          "tree_id": "5d0ec575a59d2fba0d95810e0c3154dc248a301a",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/d9523056557e4bcd86dd1631e51267fc5c8a3502"
        },
        "date": 1698241705563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5064731915535821,
            "unit": "ms/iter",
            "extra": "iterations: 1989\ncpu: 0.5059922071392661 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.156883163366327,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.150117326732671 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.39720639999882,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.39083000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.31592259999434,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.29846000000006 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 666.7505230000188,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 666.6829999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1074.1318039999896,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1074.0821999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.05488325000033,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.054510999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.546461656248965,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.545784374999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.75257984615424,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 62.744923076923016 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03637614861793646,
            "unit": "ms/iter",
            "extra": "iterations: 18921\ncpu: 0.03637533956979021 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8671296394051848,
            "unit": "ms/iter",
            "extra": "iterations: 807\ncpu: 0.867067162329615 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.562964444444723,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 5.562830952380956 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0010521796676119556,
            "unit": "ms/iter",
            "extra": "iterations: 654837\ncpu: 0.0010520654758359707 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0060336519552550765,
            "unit": "ms/iter",
            "extra": "iterations: 117913\ncpu: 0.006033386479862262 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01717481334702882,
            "unit": "ms/iter",
            "extra": "iterations: 39919\ncpu: 0.017173388611939146 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.65488218542921,
            "unit": "ns/iter",
            "extra": "iterations: 266686071\ncpu: 2.6546838286128516 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4275422652417546,
            "unit": "ns/iter",
            "extra": "iterations: 286808842\ncpu: 2.427414702926075 ns\nthreads: 1"
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
          "id": "78fcc88b5518e42750e8fcb0567d3fdf37f4ae7d",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-21T19:21:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/78fcc88b5518e42750e8fcb0567d3fdf37f4ae7d"
        },
        "date": 1698269602257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5863823214930409,
            "unit": "ms/iter",
            "extra": "iterations: 1661\ncpu: 0.5769262492474412 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.045283724867966,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.042096825396825 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.10427957142955,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.092552380952384 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.09721166666864,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.05459999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 617.456342999958,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 617.4110000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1077.9121130000249,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1077.8017000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.622824652173676,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.622346376811598 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.88298796296419,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.880199999999963 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.3930104545453,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.39214545454543 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05025390027302824,
            "unit": "ms/iter",
            "extra": "iterations: 13918\ncpu: 0.05025114240551805 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1078399577465805,
            "unit": "ms/iter",
            "extra": "iterations: 639\ncpu: 1.1077888888888905 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.855762058823895,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.855037254901968 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013447576309581206,
            "unit": "ms/iter",
            "extra": "iterations: 511633\ncpu: 0.0013447353864977458 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007956595765943637,
            "unit": "ms/iter",
            "extra": "iterations: 87056\ncpu: 0.007955750321632045 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02244549348549944,
            "unit": "ms/iter",
            "extra": "iterations: 30931\ncpu: 0.022444182212020266 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.673212516478335,
            "unit": "ns/iter",
            "extra": "iterations: 418356528\ncpu: 1.6730963978169353 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.997211472598849,
            "unit": "ns/iter",
            "extra": "iterations: 350631663\ncpu: 1.9970521030783273 ns\nthreads: 1"
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
          "id": "4a09451702b7c130583719067da49b6981fbf3ef",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps",
          "timestamp": "2023-10-26T11:58:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1955/commits/4a09451702b7c130583719067da49b6981fbf3ef"
        },
        "date": 1698324528035,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5154576500000303,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5126772 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.44502577681167,
            "unit": "ms/iter",
            "extra": "iterations: 345\ncpu: 4.443683478260869 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 39.585504828570656,
            "unit": "ms/iter",
            "extra": "iterations: 35\ncpu: 39.578920000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 144.3938906666694,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 144.37541111111113 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 426.8412213333477,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 426.8115333333335 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 731.4335049999272,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 731.2944999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 9.12587605217378,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 9.124924347826086 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 36.98592204347792,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 36.983221739130414 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 89.70316633332862,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 89.69056666666673 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.060902659819294706,
            "unit": "ms/iter",
            "extra": "iterations: 11732\ncpu: 0.06089821854756232 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.3279383636363795,
            "unit": "ms/iter",
            "extra": "iterations: 539\ncpu: 1.3277990723562145 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 8.220687035294063,
            "unit": "ms/iter",
            "extra": "iterations: 85\ncpu: 8.220007058823535 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0016022090531739746,
            "unit": "ms/iter",
            "extra": "iterations: 437018\ncpu: 0.001602030579976111 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009480465080459724,
            "unit": "ms/iter",
            "extra": "iterations: 74013\ncpu: 0.009480100793103914 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02710128847862333,
            "unit": "ms/iter",
            "extra": "iterations: 25891\ncpu: 0.027100513692016548 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.009014401358752,
            "unit": "ns/iter",
            "extra": "iterations: 348326292\ncpu: 2.00883170771386 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0902401383035536,
            "unit": "ns/iter",
            "extra": "iterations: 335473012\ncpu: 2.0900560549413125 ns\nthreads: 1"
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
          "id": "c35eebd528636b5e5d2214afd5868a18560d2186",
          "message": "Handle specific prime tower raft line spacing",
          "timestamp": "2023-10-26T11:58:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1974/commits/c35eebd528636b5e5d2214afd5868a18560d2186"
        },
        "date": 1698403329942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5150838939999858,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5074708 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.514043501416556,
            "unit": "ms/iter",
            "extra": "iterations: 353\ncpu: 4.499660339943342 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 42.804397647059616,
            "unit": "ms/iter",
            "extra": "iterations: 34\ncpu: 42.797605882352926 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 180.57573475000765,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 180.494025 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 613.237356500008,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 611.2986499999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1110.534547000043,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1109.165299999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.567953025423536,
            "unit": "ms/iter",
            "extra": "iterations: 118\ncpu: 8.567030508474573 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 35.80484924999894,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 35.797141666666626 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 88.36070188888496,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 88.34132222222222 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.06006675242071003,
            "unit": "ms/iter",
            "extra": "iterations: 11257\ncpu: 0.06005731544816559 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2140980302520428,
            "unit": "ms/iter",
            "extra": "iterations: 595\ncpu: 1.2139262184873947 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.589837380435157,
            "unit": "ms/iter",
            "extra": "iterations: 92\ncpu: 7.587980434782607 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001531475495290739,
            "unit": "ms/iter",
            "extra": "iterations: 436814\ncpu: 0.0015312206110610009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.008947362256073392,
            "unit": "ms/iter",
            "extra": "iterations: 79891\ncpu: 0.00894608654291472 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.027482728993551926,
            "unit": "ms/iter",
            "extra": "iterations: 26837\ncpu: 0.027479789097142042 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.4501580729803196,
            "unit": "ns/iter",
            "extra": "iterations: 288557222\ncpu: 2.449917541831622 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3195629111592906,
            "unit": "ns/iter",
            "extra": "iterations: 303007873\ncpu: 2.3192988124107194 ns\nthreads: 1"
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
          "id": "ba8d5c2eeecbf84ab0ef86b24eb938c1b5f6973c",
          "message": "[CURA-10783] Better management of extruder change during raft printing",
          "timestamp": "2023-10-26T11:58:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1975/commits/ba8d5c2eeecbf84ab0ef86b24eb938c1b5f6973c"
        },
        "date": 1698414788272,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5922887600000439,
            "unit": "ms/iter",
            "extra": "iterations: 1625\ncpu: 0.5873334153846154 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.07056742328025,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.069875661375661 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.51184761904603,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.506885714285694 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.87505816666877,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.84966666666662 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 627.1453360000123,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 627.0627000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1032.8165519999857,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1032.7693 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.66736075912463,
            "unit": "ms/iter",
            "extra": "iterations: 137\ncpu: 7.666441605839421 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.975996962962636,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.97323333333336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.67653119999704,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 75.66745999999985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.050790415716459945,
            "unit": "ms/iter",
            "extra": "iterations: 13769\ncpu: 0.05078864115041027 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1382692167722217,
            "unit": "ms/iter",
            "extra": "iterations: 632\ncpu: 1.138126582278481 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.8619514117648235,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.861421568627459 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013340367383598908,
            "unit": "ms/iter",
            "extra": "iterations: 524411\ncpu: 0.0013338591295758483 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00788869535463867,
            "unit": "ms/iter",
            "extra": "iterations: 88992\ncpu: 0.007888245010787482 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022693951373798493,
            "unit": "ms/iter",
            "extra": "iterations: 30827\ncpu: 0.02269189022610055 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6744166736463657,
            "unit": "ns/iter",
            "extra": "iterations: 418013516\ncpu: 1.6742090224661546 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7434982918572444,
            "unit": "ns/iter",
            "extra": "iterations: 402847789\ncpu: 1.7434200191179448 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erwan.mathieu@ultimaker.com",
            "name": "Erwan MATHIEU",
            "username": "wawanbreton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43d95328c0e8165435682101d8dd26c420618ca0",
          "message": "[CURA-10407] Introduce fractional layer-height support gaps (#1955)",
          "timestamp": "2023-10-27T15:55:40+02:00",
          "tree_id": "b28054c3d495594068f6e028ae14a6f77df4bd23",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/43d95328c0e8165435682101d8dd26c420618ca0"
        },
        "date": 1698415573855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5887013677379378,
            "unit": "ms/iter",
            "extra": "iterations: 1618\ncpu: 0.5854208899876391 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.06220860317507,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.05745238095238 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.28583728571045,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.253876190476205 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.86934466666676,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.8493666666667 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 626.7938915000286,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 626.6486000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1053.7450540000464,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1053.5657999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.623080673913163,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.622472463768113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.901015296295654,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.89755555555557 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.89350754545359,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.86676363636371 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.051072745893927414,
            "unit": "ms/iter",
            "extra": "iterations: 13821\ncpu: 0.05107183271832727 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1151920846395027,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 1.115102664576803 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.86787837254961,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.867541176470586 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013468320952656706,
            "unit": "ms/iter",
            "extra": "iterations: 518550\ncpu: 0.0013467738887281834 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007899040896964282,
            "unit": "ms/iter",
            "extra": "iterations: 88833\ncpu: 0.007898469037407261 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02254532788945052,
            "unit": "ms/iter",
            "extra": "iterations: 31044\ncpu: 0.02254500064424677 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6753390209525885,
            "unit": "ns/iter",
            "extra": "iterations: 418010521\ncpu: 1.6747753102606737 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.7392891872539276,
            "unit": "ns/iter",
            "extra": "iterations: 399865874\ncpu: 1.7391856750446246 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "247b438c97f960aa596ac91a7ec602baa1dcb2df",
          "message": "Handle specific prime tower raft line spacing (#1974)",
          "timestamp": "2023-10-30T11:29:34+01:00",
          "tree_id": "d35c05f4ad271523af403f75ebcbd84ec49312e5",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/247b438c97f960aa596ac91a7ec602baa1dcb2df"
        },
        "date": 1698662539081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5770872457359527,
            "unit": "ms/iter",
            "extra": "iterations: 1583\ncpu: 0.5768909033480732 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.960607702702701,
            "unit": "ms/iter",
            "extra": "iterations: 185\ncpu: 8.958325405405406 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 86.29701888888677,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 86.16876111111111 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 348.22080799997934,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 345.1456000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 608.3690849999357,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 608.1662999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1085.7562779999625,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1084.5600000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.900855768116179,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.89360724637681 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 31.507346360003794,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 31.484916 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 75.05028190908806,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 75.04017272727285 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04731076337677594,
            "unit": "ms/iter",
            "extra": "iterations: 15269\ncpu: 0.04720817342327585 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1373356672324477,
            "unit": "ms/iter",
            "extra": "iterations: 589\ncpu: 1.1372455008488982 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.253108532609244,
            "unit": "ms/iter",
            "extra": "iterations: 92\ncpu: 6.240650000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001314474973683615,
            "unit": "ms/iter",
            "extra": "iterations: 505388\ncpu: 0.0013141748517970363 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007696842552321644,
            "unit": "ms/iter",
            "extra": "iterations: 88061\ncpu: 0.007696397951420043 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.021439628112127008,
            "unit": "ms/iter",
            "extra": "iterations: 32534\ncpu: 0.021437834265691267 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.0403787955940094,
            "unit": "ns/iter",
            "extra": "iterations: 367470272\ncpu: 2.035558947201037 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.0005646370995027,
            "unit": "ns/iter",
            "extra": "iterations: 346289679\ncpu: 2.000368021363986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d88e6c937f27df85c5f3d41ea806bb32844f73b",
          "message": "[CURA-10783] Better management of extruder change during raft printing (#1975)",
          "timestamp": "2023-10-30T11:48:36+01:00",
          "tree_id": "2d69b4c60b43c1c0b0a460b63cd369f58e1860e4",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/1d88e6c937f27df85c5f3d41ea806bb32844f73b"
        },
        "date": 1698663520546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5768765526791604,
            "unit": "ms/iter",
            "extra": "iterations: 1661\ncpu: 0.57684268512944 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.369127343915848,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.053330158730159 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.09631923809212,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.08354761904762 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 209.23179733334032,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 209.19336666666663 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 613.65400950001,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 613.1404500000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1030.1042900000539,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1030.0348999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.580912467625835,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 7.579965467625896 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 30.627795777777298,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 30.623500000000014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 73.86549227272677,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 73.85790000000014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04941343501868216,
            "unit": "ms/iter",
            "extra": "iterations: 14181\ncpu: 0.04940944221140966 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.097305746456666,
            "unit": "ms/iter",
            "extra": "iterations: 635\ncpu: 1.0972222047244107 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.121780715686007,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.911894117647057 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013482684038176095,
            "unit": "ms/iter",
            "extra": "iterations: 514866\ncpu: 0.001348214292650901 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007831501403044687,
            "unit": "ms/iter",
            "extra": "iterations: 89092\ncpu: 0.007831021865038392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022236360345704916,
            "unit": "ms/iter",
            "extra": "iterations: 31356\ncpu: 0.02222994642173753 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6736102660637557,
            "unit": "ns/iter",
            "extra": "iterations: 418311527\ncpu: 1.673491536368779 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9953536447546165,
            "unit": "ns/iter",
            "extra": "iterations: 350161775\ncpu: 1.9951246820130462 ns\nthreads: 1"
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
          "id": "13a059ec1b33d7a920a3d41c477659b413511f92",
          "message": "[CURA-11255] improve engine logging",
          "timestamp": "2023-10-31T14:20:14Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1977/commits/13a059ec1b33d7a920a3d41c477659b413511f92"
        },
        "date": 1699009757507,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5036060553615846,
            "unit": "ms/iter",
            "extra": "iterations: 2005\ncpu: 0.5030261346633417 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.143050138613436,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 8.141225742574255 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 68.43359275000012,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 68.39406499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 229.92874740000389,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 229.91194000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 665.96286500004,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 665.92385 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1077.3925690000397,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1077.3195000000014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.0490436000000045,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 7.048588000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 26.4981165937499,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 26.49228749999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 62.4969217500014,
            "unit": "ms/iter",
            "extra": "iterations: 12\ncpu: 62.42667500000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03809610147489206,
            "unit": "ms/iter",
            "extra": "iterations: 18103\ncpu: 0.038093503839142714 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.8576814236024949,
            "unit": "ms/iter",
            "extra": "iterations: 805\ncpu: 0.8560829813664592 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.51531562499985,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 5.51509296875001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.001010808954066741,
            "unit": "ms/iter",
            "extra": "iterations: 688782\ncpu: 0.0010107591371435363 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.005767112523445464,
            "unit": "ms/iter",
            "extra": "iterations: 119424\ncpu: 0.005766740353697753 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01746413457047848,
            "unit": "ms/iter",
            "extra": "iterations: 40254\ncpu: 0.01746307696129577 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.622326666662041,
            "unit": "ns/iter",
            "extra": "iterations: 262279161\ncpu: 2.6222571300660746 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.4109695604406642,
            "unit": "ns/iter",
            "extra": "iterations: 290180579\ncpu: 2.4108050318556913 ns\nthreads: 1"
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
          "id": "9ad4f25f6563f8aff990f791de094b8b8d49be52",
          "message": "[CURA-11255] improve engine logging",
          "timestamp": "2023-10-31T14:20:14Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1977/commits/9ad4f25f6563f8aff990f791de094b8b8d49be52"
        },
        "date": 1699010003959,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.6242756155913757,
            "unit": "ms/iter",
            "extra": "iterations: 1488\ncpu: 0.6198620295698924 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 9.708959156069017,
            "unit": "ms/iter",
            "extra": "iterations: 173\ncpu: 9.707314450867052 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 91.35728768750084,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 91.34273124999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 348.87507025001696,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 348.82732500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 609.7087450000345,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 609.6332999999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1158.4984730000087,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1158.2997000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.431742596774294,
            "unit": "ms/iter",
            "extra": "iterations: 124\ncpu: 8.430894354838705 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 33.04359469230943,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 33.041469230769266 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 80.15048922221821,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 80.14453333333351 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.04845640039323373,
            "unit": "ms/iter",
            "extra": "iterations: 14241\ncpu: 0.048444996840109555 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1144928887195837,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 1.1143637195121967 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.130425689320405,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 7.129400000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0014401572255059705,
            "unit": "ms/iter",
            "extra": "iterations: 510248\ncpu: 0.001439974678979633 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00821391573626213,
            "unit": "ms/iter",
            "extra": "iterations: 82491\ncpu: 0.008212437720478612 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.025850251580628123,
            "unit": "ms/iter",
            "extra": "iterations: 28786\ncpu: 0.025847279927742633 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.192542680545757,
            "unit": "ns/iter",
            "extra": "iterations: 306343320\ncpu: 2.192318735724346 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.1720763386231923,
            "unit": "ns/iter",
            "extra": "iterations: 337380778\ncpu: 2.1718229009478454 ns\nthreads: 1"
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
          "id": "bca565bdfe97ebc874989f362c24bb3f879dc2cd",
          "message": "[CURA-11255] improve engine logging",
          "timestamp": "2023-11-06T05:12:26Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1977/commits/bca565bdfe97ebc874989f362c24bb3f879dc2cd"
        },
        "date": 1699351378807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3875031445827169,
            "unit": "ms/iter",
            "extra": "iterations: 2732\ncpu: 0.38748217423133235 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.977571461240259,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.977282170542635 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.57524268965512,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.57363103448276 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.54599385714164,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.53921428571434 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 543.7951215000112,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 543.77435 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 946.3617200000272,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 946.3040000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.312488362416327,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.312245637583891 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.344493449999845,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.34341500000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.71616246666796,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.7040133333334 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03267912228070892,
            "unit": "ms/iter",
            "extra": "iterations: 21467\ncpu: 0.032678362137233956 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6738993059628829,
            "unit": "ms/iter",
            "extra": "iterations: 1023\ncpu: 0.6738942326490709 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.74011226530594,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.740040136054422 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0007975521461558439,
            "unit": "ms/iter",
            "extra": "iterations: 866363\ncpu: 0.0007975056644847482 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004535512505246774,
            "unit": "ms/iter",
            "extra": "iterations: 154855\ncpu: 0.0045353982758064 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01376524251816369,
            "unit": "ms/iter",
            "extra": "iterations: 49687\ncpu: 0.013765033107251426 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9291804161590043,
            "unit": "ns/iter",
            "extra": "iterations: 753736920\ncpu: 0.9291341334321229 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2391360077858868,
            "unit": "ns/iter",
            "extra": "iterations: 565041527\ncpu: 1.239118837366444 ns\nthreads: 1"
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
          "id": "c07a0a170867b3c90dcb88c6800927d1afcce041",
          "message": "[CURA-11255] improve engine logging",
          "timestamp": "2023-11-06T05:12:26Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1977/commits/c07a0a170867b3c90dcb88c6800927d1afcce041"
        },
        "date": 1699357277969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38574245714283517,
            "unit": "ms/iter",
            "extra": "iterations: 2485\ncpu: 0.3857014889336016 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.000012098039567,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 5.999872156862744 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.90562667857249,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.90275714285714 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.2388375714198,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.2272 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 558.2887099999994,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 558.2643499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 961.044075000018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.9956999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.313357463087084,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.313055033557051 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.53038020000031,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.52993999999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.94416546666313,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.94030666666667 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032598516500236624,
            "unit": "ms/iter",
            "extra": "iterations: 21030\ncpu: 0.03259789348549694 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.697574273003122,
            "unit": "ms/iter",
            "extra": "iterations: 989\ncpu: 0.6975631951466128 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.76994311643871,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.76961438356165 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008087565888410646,
            "unit": "ms/iter",
            "extra": "iterations: 871094\ncpu: 0.0008086634737468034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00450731386576925,
            "unit": "ms/iter",
            "extra": "iterations: 154034\ncpu: 0.004506901073788909 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013732200091683727,
            "unit": "ms/iter",
            "extra": "iterations: 50172\ncpu: 0.013731607270987795 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9287546039776243,
            "unit": "ns/iter",
            "extra": "iterations: 754014589\ncpu: 0.9286885296592039 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9317506228670814,
            "unit": "ns/iter",
            "extra": "iterations: 753033920\ncpu: 0.9317009252385368 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": false,
          "id": "eeb93cfaa3bd7466a4b519206cc3e51423dd13a6",
          "message": "Refactor Progress class and improve type safety\n\nThis refactor cleans up the Progress class and enhances type safety. It\nreplaces raw C-style arrays with std::array, which guarantees type\nsafety and prevents out-of-bound access. The type of several variables\nand methods has also been changed from int and float to size_t and\ndouble to increase precision.",
          "timestamp": "2023-11-08T10:47:28+01:00",
          "tree_id": "377386a7aea66914c9536b248a44fc4cb11a86ed",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/eeb93cfaa3bd7466a4b519206cc3e51423dd13a6"
        },
        "date": 1699443011922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3739259650946856,
            "unit": "ms/iter",
            "extra": "iterations: 2693\ncpu: 0.3739077237281842 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.01745286770413,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.0171046692607 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.611177344829855,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.60953448275861 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.58574599999352,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.57319999999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 560.2890390000539,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 560.26175 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 967.7952949999735,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 967.7431000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.482087493243644,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.473524324324336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.357907150000187,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.357932499999976 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.1873315999992,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.18415999999991 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.033116859113021986,
            "unit": "ms/iter",
            "extra": "iterations: 21173\ncpu: 0.033115770084541654 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6885776990000068,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.6885617000000012 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.782822608108505,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 4.782615540540548 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008041556748315718,
            "unit": "ms/iter",
            "extra": "iterations: 868387\ncpu: 0.0008041323741603692 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004524393904663387,
            "unit": "ms/iter",
            "extra": "iterations: 157924\ncpu: 0.004524154023454316 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013664644350225937,
            "unit": "ms/iter",
            "extra": "iterations: 50710\ncpu: 0.013663945967264852 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9300137351159553,
            "unit": "ns/iter",
            "extra": "iterations: 743604207\ncpu: 0.929972952667816 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2455098818870292,
            "unit": "ns/iter",
            "extra": "iterations: 564637708\ncpu: 1.2454671199536658 ns\nthreads: 1"
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
          "id": "103a8bab4b68d57b48e4bfb25c2e64ebe1c38204",
          "message": "Fix prime tower when only raft has multi-material ",
          "timestamp": "2023-11-06T05:12:26Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1978/commits/103a8bab4b68d57b48e4bfb25c2e64ebe1c38204"
        },
        "date": 1699453071161,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5048833199999763,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.5013354000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 4.688088575667604,
            "unit": "ms/iter",
            "extra": "iterations: 337\ncpu: 4.68459287833828 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 46.8765481612888,
            "unit": "ms/iter",
            "extra": "iterations: 31\ncpu: 46.74458064516129 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 197.1646662499893,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 197.12744999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 672.1854119999762,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 669.2320999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1204.77941799993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1203.3155000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 8.827616788618052,
            "unit": "ms/iter",
            "extra": "iterations: 123\ncpu: 8.826325203252027 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 37.287663875000966,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 37.154012499999986 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 86.71062600000015,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 86.65327777777776 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.05369448231086581,
            "unit": "ms/iter",
            "extra": "iterations: 12861\ncpu: 0.053678368711608686 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.2000062065404757,
            "unit": "ms/iter",
            "extra": "iterations: 581\ncpu: 1.199774698795181 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 7.611730393617041,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 7.611208510638298 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0015890917456190862,
            "unit": "ms/iter",
            "extra": "iterations: 429372\ncpu: 0.001588696747808426 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.009056496764268734,
            "unit": "ms/iter",
            "extra": "iterations: 75408\ncpu: 0.0090555498090388 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.02623641367587435,
            "unit": "ms/iter",
            "extra": "iterations: 25885\ncpu: 0.02614931041143525 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.3593436302869617,
            "unit": "ns/iter",
            "extra": "iterations: 285081405\ncpu: 2.3589693617512544 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 2.3933343555651163,
            "unit": "ns/iter",
            "extra": "iterations: 273590861\ncpu: 2.3931786230242524 ns\nthreads: 1"
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
          "id": "67b8052d3dd704ed184d28fe3b163d91ed1dcbdf",
          "message": "Fix prime tower when only raft has multi-material ",
          "timestamp": "2023-11-06T05:12:26Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1978/commits/67b8052d3dd704ed184d28fe3b163d91ed1dcbdf"
        },
        "date": 1699454011843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.5802378585306519,
            "unit": "ms/iter",
            "extra": "iterations: 1647\ncpu: 0.5801763812993321 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 8.046094751322503,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 8.045488359788358 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 63.105036142853045,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 63.10016190476191 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 210.12435633334312,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 210.1088666666667 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 635.384777000013,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 635.3415999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1084.077126000011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1084.0055999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 7.632499913044107,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 7.6321086956521755 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 31.062593518518717,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 31.06266666666667 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 74.83357327272311,
            "unit": "ms/iter",
            "extra": "iterations: 11\ncpu: 74.82578181818168 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.050017935993593,
            "unit": "ms/iter",
            "extra": "iterations: 13733\ncpu: 0.050013813442073854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 1.1105396061540118,
            "unit": "ms/iter",
            "extra": "iterations: 650\ncpu: 1.1104592307692311 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 6.886343950980643,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 6.85746078431372 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0013356763940206545,
            "unit": "ms/iter",
            "extra": "iterations: 516653\ncpu: 0.0013355354560991648 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.007935413548855814,
            "unit": "ms/iter",
            "extra": "iterations: 88096\ncpu: 0.007935218398111156 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.022627679401833155,
            "unit": "ms/iter",
            "extra": "iterations: 31095\ncpu: 0.02262546390094872 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 1.6740249729267656,
            "unit": "ns/iter",
            "extra": "iterations: 418254540\ncpu: 1.6738142280535613 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.9874581465905368,
            "unit": "ns/iter",
            "extra": "iterations: 350755176\ncpu: 1.9870683248306495 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "bad8af44b1129f2a4f52b645c62c1c8db24f6818",
          "message": "set version to 5.7.0-alpha\n\nContribute to CURA-10831",
          "timestamp": "2023-11-15T13:59:01+01:00",
          "tree_id": "c8e090be5f954575e0be36bcbc2672fd86703485",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/bad8af44b1129f2a4f52b645c62c1c8db24f6818"
        },
        "date": 1700173343297,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3807191825525115,
            "unit": "ms/iter",
            "extra": "iterations: 2476\ncpu: 0.38071328756058154 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.181216727626446,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.181095719844358 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.77713585714188,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.77573214285713 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.23070228571694,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 164.2291142857142 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 559.1426899999874,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 559.11885 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 969.8398239999619,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 969.8137000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.343118871621536,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.343017567567562 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.557920650000483,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.5569525 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.833599266668294,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.832306666666746 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03364207482829905,
            "unit": "ms/iter",
            "extra": "iterations: 20821\ncpu: 0.03364146774890739 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7116675704225432,
            "unit": "ms/iter",
            "extra": "iterations: 994\ncpu: 0.7116401408450695 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.76150372108831,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.761438095238098 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008078556659988658,
            "unit": "ms/iter",
            "extra": "iterations: 859063\ncpu: 0.0008078348153744243 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004809455974022349,
            "unit": "ms/iter",
            "extra": "iterations: 153364\ncpu: 0.004809385514201509 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013586564285295708,
            "unit": "ms/iter",
            "extra": "iterations: 51217\ncpu: 0.013586606009723336 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9290046085978767,
            "unit": "ns/iter",
            "extra": "iterations: 753725558\ncpu: 0.9290101583632389 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9382444363655191,
            "unit": "ns/iter",
            "extra": "iterations: 753538131\ncpu: 0.9382247173899156 ns\nthreads: 1"
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
          "id": "30c0e14696c150abe809bc83d4b1401f3783dbbc",
          "message": "Add voronoi utility functions",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1984/commits/30c0e14696c150abe809bc83d4b1401f3783dbbc"
        },
        "date": 1700506736816,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3742175052759675,
            "unit": "ms/iter",
            "extra": "iterations: 2464\ncpu: 0.37418676948051943 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.959155031007853,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.958832945736434 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.493407275861294,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.491634482758634 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.7166227142845,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 164.70492857142855 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.8606949999971,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.8276000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 945.2463780000357,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 945.2014999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.5320525000000975,
            "unit": "ms/iter",
            "extra": "iterations: 142\ncpu: 6.531468309859154 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.57565315000005,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.574414999999966 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.50057153333213,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.497626666666584 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03304345861581135,
            "unit": "ms/iter",
            "extra": "iterations: 20503\ncpu: 0.03304127200897426 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6965387398615428,
            "unit": "ms/iter",
            "extra": "iterations: 1011\ncpu: 0.6964947576656775 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.932362122449253,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.9259346938775455 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008065955229572989,
            "unit": "ms/iter",
            "extra": "iterations: 849534\ncpu: 0.0008065747809975833 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004546673455371699,
            "unit": "ms/iter",
            "extra": "iterations: 155798\ncpu: 0.0045466161311441735 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013663242086936022,
            "unit": "ms/iter",
            "extra": "iterations: 51118\ncpu: 0.013662917172033329 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9299838618052841,
            "unit": "ns/iter",
            "extra": "iterations: 753702023\ncpu: 0.9299454938573257 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9455941377471834,
            "unit": "ns/iter",
            "extra": "iterations: 733185439\ncpu: 0.9455869731204536 ns\nthreads: 1"
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
          "id": "c6047b7c1379121478344b8eb7245abcb87769a5",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/c6047b7c1379121478344b8eb7245abcb87769a5"
        },
        "date": 1700565924125,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38320798708636283,
            "unit": "ms/iter",
            "extra": "iterations: 2478\ncpu: 0.38320165456012917 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.986313445312419,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.9861816406249995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.76319053571448,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.761460714285725 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.25149657142688,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 165.24642857142865 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 560.0272689999883,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 560.0057 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 963.3832069999926,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 963.3175000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.354240251700772,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.354005442176868 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.571908274999373,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.570077499999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.725900933335346,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.72232000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0326488904320987,
            "unit": "ms/iter",
            "extra": "iterations: 21384\ncpu: 0.03264787691732134 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6862207957316823,
            "unit": "ms/iter",
            "extra": "iterations: 984\ncpu: 0.6862120934959355 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.788332386206956,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 4.788162068965524 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008099622246197177,
            "unit": "ms/iter",
            "extra": "iterations: 862943\ncpu: 0.0008099062162854307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00447950887256803,
            "unit": "ms/iter",
            "extra": "iterations: 156719\ncpu: 0.004479288407914786 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01370078052601757,
            "unit": "ms/iter",
            "extra": "iterations: 51063\ncpu: 0.013700407339952614 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9320340415846795,
            "unit": "ns/iter",
            "extra": "iterations: 751773111\ncpu: 0.9319753390328392 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9423070864996208,
            "unit": "ns/iter",
            "extra": "iterations: 746587031\ncpu: 0.9422352261567742 ns\nthreads: 1"
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
          "id": "17466d01528c197957879a1d9a92632f70006b22",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/17466d01528c197957879a1d9a92632f70006b22"
        },
        "date": 1700567688216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3758422828087085,
            "unit": "ms/iter",
            "extra": "iterations: 2065\ncpu: 0.37584184019370454 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.992095964980641,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.991714007782102 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.74960350000055,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.74476428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.14095014286355,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.12354285714287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 560.1721769999983,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 560.1359000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 966.7547390000095,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 966.6244000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.352409101351453,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.351647972972979 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.67860024999959,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.677075 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 52.02687553333286,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 52.02068666666666 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03184809960048144,
            "unit": "ms/iter",
            "extra": "iterations: 21526\ncpu: 0.031847561088915774 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6781974030302811,
            "unit": "ms/iter",
            "extra": "iterations: 990\ncpu: 0.6781027272727272 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.806727253424404,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.806195205479452 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008104181446744818,
            "unit": "ms/iter",
            "extra": "iterations: 861520\ncpu: 0.0008103630792088413 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00450181604619394,
            "unit": "ms/iter",
            "extra": "iterations: 154479\ncpu: 0.00450132509920442 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01370052676591793,
            "unit": "ms/iter",
            "extra": "iterations: 50512\ncpu: 0.013700273202407335 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9293006629558659,
            "unit": "ns/iter",
            "extra": "iterations: 753933378\ncpu: 0.9292149949090075 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9312416849705162,
            "unit": "ns/iter",
            "extra": "iterations: 753735297\ncpu: 0.9311896401741708 ns\nthreads: 1"
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
          "id": "7af9a1a46f0147c9dd8f58d160fd3a4c79bd9028",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/7af9a1a46f0147c9dd8f58d160fd3a4c79bd9028"
        },
        "date": 1700569429140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3765442014274398,
            "unit": "ms/iter",
            "extra": "iterations: 2522\ncpu: 0.37654476605868364 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.973032697674411,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.973118604651162 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.59374567857272,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.593321428571436 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 170.4128265714319,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 170.41140000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.0725710000013,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.0658500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 950.7058179999603,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 950.6488000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.2946904228185865,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.294754362416102 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.4138025000006,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.4136525 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.695698399998946,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.69575333333339 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03319727795152511,
            "unit": "ms/iter",
            "extra": "iterations: 20464\ncpu: 0.0331973514464425 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7031101452081323,
            "unit": "ms/iter",
            "extra": "iterations: 1033\ncpu: 0.7031137463697961 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.730516972789373,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.730515646258506 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008001967346068407,
            "unit": "ms/iter",
            "extra": "iterations: 871748\ncpu: 0.0008001981077100255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004463089904388117,
            "unit": "ms/iter",
            "extra": "iterations: 156989\ncpu: 0.004463122893960717 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013702545129441265,
            "unit": "ms/iter",
            "extra": "iterations: 51452\ncpu: 0.013702654901655974 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9289184867941355,
            "unit": "ns/iter",
            "extra": "iterations: 754207129\ncpu: 0.9289350008252144 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9361567421790111,
            "unit": "ns/iter",
            "extra": "iterations: 753523530\ncpu: 0.9361484703735786 ns\nthreads: 1"
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
          "id": "14e8ec0d70e82a1b64b0624d929c63d95a340d52",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/14e8ec0d70e82a1b64b0624d929c63d95a340d52"
        },
        "date": 1700572215036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38050944458027114,
            "unit": "ms/iter",
            "extra": "iterations: 2454\ncpu: 0.3804984922575387 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.957962779069748,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.9577096899224795 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.55248057142986,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.54877857142856 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.912691624996,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.89807499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.8977235000004,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.8899499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 963.1044079999924,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 963.0412000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.2863989328857866,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.285916107382551 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.388987075000387,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.388399999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.53777919999811,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.53360666666664 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0341744566967777,
            "unit": "ms/iter",
            "extra": "iterations: 20368\ncpu: 0.03417325706991358 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.699889839231556,
            "unit": "ms/iter",
            "extra": "iterations: 989\ncpu: 0.6998469160768466 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.79405949315076,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.793762328767115 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008048380623976657,
            "unit": "ms/iter",
            "extra": "iterations: 868847\ncpu: 0.0008047805885270938 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00453028399556856,
            "unit": "ms/iter",
            "extra": "iterations: 154351\ncpu: 0.004529951862961689 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01397910720070344,
            "unit": "ms/iter",
            "extra": "iterations: 50009\ncpu: 0.013978703833310012 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9296738197494963,
            "unit": "ns/iter",
            "extra": "iterations: 753810783\ncpu: 0.9296118015334864 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.238560478131694,
            "unit": "ns/iter",
            "extra": "iterations: 565277887\ncpu: 1.2385181095895195 ns\nthreads: 1"
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
          "id": "f397fb59586a828e148388efb8ca044a8cf02ace",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/f397fb59586a828e148388efb8ca044a8cf02ace"
        },
        "date": 1700575651995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.37534644241314263,
            "unit": "ms/iter",
            "extra": "iterations: 2735\ncpu: 0.37533012797074955 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.98941639534869,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.989122093023255 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.40017220689785,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.39692758620692 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.86012937501005,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.8506875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.9242284999991,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.8902 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 966.7835999999852,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 966.7326999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.305550718121326,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.305271140939589 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.438838625000244,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.437597500000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.700499533338494,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.696813333333345 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03291015654784611,
            "unit": "ms/iter",
            "extra": "iterations: 20984\ncpu: 0.0329095977887915 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6844049920634429,
            "unit": "ms/iter",
            "extra": "iterations: 1008\ncpu: 0.6843806547619055 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.785279486300979,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.785075342465749 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008048209271054445,
            "unit": "ms/iter",
            "extra": "iterations: 863397\ncpu: 0.0008047844734230014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004521515081014156,
            "unit": "ms/iter",
            "extra": "iterations: 156886\ncpu: 0.004521447420419925 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013835805605533196,
            "unit": "ms/iter",
            "extra": "iterations: 50022\ncpu: 0.013835430410619305 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9304499598318806,
            "unit": "ns/iter",
            "extra": "iterations: 753202455\ncpu: 0.9304378860528273 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9391807638198594,
            "unit": "ns/iter",
            "extra": "iterations: 744763250\ncpu: 0.9391575107928577 ns\nthreads: 1"
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
          "id": "5ef89b543ee7926afe9f2d5ce919c7776baaf120",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/5ef89b543ee7926afe9f2d5ce919c7776baaf120"
        },
        "date": 1700582843846,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39477714821561455,
            "unit": "ms/iter",
            "extra": "iterations: 2746\ncpu: 0.3947729060451566 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.978284914397092,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.978249416342413 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.368945758621365,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.36677586206896 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.49759942856832,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.49425714285704 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 545.352213000001,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 545.3427500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 955.8969989999468,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 955.8505000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.339816174496544,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.339709395973149 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.432363775000795,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.431457500000015 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 52.31017266666337,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 52.26941333333339 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03383741592368961,
            "unit": "ms/iter",
            "extra": "iterations: 20862\ncpu: 0.03383616623526026 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6959076441352098,
            "unit": "ms/iter",
            "extra": "iterations: 1006\ncpu: 0.6958824055666006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.777384598639469,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.777355102040806 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008059264415282446,
            "unit": "ms/iter",
            "extra": "iterations: 867881\ncpu: 0.0008059061092476979 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004504484161359336,
            "unit": "ms/iter",
            "extra": "iterations: 156074\ncpu: 0.0045042101823494045 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013708097122372148,
            "unit": "ms/iter",
            "extra": "iterations: 51327\ncpu: 0.013708001636565516 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294784973733683,
            "unit": "ns/iter",
            "extra": "iterations: 753690662\ncpu: 0.9294705843124802 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2376967744100231,
            "unit": "ns/iter",
            "extra": "iterations: 565199382\ncpu: 1.237691197617058 ns\nthreads: 1"
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
          "id": "d020d0f17b02859dff0f198a033e1f4cd3ed86c3",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/d020d0f17b02859dff0f198a033e1f4cd3ed86c3"
        },
        "date": 1700645270857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3892670102739685,
            "unit": "ms/iter",
            "extra": "iterations: 2044\ncpu: 0.3892598336594912 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.990747143442599,
            "unit": "ms/iter",
            "extra": "iterations: 244\ncpu: 5.9906594262295085 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.88003728571409,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.87759642857144 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.97827674999854,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 164.96937499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.0322495000157,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.0171999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 956.9012989999806,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 956.8690999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.336672513513705,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.336380405405397 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.57632789999957,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.575944999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.716368799998236,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.713913333333394 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03250917754180042,
            "unit": "ms/iter",
            "extra": "iterations: 21471\ncpu: 0.032508355456196736 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6802628816682846,
            "unit": "ms/iter",
            "extra": "iterations: 1031\ncpu: 0.680246459747818 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.778370829931996,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.778290476190473 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008201435478357966,
            "unit": "ms/iter",
            "extra": "iterations: 874691\ncpu: 0.0008201103018094379 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004644596648359939,
            "unit": "ms/iter",
            "extra": "iterations: 152403\ncpu: 0.004644579831105669 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013824702753849007,
            "unit": "ms/iter",
            "extra": "iterations: 50729\ncpu: 0.013824175520905193 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9292369400390833,
            "unit": "ns/iter",
            "extra": "iterations: 753269729\ncpu: 0.9292061967354059 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2405107219609053,
            "unit": "ns/iter",
            "extra": "iterations: 565121812\ncpu: 1.2405063565304426 ns\nthreads: 1"
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
          "id": "67eb8e03b6f6fe707b658ccd7f601343aa313231",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/67eb8e03b6f6fe707b658ccd7f601343aa313231"
        },
        "date": 1700647667098,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39403228336380197,
            "unit": "ms/iter",
            "extra": "iterations: 2735\ncpu: 0.3940231809872029 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.968354085937433,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.968176953125 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.31857203571264,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.3171892857143 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.1869705000001,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.18532499999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.0322035000097,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.01795 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 965.4175119999877,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 965.3723000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.525397161073865,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.525193959731545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.42512377499861,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.424664999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.80976420000055,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.809200000000054 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03403039908390999,
            "unit": "ms/iter",
            "extra": "iterations: 20522\ncpu: 0.03403043563005559 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6968171173570172,
            "unit": "ms/iter",
            "extra": "iterations: 1014\ncpu: 0.696770512820512 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 5.063550324137881,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 5.05945379310344 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008009187662376048,
            "unit": "ms/iter",
            "extra": "iterations: 867201\ncpu: 0.0008008974851274368 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004484963974932437,
            "unit": "ms/iter",
            "extra": "iterations: 156058\ncpu: 0.004484676210127001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013720905612395164,
            "unit": "ms/iter",
            "extra": "iterations: 51119\ncpu: 0.013720422934720969 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9287202269140543,
            "unit": "ns/iter",
            "extra": "iterations: 752790163\ncpu: 0.9286613114257709 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2385284753512944,
            "unit": "ns/iter",
            "extra": "iterations: 565130024\ncpu: 1.2385080782754545 ns\nthreads: 1"
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
          "id": "fda3e1bb8e712fc83a8e2f17d96881ad6d4a42c9",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/fda3e1bb8e712fc83a8e2f17d96881ad6d4a42c9"
        },
        "date": 1700664482931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3833472751450673,
            "unit": "ms/iter",
            "extra": "iterations: 2068\ncpu: 0.38333607350096716 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9982450714287205,
            "unit": "ms/iter",
            "extra": "iterations: 252\ncpu: 5.9977559523809525 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.25689242857071,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.25189642857141 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.52309128571738,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 169.5118428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 557.2723409999867,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 557.2263500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 967.2496299999693,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 967.1586999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.4448440958906525,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.444462328767118 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.14099505128199,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.138499999999965 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 50.511159199999156,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.5058 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03246746528424802,
            "unit": "ms/iter",
            "extra": "iterations: 21460\ncpu: 0.0324626048462255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6848517627450885,
            "unit": "ms/iter",
            "extra": "iterations: 1020\ncpu: 0.6848388235294114 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.582776675324464,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.582272727272724 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008040948282935199,
            "unit": "ms/iter",
            "extra": "iterations: 865343\ncpu: 0.0008040457945577655 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004456337679913955,
            "unit": "ms/iter",
            "extra": "iterations: 155908\ncpu: 0.004456269723170082 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013241949455263885,
            "unit": "ms/iter",
            "extra": "iterations: 52686\ncpu: 0.013241039365296258 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9285592504621634,
            "unit": "ns/iter",
            "extra": "iterations: 752204496\ncpu: 0.9285235646876543 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9496278172032079,
            "unit": "ns/iter",
            "extra": "iterations: 738873619\ncpu: 0.9496009628136428 ns\nthreads: 1"
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
          "id": "f08aadfa6bb62bdae753d86d56542af74d2f6c66",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/f08aadfa6bb62bdae753d86d56542af74d2f6c66"
        },
        "date": 1700664819689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3890845987124348,
            "unit": "ms/iter",
            "extra": "iterations: 2330\ncpu: 0.38900682403433473 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.986990793774121,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.986868482490271 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.936352285712964,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.93546785714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.57064942857056,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 169.56747142857142 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 559.1687219999812,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 559.14325 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 951.0897729999783,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 951.0882000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.478212172413774,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 6.478211034482755 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.02876097435951,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.028094871794906 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.19345107142775,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.19269999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03278968380800522,
            "unit": "ms/iter",
            "extra": "iterations: 21313\ncpu: 0.03278878618683437 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6863451983967807,
            "unit": "ms/iter",
            "extra": "iterations: 998\ncpu: 0.6863306613226453 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.5478796883114745,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.5478623376623375 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008250920210141461,
            "unit": "ms/iter",
            "extra": "iterations: 861325\ncpu: 0.0008250712564943552 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00459909438007246,
            "unit": "ms/iter",
            "extra": "iterations: 156728\ncpu: 0.004599019958144054 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013499431341617414,
            "unit": "ms/iter",
            "extra": "iterations: 51982\ncpu: 0.013499003501211942 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9292141144274311,
            "unit": "ns/iter",
            "extra": "iterations: 745325478\ncpu: 0.9292127002801831 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.94694149441149,
            "unit": "ns/iter",
            "extra": "iterations: 738051733\ncpu: 0.9469154650707953 ns\nthreads: 1"
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
          "id": "cdca811ffc8652eea2b2df13ba7ec8d2040c34ae",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/cdca811ffc8652eea2b2df13ba7ec8d2040c34ae"
        },
        "date": 1700665334522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3803453544821938,
            "unit": "ms/iter",
            "extra": "iterations: 2443\ncpu: 0.38031776504298 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.981480929961202,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.9812140077821025 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.72892513793279,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.726427586206896 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.99902812500034,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.98651249999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.0464215000043,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.0197999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 964.9042660000191,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 964.8696999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.39213248299337,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.391627891156454 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.965922666667105,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.965212820512782 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.0633778571442,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.06182142857151 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.033076048307126724,
            "unit": "ms/iter",
            "extra": "iterations: 21177\ncpu: 0.033075903102422394 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.698142301941739,
            "unit": "ms/iter",
            "extra": "iterations: 1030\ncpu: 0.6981318446601948 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.592831549019798,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.592614379084975 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008119114525055851,
            "unit": "ms/iter",
            "extra": "iterations: 863322\ncpu: 0.0008119003106604487 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004643991427847877,
            "unit": "ms/iter",
            "extra": "iterations: 153987\ncpu: 0.004643810191769415 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01365081979098434,
            "unit": "ms/iter",
            "extra": "iterations: 51862\ncpu: 0.01365042998727396 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9341133758872906,
            "unit": "ns/iter",
            "extra": "iterations: 753179764\ncpu: 0.9340905499951794 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2394723469923885,
            "unit": "ns/iter",
            "extra": "iterations: 564969015\ncpu: 1.239468504303729 ns\nthreads: 1"
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
          "id": "b7776f4272fff230a161f31e27cb1a5813f75afe",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/b7776f4272fff230a161f31e27cb1a5813f75afe"
        },
        "date": 1700667791998,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38143206772206345,
            "unit": "ms/iter",
            "extra": "iterations: 2274\ncpu: 0.3814218997361478 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.970284404669176,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.970083268482489 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.9690146785714,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.965342857142865 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 172.21670014285857,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 172.013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 557.2875729999964,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 557.2751000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 960.7825019999723,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.6894000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.339676648648618,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.339406756756755 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.8677245897425,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.867523076923078 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.38740892857114,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.267871428571446 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03300621859093293,
            "unit": "ms/iter",
            "extra": "iterations: 21021\ncpu: 0.03300401978973405 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6932728880000241,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.6932240000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.585788450980339,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.585527450980385 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008376564088075437,
            "unit": "ms/iter",
            "extra": "iterations: 817617\ncpu: 0.0008376064832311466 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004555173511752056,
            "unit": "ms/iter",
            "extra": "iterations: 152226\ncpu: 0.004555018196628685 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013463934574190383,
            "unit": "ms/iter",
            "extra": "iterations: 51631\ncpu: 0.013462785923185647 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.930568882285173,
            "unit": "ns/iter",
            "extra": "iterations: 749946432\ncpu: 0.9304843255791384 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2450474563674265,
            "unit": "ns/iter",
            "extra": "iterations: 560883953\ncpu: 1.2449871248143902 ns\nthreads: 1"
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
          "id": "7625e4fd8b542ce71efb8cd516db520e2a74c2f9",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/7625e4fd8b542ce71efb8cd516db520e2a74c2f9"
        },
        "date": 1700668768346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39425019271622536,
            "unit": "ms/iter",
            "extra": "iterations: 2636\ncpu: 0.3940828528072839 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.996851372549149,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 5.996628235294118 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.47176837036949,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 47.46978888888889 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.88071587500264,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.87099999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.0172095000219,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 548.99415 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 954.877386000021,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 954.8468999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.3441855918368875,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.343909523809528 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.880558948718797,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.880161538461522 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.447425428569986,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.44371428571423 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032912870946204424,
            "unit": "ms/iter",
            "extra": "iterations: 20968\ncpu: 0.0329125143075162 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7095046743214612,
            "unit": "ms/iter",
            "extra": "iterations: 958\ncpu: 0.7094455114822554 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.693367059999976,
            "unit": "ms/iter",
            "extra": "iterations: 150\ncpu: 4.6930140000000025 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008325688115143757,
            "unit": "ms/iter",
            "extra": "iterations: 839438\ncpu: 0.0008324889985919169 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004593804405760768,
            "unit": "ms/iter",
            "extra": "iterations: 152346\ncpu: 0.00459357121289696 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013689927210858426,
            "unit": "ms/iter",
            "extra": "iterations: 51134\ncpu: 0.013689171588375635 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9346183354215102,
            "unit": "ns/iter",
            "extra": "iterations: 751965315\ncpu: 0.9345570679679568 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2389060593169812,
            "unit": "ns/iter",
            "extra": "iterations: 535816255\ncpu: 1.2389084761902216 ns\nthreads: 1"
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
          "id": "50366ad0c5e2070eee6a553c03dde2fa775cc5e1",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/50366ad0c5e2070eee6a553c03dde2fa775cc5e1"
        },
        "date": 1700670150605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38284943032787394,
            "unit": "ms/iter",
            "extra": "iterations: 2440\ncpu: 0.38283877049180326 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.004921031128454,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.004729571984436 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.63029942857194,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.628485714285716 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.00667212500286,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.9953624999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.2283949999955,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.1949999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 967.7797690000034,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 967.7358999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.407458589041438,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.407017808219173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.118310589742624,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.11825641025643 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.08636871428913,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.084642857142796 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03223931714422202,
            "unit": "ms/iter",
            "extra": "iterations: 20940\ncpu: 0.03223845749761219 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7115142272272482,
            "unit": "ms/iter",
            "extra": "iterations: 999\ncpu: 0.711476776776777 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.6878768456375095,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 4.687487919463082 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008390937599084976,
            "unit": "ms/iter",
            "extra": "iterations: 832616\ncpu: 0.0008390821218905231 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004632625757073938,
            "unit": "ms/iter",
            "extra": "iterations: 150910\ncpu: 0.004632357696640376 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01391973422181988,
            "unit": "ms/iter",
            "extra": "iterations: 50798\ncpu: 0.013918360959092884 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9295274083993834,
            "unit": "ns/iter",
            "extra": "iterations: 753457022\ncpu: 0.9294621717653849 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9321457753231759,
            "unit": "ns/iter",
            "extra": "iterations: 751928966\ncpu: 0.9321272775652047 ns\nthreads: 1"
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
          "id": "a336b225b92367cc4f6a608db71e17659205bb34",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/a336b225b92367cc4f6a608db71e17659205bb34"
        },
        "date": 1700671794439,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3813784789753503,
            "unit": "ms/iter",
            "extra": "iterations: 2069\ncpu: 0.3813658772353794 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.022214854902038,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.02207137254902 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.726613642857224,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.72493571428573 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.17189625000606,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.16461250000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 543.8049935000038,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 543.7940500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 946.8333899999948,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 946.7447 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.40379983673488,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.403463945578226 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.7971818974361,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.79647948717951 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.62328892857369,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.6210500000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03271694582285887,
            "unit": "ms/iter",
            "extra": "iterations: 21079\ncpu: 0.03263369704445177 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7281879261880576,
            "unit": "ms/iter",
            "extra": "iterations: 989\ncpu: 0.728163902932255 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.635924503311299,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 4.635513907284762 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008484952844305046,
            "unit": "ms/iter",
            "extra": "iterations: 818671\ncpu: 0.0008484857775589964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0047309488140321555,
            "unit": "ms/iter",
            "extra": "iterations: 150510\ncpu: 0.004730961397913747 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013503370013047805,
            "unit": "ms/iter",
            "extra": "iterations: 50582\ncpu: 0.013503293661776888 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9302892898154543,
            "unit": "ns/iter",
            "extra": "iterations: 753681735\ncpu: 0.9302707859836908 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.237808841408184,
            "unit": "ns/iter",
            "extra": "iterations: 567610982\ncpu: 1.2377949375193733 ns\nthreads: 1"
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
          "id": "65f0d9b9661c3d0f45ca8b0fb8e467485273637f",
          "message": "[CURA-11359] sanitize code",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1986/commits/65f0d9b9661c3d0f45ca8b0fb8e467485273637f"
        },
        "date": 1700729917192,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3938542542629938,
            "unit": "ms/iter",
            "extra": "iterations: 2639\ncpu: 0.3938358848048504 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.999536929687466,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.999475 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.90519196551839,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.9030172413793 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.56158337500682,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 169.55508750000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 552.9550230000098,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 552.9337999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 952.6198099999874,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 952.5754000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.386733782312913,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.386364625850344 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.974713205128946,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.973469230769208 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 50.11967599999707,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.11696000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032924401848325326,
            "unit": "ms/iter",
            "extra": "iterations: 21533\ncpu: 0.032924079320113354 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6882274247787556,
            "unit": "ms/iter",
            "extra": "iterations: 1017\ncpu: 0.6881934119960681 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.559527136363728,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.55924545454546 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008117411520669745,
            "unit": "ms/iter",
            "extra": "iterations: 863422\ncpu: 0.0008116962505009138 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004486111319275902,
            "unit": "ms/iter",
            "extra": "iterations: 156927\ncpu: 0.00448576216967124 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013607981818941912,
            "unit": "ms/iter",
            "extra": "iterations: 47797\ncpu: 0.01360727033077394 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9321267279159717,
            "unit": "ns/iter",
            "extra": "iterations: 751881314\ncpu: 0.9320791552481632 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9426080369387649,
            "unit": "ns/iter",
            "extra": "iterations: 735227700\ncpu: 0.9425841817439706 ns\nthreads: 1"
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
          "id": "99cab75ac064d911aca00a22c401568ece0df1fe",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/99cab75ac064d911aca00a22c401568ece0df1fe"
        },
        "date": 1700730987509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3877520816326595,
            "unit": "ms/iter",
            "extra": "iterations: 2744\ncpu: 0.3877537172011662 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.010803034883764,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 6.007656201550388 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.119678642856506,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.11869999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.46480187500146,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.45883750000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 546.7078829999821,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 546.6916999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.3494570000016,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.3399999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 5.016338780000069,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 5.016005000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 17.717098791667496,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 17.71594583333332 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 47.30830100000021,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 47.190294117647035 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032998508161043126,
            "unit": "ms/iter",
            "extra": "iterations: 21137\ncpu: 0.032998400908359725 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.68643565888328,
            "unit": "ms/iter",
            "extra": "iterations: 985\ncpu: 0.6864352284263951 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.7405794527028196,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 4.7406216216216155 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008060637792760502,
            "unit": "ms/iter",
            "extra": "iterations: 860985\ncpu: 0.0008060622426639253 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004500866429501816,
            "unit": "ms/iter",
            "extra": "iterations: 154323\ncpu: 0.00450080156554757 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013947001204304935,
            "unit": "ms/iter",
            "extra": "iterations: 51482\ncpu: 0.013946915426751144 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9305141407809495,
            "unit": "ns/iter",
            "extra": "iterations: 753760457\ncpu: 0.9305094124883233 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9455816832818575,
            "unit": "ns/iter",
            "extra": "iterations: 741684132\ncpu: 0.9455862269950811 ns\nthreads: 1"
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
          "id": "11b7404e3bdc7c18a0edcd8103df5b30739fce7a",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/11b7404e3bdc7c18a0edcd8103df5b30739fce7a"
        },
        "date": 1700732541200,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.405704743987601,
            "unit": "ms/iter",
            "extra": "iterations: 2578\ncpu: 0.4056852986811481 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.002292093023433,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 6.002107751937984 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.04367617857151,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.04309285714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.55712624999808,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.55604999999994 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.0801659999868,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.1660499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 961.4970860000085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 961.4791 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.6167720642856205,
            "unit": "ms/iter",
            "extra": "iterations: 140\ncpu: 6.616540000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.68911987179525,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.68826410256409 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.87899286666683,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.876040000000025 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03310740395915671,
            "unit": "ms/iter",
            "extra": "iterations: 20762\ncpu: 0.0331072777189095 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.693828186390545,
            "unit": "ms/iter",
            "extra": "iterations: 1014\ncpu: 0.693772189349113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.842939758620936,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 4.8425813793103405 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008163085629556824,
            "unit": "ms/iter",
            "extra": "iterations: 864608\ncpu: 0.0008162810198378924 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004566405994341749,
            "unit": "ms/iter",
            "extra": "iterations: 156581\ncpu: 0.004566289652001198 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01380903147879914,
            "unit": "ms/iter",
            "extra": "iterations: 51082\ncpu: 0.013808868094436369 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9295659314727323,
            "unit": "ns/iter",
            "extra": "iterations: 749524855\ncpu: 0.9295618355444648 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.946855627610712,
            "unit": "ns/iter",
            "extra": "iterations: 737854908\ncpu: 0.946839673254566 ns\nthreads: 1"
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
          "id": "93e75df16d9a7960a3a0efe19fdd708ef439330f",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/93e75df16d9a7960a3a0efe19fdd708ef439330f"
        },
        "date": 1700734273410,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.37936129789548245,
            "unit": "ms/iter",
            "extra": "iterations: 2756\ncpu: 0.37933359941944844 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.982272355468776,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.9820128906250005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.68745614285714,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.685275000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.8828578749999,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 164.86584999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 557.5949424999749,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.8382500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 961.6103170000088,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 961.5420000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 5.054680000000644,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 5.054676000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 17.836086085106004,
            "unit": "ms/iter",
            "extra": "iterations: 47\ncpu: 17.83379361702125 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 46.78613423529629,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 46.78454705882353 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032829515047168106,
            "unit": "ms/iter",
            "extra": "iterations: 21200\ncpu: 0.03282704716981138 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6991171472332314,
            "unit": "ms/iter",
            "extra": "iterations: 1012\ncpu: 0.699029940711463 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.803119075343023,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.8027575342465765 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008232754388060518,
            "unit": "ms/iter",
            "extra": "iterations: 861941\ncpu: 0.0008232583204650891 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004458871258251025,
            "unit": "ms/iter",
            "extra": "iterations: 156344\ncpu: 0.00445878703372051 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013559774894316997,
            "unit": "ms/iter",
            "extra": "iterations: 51096\ncpu: 0.013558489901362132 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294915806957095,
            "unit": "ns/iter",
            "extra": "iterations: 753671186\ncpu: 0.9294628917921793 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2393155118793913,
            "unit": "ns/iter",
            "extra": "iterations: 556819890\ncpu: 1.2392563778567576 ns\nthreads: 1"
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
          "id": "dd56f46c41cc581a11c10f017b13a3b3a4aad7a5",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/dd56f46c41cc581a11c10f017b13a3b3a4aad7a5"
        },
        "date": 1700735150539,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38424332134405276,
            "unit": "ms/iter",
            "extra": "iterations: 2113\ncpu: 0.38422214860388076 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.984978003890931,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.984574708171205 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.653667607142275,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.65104285714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 170.25871114285403,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 170.24650000000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.9428885000036,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.9180499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 962.2561609999707,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 962.1874000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 5.029212190000294,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 5.028945 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 17.817112659574445,
            "unit": "ms/iter",
            "extra": "iterations: 47\ncpu: 17.816612765957448 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 47.1785534117644,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 47.176423529411714 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032770597861571514,
            "unit": "ms/iter",
            "extra": "iterations: 21137\ncpu: 0.03276900695462929 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7168126885416607,
            "unit": "ms/iter",
            "extra": "iterations: 960\ncpu: 0.7167850000000013 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.912846201388987,
            "unit": "ms/iter",
            "extra": "iterations: 144\ncpu: 4.912853472222231 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000832432641787492,
            "unit": "ms/iter",
            "extra": "iterations: 844292\ncpu: 0.0008324037181449072 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004545814261541746,
            "unit": "ms/iter",
            "extra": "iterations: 117014\ncpu: 0.004545641547165304 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013827967043613254,
            "unit": "ms/iter",
            "extra": "iterations: 50582\ncpu: 0.013827780633426929 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9295667662582403,
            "unit": "ns/iter",
            "extra": "iterations: 753144108\ncpu: 0.9295432209634968 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9461831233824683,
            "unit": "ns/iter",
            "extra": "iterations: 741263940\ncpu: 0.9461695924396419 ns\nthreads: 1"
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
          "id": "b931a9c67fab2b464a33cf1b1fa59e56b2aa8553",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/b931a9c67fab2b464a33cf1b1fa59e56b2aa8553"
        },
        "date": 1700740461946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.37275696538820163,
            "unit": "ms/iter",
            "extra": "iterations: 2138\ncpu: 0.37275729653882134 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.994427019531567,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.994196875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.48989564285872,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.488832142857156 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.34339271427376,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.33785714285713 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.6931414999817,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.6830000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.3620470000133,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.3405000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.664017107142887,
            "unit": "ms/iter",
            "extra": "iterations: 140\ncpu: 6.6024221428571375 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.711255374999382,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.71047749999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.701064400003816,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.70032000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03389266808802598,
            "unit": "ms/iter",
            "extra": "iterations: 20403\ncpu: 0.033892290349458475 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7084594452332187,
            "unit": "ms/iter",
            "extra": "iterations: 986\ncpu: 0.7084470588235294 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.913830021126602,
            "unit": "ms/iter",
            "extra": "iterations: 142\ncpu: 4.913779577464784 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0009021490608067848,
            "unit": "ms/iter",
            "extra": "iterations: 789188\ncpu: 0.0009021181264793697 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004787980335865492,
            "unit": "ms/iter",
            "extra": "iterations: 150477\ncpu: 0.004787827375612216 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.014165199412293127,
            "unit": "ms/iter",
            "extra": "iterations: 49004\ncpu: 0.01416504366990448 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9347890535284663,
            "unit": "ns/iter",
            "extra": "iterations: 752422801\ncpu: 0.9347695192984963 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9518587910750107,
            "unit": "ns/iter",
            "extra": "iterations: 741180743\ncpu: 0.9518396243600169 ns\nthreads: 1"
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
          "id": "ebf2c68a5404869d0d5c5c76da36550ab4958d9e",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/ebf2c68a5404869d0d5c5c76da36550ab4958d9e"
        },
        "date": 1700740758834,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3723916533027811,
            "unit": "ms/iter",
            "extra": "iterations: 2619\ncpu: 0.3723788850706376 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.981305214007802,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.980785214007781 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.234175250001236,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.23216428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 161.08875287500268,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 161.0755625 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 543.8590714999805,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 543.8361 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 956.1180480000075,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 956.0459999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.321818371621991,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.321545270270272 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.286787000000572,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.286187499999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.3498835333318,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.34584666666662 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03345486754154085,
            "unit": "ms/iter",
            "extra": "iterations: 21184\ncpu: 0.03344378776435047 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7044430138203879,
            "unit": "ms/iter",
            "extra": "iterations: 1013\ncpu: 0.704394669299111 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.865066717241398,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 4.86506758620689 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008519275255870432,
            "unit": "ms/iter",
            "extra": "iterations: 831866\ncpu: 0.0008519285558010545 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004563454087565914,
            "unit": "ms/iter",
            "extra": "iterations: 155655\ncpu: 0.004563376698467761 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013714597990251784,
            "unit": "ms/iter",
            "extra": "iterations: 49658\ncpu: 0.01371407426799305 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9306382666497242,
            "unit": "ns/iter",
            "extra": "iterations: 751761807\ncpu: 0.9306200361413156 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9302962846921111,
            "unit": "ns/iter",
            "extra": "iterations: 743979611\ncpu: 0.9302660849397913 ns\nthreads: 1"
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
          "id": "1d7038b8a67d7eb76bd16ae3782935da4b731636",
          "message": "Fix issue where part of raft was missing",
          "timestamp": "2023-11-17T06:44:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1989/commits/1d7038b8a67d7eb76bd16ae3782935da4b731636"
        },
        "date": 1700858279007,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38331640738034817,
            "unit": "ms/iter",
            "extra": "iterations: 2737\ncpu: 0.38329682133723064 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.977781412451157,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.977703112840467 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.56406021428461,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.56326785714287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.8015364999983,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.7980375 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 559.5597065000106,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 559.5271999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.0262919999759,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.0329000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.339428210884651,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.3392204081632615 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.796702050000704,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.795552500000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.23180679999374,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.22904000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03314669973482398,
            "unit": "ms/iter",
            "extra": "iterations: 21118\ncpu: 0.03314553461502037 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7083156534954488,
            "unit": "ms/iter",
            "extra": "iterations: 987\ncpu: 0.708298480243161 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.797269630137335,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.797015068493158 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008041859450061763,
            "unit": "ms/iter",
            "extra": "iterations: 865116\ncpu: 0.0008041548185445673 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004531375202504334,
            "unit": "ms/iter",
            "extra": "iterations: 154935\ncpu: 0.00453098202472004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013723349654434105,
            "unit": "ms/iter",
            "extra": "iterations: 51365\ncpu: 0.013722692494889522 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9305684442325731,
            "unit": "ns/iter",
            "extra": "iterations: 751400288\ncpu: 0.9305487516661708 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2407363082056766,
            "unit": "ns/iter",
            "extra": "iterations: 564550275\ncpu: 1.2407006621332364 ns\nthreads: 1"
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
          "id": "e1b96412e4176fe24d14fe2e7ce65f2d2f52ac9c",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-24T22:49:55Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/e1b96412e4176fe24d14fe2e7ce65f2d2f52ac9c"
        },
        "date": 1700907680505,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3837765231910891,
            "unit": "ms/iter",
            "extra": "iterations: 2695\ncpu: 0.38375866419294996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.98911252918281,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.988908560311284 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.619143071427416,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.61657499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.09966762500983,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.08731249999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 552.1717115000229,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 552.1303500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.8552090000394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.8387999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.312124557047166,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.311456375838929 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.334298550000085,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.333257499999966 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.23222093333576,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.23037333333341 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03270102358984256,
            "unit": "ms/iter",
            "extra": "iterations: 21026\ncpu: 0.03269922476933321 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6964029023162042,
            "unit": "ms/iter",
            "extra": "iterations: 993\ncpu: 0.6963672708962735 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.770930684563401,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 4.7703986577181166 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008241268424386781,
            "unit": "ms/iter",
            "extra": "iterations: 854099\ncpu: 0.0008240960357054642 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004534906136083402,
            "unit": "ms/iter",
            "extra": "iterations: 154170\ncpu: 0.004534641629370179 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01375455248921869,
            "unit": "ms/iter",
            "extra": "iterations: 51020\ncpu: 0.013753872990983929 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294057075810596,
            "unit": "ns/iter",
            "extra": "iterations: 747535802\ncpu: 0.929368463879943 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2442096937203877,
            "unit": "ns/iter",
            "extra": "iterations: 565728796\ncpu: 1.2441767238590375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nallath@gmail.com",
            "name": "Jaime van Kessel",
            "username": "nallath"
          },
          "committer": {
            "email": "nallath@gmail.com",
            "name": "Jaime van Kessel",
            "username": "nallath"
          },
          "distinct": true,
          "id": "574c4b93faeee3cc29702fd28150929b6f19c9b3",
          "message": "Merge branch '5.6' of github.com:Ultimaker/CuraEngine",
          "timestamp": "2023-11-27T10:35:25+01:00",
          "tree_id": "4c214599f502b77d390370eae090329d76b85971",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/574c4b93faeee3cc29702fd28150929b6f19c9b3"
        },
        "date": 1701078189323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3770800736709931,
            "unit": "ms/iter",
            "extra": "iterations: 2389\ncpu: 0.37706898283800755 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.992877712062353,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.992728793774318 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.93772778571435,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.93662142857142 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.69679785714555,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.69408571428565 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.5978059999848,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 550.5825 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 964.024950999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 963.9944000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.335421412162178,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.335160135135138 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.41653654999891,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.415335000000034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.29571620000206,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.29274 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03265205869198136,
            "unit": "ms/iter",
            "extra": "iterations: 21911\ncpu: 0.03265093788508056 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6886496597836782,
            "unit": "ms/iter",
            "extra": "iterations: 1017\ncpu: 0.6886068829891839 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.846971816326524,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.840954421768706 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008101946638120564,
            "unit": "ms/iter",
            "extra": "iterations: 864100\ncpu: 0.0008101908343941667 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0045986859796578365,
            "unit": "ms/iter",
            "extra": "iterations: 155146\ncpu: 0.004598531061065055 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013643901700914342,
            "unit": "ms/iter",
            "extra": "iterations: 50855\ncpu: 0.013643718415101803 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9291463600892839,
            "unit": "ns/iter",
            "extra": "iterations: 752487509\ncpu: 0.9291435294775108 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.242489365906601,
            "unit": "ns/iter",
            "extra": "iterations: 565437245\ncpu: 1.2424641394112617 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "casperlamboo@users.noreply.github.com",
            "name": "casperlamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "1d7038b8a67d7eb76bd16ae3782935da4b731636",
          "message": "Applied clang-format.",
          "timestamp": "2023-11-24T20:28:24Z",
          "tree_id": "83b3bf12b1de4a5e827f1c63c6d19306b358fd1a",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/1d7038b8a67d7eb76bd16ae3782935da4b731636"
        },
        "date": 1701164097410,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4147305420863275,
            "unit": "ms/iter",
            "extra": "iterations: 2780\ncpu: 0.4147109712230216 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.978071864341237,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.977968217054264 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.60941744827647,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.60822413793106 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.1253309999907,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.12114285714281 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 544.303690500044,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 544.2930000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 941.8353270000352,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 941.7795999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.3383827222220175,
            "unit": "ms/iter",
            "extra": "iterations: 144\ncpu: 6.338018750000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.31485610000061,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.314497499999984 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.45918359999845,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.45487333333326 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.033483843809246974,
            "unit": "ms/iter",
            "extra": "iterations: 20571\ncpu: 0.03348109960624185 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7126656728205023,
            "unit": "ms/iter",
            "extra": "iterations: 975\ncpu: 0.7126193846153848 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.826980380281723,
            "unit": "ms/iter",
            "extra": "iterations: 142\ncpu: 4.826919718309865 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008337629524018458,
            "unit": "ms/iter",
            "extra": "iterations: 866210\ncpu: 0.0008337516306669278 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004486481905066177,
            "unit": "ms/iter",
            "extra": "iterations: 156425\ncpu: 0.00448635831868308 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.014004939891031657,
            "unit": "ms/iter",
            "extra": "iterations: 51207\ncpu: 0.014004843087859074 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9298906954857379,
            "unit": "ns/iter",
            "extra": "iterations: 753259191\ncpu: 0.929864259698095 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9490687446043209,
            "unit": "ns/iter",
            "extra": "iterations: 735757831\ncpu: 0.9490416147538047 ns\nthreads: 1"
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
          "id": "98094167e1da13412ad9dc381c077371d53a078a",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-26T04:05:29Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/98094167e1da13412ad9dc381c077371d53a078a"
        },
        "date": 1701173593555,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3831554658339302,
            "unit": "ms/iter",
            "extra": "iterations: 2722\ncpu: 0.3830927994121969 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.000103292968628,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.9999171875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.891798250000356,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.89154999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.0519818749956,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.0440125 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.4858525000318,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.4321999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 962.4185540000099,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 962.2813000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.3084658120809785,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.307999328859067 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.50738410000008,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.505204999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 52.0700766666702,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 52.06854666666665 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.033064356514746145,
            "unit": "ms/iter",
            "extra": "iterations: 21152\ncpu: 0.0330611526096823 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.685750488669955,
            "unit": "ms/iter",
            "extra": "iterations: 1015\ncpu: 0.6857536945812808 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.819019662068842,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 4.818630344827593 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008106111881444462,
            "unit": "ms/iter",
            "extra": "iterations: 849560\ncpu: 0.0008105814774706926 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004545174154836433,
            "unit": "ms/iter",
            "extra": "iterations: 154822\ncpu: 0.004544892844686154 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01369244595126511,
            "unit": "ms/iter",
            "extra": "iterations: 50806\ncpu: 0.013691239223713745 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9297000427379796,
            "unit": "ns/iter",
            "extra": "iterations: 752236830\ncpu: 0.9296919163077975 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9349529552940525,
            "unit": "ns/iter",
            "extra": "iterations: 751697225\ncpu: 0.9349003516675213 ns\nthreads: 1"
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
          "id": "edffb9762ead06e0ef543bf778ae281dcb62487b",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-26T04:05:29Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/edffb9762ead06e0ef543bf778ae281dcb62487b"
        },
        "date": 1701175256655,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38995525409537324,
            "unit": "ms/iter",
            "extra": "iterations: 2747\ncpu: 0.3891895158354569 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.980901667968608,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.980633203125 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.80048510714404,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.79920357142856 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.42817785714,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 163.42410000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 539.758111000026,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 539.7484999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 945.3689359999657,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 945.2442999999988 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.271005993288775,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.270815436241611 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.30813395000024,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.30753749999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.29334593333397,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.29233333333332 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03350927394251938,
            "unit": "ms/iter",
            "extra": "iterations: 20946\ncpu: 0.03350816862408095 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7474805771195036,
            "unit": "ms/iter",
            "extra": "iterations: 979\ncpu: 0.7474566905005113 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.886403475524247,
            "unit": "ms/iter",
            "extra": "iterations: 143\ncpu: 4.886294405594407 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008031748167083943,
            "unit": "ms/iter",
            "extra": "iterations: 874699\ncpu: 0.0008031272472016063 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004572300494030955,
            "unit": "ms/iter",
            "extra": "iterations: 152622\ncpu: 0.004572361127491458 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013915328535223155,
            "unit": "ms/iter",
            "extra": "iterations: 50506\ncpu: 0.013914532926780958 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9296302169067909,
            "unit": "ns/iter",
            "extra": "iterations: 753559222\ncpu: 0.9296365561564295 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2381039397334277,
            "unit": "ns/iter",
            "extra": "iterations: 564338180\ncpu: 1.2380840509497362 ns\nthreads: 1"
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
          "id": "686fc0bb7be8156bcc739a72161c9707bfe3a110",
          "message": "CURA-11378 stress benchmarks",
          "timestamp": "2023-11-26T04:05:29Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1988/commits/686fc0bb7be8156bcc739a72161c9707bfe3a110"
        },
        "date": 1701176225443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3763541911706896,
            "unit": "ms/iter",
            "extra": "iterations: 2537\ncpu: 0.37634931020890816 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.988135957198649,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.98808793774319 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.51622292857454,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.51575000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.17654242858342,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.17234285714287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 543.7942414999952,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 543.7804499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 951.5671600000815,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 951.5382000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.47796153691234,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.477776510067118 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.27214142499929,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.27126749999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.11845013332944,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.11717999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03347480607066438,
            "unit": "ms/iter",
            "extra": "iterations: 21085\ncpu: 0.03347481147735356 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7060850475698405,
            "unit": "ms/iter",
            "extra": "iterations: 967\ncpu: 0.7060718717683551 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.793332944444728,
            "unit": "ms/iter",
            "extra": "iterations: 144\ncpu: 4.793075694444439 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008148169498017717,
            "unit": "ms/iter",
            "extra": "iterations: 856246\ncpu: 0.0008147996019835422 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004506005728434738,
            "unit": "ms/iter",
            "extra": "iterations: 155889\ncpu: 0.004505827864698596 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013641751069004006,
            "unit": "ms/iter",
            "extra": "iterations: 50982\ncpu: 0.01364139892511084 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9289479466382053,
            "unit": "ns/iter",
            "extra": "iterations: 753140866\ncpu: 0.9288947547297242 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2396895400922385,
            "unit": "ns/iter",
            "extra": "iterations: 565298886\ncpu: 1.2396461718836616 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a47349ed4ce8fb9bae572e76acb8e29b57fa4af",
          "message": "CURA-11378 stress benchmarks (#1988)",
          "timestamp": "2023-11-28T14:22:32+01:00",
          "tree_id": "1776d88726a56da8e2a29ef0608bed31dee8f38b",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/6a47349ed4ce8fb9bae572e76acb8e29b57fa4af"
        },
        "date": 1701178233112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4128777821637502,
            "unit": "ms/iter",
            "extra": "iterations: 2736\ncpu: 0.41282978801169584 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.974490108949313,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.974218677042801 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.52661671428525,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.52296428571428 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 170.15096700000802,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 170.1389428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.5881175000318,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.5583499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 971.4402170000085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 971.3733999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.310726302013034,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.310196644295307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.432997650001994,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.432477500000036 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.40951566666748,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.404659999999915 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03310459943951194,
            "unit": "ms/iter",
            "extra": "iterations: 21410\ncpu: 0.033101957029425505 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6913833452611733,
            "unit": "ms/iter",
            "extra": "iterations: 1034\ncpu: 0.691284622823985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.790813340135941,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 4.790466666666665 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000812876765825321,
            "unit": "ms/iter",
            "extra": "iterations: 856540\ncpu: 0.0008127936815560273 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004486759554692567,
            "unit": "ms/iter",
            "extra": "iterations: 155578\ncpu: 0.004486593862885508 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013623720893981917,
            "unit": "ms/iter",
            "extra": "iterations: 51321\ncpu: 0.013622043607879828 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9318435624108258,
            "unit": "ns/iter",
            "extra": "iterations: 754056826\ncpu: 0.9317258007289769 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9363155971888739,
            "unit": "ns/iter",
            "extra": "iterations: 726302312\ncpu: 0.9362999246517612 ns\nthreads: 1"
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
          "id": "8bfe361fa68235cbb9961ca8d825ce1279300fa7",
          "message": "[CURA-10918] Put note in gcode if min layer time has been applied.",
          "timestamp": "2023-11-26T04:05:29Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1943/commits/8bfe361fa68235cbb9961ca8d825ce1279300fa7"
        },
        "date": 1701179545517,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3743417921225658,
            "unit": "ms/iter",
            "extra": "iterations: 2742\ncpu: 0.37433202042304886 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.97167613565896,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 5.971493410852712 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.63297332142916,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.631082142857146 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.425783142847,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.4233285714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.7098070000466,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.6896 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 966.1502000000155,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 966.1433000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.373110141891869,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.372872972972974 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.351033124998708,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.350557499999987 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.18442626666516,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.181293333333386 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03239685080945675,
            "unit": "ms/iter",
            "extra": "iterations: 21496\ncpu: 0.03239611090435434 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.683967545638957,
            "unit": "ms/iter",
            "extra": "iterations: 986\ncpu: 0.6839433062880312 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.791446760273392,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.791408219178085 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.00081288966802801,
            "unit": "ms/iter",
            "extra": "iterations: 862633\ncpu: 0.0008128773186279689 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004518056252363498,
            "unit": "ms/iter",
            "extra": "iterations: 156029\ncpu: 0.004517724910112858 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01363749384765578,
            "unit": "ms/iter",
            "extra": "iterations: 51200\ncpu: 0.013636890624999995 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9301950716681615,
            "unit": "ns/iter",
            "extra": "iterations: 753736108\ncpu: 0.9301683872626678 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.238246534034759,
            "unit": "ns/iter",
            "extra": "iterations: 565302994\ncpu: 1.2382099642656395 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "r.burema@ultimaker.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "r.burema@ultimaker.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "distinct": true,
          "id": "592e0b70219860b6c6598cbd65d7ef50f5f9e5f0",
          "message": "'Fix' compiler error on Mac.\n\nThe compiler there isn't modern enough to understand that including <concepts> should add floating_point to std.",
          "timestamp": "2023-11-28T15:08:11+01:00",
          "tree_id": "13f7cb82df537b3d62930f5c2de92aac41a604d0",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/592e0b70219860b6c6598cbd65d7ef50f5f9e5f0"
        },
        "date": 1701180977465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3744958482704544,
            "unit": "ms/iter",
            "extra": "iterations: 2544\ncpu: 0.37449021226415097 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.008131972762456,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.007907782101167 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.69858765517311,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.69724827586207 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.62976224999693,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 169.62616250000008 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.9293265000063,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.9163999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 946.4109410000106,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 946.3674999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.2769416375838,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.276729530201344 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.416849275000004,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.416207500000016 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.22951920000105,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.22855333333334 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.033425747639282494,
            "unit": "ms/iter",
            "extra": "iterations: 21180\ncpu: 0.03342385269121808 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6926003852295375,
            "unit": "ms/iter",
            "extra": "iterations: 1002\ncpu: 0.6925572854291426 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.872071243055763,
            "unit": "ms/iter",
            "extra": "iterations: 144\ncpu: 4.871851388888891 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008401693834711108,
            "unit": "ms/iter",
            "extra": "iterations: 836522\ncpu: 0.0008401657099275342 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004628474275679359,
            "unit": "ms/iter",
            "extra": "iterations: 149761\ncpu: 0.004628473367565666 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013968274587143642,
            "unit": "ms/iter",
            "extra": "iterations: 50199\ncpu: 0.013967606924440733 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9289935697192607,
            "unit": "ns/iter",
            "extra": "iterations: 753527586\ncpu: 0.9289707676342435 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2408709187972935,
            "unit": "ns/iter",
            "extra": "iterations: 565480182\ncpu: 1.2407953847620392 ns\nthreads: 1"
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
          "id": "686df6adf4b080ee6c26625f2bdfebe94e881129",
          "message": "CURA-11364 Add Sentry Support",
          "timestamp": "2023-11-26T04:05:29Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1985/commits/686df6adf4b080ee6c26625f2bdfebe94e881129"
        },
        "date": 1701336157652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3746457121457599,
            "unit": "ms/iter",
            "extra": "iterations: 2470\ncpu: 0.3746370850202429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9845686575874835,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.984418677042801 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.52332241379275,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.491634482758634 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.58876537500322,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.5814874999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 545.7289299999957,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 545.7162000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 946.754210999984,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 946.7247999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.3094963825503765,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 6.309297986577175 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.288952450000863,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.288139999999988 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.40921660000307,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 51.33097333333332 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03313142833341168,
            "unit": "ms/iter",
            "extra": "iterations: 21007\ncpu: 0.03313058504308089 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6873828554572537,
            "unit": "ms/iter",
            "extra": "iterations: 1017\ncpu: 0.6873636184857423 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.782397424657515,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 4.782213698630137 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008162742053061325,
            "unit": "ms/iter",
            "extra": "iterations: 855990\ncpu: 0.0008162401429923244 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004489248532339714,
            "unit": "ms/iter",
            "extra": "iterations: 156201\ncpu: 0.004489035281464268 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01387779535676789,
            "unit": "ms/iter",
            "extra": "iterations: 50439\ncpu: 0.013877150617577669 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9325725055180348,
            "unit": "ns/iter",
            "extra": "iterations: 748925826\ncpu: 0.9325561701219771 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2389006760634476,
            "unit": "ns/iter",
            "extra": "iterations: 565223570\ncpu: 1.23882891154026 ns\nthreads: 1"
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
          "id": "b04f5681169e24fd179bbabccd6edd0fbc7401a0",
          "message": "Cura 10831",
          "timestamp": "2023-12-01T11:32:22Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/b04f5681169e24fd179bbabccd6edd0fbc7401a0"
        },
        "date": 1701442509575,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4190190595466844,
            "unit": "ms/iter",
            "extra": "iterations: 2603\ncpu: 0.4190151363810988 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.033695402343664,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.033577734375 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.80265210714317,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.801807142857136 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.31266085714995,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 165.3093714285714 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 546.1086669999986,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 546.0795999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 956.676955999967,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 954.7197000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.386122795918192,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.385704081632648 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.824687512820162,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.823379487179494 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.61513735714415,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.61541428571426 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03367014136352746,
            "unit": "ms/iter",
            "extra": "iterations: 20755\ncpu: 0.033670257769212196 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6802656370967631,
            "unit": "ms/iter",
            "extra": "iterations: 992\ncpu: 0.6802537298387108 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.554671337662323,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.554378571428568 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008156248252560695,
            "unit": "ms/iter",
            "extra": "iterations: 864837\ncpu: 0.0008155157561482685 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004551467845857367,
            "unit": "ms/iter",
            "extra": "iterations: 154117\ncpu: 0.004551485559672186 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013565963782145335,
            "unit": "ms/iter",
            "extra": "iterations: 51135\ncpu: 0.013565900068446313 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9290404094628919,
            "unit": "ns/iter",
            "extra": "iterations: 753361337\ncpu: 0.9290436947390108 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9344634348071846,
            "unit": "ns/iter",
            "extra": "iterations: 747752203\ncpu: 0.9344588985450276 ns\nthreads: 1"
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
          "id": "8a42a767f2395465ff1008c91ed07d9208444beb",
          "message": "Cura 10831",
          "timestamp": "2023-12-01T11:32:22Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/8a42a767f2395465ff1008c91ed07d9208444beb"
        },
        "date": 1701447389904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3839911888461573,
            "unit": "ms/iter",
            "extra": "iterations: 2600\ncpu: 0.38397623076923076 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.975886412451471,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.9757105058365765 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.625184642855956,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.62470000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.91847114286216,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.91351428571429 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.9357799999889,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.9124500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.4846860000243,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.4612000000013 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.38141549659874,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.381247619047618 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.801665512819383,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.801256410256414 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 57.95727278571202,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 57.95422857142858 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03191924627725815,
            "unit": "ms/iter",
            "extra": "iterations: 21691\ncpu: 0.03191737587017657 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6956034199396283,
            "unit": "ms/iter",
            "extra": "iterations: 993\ncpu: 0.6955935548841898 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.6083351764709315,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.608281699346411 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008139571160849548,
            "unit": "ms/iter",
            "extra": "iterations: 857501\ncpu: 0.0008139522869361092 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004567101910161519,
            "unit": "ms/iter",
            "extra": "iterations: 152919\ncpu: 0.004567012601442616 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013968921814895535,
            "unit": "ms/iter",
            "extra": "iterations: 51992\ncpu: 0.013968535543929834 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9288773729316676,
            "unit": "ns/iter",
            "extra": "iterations: 753067135\ncpu: 0.9288873029892654 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.241427289652875,
            "unit": "ns/iter",
            "extra": "iterations: 564933907\ncpu: 1.2413933582499594 ns\nthreads: 1"
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
          "id": "effddefd2f36357e6a3b5192900679e5825e3657",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/effddefd2f36357e6a3b5192900679e5825e3657"
        },
        "date": 1701685741839,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3816451562634683,
            "unit": "ms/iter",
            "extra": "iterations: 2323\ncpu: 0.38162638829100304 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9861520820312375,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.985882421875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.57343432142745,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.57251785714284 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.51879424999782,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.5152875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.9139410000046,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 550.8835000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 965.5417799999668,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 965.4967000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.346321236486498,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.346192567567566 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.83510941025679,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.83420769230766 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.67537885714283,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.67450000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032198591065612334,
            "unit": "ms/iter",
            "extra": "iterations: 21490\ncpu: 0.03219854350860869 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6966715494949464,
            "unit": "ms/iter",
            "extra": "iterations: 990\ncpu: 0.696651818181819 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.598092394736852,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.597800657894742 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008147483874113859,
            "unit": "ms/iter",
            "extra": "iterations: 840729\ncpu: 0.0008147318577092032 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0045249785638698204,
            "unit": "ms/iter",
            "extra": "iterations: 154972\ncpu: 0.004524831582479416 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013479060578504579,
            "unit": "ms/iter",
            "extra": "iterations: 51685\ncpu: 0.013478692077004934 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9289320936125445,
            "unit": "ns/iter",
            "extra": "iterations: 752805545\ncpu: 0.9289062821661316 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2481886447436807,
            "unit": "ns/iter",
            "extra": "iterations: 565480182\ncpu: 1.2481761916105498 ns\nthreads: 1"
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
          "id": "a7275c12a64e352a5cd9c23d39dbce01a112205a",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/a7275c12a64e352a5cd9c23d39dbce01a112205a"
        },
        "date": 1701752089683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.40069672646074084,
            "unit": "ms/iter",
            "extra": "iterations: 2687\ncpu: 0.4006136211388165 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.994113394531153,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.993888671874999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.68884960714307,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.687210714285705 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.12558957142735,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 165.12282857142856 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 559.5449289999976,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 559.5268 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 969.4974699999648,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 969.4483999999992 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.408653794520598,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.408480136986303 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.849084897435706,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.84781282051282 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 50.707541599996375,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.70800999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032522993704782246,
            "unit": "ms/iter",
            "extra": "iterations: 21286\ncpu: 0.03252257822042658 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6741947663096286,
            "unit": "ms/iter",
            "extra": "iterations: 1027\ncpu: 0.6742009737098336 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.516615864516156,
            "unit": "ms/iter",
            "extra": "iterations: 155\ncpu: 4.516331612903228 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008253381876645048,
            "unit": "ms/iter",
            "extra": "iterations: 857104\ncpu: 0.0008253130308573976 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004463465858041437,
            "unit": "ms/iter",
            "extra": "iterations: 155820\ncpu: 0.00446336991400335 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01342118330448212,
            "unit": "ms/iter",
            "extra": "iterations: 51990\ncpu: 0.013420236583958444 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9292088729759649,
            "unit": "ns/iter",
            "extra": "iterations: 754256702\ncpu: 0.929179546090395 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2387579921748777,
            "unit": "ns/iter",
            "extra": "iterations: 560683585\ncpu: 1.2387550101007478 ns\nthreads: 1"
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
          "id": "73c41c8d097435342307ba3dbe4d75df79ebba67",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/73c41c8d097435342307ba3dbe4d75df79ebba67"
        },
        "date": 1701752951989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39636185082266323,
            "unit": "ms/iter",
            "extra": "iterations: 2735\ncpu: 0.3963459232175503 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.995825239215844,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 5.995520392156861 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.634421724138,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.632434482758626 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.5987377500001,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.5916625 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 542.9925010000147,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 542.9852 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 937.8858730000275,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 937.8349999999989 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.360714431506594,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.360423972602736 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.043088307692415,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.033266666666652 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.7305912857163,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.729849999999935 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03272154685584976,
            "unit": "ms/iter",
            "extra": "iterations: 21214\ncpu: 0.032720670312058005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6936890742624578,
            "unit": "ms/iter",
            "extra": "iterations: 983\ncpu: 0.6936570701932848 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.612939320261405,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.612803267973852 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008226576728860335,
            "unit": "ms/iter",
            "extra": "iterations: 746590\ncpu: 0.0008226141523460008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0045320712611105,
            "unit": "ms/iter",
            "extra": "iterations: 155260\ncpu: 0.004532023702177007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013441018680892805,
            "unit": "ms/iter",
            "extra": "iterations: 51550\ncpu: 0.013440481086323914 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9280326115270606,
            "unit": "ns/iter",
            "extra": "iterations: 755542172\ncpu: 0.9280077618221965 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9459113786909059,
            "unit": "ns/iter",
            "extra": "iterations: 741449237\ncpu: 0.9458963136002261 ns\nthreads: 1"
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
          "id": "66dd95be001a268d6fb9bf19891203075c065393",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/66dd95be001a268d6fb9bf19891203075c065393"
        },
        "date": 1701753224911,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4042823962914929,
            "unit": "ms/iter",
            "extra": "iterations: 2319\ncpu: 0.40424665804225957 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.991894806324065,
            "unit": "ms/iter",
            "extra": "iterations: 253\ncpu: 5.991601185770751 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.54262389285608,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.540292857142845 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.9849878749995,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.97588750000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 560.371557499991,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 560.3417999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 976.0345650000204,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 975.9785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.362824557823164,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.362438095238092 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.862303230769495,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.86084615384615 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.843215857143186,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.837907142857105 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03325590769157883,
            "unit": "ms/iter",
            "extra": "iterations: 21114\ncpu: 0.033253206403334346 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6857436269841389,
            "unit": "ms/iter",
            "extra": "iterations: 1008\ncpu: 0.6856969246031747 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.59187823684235,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.591580263157898 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008590392095111774,
            "unit": "ms/iter",
            "extra": "iterations: 854155\ncpu: 0.0008586337374364122 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004505595687470347,
            "unit": "ms/iter",
            "extra": "iterations: 155454\ncpu: 0.0045054504869607645 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01352304721255437,
            "unit": "ms/iter",
            "extra": "iterations: 51427\ncpu: 0.013522583467828185 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9303713181826313,
            "unit": "ns/iter",
            "extra": "iterations: 751755349\ncpu: 0.9303329878933774 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.240944495248361,
            "unit": "ns/iter",
            "extra": "iterations: 564322712\ncpu: 1.2408862608386386 ns\nthreads: 1"
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
          "id": "a520503868a85ad37982bd4fd31d5cbe0c3030fc",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/a520503868a85ad37982bd4fd31d5cbe0c3030fc"
        },
        "date": 1701754213772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38463497969350086,
            "unit": "ms/iter",
            "extra": "iterations: 2610\ncpu: 0.3846211494252873 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.001208828124938,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.0009679687499995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.630014964285905,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.62748928571428 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.4760627142919,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 164.4654 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.8380725000043,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.8159499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 960.3643660000216,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.2893000000013 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.411531537414904,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.41128163265307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.085615358974618,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.07422820512821 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.90881057143123,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.90670714285718 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03540072242938008,
            "unit": "ms/iter",
            "extra": "iterations: 19577\ncpu: 0.035398753639474895 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7192330870933552,
            "unit": "ms/iter",
            "extra": "iterations: 953\ncpu: 0.7191871983210907 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.759427147651089,
            "unit": "ms/iter",
            "extra": "iterations: 149\ncpu: 4.759269798657717 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0009016485114109625,
            "unit": "ms/iter",
            "extra": "iterations: 817284\ncpu: 0.0009016163292074731 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004905746341804444,
            "unit": "ms/iter",
            "extra": "iterations: 143035\ncpu: 0.004905655259202299 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.014231711603563239,
            "unit": "ms/iter",
            "extra": "iterations: 48149\ncpu: 0.014231240524206133 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9303389254464882,
            "unit": "ns/iter",
            "extra": "iterations: 752511777\ncpu: 0.9303074335805386 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9502730393903868,
            "unit": "ns/iter",
            "extra": "iterations: 737290688\ncpu: 0.9502448781775445 ns\nthreads: 1"
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
          "id": "12e9ea5f201eea06a2eb2bc70ccade934f0a4fa3",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/12e9ea5f201eea06a2eb2bc70ccade934f0a4fa3"
        },
        "date": 1701756889316,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38636713378175913,
            "unit": "ms/iter",
            "extra": "iterations: 2676\ncpu: 0.3862430493273543 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.030394645914554,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.030211673151751 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.8839216428558,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.88265 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.65714257141917,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.65475714285708 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.3137629999819,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.2875999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 957.6529160000291,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 957.6282000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.5023983013696265,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.500286301369862 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.931622948719216,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.93040512820511 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.76067014286303,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.75805714285707 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0339306544233022,
            "unit": "ms/iter",
            "extra": "iterations: 20392\ncpu: 0.033928712240094167 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6922773082926985,
            "unit": "ms/iter",
            "extra": "iterations: 1025\ncpu: 0.6922517073170726 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.613121516556189,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 4.612601324503319 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008158003468686963,
            "unit": "ms/iter",
            "extra": "iterations: 844700\ncpu: 0.0008157786196282688 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00453447307121232,
            "unit": "ms/iter",
            "extra": "iterations: 154890\ncpu: 0.004534161663115762 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013649606465998762,
            "unit": "ms/iter",
            "extra": "iterations: 51129\ncpu: 0.013648927223297963 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9291895341139773,
            "unit": "ns/iter",
            "extra": "iterations: 753605464\ncpu: 0.9291507737794251 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2403689552602608,
            "unit": "ns/iter",
            "extra": "iterations: 565439072\ncpu: 1.2402736823959657 ns\nthreads: 1"
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
          "id": "548a32d54c40a32bebd2c7c6f4d3fb0eea41b35e",
          "message": "Cura 10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/548a32d54c40a32bebd2c7c6f4d3fb0eea41b35e"
        },
        "date": 1701757764166,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3940666905564891,
            "unit": "ms/iter",
            "extra": "iterations: 2372\ncpu: 0.3939249578414839 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.0819321828793935,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.081541634241246 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.3738395357129,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.372614285714285 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.1598361428592,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.15745714285714 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.9352579999957,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.9241999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 965.2855840000143,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 965.2522000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.360600360544069,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.360334013605442 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.809890846154442,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.80905384615383 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.697140428572766,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.69307142857144 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03247012415126333,
            "unit": "ms/iter",
            "extra": "iterations: 21208\ncpu: 0.032469431346661595 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6961812403651437,
            "unit": "ms/iter",
            "extra": "iterations: 986\ncpu: 0.696169675456389 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.747156315789655,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.747025657894731 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008195839457958504,
            "unit": "ms/iter",
            "extra": "iterations: 850120\ncpu: 0.0008195634733919929 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004549791825279182,
            "unit": "ms/iter",
            "extra": "iterations: 154990\ncpu: 0.004549515452609849 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013548121946948767,
            "unit": "ms/iter",
            "extra": "iterations: 51383\ncpu: 0.013547807640659375 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9284663038943957,
            "unit": "ns/iter",
            "extra": "iterations: 753402689\ncpu: 0.9284412044353594 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2383677869099223,
            "unit": "ns/iter",
            "extra": "iterations: 557567223\ncpu: 1.238349335323108 ns\nthreads: 1"
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
          "id": "f3ce9e6dc2162eb2bdb29e1c55472cc2a45f6ab8",
          "message": "CURA-10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/f3ce9e6dc2162eb2bdb29e1c55472cc2a45f6ab8"
        },
        "date": 1701758420576,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.382881493855264,
            "unit": "ms/iter",
            "extra": "iterations: 2197\ncpu: 0.38288443331816113 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.984068882812332,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.983937109375001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.56828507142887,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.56465000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.6041183750052,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.60005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.6131974999987,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.5965999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 951.7998480000074,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 951.7274000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.392369020407968,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.391957142857139 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.835289333333023,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.834761538461514 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.58843492857162,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.58576428571428 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03357281806775373,
            "unit": "ms/iter",
            "extra": "iterations: 20722\ncpu: 0.03357203455264933 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6970546821782415,
            "unit": "ms/iter",
            "extra": "iterations: 1010\ncpu: 0.6970411881188112 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.928819842105569,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.928728947368417 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008220264320420842,
            "unit": "ms/iter",
            "extra": "iterations: 856574\ncpu: 0.0008219836231312183 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004487324668493452,
            "unit": "ms/iter",
            "extra": "iterations: 153994\ncpu: 0.004487200150655219 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013499859674530695,
            "unit": "ms/iter",
            "extra": "iterations: 52478\ncpu: 0.013499784671671901 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9288645510366806,
            "unit": "ns/iter",
            "extra": "iterations: 754156750\ncpu: 0.9288173844495884 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.239188906130027,
            "unit": "ns/iter",
            "extra": "iterations: 564603552\ncpu: 1.2391287612728323 ns\nthreads: 1"
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
          "id": "641db45f09659329526ced83681e6dd5fb6483ad",
          "message": "CURA-10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/641db45f09659329526ced83681e6dd5fb6483ad"
        },
        "date": 1701760419990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3821101511925065,
            "unit": "ms/iter",
            "extra": "iterations: 2348\ncpu: 0.3821086456558774 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.051803178988468,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.048695330739299 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.65627382142717,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.654896428571426 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.5335872500009,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.53137500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.0401914999932,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.0373 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 946.8065140000022,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 946.7946999999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.37156625850357,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.371455102040814 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.812896794871868,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.812851282051277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.78748392857012,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.78542857142862 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03276842967454535,
            "unit": "ms/iter",
            "extra": "iterations: 21109\ncpu: 0.03276752569993839 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.685025223300963,
            "unit": "ms/iter",
            "extra": "iterations: 1030\ncpu: 0.6850024271844674 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.610849078947342,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.610832894736843 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008203964686099336,
            "unit": "ms/iter",
            "extra": "iterations: 856943\ncpu: 0.0008203696161821721 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004544517171625155,
            "unit": "ms/iter",
            "extra": "iterations: 154237\ncpu: 0.004544333720183866 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01341077594835169,
            "unit": "ms/iter",
            "extra": "iterations: 52354\ncpu: 0.013410503495434926 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9289508886501616,
            "unit": "ns/iter",
            "extra": "iterations: 753905770\ncpu: 0.9288947344175417 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2387249746850992,
            "unit": "ns/iter",
            "extra": "iterations: 565537289\ncpu: 1.2387165508373714 ns\nthreads: 1"
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
          "id": "489f487193056360770c349a6411f9e09499c8af",
          "message": "CURA-10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/489f487193056360770c349a6411f9e09499c8af"
        },
        "date": 1701768053470,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3915829946058042,
            "unit": "ms/iter",
            "extra": "iterations: 2410\ncpu: 0.3915480082987552 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9986181634240925,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.998440856031128 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.79242285714247,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.79070714285714 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.4463311249994,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.44187499999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 555.9543980000115,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.9411000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 960.6294380000122,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.5737000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.404319795918121,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.404014965986399 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.90250379487129,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.90240769230771 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.95767392857179,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.945100000000046 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03267117108679535,
            "unit": "ms/iter",
            "extra": "iterations: 21568\ncpu: 0.03267140671364984 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7007104970703226,
            "unit": "ms/iter",
            "extra": "iterations: 1024\ncpu: 0.7006912109374999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.585392287581539,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.585218954248365 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008185282675195557,
            "unit": "ms/iter",
            "extra": "iterations: 861395\ncpu: 0.0008185018487453497 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004492584426726465,
            "unit": "ms/iter",
            "extra": "iterations: 155022\ncpu: 0.004492471391157386 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013460365161240257,
            "unit": "ms/iter",
            "extra": "iterations: 51569\ncpu: 0.013460070972871323 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9357008714724924,
            "unit": "ns/iter",
            "extra": "iterations: 752574881\ncpu: 0.9356582551152147 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2391463443591815,
            "unit": "ns/iter",
            "extra": "iterations: 563983528\ncpu: 1.2391581762650328 ns\nthreads: 1"
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
          "id": "df0aa2f6365d5b3c44801aa186bdc2fa81b6ade0",
          "message": "CURA-10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/df0aa2f6365d5b3c44801aa186bdc2fa81b6ade0"
        },
        "date": 1701768806257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3784069796992533,
            "unit": "ms/iter",
            "extra": "iterations: 2660\ncpu: 0.378388082706767 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.984434441406172,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.984038671875001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.683688821428355,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.68045 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.24152914285364,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.23827142857144 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 552.5468715000272,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 552.5384999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 945.7669700000224,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 945.6891999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.39523690410967,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.395158904109592 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.800017897435726,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.80009743589742 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.52004785714085,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.51643571428567 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032555287632904654,
            "unit": "ms/iter",
            "extra": "iterations: 21444\ncpu: 0.03255507834359262 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6930878003952883,
            "unit": "ms/iter",
            "extra": "iterations: 1012\ncpu: 0.6930716403162058 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.552837816993435,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.552852941176473 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008283507414356777,
            "unit": "ms/iter",
            "extra": "iterations: 841543\ncpu: 0.0008283240428593667 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004535672719400866,
            "unit": "ms/iter",
            "extra": "iterations: 154751\ncpu: 0.004535595892756753 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013567745485829025,
            "unit": "ms/iter",
            "extra": "iterations: 51726\ncpu: 0.013567648764644422 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9336697056174967,
            "unit": "ns/iter",
            "extra": "iterations: 753589238\ncpu: 0.933641915942541 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9468469878777483,
            "unit": "ns/iter",
            "extra": "iterations: 739752056\ncpu: 0.946849953736391 ns\nthreads: 1"
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
          "id": "6427083fb2d0f92edca4af69eb22c43790965308",
          "message": "CURA-10831",
          "timestamp": "2023-12-03T20:00:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/6427083fb2d0f92edca4af69eb22c43790965308"
        },
        "date": 1701853501312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39122839159999784,
            "unit": "ms/iter",
            "extra": "iterations: 2500\ncpu: 0.39121416 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9926260155641815,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.992591828793774 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.61306096428492,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.61032857142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.76407228571517,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.75671428571425 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 548.7256864999779,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 548.7104 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.8909160000062,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.8753999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.400860170068043,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.400747619047627 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.858777615383307,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.85868974358973 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.269488357144574,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.222214285714294 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03267177473988705,
            "unit": "ms/iter",
            "extra": "iterations: 21433\ncpu: 0.032671940465637095 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6958964060301933,
            "unit": "ms/iter",
            "extra": "iterations: 995\ncpu: 0.6958669346733668 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.611175973510046,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 4.610960927152319 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008164479285914541,
            "unit": "ms/iter",
            "extra": "iterations: 865667\ncpu: 0.0008163755809104418 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00451464885486417,
            "unit": "ms/iter",
            "extra": "iterations: 156095\ncpu: 0.004514461065376847 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01349684467398764,
            "unit": "ms/iter",
            "extra": "iterations: 52084\ncpu: 0.013496242608094608 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9291820063538769,
            "unit": "ns/iter",
            "extra": "iterations: 753562467\ncpu: 0.9291480542912955 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2389007744715288,
            "unit": "ns/iter",
            "extra": "iterations: 565322169\ncpu: 1.238885432777004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "casperlamboo@gmail.com",
            "name": "c.lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "casperlamboo@gmail.com",
            "name": "c.lamboo",
            "username": "casperlamboo"
          },
          "distinct": true,
          "id": "4bd604fa3c287830687fd788c0d20c19cb892109",
          "message": "Fix building on mac",
          "timestamp": "2023-12-06T13:08:14+01:00",
          "tree_id": "904303f0456276509ba1217fbad1c38c1913f365",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/4bd604fa3c287830687fd788c0d20c19cb892109"
        },
        "date": 1701864899830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3789880760869621,
            "unit": "ms/iter",
            "extra": "iterations: 2392\ncpu: 0.37897132107023407 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.976503914397024,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.976178210116731 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.45667544827664,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.45497241379311 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.01661674999957,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 169.00630000000007 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.1186924999927,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.10065 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 947.9161589999876,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 947.8426999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.421982074829937,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.419725850340135 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.833054769229584,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.832830769230775 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.623787214288605,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.62004999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03283230266134036,
            "unit": "ms/iter",
            "extra": "iterations: 20779\ncpu: 0.03282991481784494 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6961924211576368,
            "unit": "ms/iter",
            "extra": "iterations: 1002\ncpu: 0.6961504990019969 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.574984532467482,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.574527272727269 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.00082828356366565,
            "unit": "ms/iter",
            "extra": "iterations: 861147\ncpu: 0.0008282552223952491 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004536225365390462,
            "unit": "ms/iter",
            "extra": "iterations: 155929\ncpu: 0.004536064490890088 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01346208970950667,
            "unit": "ms/iter",
            "extra": "iterations: 51533\ncpu: 0.013461634292589177 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9286233809309252,
            "unit": "ns/iter",
            "extra": "iterations: 747506266\ncpu: 0.9286141555902373 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2396455227470133,
            "unit": "ns/iter",
            "extra": "iterations: 565605376\ncpu: 1.2396445114411312 ns\nthreads: 1"
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
          "id": "950be2e1c88b87a605ebec7e0bc4ec943c6d5ce9",
          "message": "CURA-10831",
          "timestamp": "2023-12-07T04:27:58Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1992/commits/950be2e1c88b87a605ebec7e0bc4ec943c6d5ce9"
        },
        "date": 1702018397205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.37734450395182073,
            "unit": "ms/iter",
            "extra": "iterations: 2657\ncpu: 0.3773385397064359 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.999941381323021,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.999706225680933 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.44065053571406,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.43926785714287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.2544032857178,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.24687142857147 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.5602889999986,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.5409999999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 947.1175680000101,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 947.0732999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.334234668919115,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.333864189189194 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.774338179487238,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.772633333333346 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.622167071430894,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.62050714285713 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03366510537706907,
            "unit": "ms/iter",
            "extra": "iterations: 20792\ncpu: 0.03366407272027705 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6813153197555787,
            "unit": "ms/iter",
            "extra": "iterations: 982\ncpu: 0.681304378818738 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.59403217647055,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.593792156862747 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008129725936278549,
            "unit": "ms/iter",
            "extra": "iterations: 862938\ncpu: 0.0008129334900073941 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004468314660302221,
            "unit": "ms/iter",
            "extra": "iterations: 155447\ncpu: 0.004468149916048566 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013386517585139732,
            "unit": "ms/iter",
            "extra": "iterations: 52061\ncpu: 0.013386010641363013 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9291543165852763,
            "unit": "ns/iter",
            "extra": "iterations: 752999088\ncpu: 0.9291421611920957 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.238244660873649,
            "unit": "ns/iter",
            "extra": "iterations: 565628684\ncpu: 1.2382181452452614 ns\nthreads: 1"
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
          "id": "26c410e9b6b065f52b2e7701e8ab8f69a1a86df7",
          "message": "CURA-10831 (#1992)",
          "timestamp": "2023-12-08T14:33:35+01:00",
          "tree_id": "ec3bfb914a44ffee2cfbb77c90b95b8381ad9032",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/26c410e9b6b065f52b2e7701e8ab8f69a1a86df7"
        },
        "date": 1702042864226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38336439926288285,
            "unit": "ms/iter",
            "extra": "iterations: 2442\ncpu: 0.38335720720720723 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.081980393700658,
            "unit": "ms/iter",
            "extra": "iterations: 254\ncpu: 6.081136220472441 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.12280385714424,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.11746785714285 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.48398385714407,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.47428571428577 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 562.8152959999966,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 562.80135 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 968.1900979999796,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 968.1318000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.4232413310343155,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 6.423171034482753 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.919735923076843,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.916856410256383 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.6542171428589,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.647571428571446 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03373654435107144,
            "unit": "ms/iter",
            "extra": "iterations: 20349\ncpu: 0.0337344980097302 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7039637398542904,
            "unit": "ms/iter",
            "extra": "iterations: 961\ncpu: 0.7038952133194578 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.58559592763177,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.585363815789474 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008153387293998479,
            "unit": "ms/iter",
            "extra": "iterations: 852967\ncpu: 0.0008152800753135813 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0044762935236187865,
            "unit": "ms/iter",
            "extra": "iterations: 155766\ncpu: 0.004475973575748248 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01342163493342588,
            "unit": "ms/iter",
            "extra": "iterations: 52122\ncpu: 0.013421378688461728 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9303199459725361,
            "unit": "ns/iter",
            "extra": "iterations: 750566410\ncpu: 0.9301636613341127 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9473534253385226,
            "unit": "ns/iter",
            "extra": "iterations: 740808158\ncpu: 0.9472560371021175 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "2c1ac2860e67d31169caf7b306dff6371a058773",
          "message": "Integrate Sentry for better error tracking\n\nSentry has been included to improve error tracking. It has been set to\ntag plugins, Cura version and machine names, allowing more specific and\nconvenient debugging. The actual CuraEngine version has now been set as\nthe Sentry release.\n\nContributes to CURA-11443",
          "timestamp": "2023-12-10T15:11:52+01:00",
          "tree_id": "c7cc45cd103a568158dba6918c1386217b2cff86",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/2c1ac2860e67d31169caf7b306dff6371a058773"
        },
        "date": 1702218000598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3771238995051356,
            "unit": "ms/iter",
            "extra": "iterations: 2627\ncpu: 0.3771189569851542 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.015140550781117,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.014946093749999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.88094217857162,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.87864285714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.96084828571824,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.9537857142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.1081689999837,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.0610500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.7758939999608,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.7280999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.390883870748358,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.390548299319731 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.88558487179608,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.88436923076924 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.63815771428569,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.63537857142864 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03341576613205988,
            "unit": "ms/iter",
            "extra": "iterations: 21324\ncpu: 0.03339635152879384 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6914096527363418,
            "unit": "ms/iter",
            "extra": "iterations: 1005\ncpu: 0.6914116417910454 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.580704409090759,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.580387662337662 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008116064476779695,
            "unit": "ms/iter",
            "extra": "iterations: 860775\ncpu: 0.0008115695739304675 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004472430978382255,
            "unit": "ms/iter",
            "extra": "iterations: 157045\ncpu: 0.0044721933203858855 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013266293832692533,
            "unit": "ms/iter",
            "extra": "iterations: 52227\ncpu: 0.013265739942941359 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9296061915947678,
            "unit": "ns/iter",
            "extra": "iterations: 753481353\ncpu: 0.9295829249274046 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9455081311434161,
            "unit": "ns/iter",
            "extra": "iterations: 738370143\ncpu: 0.9454541284180823 ns\nthreads: 1"
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
            "email": "j.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "1bfb7869c527529f7b37553114f901fe30a5c4b0",
          "message": "Don't use Sentry in Arcus communication logic\n\nFails to compile due to WinSock.h already being included.\n\nContribute to CURA-11443",
          "timestamp": "2023-12-11T08:14:18+01:00",
          "tree_id": "48def1ecad8aef251705170ec08c0da8afb75f9f",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/1bfb7869c527529f7b37553114f901fe30a5c4b0"
        },
        "date": 1702279202366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3807311863306504,
            "unit": "ms/iter",
            "extra": "iterations: 2619\ncpu: 0.38071615120274915 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.994716560311466,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.99444046692607 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.80079932143013,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.79819642857143 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.56916328571612,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.44111428571435 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 545.5036884999913,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 545.4734499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 942.53599700005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 942.4833999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.430773342465459,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.430275342465756 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.83919448717954,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.8383076923077 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.00507714285569,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.00186428571421 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03268258381913719,
            "unit": "ms/iter",
            "extra": "iterations: 21099\ncpu: 0.03268034030048812 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6941415742772082,
            "unit": "ms/iter",
            "extra": "iterations: 1003\ncpu: 0.6941275174476583 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.563769823529631,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.563531372549026 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008144641577486303,
            "unit": "ms/iter",
            "extra": "iterations: 842302\ncpu: 0.0008144209559041762 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004469347302195225,
            "unit": "ms/iter",
            "extra": "iterations: 155608\ncpu: 0.004468928332733538 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.014899241918800077,
            "unit": "ms/iter",
            "extra": "iterations: 46404\ncpu: 0.014898306180501707 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9296787976288025,
            "unit": "ns/iter",
            "extra": "iterations: 753401879\ncpu: 0.9296562956939448 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9481581921877557,
            "unit": "ns/iter",
            "extra": "iterations: 740653743\ncpu: 0.9481538527781396 ns\nthreads: 1"
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
          "id": "bcb30d7deb2510f1cef2e28af4756250866ff76e",
          "message": "CURA-11392-including-threshold-setting-for-ppr",
          "timestamp": "2023-12-11T06:08:21Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1996/commits/bcb30d7deb2510f1cef2e28af4756250866ff76e"
        },
        "date": 1702310346387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38549652352500535,
            "unit": "ms/iter",
            "extra": "iterations: 2678\ncpu: 0.385480209111277 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.005002571984542,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.004763424124514 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.10126628571254,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.09731785714287 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 171.37514212499383,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 171.37279999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.5299909999953,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.5193499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.7471499999983,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.7289999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.360920082758623,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 6.360586896551723 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.849357184211588,
            "unit": "ms/iter",
            "extra": "iterations: 38\ncpu: 20.84895 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.891233999999905,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.888435714285656 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032946303841399134,
            "unit": "ms/iter",
            "extra": "iterations: 21034\ncpu: 0.032944171341637324 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7017963152610167,
            "unit": "ms/iter",
            "extra": "iterations: 996\ncpu: 0.7017690763052208 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.626972405228765,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.626793464052291 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008047447044615193,
            "unit": "ms/iter",
            "extra": "iterations: 856995\ncpu: 0.0008047224312860631 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004480433834224975,
            "unit": "ms/iter",
            "extra": "iterations: 156055\ncpu: 0.004480086507961929 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013583025831754953,
            "unit": "ms/iter",
            "extra": "iterations: 51758\ncpu: 0.013582350554503677 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9339552031359255,
            "unit": "ns/iter",
            "extra": "iterations: 751226915\ncpu: 0.9339023748902803 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2442336735530852,
            "unit": "ns/iter",
            "extra": "iterations: 563689687\ncpu: 1.24418206714504 ns\nthreads: 1"
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
          "id": "818140174347078802673403d1ff15ff7dee20df",
          "message": "CURA-11392-including-threshold-setting-for-ppr",
          "timestamp": "2023-12-11T06:08:21Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1996/commits/818140174347078802673403d1ff15ff7dee20df"
        },
        "date": 1702310401520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3814224327553165,
            "unit": "ms/iter",
            "extra": "iterations: 2595\ncpu: 0.3814153371868978 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9910301945526525,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.990723346303503 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.920659999998556,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.919710714285706 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 171.0087734285659,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 170.80661428571426 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 555.7711010000048,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.7460000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 963.3514390000073,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 963.3074000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.357995256756702,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.357514189189191 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.876783589744427,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.87692051282052 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.89564650000034,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.89452142857143 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032677605605047275,
            "unit": "ms/iter",
            "extra": "iterations: 21552\ncpu: 0.03267680957683741 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6887504743465798,
            "unit": "ms/iter",
            "extra": "iterations: 1033\ncpu: 0.6887252662149074 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.57376346405253,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.573343137254907 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0007993635394370615,
            "unit": "ms/iter",
            "extra": "iterations: 869449\ncpu: 0.0007993012816162889 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004626662242781003,
            "unit": "ms/iter",
            "extra": "iterations: 155218\ncpu: 0.004626420904791979 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013439640189788314,
            "unit": "ms/iter",
            "extra": "iterations: 52058\ncpu: 0.013439561642783102 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9301295491279069,
            "unit": "ns/iter",
            "extra": "iterations: 753861115\ncpu: 0.9301156221593977 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9458263515902056,
            "unit": "ns/iter",
            "extra": "iterations: 737690061\ncpu: 0.945833130860087 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41987080+rburema@users.noreply.github.com",
            "name": "Remco Burema",
            "username": "rburema"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17399459f6a30c6773ad12781716374da8f7362e",
          "message": "CURA-11392-including-threshold-setting-for-ppr (#1996)",
          "timestamp": "2023-12-14T13:13:37+01:00",
          "tree_id": "2bf7a2b544546345e40fe1932f5e5d25520d695e",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/17399459f6a30c6773ad12781716374da8f7362e"
        },
        "date": 1702556484775,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.37947271005421984,
            "unit": "ms/iter",
            "extra": "iterations: 2397\ncpu: 0.3794629536921151 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.970132953307398,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.96999727626459 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.49838565517401,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.49659310344829 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.1483806249986,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 168.1436125 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.1525665000031,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 550.1428499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 954.2176310000059,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 954.1976999999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.364798891156454,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.36469115646258 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.001568615384386,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.001005128205144 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.59813407143039,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.59692857142847 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03271752413664656,
            "unit": "ms/iter",
            "extra": "iterations: 21399\ncpu: 0.032716776484882464 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.7277966443298611,
            "unit": "ms/iter",
            "extra": "iterations: 970\ncpu: 0.7277718556701039 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.513188703225341,
            "unit": "ms/iter",
            "extra": "iterations: 155\ncpu: 4.513072258064512 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008068451423324269,
            "unit": "ms/iter",
            "extra": "iterations: 871200\ncpu: 0.0008068210514233246 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0044160521836167635,
            "unit": "ms/iter",
            "extra": "iterations: 158613\ncpu: 0.0044158360285726705 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013662123876689867,
            "unit": "ms/iter",
            "extra": "iterations: 51188\ncpu: 0.01366208681722279 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9247432589946435,
            "unit": "ns/iter",
            "extra": "iterations: 754280271\ncpu: 0.9247249687112674 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2424939723277848,
            "unit": "ns/iter",
            "extra": "iterations: 565928669\ncpu: 1.2424777865423868 ns\nthreads: 1"
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
          "id": "3fa2d52f95c1350f1ab042598f9b3aa4b20fe338",
          "message": "CURA-11482 additional sentry info",
          "timestamp": "2023-12-13T21:14:33Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1999/commits/3fa2d52f95c1350f1ab042598f9b3aa4b20fe338"
        },
        "date": 1702658121143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3798730419318871,
            "unit": "ms/iter",
            "extra": "iterations: 2671\ncpu: 0.3798593785099214 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.991307307392962,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.991120622568093 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.834366964285174,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.83313571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.29549971429682,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 169.2946999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 555.2785554999673,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.2522 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.7093370000775,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.6388000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.362845189188819,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.362486486486492 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.860606692307417,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.85932564102563 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.00929814285525,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.00490714285711 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03755041510230929,
            "unit": "ms/iter",
            "extra": "iterations: 21308\ncpu: 0.03754983104937112 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6864799912109643,
            "unit": "ms/iter",
            "extra": "iterations: 1024\ncpu: 0.6864730468750003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.551584279221067,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.551439610389613 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008113436596613637,
            "unit": "ms/iter",
            "extra": "iterations: 871720\ncpu: 0.000811333570412519 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004466166045557179,
            "unit": "ms/iter",
            "extra": "iterations: 155367\ncpu: 0.004465898807340044 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013445103661335424,
            "unit": "ms/iter",
            "extra": "iterations: 52276\ncpu: 0.013444442956614846 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.929714753796043,
            "unit": "ns/iter",
            "extra": "iterations: 753095491\ncpu: 0.9296836966455838 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9452117811374633,
            "unit": "ns/iter",
            "extra": "iterations: 741447666\ncpu: 0.9451824210071766 ns\nthreads: 1"
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
          "id": "bf5e4bd4d267b1e09f15600151aeab2ac9a3da19",
          "message": "CURA-11482 additional sentry info",
          "timestamp": "2023-12-13T21:14:33Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1999/commits/bf5e4bd4d267b1e09f15600151aeab2ac9a3da19"
        },
        "date": 1702660712733,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.383152464238703,
            "unit": "ms/iter",
            "extra": "iterations: 2279\ncpu: 0.38311544537077663 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.98883271206219,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.988583268482491 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.327922714286174,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.32667142857144 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.24134924999845,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.232025 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.0825234999809,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 550.0619000000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 957.1900939999978,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 957.1595000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.382546224489995,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.382062585034014 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.96133426315897,
            "unit": "ms/iter",
            "extra": "iterations: 38\ncpu: 20.960121052631564 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.14370764285559,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.14071428571425 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03319974333967753,
            "unit": "ms/iter",
            "extra": "iterations: 21020\ncpu: 0.03319799714557569 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6861683360824893,
            "unit": "ms/iter",
            "extra": "iterations: 970\ncpu: 0.6861282474226803 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.604243307189597,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.6041026143790855 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000793136704270276,
            "unit": "ms/iter",
            "extra": "iterations: 871370\ncpu: 0.0007931041922489854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00447489706865073,
            "unit": "ms/iter",
            "extra": "iterations: 155628\ncpu: 0.004474639525021198 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013443628519703573,
            "unit": "ms/iter",
            "extra": "iterations: 51922\ncpu: 0.01344268325565269 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9308094260360692,
            "unit": "ns/iter",
            "extra": "iterations: 753896839\ncpu: 0.9307427272552873 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2424463266879093,
            "unit": "ns/iter",
            "extra": "iterations: 565529521\ncpu: 1.242400748165365 ns\nthreads: 1"
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
          "id": "fb98c23c2c9ecec37a1edf86df8585877289eddd",
          "message": "CURA-11482 additional sentry info",
          "timestamp": "2023-12-16T12:48:16Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1999/commits/fb98c23c2c9ecec37a1edf86df8585877289eddd"
        },
        "date": 1702829401553,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39244367942049957,
            "unit": "ms/iter",
            "extra": "iterations: 2692\ncpu: 0.3924325780089153 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.984481272373516,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.984368482490273 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.43009060714241,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.42934285714284 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.54605925000254,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.545175 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.628517999987,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.61735 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 960.1132020000023,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.0934000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.38635034013588,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.38622993197279 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.09484797435867,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.09470769230772 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.2619395714292,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.259928571428524 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.031429233756674516,
            "unit": "ms/iter",
            "extra": "iterations: 21732\ncpu: 0.03142775630406773 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6992057447447378,
            "unit": "ms/iter",
            "extra": "iterations: 999\ncpu: 0.6991755755755743 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.583689300653499,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.583595424836599 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008057208290396566,
            "unit": "ms/iter",
            "extra": "iterations: 876291\ncpu: 0.0008056894342176302 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004420660954587649,
            "unit": "ms/iter",
            "extra": "iterations: 157094\ncpu: 0.004420380791118689 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013474576856316077,
            "unit": "ms/iter",
            "extra": "iterations: 51850\ncpu: 0.013473809064609493 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.930790225391257,
            "unit": "ns/iter",
            "extra": "iterations: 754030833\ncpu: 0.9307498702775195 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2384339109353226,
            "unit": "ns/iter",
            "extra": "iterations: 565600348\ncpu: 1.2384076538793052 ns\nthreads: 1"
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
          "id": "c97b060e1e5c3f45fc59cfc99f7a0707a909f4cd",
          "message": "CURA-11482 additional sentry info",
          "timestamp": "2023-12-16T12:48:16Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/1999/commits/c97b060e1e5c3f45fc59cfc99f7a0707a909f4cd"
        },
        "date": 1702829542719,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3789524122375622,
            "unit": "ms/iter",
            "extra": "iterations: 2239\ncpu: 0.3789242965609647 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.079562329317463,
            "unit": "ms/iter",
            "extra": "iterations: 249\ncpu: 6.07921124497992 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.35261721428554,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.349267857142834 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.74979462499573,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.74435 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.0221460000034,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.9980499999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 952.9579929999272,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 952.9193000000005 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.376720136054215,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.376478911564628 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.006972666668844,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.00559230769232 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.18732921428539,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.18462142857152 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03364296834442501,
            "unit": "ms/iter",
            "extra": "iterations: 20881\ncpu: 0.03364179397538434 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6926473067846906,
            "unit": "ms/iter",
            "extra": "iterations: 1017\ncpu: 0.6926238938053096 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.536504448052173,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.536356493506497 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008124456692750585,
            "unit": "ms/iter",
            "extra": "iterations: 868873\ncpu: 0.0008124075670437445 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004536027593285172,
            "unit": "ms/iter",
            "extra": "iterations: 154929\ncpu: 0.004535853197271027 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013514105475572144,
            "unit": "ms/iter",
            "extra": "iterations: 51538\ncpu: 0.013513902363304794 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9289348199636569,
            "unit": "ns/iter",
            "extra": "iterations: 752139838\ncpu: 0.9289196831507264 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2390680586847354,
            "unit": "ns/iter",
            "extra": "iterations: 565677593\ncpu: 1.238988796220533 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "70144862+saumyaj3@users.noreply.github.com",
            "name": "Saumya Jain",
            "username": "saumyaj3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6a6537a135bdd279d79f30174550847a3b1e37f",
          "message": "CURA-11482 additional sentry info (#1999)",
          "timestamp": "2023-12-18T17:14:42+01:00",
          "tree_id": "6c1568de354b94ded26c7e63985220c8a59d90fb",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/f6a6537a135bdd279d79f30174550847a3b1e37f"
        },
        "date": 1702916501662,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38324559676231706,
            "unit": "ms/iter",
            "extra": "iterations: 2718\ncpu: 0.3832324135393672 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.988758124999993,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.98858359375 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.57285271428608,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.57149285714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.0607815714287,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 165.05747142857135 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.5034505000074,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.4741000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.9055779999899,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.8545999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.382625666666624,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.382347619047614 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.98680930769293,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.98582564102563 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.171526071429106,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.17063571428566 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03245519007065864,
            "unit": "ms/iter",
            "extra": "iterations: 21371\ncpu: 0.03245410603153812 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6992569658291702,
            "unit": "ms/iter",
            "extra": "iterations: 995\ncpu: 0.6992586934673363 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.5467596064517855,
            "unit": "ms/iter",
            "extra": "iterations: 155\ncpu: 4.546650967741932 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008007002171791622,
            "unit": "ms/iter",
            "extra": "iterations: 873012\ncpu: 0.0008006761648178933 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004474515554786523,
            "unit": "ms/iter",
            "extra": "iterations: 155997\ncpu: 0.00447428540292442 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013481280353242848,
            "unit": "ms/iter",
            "extra": "iterations: 52655\ncpu: 0.013480750166176081 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9297881329347895,
            "unit": "ns/iter",
            "extra": "iterations: 754266454\ncpu: 0.9297870749532263 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9404506101948049,
            "unit": "ns/iter",
            "extra": "iterations: 734924340\ncpu: 0.9403968032954253 ns\nthreads: 1"
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
          "id": "90416fb4966d22267f3d0f0212bf5374865dcaf6",
          "message": "Fix xy-support distance",
          "timestamp": "2023-12-16T12:48:16Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2000/commits/90416fb4966d22267f3d0f0212bf5374865dcaf6"
        },
        "date": 1702932435750,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4017322057268653,
            "unit": "ms/iter",
            "extra": "iterations: 2270\ncpu: 0.4017128634361233 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.009041335937493,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.008499609374999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.74259507142834,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.739017857142855 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 170.2086458750003,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 170.19483749999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.7892634999794,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.7421000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 962.9447240000104,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 962.8511000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.351927033783703,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.351580405405414 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.85648417948668,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.854248717948728 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.87779835714183,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.86993571428567 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.032651361114961745,
            "unit": "ms/iter",
            "extra": "iterations: 21633\ncpu: 0.03264935977441871 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6878155218253985,
            "unit": "ms/iter",
            "extra": "iterations: 1008\ncpu: 0.6877124007936513 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.593339843137263,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.592807189542481 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008180982396656243,
            "unit": "ms/iter",
            "extra": "iterations: 859439\ncpu: 0.0008180235013770618 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004500176331851677,
            "unit": "ms/iter",
            "extra": "iterations: 154334\ncpu: 0.0044998879054518204 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013594607032898828,
            "unit": "ms/iter",
            "extra": "iterations: 51643\ncpu: 0.01359217125263829 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 2.2002536999393985,
            "unit": "ns/iter",
            "extra": "iterations: 315966177\ncpu: 2.199931988289994 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9365451985010597,
            "unit": "ns/iter",
            "extra": "iterations: 744520066\ncpu: 0.9364987350119325 ns\nthreads: 1"
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
          "id": "5910dede0aaaea95f32c5676f3281a3fe123656d",
          "message": "Fix xy-support distance",
          "timestamp": "2023-12-16T12:48:16Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2000/commits/5910dede0aaaea95f32c5676f3281a3fe123656d"
        },
        "date": 1702979819030,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38173413627006275,
            "unit": "ms/iter",
            "extra": "iterations: 2429\ncpu: 0.38172239604775626 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.979654347656238,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.979361328125 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.433983931033836,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.43208620689656 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.5620180000021,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 164.55274285714273 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.960946500003,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.9444 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 965.501646000007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 965.4409999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.35686398639454,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.356627210884345 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.875876512820632,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.87496410256411 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.86119107142632,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.857642857142785 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.033421167163191455,
            "unit": "ms/iter",
            "extra": "iterations: 21147\ncpu: 0.03342028656547028 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6839131751468119,
            "unit": "ms/iter",
            "extra": "iterations: 1022\ncpu: 0.6838845401174157 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.519080571428318,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.518863636363634 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008039862264246163,
            "unit": "ms/iter",
            "extra": "iterations: 869128\ncpu: 0.0008039391205898332 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004445629690849693,
            "unit": "ms/iter",
            "extra": "iterations: 154876\ncpu: 0.004445323355458572 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01341983227642577,
            "unit": "ms/iter",
            "extra": "iterations: 52354\ncpu: 0.013419135118615613 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9308145008725061,
            "unit": "ns/iter",
            "extra": "iterations: 751282547\ncpu: 0.9307713892626831 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.241175037050164,
            "unit": "ns/iter",
            "extra": "iterations: 561018361\ncpu: 1.2411438705122881 ns\nthreads: 1"
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
          "id": "c04523c675008ec649721bcd2411f6fa75af0372",
          "message": "Improve slice performance of wall ordering",
          "timestamp": "2023-12-19T17:28:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2001/commits/c04523c675008ec649721bcd2411f6fa75af0372"
        },
        "date": 1703083327034,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3866877785625174,
            "unit": "ms/iter",
            "extra": "iterations: 2407\ncpu: 0.3866519318653926 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.0128134509802615,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.0123380392156855 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.01751974999848,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.01539642857144 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.1282734285706,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.1032571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 558.1944644999908,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 558.1439500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 964.0913389999923,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 964.0319000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.426866438356346,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.426198630136981 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.138580384614123,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.137756410256433 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 51.01031990000138,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.999130000000115 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.0076382167702943515,
            "unit": "ms/iter",
            "extra": "iterations: 91996\ncpu: 0.007638111439627814 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.04888874169274485,
            "unit": "ms/iter",
            "extra": "iterations: 13422\ncpu: 0.04888370585605731 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 0.15388334362272052,
            "unit": "ms/iter",
            "extra": "iterations: 4665\ncpu: 0.15387434083601279 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008060618963858156,
            "unit": "ms/iter",
            "extra": "iterations: 873799\ncpu: 0.0008059843282036246 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004437536244402693,
            "unit": "ms/iter",
            "extra": "iterations: 157445\ncpu: 0.00443709549366445 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013357628332798221,
            "unit": "ms/iter",
            "extra": "iterations: 52921\ncpu: 0.013357232478600127 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294233742499837,
            "unit": "ns/iter",
            "extra": "iterations: 754334731\ncpu: 0.9293744158785152 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.949624167831844,
            "unit": "ns/iter",
            "extra": "iterations: 735146625\ncpu: 0.9495660814602819 ns\nthreads: 1"
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
          "id": "92844a44dad07160d415bfb2c49a956902fc01e0",
          "message": "Fix xy-support distance",
          "timestamp": "2023-12-22T07:44:22Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2000/commits/92844a44dad07160d415bfb2c49a956902fc01e0"
        },
        "date": 1703238554759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3962924550809894,
            "unit": "ms/iter",
            "extra": "iterations: 2716\ncpu: 0.39627315905743743 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.995697949218837,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.99569453125 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.90264749999957,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.90215357142858 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.5671004999989,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 168.56365000000005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.6593360000238,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 550.6410499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 951.0375719999615,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 951.0220999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.380853605442238,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.380627891156458 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.891995307691467,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.8915769230769 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.471430785716684,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.470278571428516 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03224879518906593,
            "unit": "ms/iter",
            "extra": "iterations: 21659\ncpu: 0.03224840943718547 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6920415717112205,
            "unit": "ms/iter",
            "extra": "iterations: 1011\ncpu: 0.6920385756676569 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.573914627450913,
            "unit": "ms/iter",
            "extra": "iterations: 153\ncpu: 4.573814379084964 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008123219926855924,
            "unit": "ms/iter",
            "extra": "iterations: 859945\ncpu: 0.0008123191599462739 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004513375733427555,
            "unit": "ms/iter",
            "extra": "iterations: 155605\ncpu: 0.0045131859516082335 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013718722876832708,
            "unit": "ms/iter",
            "extra": "iterations: 51515\ncpu: 0.013718316995050018 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9425626988132028,
            "unit": "ns/iter",
            "extra": "iterations: 753660637\ncpu: 0.9425523440200557 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.238850361458517,
            "unit": "ns/iter",
            "extra": "iterations: 564518861\ncpu: 1.2388555074336172 ns\nthreads: 1"
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
          "id": "37a8bdafedda15774945c4cfea7783a531564ee3",
          "message": "Improve slice performance of wall ordering",
          "timestamp": "2023-12-22T11:35:45Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2001/commits/37a8bdafedda15774945c4cfea7783a531564ee3"
        },
        "date": 1703258232898,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38632047497221206,
            "unit": "ms/iter",
            "extra": "iterations: 2697\ncpu: 0.38631256952169074 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.991321657587486,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.990954085603113 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.25849189285642,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.25695357142856 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.9235992857253,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.91719999999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 550.3221415000326,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 550.3140000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 1008.3164740000257,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1008.2496000000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.385432641379088,
            "unit": "ms/iter",
            "extra": "iterations: 145\ncpu: 6.3860006896551775 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.975070333333743,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.97669743589747 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.5148160000028,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.51171428571435 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.003078802884402609,
            "unit": "ms/iter",
            "extra": "iterations: 225766\ncpu: 0.0030786167979235165 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.010085428282569638,
            "unit": "ms/iter",
            "extra": "iterations: 70227\ncpu: 0.010084782206273932 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 0.023461243526800384,
            "unit": "ms/iter",
            "extra": "iterations: 29738\ncpu: 0.023459358396664205 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000812169689719773,
            "unit": "ms/iter",
            "extra": "iterations: 858514\ncpu: 0.0008121410949617601 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0044884039074495645,
            "unit": "ms/iter",
            "extra": "iterations: 154986\ncpu: 0.004488125379066485 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01347439508670457,
            "unit": "ms/iter",
            "extra": "iterations: 51900\ncpu: 0.013474556840077092 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9302056053374755,
            "unit": "ns/iter",
            "extra": "iterations: 752291803\ncpu: 0.9301283055452874 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2387112789427683,
            "unit": "ns/iter",
            "extra": "iterations: 564309519\ncpu: 1.2386686321341307 ns\nthreads: 1"
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
          "id": "2ccd94f65c1c2ba3d866fdc94408ff8315109a4d",
          "message": "Improve slice performance of wall ordering",
          "timestamp": "2023-12-22T11:35:45Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2001/commits/2ccd94f65c1c2ba3d866fdc94408ff8315109a4d"
        },
        "date": 1703258314457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38255047480402815,
            "unit": "ms/iter",
            "extra": "iterations: 2679\ncpu: 0.3825312056737588 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.041393303501798,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.041049416342412 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.871586142857076,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.868089285714305 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.25981499998943,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.24954999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 561.0488159999818,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 561.0079499999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 972.7151119999462,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 972.6399999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.378870959183525,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.378519727891153 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.975906769232704,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.974141025641018 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.68434007143099,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.68014999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.003101965992081986,
            "unit": "ms/iter",
            "extra": "iterations: 226065\ncpu: 0.003101861411540934 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.01018055219682656,
            "unit": "ms/iter",
            "extra": "iterations: 70397\ncpu: 0.010180406835518558 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 0.02351939755331246,
            "unit": "ms/iter",
            "extra": "iterations: 29918\ncpu: 0.023518136239053442 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008316531857985056,
            "unit": "ms/iter",
            "extra": "iterations: 816169\ncpu: 0.0008316210245672124 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004558446732557817,
            "unit": "ms/iter",
            "extra": "iterations: 153790\ncpu: 0.004558285324143327 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013798759259990594,
            "unit": "ms/iter",
            "extra": "iterations: 50702\ncpu: 0.013798437931442595 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9302595299995067,
            "unit": "ns/iter",
            "extra": "iterations: 753170849\ncpu: 0.9302396673082077 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2390662722157495,
            "unit": "ns/iter",
            "extra": "iterations: 565469218\ncpu: 1.239077526586074 ns\nthreads: 1"
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
          "id": "c694f08bf68de8b940aa127d93d57db0ea345d09",
          "message": "Improve slice performance of wall ordering",
          "timestamp": "2023-12-22T11:35:45Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2001/commits/c694f08bf68de8b940aa127d93d57db0ea345d09"
        },
        "date": 1703261561694,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.39349915340908426,
            "unit": "ms/iter",
            "extra": "iterations: 2640\ncpu: 0.3934734090909091 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.009432593750086,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.0091203124999995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.70316410714435,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.69877142857144 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.4922221428599,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.48881428571423 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 548.0415965000134,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 548.02785 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.1813180000199,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.0105999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.426618856164156,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.42640616438356 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.864206615384226,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.863092307692316 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.75477521428778,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.74871428571428 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5021796517664148,
            "unit": "ms/iter",
            "extra": "iterations: 1387\ncpu: 0.5021534967555876 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.36494398124978,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.36461062500001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.04753873684152,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.046931578947374 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008109397486309961,
            "unit": "ms/iter",
            "extra": "iterations: 860329\ncpu: 0.0008108807212124684 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004560265777538663,
            "unit": "ms/iter",
            "extra": "iterations: 156108\ncpu: 0.004560012299177492 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013435156394659456,
            "unit": "ms/iter",
            "extra": "iterations: 52278\ncpu: 0.0134345537319714 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294284925503999,
            "unit": "ns/iter",
            "extra": "iterations: 752868699\ncpu: 0.9293928688088571 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2395275532166412,
            "unit": "ns/iter",
            "extra": "iterations: 565136412\ncpu: 1.2395044543687952 ns\nthreads: 1"
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
          "id": "4e50a0f0102b13000f295fbccc49799c0ceacc2c",
          "message": "Improve slice performance of wall ordering",
          "timestamp": "2023-12-22T11:35:45Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2001/commits/4e50a0f0102b13000f295fbccc49799c0ceacc2c"
        },
        "date": 1703264217404,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38651375632441154,
            "unit": "ms/iter",
            "extra": "iterations: 2688\ncpu: 0.3864975074404762 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.998787661478505,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.998539688715953 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.61359749999932,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.61051071428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.09312337499915,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.08542500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.7158074999979,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.6862999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 960.4528179999647,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.3664000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.368603129251957,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.368264625850333 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.769652564103453,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.76825384615383 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.58780171428706,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.58712857142865 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5047135076252848,
            "unit": "ms/iter",
            "extra": "iterations: 1377\ncpu: 0.5046909949164847 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.373916231250163,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.373848125000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.041315189654942,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.04091206896553 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008230429258145105,
            "unit": "ms/iter",
            "extra": "iterations: 853752\ncpu: 0.0008229967250442732 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0045363011860806695,
            "unit": "ms/iter",
            "extra": "iterations: 153025\ncpu: 0.004535998693024002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013822146027737127,
            "unit": "ms/iter",
            "extra": "iterations: 50689\ncpu: 0.013821008502830984 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9293431488251256,
            "unit": "ns/iter",
            "extra": "iterations: 753310261\ncpu: 0.929275407812348 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9482849988434623,
            "unit": "ns/iter",
            "extra": "iterations: 736989503\ncpu: 0.9482299234321677 ns\nthreads: 1"
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
          "id": "acc083c7d194d87c855c60688941ade84b050a42",
          "message": "Fix xy-support distance",
          "timestamp": "2023-12-31T23:01:44Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2000/commits/acc083c7d194d87c855c60688941ade84b050a42"
        },
        "date": 1704187176923,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38961054648523946,
            "unit": "ms/iter",
            "extra": "iterations: 2646\ncpu: 0.38958378684807254 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9982480233464175,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.99805252918288 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.85144578571427,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.84902857142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.06527328572716,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.0510285714285 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 558.1587624999997,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 558.1347499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 966.5328109999791,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 966.5016000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.402512452054502,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.402018493150683 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.845737615384397,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.84479230769231 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.63381171428513,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.57424285714291 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03198842454625783,
            "unit": "ms/iter",
            "extra": "iterations: 21543\ncpu: 0.03198694703616021 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6877267866273482,
            "unit": "ms/iter",
            "extra": "iterations: 1017\ncpu: 0.687690462143559 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.588256045454497,
            "unit": "ms/iter",
            "extra": "iterations: 154\ncpu: 4.58789350649351 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008110568466097969,
            "unit": "ms/iter",
            "extra": "iterations: 873016\ncpu: 0.000811024196578297 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00450924626670819,
            "unit": "ms/iter",
            "extra": "iterations: 157033\ncpu: 0.004508979641221893 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013518811099934178,
            "unit": "ms/iter",
            "extra": "iterations: 51694\ncpu: 0.013518112353464621 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9297154177392946,
            "unit": "ns/iter",
            "extra": "iterations: 753981290\ncpu: 0.9296960140748303 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2396256872592062,
            "unit": "ns/iter",
            "extra": "iterations: 565264649\ncpu: 1.2395422236991844 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86107a7ff4e7e0f5c32515a3f7037291b9e2ec3b",
          "message": "Fix xy-support distance (#2000)",
          "timestamp": "2024-01-02T10:42:29+01:00",
          "tree_id": "cf457c63421e6617b0749882aa1d13beb511ee83",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/86107a7ff4e7e0f5c32515a3f7037291b9e2ec3b"
        },
        "date": 1704189190446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38337123807735685,
            "unit": "ms/iter",
            "extra": "iterations: 2663\ncpu: 0.3833543747653023 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.010847256809369,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.010420233463035 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.55816664285817,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.554732142857134 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.23588042856292,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 166.20828571428575 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 561.5300189999743,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 561.4963000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.6846580000147,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.6522000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.361191557822835,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.360978231292517 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.876233871793676,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.875479487179504 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.95980757142758,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.95692857142855 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.03151818470925506,
            "unit": "ms/iter",
            "extra": "iterations: 21634\ncpu: 0.03151680687806232 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.6959295728444423,
            "unit": "ms/iter",
            "extra": "iterations: 1009\ncpu: 0.6958907829534188 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 4.5731857086095244,
            "unit": "ms/iter",
            "extra": "iterations: 151\ncpu: 4.572949668874164 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000808944630107741,
            "unit": "ms/iter",
            "extra": "iterations: 873146\ncpu: 0.0008089258841018585 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004473312659024995,
            "unit": "ms/iter",
            "extra": "iterations: 155636\ncpu: 0.004473049937032556 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013435324031186071,
            "unit": "ms/iter",
            "extra": "iterations: 52461\ncpu: 0.013434722937038969 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.930607005348178,
            "unit": "ns/iter",
            "extra": "iterations: 752625049\ncpu: 0.9305472903546671 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9466614613769331,
            "unit": "ns/iter",
            "extra": "iterations: 740810510\ncpu: 0.9466219640971348 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3718ac91aa2e4cee50be20446bab068ee8b386f3",
          "message": "Improve slice performance of wall ordering (#2001)",
          "timestamp": "2024-01-02T10:45:52+01:00",
          "tree_id": "c334d42ca25d6a36b229c853329df0bfb32aaa37",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/3718ac91aa2e4cee50be20446bab068ee8b386f3"
        },
        "date": 1704189322396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38407788399695514,
            "unit": "ms/iter",
            "extra": "iterations: 2612\ncpu: 0.3840632082695253 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9920431289062215,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.991679296874999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.53853242857125,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.53690000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.81598637500394,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.79943749999993 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 552.0096529999705,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.9949999999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 954.1237390000106,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 954.0802999999993 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.348688128378251,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.3483270270270165 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.86941553846326,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.869233333333327 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.90963121428649,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.90292857142849 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5067769345454177,
            "unit": "ms/iter",
            "extra": "iterations: 1375\ncpu: 0.5067403636363627 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.416940506328939,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.4166873417721435 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.016009807016497,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.015449122807011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008231550006834468,
            "unit": "ms/iter",
            "extra": "iterations: 863222\ncpu: 0.0008231001990218034 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004487882836243337,
            "unit": "ms/iter",
            "extra": "iterations: 152018\ncpu: 0.004487580418108392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013476956068114568,
            "unit": "ms/iter",
            "extra": "iterations: 51853\ncpu: 0.013476755443272337 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9301737778403426,
            "unit": "ns/iter",
            "extra": "iterations: 752267549\ncpu: 0.9301580281246458 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9312582400154104,
            "unit": "ns/iter",
            "extra": "iterations: 749739198\ncpu: 0.9312187516171467 ns\nthreads: 1"
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
          "id": "d4dd679130040ca4596ef911c265b2c2b6e4a59e",
          "message": "Fix hole expansion",
          "timestamp": "2024-01-03T13:13:36Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/d4dd679130040ca4596ef911c265b2c2b6e4a59e"
        },
        "date": 1704300359666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3875527429111585,
            "unit": "ms/iter",
            "extra": "iterations: 2645\ncpu: 0.3875169376181475 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.042806207843194,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.04239568627451 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.54992896551686,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 47.54582068965516 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 169.24019662499745,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 169.22531250000006 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.3856325000006,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.3618 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 961.5607569999725,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 961.5036999999998 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.388721299319845,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.3883557823129244 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.863295615384185,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.862402564102574 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.0491836428567,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.04478571428566 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5037530892597912,
            "unit": "ms/iter",
            "extra": "iterations: 1378\ncpu: 0.5037190130624086 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.382203620253127,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.381751898734168 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.169877672414291,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.168818965517245 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008122201263965592,
            "unit": "ms/iter",
            "extra": "iterations: 783091\ncpu: 0.0008121386914164535 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004505031144846269,
            "unit": "ms/iter",
            "extra": "iterations: 154536\ncpu: 0.004504852590982035 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013431076776978924,
            "unit": "ms/iter",
            "extra": "iterations: 52125\ncpu: 0.013430242685851312 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9306667152432666,
            "unit": "ns/iter",
            "extra": "iterations: 754437168\ncpu: 0.9306426429934318 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.23826450639406,
            "unit": "ns/iter",
            "extra": "iterations: 563830438\ncpu: 1.2382408840439334 ns\nthreads: 1"
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
          "id": "4fbd98e2c2bd6a58d81749756796ac5818b2c1b2",
          "message": "Fix hole expansion",
          "timestamp": "2024-01-03T13:13:36Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/4fbd98e2c2bd6a58d81749756796ac5818b2c1b2"
        },
        "date": 1704302381741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3890791352916788,
            "unit": "ms/iter",
            "extra": "iterations: 2417\ncpu: 0.389072238311957 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.003845517509773,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.003667704280156 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.72551910714234,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.72330714285715 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.90689087500488,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.89785 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.8576379999822,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.8379499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 956.3116639999976,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 956.2712000000007 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.357739428571389,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.3573700680272065 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.779415512819444,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.77881794871795 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.05205392857095,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.04942142857137 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5156320639367833,
            "unit": "ms/iter",
            "extra": "iterations: 1392\ncpu: 0.5156068965517249 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.365248537974626,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.364965189873413 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.067664172413853,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.066694827586213 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008227356381894814,
            "unit": "ms/iter",
            "extra": "iterations: 834470\ncpu: 0.0008226956031972383 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0046142815149582605,
            "unit": "ms/iter",
            "extra": "iterations: 153562\ncpu: 0.004614195569216351 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013758032595925196,
            "unit": "ms/iter",
            "extra": "iterations: 50221\ncpu: 0.013757223074012911 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9296723052594327,
            "unit": "ns/iter",
            "extra": "iterations: 754251013\ncpu: 0.9296084299723715 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.946448319693155,
            "unit": "ns/iter",
            "extra": "iterations: 737970812\ncpu: 0.9464286237922402 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "casperlamboo@gmail.com",
            "name": "c.lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "casperlamboo@gmail.com",
            "name": "c.lamboo",
            "username": "casperlamboo"
          },
          "distinct": true,
          "id": "88903746ebbf3d5c4e2e33185ef5c7120b54b7cb",
          "message": "Prevent divide by zero issues",
          "timestamp": "2024-01-04T14:27:04+01:00",
          "tree_id": "c757820e742a3f4a3974e750b3a78d0fc1075032",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/88903746ebbf3d5c4e2e33185ef5c7120b54b7cb"
        },
        "date": 1704375212422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4026357567771188,
            "unit": "ms/iter",
            "extra": "iterations: 2656\ncpu: 0.4026051957831325 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.012077073929825,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.011827237354086 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.48331514285756,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.48197500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.20022849999805,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.19205000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.7444719999862,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.7161999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 972.1908970000186,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 972.1595999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.3933291904762894,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.393118367346935 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.940309230768552,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.940089743589763 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 50.09260420000032,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.09038999999991 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5102702105649097,
            "unit": "ms/iter",
            "extra": "iterations: 1363\ncpu: 0.5102505502567865 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.398993212500102,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.398861249999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 11.79210662068946,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 11.791618965517216 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008060710041266634,
            "unit": "ms/iter",
            "extra": "iterations: 865837\ncpu: 0.000806038549981117 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004453479035154064,
            "unit": "ms/iter",
            "extra": "iterations: 157621\ncpu: 0.004453369157663 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013457168510686731,
            "unit": "ms/iter",
            "extra": "iterations: 51789\ncpu: 0.013456353665836345 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9302336830344715,
            "unit": "ns/iter",
            "extra": "iterations: 753496763\ncpu: 0.9302414216210807 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9383561016530438,
            "unit": "ns/iter",
            "extra": "iterations: 737008126\ncpu: 0.9383059366702288 ns\nthreads: 1"
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
          "id": "b8e008513af0b1c1b2fe31ab2a99beafb447eddc",
          "message": "Fix hole expansion",
          "timestamp": "2024-01-03T21:02:19Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/b8e008513af0b1c1b2fe31ab2a99beafb447eddc"
        },
        "date": 1704377588062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3863700007668745,
            "unit": "ms/iter",
            "extra": "iterations: 2608\ncpu: 0.38635989263803683 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.001495754940817,
            "unit": "ms/iter",
            "extra": "iterations: 253\ncpu: 6.001343083003952 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.96269728571393,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.95851071428573 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 170.0383145714243,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 170.0329857142858 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 555.1899710000043,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.1613 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 960.2876429999583,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 960.1853999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.344026102040896,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.343682993197284 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.9081210256418,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.906561538461542 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.55080235714555,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.54624999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5011334164264953,
            "unit": "ms/iter",
            "extra": "iterations: 1388\ncpu: 0.5010910662824211 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.380990718750155,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.380448125000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.143082999999471,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.10819655172413 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008207074484464453,
            "unit": "ms/iter",
            "extra": "iterations: 857360\ncpu: 0.000820604646822804 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0045498233796812705,
            "unit": "ms/iter",
            "extra": "iterations: 152038\ncpu: 0.004549590891750757 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013686254205753859,
            "unit": "ms/iter",
            "extra": "iterations: 51061\ncpu: 0.013685141301580458 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9288144737650708,
            "unit": "ns/iter",
            "extra": "iterations: 753297290\ncpu: 0.9287646581072931 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9421140014860372,
            "unit": "ns/iter",
            "extra": "iterations: 745904452\ncpu: 0.9420480037569209 ns\nthreads: 1"
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
          "id": "8ac79d19c6765056eb45e68f56843fe28508b047",
          "message": "Fix hole expansion",
          "timestamp": "2024-01-03T21:02:19Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/8ac79d19c6765056eb45e68f56843fe28508b047"
        },
        "date": 1704451186246,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38990326546822346,
            "unit": "ms/iter",
            "extra": "iterations: 2392\ncpu: 0.38987675585284276 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.989396483412411,
            "unit": "ms/iter",
            "extra": "iterations: 211\ncpu: 5.989123222748815 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.446593214285066,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.4445857142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.11479462500023,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 167.10395 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.3116019999889,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.2881499999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.7053720000017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.6466000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.362779156462489,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.362360544217684 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.87169220512864,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.87071538461534 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.75961535714191,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.75527142857153 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.6681050595009227,
            "unit": "ms/iter",
            "extra": "iterations: 1042\ncpu: 0.6680464491362775 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 5.467522093749899,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 5.467303124999989 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 13.303035471698474,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 13.302915094339609 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008365366407444306,
            "unit": "ms/iter",
            "extra": "iterations: 840335\ncpu: 0.0008365306693164036 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004713310694110876,
            "unit": "ms/iter",
            "extra": "iterations: 154010\ncpu: 0.00471308096876825 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013998459330628895,
            "unit": "ms/iter",
            "extra": "iterations: 49300\ncpu: 0.013997326572008162 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.928401736694752,
            "unit": "ns/iter",
            "extra": "iterations: 743883155\ncpu: 0.9283554753972056 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.935729174326734,
            "unit": "ns/iter",
            "extra": "iterations: 714407455\ncpu: 0.9356698272416513 ns\nthreads: 1"
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
          "id": "46d3853fdfea37e05fddd6a2f5aa7b1976716f72",
          "message": "Fix hole expansion",
          "timestamp": "2024-01-05T16:46:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/46d3853fdfea37e05fddd6a2f5aa7b1976716f72"
        },
        "date": 1704497853248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38365255795363573,
            "unit": "ms/iter",
            "extra": "iterations: 2502\ncpu: 0.38363465227817745 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.001860355468791,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.001695312499999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.76292007142859,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.76202857142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.9859192857149,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 165.9807571428571 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.5612745000169,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.5555999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 951.2417880000044,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 951.2215 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.354700499999839,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.354501351351348 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.78479302564026,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.78435897435896 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.6784904285695,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.67614285714286 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.6758344406943043,
            "unit": "ms/iter",
            "extra": "iterations: 1037\ncpu: 0.6758264223722277 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 5.466804242187706,
            "unit": "ms/iter",
            "extra": "iterations: 128\ncpu: 5.466734375000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 13.246437999999404,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 13.246320754716974 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008107818859770755,
            "unit": "ms/iter",
            "extra": "iterations: 867317\ncpu: 0.0008107347140664823 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004602378407095591,
            "unit": "ms/iter",
            "extra": "iterations: 154347\ncpu: 0.004602320096924455 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.014010402268778385,
            "unit": "ms/iter",
            "extra": "iterations: 50071\ncpu: 0.014009893950590158 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9297381450780884,
            "unit": "ns/iter",
            "extra": "iterations: 752636378\ncpu: 0.9297130997832267 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2403743859423495,
            "unit": "ns/iter",
            "extra": "iterations: 564308154\ncpu: 1.240348017370662 ns\nthreads: 1"
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
          "id": "e7f0ac0aa0cf23c26e8109652a01bef65af2c593",
          "message": "Fix hole expansion",
          "timestamp": "2024-01-05T16:46:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/e7f0ac0aa0cf23c26e8109652a01bef65af2c593"
        },
        "date": 1704498436957,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38729936010144156,
            "unit": "ms/iter",
            "extra": "iterations: 2366\ncpu: 0.3872911665257819 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9955781167314885,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.995530350194553 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.93986121428467,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.9387107142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.34577371428207,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 164.33721428571425 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 555.9989005000148,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.9898999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 964.3405639999969,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 964.3211999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.366211482993069,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.365843537414967 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.863728025639936,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.863858974358973 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.80188085714336,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.80047142857154 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.008548186037939989,
            "unit": "ms/iter",
            "extra": "iterations: 81392\ncpu: 0.00854802683310399 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.05405785313761918,
            "unit": "ms/iter",
            "extra": "iterations: 12876\ncpu: 0.05405365020192601 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 0.1666625054117637,
            "unit": "ms/iter",
            "extra": "iterations: 4250\ncpu: 0.16665938823529433 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008258963809988222,
            "unit": "ms/iter",
            "extra": "iterations: 844874\ncpu: 0.0008258400660926939 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00450457929428751,
            "unit": "ms/iter",
            "extra": "iterations: 155049\ncpu: 0.0045045276009519535 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013627424402872606,
            "unit": "ms/iter",
            "extra": "iterations: 51371\ncpu: 0.013626581145003943 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9305989171362987,
            "unit": "ns/iter",
            "extra": "iterations: 753079287\ncpu: 0.930573861341645 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2393202425053103,
            "unit": "ns/iter",
            "extra": "iterations: 565186148\ncpu: 1.2393106279738482 ns\nthreads: 1"
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
          "id": "c942f16a90f306c37d877b0c72a47fc5955ad4a8",
          "message": "Improve wall ordering",
          "timestamp": "2024-01-05T16:46:35Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/c942f16a90f306c37d877b0c72a47fc5955ad4a8"
        },
        "date": 1704536362972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38626572376311624,
            "unit": "ms/iter",
            "extra": "iterations: 2668\ncpu: 0.38624733883058465 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.984965730468694,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.984678515625 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.6626236071423,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.65949642857145 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 168.71791442857133,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 168.71367142857147 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.0759960000041,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.0385499999998 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 962.3247370000172,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 962.2617 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.362943374149907,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.362814965986385 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.857669153845865,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.857233333333333 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.09935649999826,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.09748571428576 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.008664200572317865,
            "unit": "ms/iter",
            "extra": "iterations: 80375\ncpu: 0.008664041057542772 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.05480092890443023,
            "unit": "ms/iter",
            "extra": "iterations: 12870\ncpu: 0.054799906759906744 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 0.16331613639495515,
            "unit": "ms/iter",
            "extra": "iterations: 4355\ncpu: 0.1633129276693455 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0007984537722616493,
            "unit": "ms/iter",
            "extra": "iterations: 874767\ncpu: 0.000798434668888971 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004442423893303333,
            "unit": "ms/iter",
            "extra": "iterations: 156931\ncpu: 0.004442342813083447 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013510313276264011,
            "unit": "ms/iter",
            "extra": "iterations: 52334\ncpu: 0.01350985592540221 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9297924011383775,
            "unit": "ns/iter",
            "extra": "iterations: 752845217\ncpu: 0.9297800984767348 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2400522728540935,
            "unit": "ns/iter",
            "extra": "iterations: 565817967\ncpu: 1.2400132921194453 ns\nthreads: 1"
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
          "id": "c04652c28fc1163055b5ceb256819cfd0a7b4325",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/c04652c28fc1163055b5ceb256819cfd0a7b4325"
        },
        "date": 1704789019461,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38627013353681583,
            "unit": "ms/iter",
            "extra": "iterations: 2621\ncpu: 0.3862477680274704 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9939567304687635,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.9938519531250005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.05958544444298,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 48.05667037037037 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.08374212500365,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.07265000000004 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 553.6969389999911,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 553.6731499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 961.7396900000017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 961.6923000000011 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.415397414966286,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.4148299319727915 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.993705405404658,
            "unit": "ms/iter",
            "extra": "iterations: 37\ncpu: 20.993148648648642 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.32031185714459,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.318278571428536 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5147161943619982,
            "unit": "ms/iter",
            "extra": "iterations: 1348\ncpu: 0.5147051928783375 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.408750512658056,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.408751265822787 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.182595844826704,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.182520689655178 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008301298994356211,
            "unit": "ms/iter",
            "extra": "iterations: 836678\ncpu: 0.0008301026201238728 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004590536282133935,
            "unit": "ms/iter",
            "extra": "iterations: 153147\ncpu: 0.004590261644041342 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013912021003314338,
            "unit": "ms/iter",
            "extra": "iterations: 50373\ncpu: 0.013911676890397644 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294330318506722,
            "unit": "ns/iter",
            "extra": "iterations: 744798117\ncpu: 0.929383257288769 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2399114612470687,
            "unit": "ns/iter",
            "extra": "iterations: 565688564\ncpu: 1.2398940771233258 ns\nthreads: 1"
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
          "id": "47f51d1eadf63a457d69ce033517f06b18945210",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/47f51d1eadf63a457d69ce033517f06b18945210"
        },
        "date": 1704789414883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38240689768834785,
            "unit": "ms/iter",
            "extra": "iterations: 2336\ncpu: 0.3824028681506849 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9847523813227905,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.984712062256809 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.56285192857287,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.56091785714285 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.07883187500028,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.07442500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.4644410000074,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.45615 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 955.6412499999851,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 955.6161000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.450213582191792,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.450121917808214 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.993411615385856,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.993356410256407 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.29527807143251,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.29289285714282 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5066340706560921,
            "unit": "ms/iter",
            "extra": "iterations: 1387\ncpu: 0.5066067051189617 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.342372518749826,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.342059374999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 11.98163108620653,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 11.981253448275858 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008044369305211373,
            "unit": "ms/iter",
            "extra": "iterations: 871301\ncpu: 0.0008043771325867864 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004477185908017348,
            "unit": "ms/iter",
            "extra": "iterations: 157508\ncpu: 0.004477058308149426 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013594123189540007,
            "unit": "ms/iter",
            "extra": "iterations: 51092\ncpu: 0.01359350974712283 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9320711606507873,
            "unit": "ns/iter",
            "extra": "iterations: 753369445\ncpu: 0.9320231987905991 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2405117761240192,
            "unit": "ns/iter",
            "extra": "iterations: 565443182\ncpu: 1.2404418734330052 ns\nthreads: 1"
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
          "id": "6670b80fff2722572a405bcd8d62cf9e4eef1b95",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/6670b80fff2722572a405bcd8d62cf9e4eef1b95"
        },
        "date": 1704790768899,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3916350594975849,
            "unit": "ms/iter",
            "extra": "iterations: 2269\ncpu: 0.3916174526223006 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.008661311283971,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.008407003891051 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.610272857143954,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.60782500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.13126324999894,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 164.12444999999997 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.8224010000097,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.79255 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.4759049999766,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.4198999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.399667438356122,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.399280821917812 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.00886848717938,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.00695897435897 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.256242071428524,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.252971428571406 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5104002235123095,
            "unit": "ms/iter",
            "extra": "iterations: 1378\ncpu: 0.5097509433962272 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.3603730750000125,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.3603456249999955 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.011733068965409,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.011406896551735 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000804123054190621,
            "unit": "ms/iter",
            "extra": "iterations: 862880\ncpu: 0.0008041171425922494 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004566362046100079,
            "unit": "ms/iter",
            "extra": "iterations: 154577\ncpu: 0.004566210367648493 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013755762611449765,
            "unit": "ms/iter",
            "extra": "iterations: 51144\ncpu: 0.013755242061629855 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9292294324716475,
            "unit": "ns/iter",
            "extra": "iterations: 753910642\ncpu: 0.929217550426885 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9295673530079048,
            "unit": "ns/iter",
            "extra": "iterations: 752017825\ncpu: 0.929546716528964 ns\nthreads: 1"
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
          "id": "956d47aaf59f6be519126f1eddcbc77bef2ce8d4",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/956d47aaf59f6be519126f1eddcbc77bef2ce8d4"
        },
        "date": 1704792906311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3885009941027586,
            "unit": "ms/iter",
            "extra": "iterations: 2374\ncpu: 0.3884705560235889 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.9754523657586995,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.975043579766536 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.69529435714454,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.692271428571416 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.7273119999989,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.71617500000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.5091404999926,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.4704000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 954.6559839999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 954.6054999999996 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.412219598639602,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.411594557823122 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.826189230768787,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.824612820512804 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.808908071428114,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.80507142857149 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5067231530612265,
            "unit": "ms/iter",
            "extra": "iterations: 1372\ncpu: 0.5066940233236151 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.411211202531826,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.4107107594936705 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.184517362069771,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.183048275862083 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008513108254593534,
            "unit": "ms/iter",
            "extra": "iterations: 768457\ncpu: 0.0008512882308313946 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004595950234791246,
            "unit": "ms/iter",
            "extra": "iterations: 151411\ncpu: 0.004595635719993914 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.0135540620341612,
            "unit": "ms/iter",
            "extra": "iterations: 51520\ncpu: 0.013553400621118024 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9308196066458371,
            "unit": "ns/iter",
            "extra": "iterations: 752464860\ncpu: 0.9307526998669444 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2408498757143593,
            "unit": "ns/iter",
            "extra": "iterations: 565151012\ncpu: 1.240795265531618 ns\nthreads: 1"
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
          "id": "ddc10eb67eb09233672a018d7e1a32a1548d0224",
          "message": "Improve wall ordering",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2003/commits/ddc10eb67eb09233672a018d7e1a32a1548d0224"
        },
        "date": 1704793244976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4072422437006475,
            "unit": "ms/iter",
            "extra": "iterations: 2659\ncpu: 0.40722493418578415 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.999958207031364,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.9998074218749995 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.77628292857067,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.7751357142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.65536287499793,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.6495375 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 546.1906384999793,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 546.1832000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 944.7905600000013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 944.7653999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.399814183673558,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.399582993197283 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.18051735897389,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.179605128205154 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.022467285713866,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.01875000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.008940399229031615,
            "unit": "ms/iter",
            "extra": "iterations: 77046\ncpu: 0.008940165615346668 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 0.05584763668129115,
            "unit": "ms/iter",
            "extra": "iterations: 12306\ncpu: 0.05584596944579877 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 0.1719955516821106,
            "unit": "ms/iter",
            "extra": "iterations: 4102\ncpu: 0.17199007801072652 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008484620116965312,
            "unit": "ms/iter",
            "extra": "iterations: 832730\ncpu: 0.0008484313042642884 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004723382106502826,
            "unit": "ms/iter",
            "extra": "iterations: 147752\ncpu: 0.004723234203259507 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013922287914148342,
            "unit": "ms/iter",
            "extra": "iterations: 50133\ncpu: 0.01392198950790898 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9300388050943103,
            "unit": "ns/iter",
            "extra": "iterations: 753670375\ncpu: 0.9300300545845389 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2397868271355843,
            "unit": "ns/iter",
            "extra": "iterations: 564798528\ncpu: 1.239739774959188 ns\nthreads: 1"
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
          "id": "fec51a2b3cd7860110d3fde1d93086cf8065df33",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/fec51a2b3cd7860110d3fde1d93086cf8065df33"
        },
        "date": 1704814175426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4081380886605814,
            "unit": "ms/iter",
            "extra": "iterations: 2628\ncpu: 0.4081077245053273 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.026889756862699,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.026667058823528 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.01117124999824,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.00896428571428 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.11966528570852,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.11297142857148 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.9364984999936,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.9231500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 964.4593270000428,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 964.4385 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.397900163265257,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.3977714285714224 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.96872430769281,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.968220512820505 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.66879914285577,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.66706428571427 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5032949855907913,
            "unit": "ms/iter",
            "extra": "iterations: 1388\ncpu: 0.5032804034582127 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.383907337500048,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.383654375000001 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 11.958786758620771,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 11.9579 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.000848273568195506,
            "unit": "ms/iter",
            "extra": "iterations: 830473\ncpu: 0.0008482562346999852 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004580513687728843,
            "unit": "ms/iter",
            "extra": "iterations: 150792\ncpu: 0.004580120298159045 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01406293002234685,
            "unit": "ms/iter",
            "extra": "iterations: 49673\ncpu: 0.014062665834557958 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9315170586941354,
            "unit": "ns/iter",
            "extra": "iterations: 752105897\ncpu: 0.9314881093134105 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.242031682567295,
            "unit": "ns/iter",
            "extra": "iterations: 564801263\ncpu: 1.2419864223993438 ns\nthreads: 1"
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
          "id": "956d47aaf59f6be519126f1eddcbc77bef2ce8d4",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/956d47aaf59f6be519126f1eddcbc77bef2ce8d4"
        },
        "date": 1704815231843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.40058714258628014,
            "unit": "ms/iter",
            "extra": "iterations: 2637\ncpu: 0.40057618505877896 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.981424169960623,
            "unit": "ms/iter",
            "extra": "iterations: 253\ncpu: 5.981173913043478 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.65475278571379,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.653410714285705 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.09663385714586,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.09178571428575 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.46717499998,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.44875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 952.7757339999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 952.7384000000003 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.359007222972896,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.358828378378375 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.908974897435993,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.907720512820532 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.454831214286514,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.45245000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5025216991278693,
            "unit": "ms/iter",
            "extra": "iterations: 1376\ncpu: 0.5024998546511624 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.394692037974552,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.394625949367088 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.077705620689702,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.077327586206904 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008186949538084061,
            "unit": "ms/iter",
            "extra": "iterations: 852861\ncpu: 0.0008186757279322191 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004527295221510366,
            "unit": "ms/iter",
            "extra": "iterations: 153898\ncpu: 0.0045271459018310705 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01391027964170318,
            "unit": "ms/iter",
            "extra": "iterations: 50461\ncpu: 0.013909884861576238 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9312648360035121,
            "unit": "ns/iter",
            "extra": "iterations: 752672795\ncpu: 0.931251274997921 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.238928446154122,
            "unit": "ns/iter",
            "extra": "iterations: 564937098\ncpu: 1.2388701370077149 ns\nthreads: 1"
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
          "id": "25870b875b37302cc9bdf20bce2c94473cb64e4f",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/25870b875b37302cc9bdf20bce2c94473cb64e4f"
        },
        "date": 1704815316497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3941841830015289,
            "unit": "ms/iter",
            "extra": "iterations: 2612\ncpu: 0.39418575803981626 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.009837785156291,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.009757421875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.611726607144796,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.61020000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 167.13607014285768,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 167.1273714285715 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 552.9936595000038,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 552.97515 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 964.4250899999633,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 964.3701999999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.3744233401362305,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.374229931972792 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.770145205128408,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.769961538461573 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.5631825000003,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.55932857142847 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5133400088560834,
            "unit": "ms/iter",
            "extra": "iterations: 1355\ncpu: 0.5133296678966782 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.399615518987278,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.399363291139242 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.122595465517987,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.12220344827587 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008146479762829906,
            "unit": "ms/iter",
            "extra": "iterations: 853059\ncpu: 0.0008146409568388574 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00451698772505122,
            "unit": "ms/iter",
            "extra": "iterations: 155520\ncpu: 0.0045169611625514436 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01381834207399498,
            "unit": "ms/iter",
            "extra": "iterations: 48814\ncpu: 0.013817962060064694 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9294414809831233,
            "unit": "ns/iter",
            "extra": "iterations: 752565172\ncpu: 0.9294202363114424 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.930610028880053,
            "unit": "ns/iter",
            "extra": "iterations: 752101048\ncpu: 0.9306103240531566 ns\nthreads: 1"
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
          "id": "c287580dee4342f95c48ebd469d3166f7d3aee34",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/c287580dee4342f95c48ebd469d3166f7d3aee34"
        },
        "date": 1704815472811,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3967685768183486,
            "unit": "ms/iter",
            "extra": "iterations: 2571\ncpu: 0.39650777907429013 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.985785933593668,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.985354296875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.730082107142785,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.725557142857156 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.67524450000093,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.66091250000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 554.0832929999908,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 554.0471999999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 961.4105590000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 961.3549000000008 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.33928429370648,
            "unit": "ms/iter",
            "extra": "iterations: 143\ncpu: 6.338621678321684 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.91513510256449,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.914220512820517 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.951151357142535,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.945871428571486 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5039852010086552,
            "unit": "ms/iter",
            "extra": "iterations: 1388\ncpu: 0.5039386167146985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.3948504591193025,
            "unit": "ms/iter",
            "extra": "iterations: 159\ncpu: 4.394615094339628 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 11.99954512068953,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 11.998782758620672 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008188620118712061,
            "unit": "ms/iter",
            "extra": "iterations: 846754\ncpu: 0.0008188079418579669 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004529880391977872,
            "unit": "ms/iter",
            "extra": "iterations: 153376\ncpu: 0.0045295587314834245 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013573637142633538,
            "unit": "ms/iter",
            "extra": "iterations: 50998\ncpu: 0.013572536177889293 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9288645972171681,
            "unit": "ns/iter",
            "extra": "iterations: 753583559\ncpu: 0.9288575787519272 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9358608912742226,
            "unit": "ns/iter",
            "extra": "iterations: 752648516\ncpu: 0.9358541005879012 ns\nthreads: 1"
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
          "id": "50d0fd0f342e385fb8ca89adf226da795af9367d",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2006/commits/50d0fd0f342e385fb8ca89adf226da795af9367d"
        },
        "date": 1704815557815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.41941789471668733,
            "unit": "ms/iter",
            "extra": "iterations: 2612\ncpu: 0.41939663093415 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.991295441406308,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.991066406250001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.61975260714329,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.61770357142857 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.16755575000275,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.1629875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 556.254961999997,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 556.2337 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 967.6790180000125,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 967.5471000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.347974650685106,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.347715068493151 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.72818457500034,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.727327499999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.4681642142848,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.46674285714284 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5015389817384783,
            "unit": "ms/iter",
            "extra": "iterations: 1369\ncpu: 0.5015155588020458 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.36991010691844,
            "unit": "ms/iter",
            "extra": "iterations: 159\ncpu: 4.369666037735854 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 11.953662067796968,
            "unit": "ms/iter",
            "extra": "iterations: 59\ncpu: 11.953138983050858 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008286378253774311,
            "unit": "ms/iter",
            "extra": "iterations: 858503\ncpu: 0.0008286047922954249 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.0045207868123873455,
            "unit": "ms/iter",
            "extra": "iterations: 153902\ncpu: 0.00452062026484385 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01361516605527994,
            "unit": "ms/iter",
            "extra": "iterations: 50977\ncpu: 0.013615232359691644 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9608860205766142,
            "unit": "ns/iter",
            "extra": "iterations: 722087203\ncpu: 0.9608811749015278 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9300389701332296,
            "unit": "ns/iter",
            "extra": "iterations: 749447015\ncpu: 0.9300097085582482 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erwan.mathieu@ultimaker.com",
            "name": "Erwan MATHIEU",
            "username": "wawanbreton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8bfce01707852092574a57a742979c0274b635f",
          "message": "Add raft settings to make margin and remove inside corners configurablle per raft-type (#2006)",
          "timestamp": "2024-01-09T16:49:00+01:00",
          "tree_id": "abaf7fc50eb402e79401ec497759076bf4570215",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/c8bfce01707852092574a57a742979c0274b635f"
        },
        "date": 1704815747956,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38566138744672696,
            "unit": "ms/iter",
            "extra": "iterations: 2581\ncpu: 0.3856377760557923 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.0132136887159415,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.013136186770427 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.04926771428849,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.04763571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.2205136250018,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 165.21631250000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 541.5780194999797,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 541.56365 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 951.5317999999979,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 951.4961 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.363935885134824,
            "unit": "ms/iter",
            "extra": "iterations: 148\ncpu: 6.363717567567568 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.7224277999984,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.722332500000018 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.1328712857145,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.13222142857142 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5036016594203006,
            "unit": "ms/iter",
            "extra": "iterations: 1380\ncpu: 0.5035816666666669 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.4203927594931205,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.420179113924047 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.19064108620622,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.189886206896569 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.00081274113112198,
            "unit": "ms/iter",
            "extra": "iterations: 854815\ncpu: 0.000812714680954358 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004513238473169144,
            "unit": "ms/iter",
            "extra": "iterations: 154097\ncpu: 0.004513213106030632 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013668677353758275,
            "unit": "ms/iter",
            "extra": "iterations: 50653\ncpu: 0.013668110477168196 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9273087612227551,
            "unit": "ns/iter",
            "extra": "iterations: 753926882\ncpu: 0.9272656496150783 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9293657405925116,
            "unit": "ns/iter",
            "extra": "iterations: 743097421\ncpu: 0.9293636076285043 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "f61cffdfe6e9b853083e420b741de2b39eabc371",
          "message": "Alert on benchmark regression\n\nVery low tresshold to test things out\n\nContribute to CURA-11527",
          "timestamp": "2024-01-09T17:45:33+01:00",
          "tree_id": "aee49fbc7fdf79483456666feb99f429173ccbfc",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/f61cffdfe6e9b853083e420b741de2b39eabc371"
        },
        "date": 1704819084826,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38577289585845975,
            "unit": "ms/iter",
            "extra": "iterations: 2487\ncpu: 0.38574246079614 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.007196035294132,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.006879607843138 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.45120010714337,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.44835000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.64503487500082,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 164.6372749999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 552.5844320000033,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 552.5529499999999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 956.4102439999829,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 956.3246999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.374106442176928,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.373657823129252 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.825966666666027,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.825435897435884 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.49612114285531,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.490857142857124 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5020164781976821,
            "unit": "ms/iter",
            "extra": "iterations: 1376\ncpu: 0.5020022529069759 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.409509654088371,
            "unit": "ms/iter",
            "extra": "iterations: 159\ncpu: 4.40930754716981 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.016308068965522,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.016139655172418 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008206291968319651,
            "unit": "ms/iter",
            "extra": "iterations: 858326\ncpu: 0.0008205988167665912 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004556395920862893,
            "unit": "ms/iter",
            "extra": "iterations: 152091\ncpu: 0.004556157826564358 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013897532822012006,
            "unit": "ms/iter",
            "extra": "iterations: 49936\ncpu: 0.013897050224287114 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9292672250163005,
            "unit": "ns/iter",
            "extra": "iterations: 753873293\ncpu: 0.9292558928732338 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9302035701134405,
            "unit": "ns/iter",
            "extra": "iterations: 753307828\ncpu: 0.9293281895910405 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "committer": {
            "email": "jelle.spijker@ultimaker.com",
            "name": "Jelle Spijker",
            "username": "jellespijker"
          },
          "distinct": true,
          "id": "a0892ba96292d2e04e6684e8a0c035b9d96929f7",
          "message": "realistic alert value\n\nContribute to CURA-11527",
          "timestamp": "2024-01-09T17:55:28+01:00",
          "tree_id": "8fa946832a734f769bfddca2b7783c83aa5f7cfc",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/a0892ba96292d2e04e6684e8a0c035b9d96929f7"
        },
        "date": 1704819737815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4004118339086686,
            "unit": "ms/iter",
            "extra": "iterations: 2607\ncpu: 0.4003859225163022 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.000477687500005,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.0002421875 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.82515728571671,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.82263571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.56426942857303,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 164.5535571428572 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 557.7897365000126,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 557.74005 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 974.9121500000228,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 974.7507000000004 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.401636353741326,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.401218367346937 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.164495358975845,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.162053846153867 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 50.94314169999734,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.935549999999985 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5126841764705733,
            "unit": "ms/iter",
            "extra": "iterations: 1360\ncpu: 0.5126686029411766 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.466881910827837,
            "unit": "ms/iter",
            "extra": "iterations: 157\ncpu: 4.466454777070061 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.33196736842202,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.33065614035087 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008194028637538877,
            "unit": "ms/iter",
            "extra": "iterations: 830658\ncpu: 0.0008193907721348628 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004559948997145181,
            "unit": "ms/iter",
            "extra": "iterations: 155207\ncpu: 0.00455950182659287 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013522573538533854,
            "unit": "ms/iter",
            "extra": "iterations: 51592\ncpu: 0.013522443402077877 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9316508507943778,
            "unit": "ns/iter",
            "extra": "iterations: 751664938\ncpu: 0.9315907455563652 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9303771773335778,
            "unit": "ns/iter",
            "extra": "iterations: 721796820\ncpu: 0.9303255173665088 ns\nthreads: 1"
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
          "id": "a935cee82a24722fbedabfd93d456e0a269a1e0f",
          "message": "[CURA-11157] Remove 'support_interface_skip_height' setting",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2009/commits/a935cee82a24722fbedabfd93d456e0a269a1e0f"
        },
        "date": 1704874322645,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3838386784296439,
            "unit": "ms/iter",
            "extra": "iterations: 2267\ncpu: 0.3838264666960741 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.993767735408644,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 5.993504280155642 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.44916114285656,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.44721785714285 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 170.1300402857149,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 170.1244142857143 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 555.5817929999876,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 555.5555500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 956.550383999911,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 956.5117000000009 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.4038897876709955,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.403716438356173 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.175379923076246,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.17407948717948 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.19689507143052,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.196785714285724 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5049399156891763,
            "unit": "ms/iter",
            "extra": "iterations: 1364\ncpu: 0.5049394428152486 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.432448329114207,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.432387341772144 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.053266661018439,
            "unit": "ms/iter",
            "extra": "iterations: 59\ncpu: 12.052576271186446 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008067806687048071,
            "unit": "ms/iter",
            "extra": "iterations: 869771\ncpu: 0.0008067709776481392 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004572709644927218,
            "unit": "ms/iter",
            "extra": "iterations: 153884\ncpu: 0.004572598840685197 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013673194070826629,
            "unit": "ms/iter",
            "extra": "iterations: 50631\ncpu: 0.013672957279137235 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9300691833102551,
            "unit": "ns/iter",
            "extra": "iterations: 753708515\ncpu: 0.9300684363370889 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2396989516217127,
            "unit": "ns/iter",
            "extra": "iterations: 565255063\ncpu: 1.2396895594016146 ns\nthreads: 1"
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
          "id": "f788722c078a94c0c0760290401f009eb8e9f014",
          "message": "Remove all references to skip_layers",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2010/commits/f788722c078a94c0c0760290401f009eb8e9f014"
        },
        "date": 1704879935808,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38671772263632503,
            "unit": "ms/iter",
            "extra": "iterations: 2549\ncpu: 0.3866933699489996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.050024058365642,
            "unit": "ms/iter",
            "extra": "iterations: 257\ncpu: 6.049609338521401 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 48.576533607142586,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 48.57285357142856 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.1537083749991,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.13941249999996 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 557.3347570000067,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 557.2908000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 958.6835119999932,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 958.6092000000006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.441867547945228,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.44115547945206 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 21.22691523076944,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 21.22520769230768 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 50.40350880000233,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 50.398970000000176 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5080439259530696,
            "unit": "ms/iter",
            "extra": "iterations: 1364\ncpu: 0.5080066715542518 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.438669278480966,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.438374683544302 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.044393724138523,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.043651724137954 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0007964282720411154,
            "unit": "ms/iter",
            "extra": "iterations: 871780\ncpu: 0.0007963433435040957 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004462705731578805,
            "unit": "ms/iter",
            "extra": "iterations: 157618\ncpu: 0.0044622574832823714 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013723881558838979,
            "unit": "ms/iter",
            "extra": "iterations: 51038\ncpu: 0.013723310082683451 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9296736972226909,
            "unit": "ns/iter",
            "extra": "iterations: 753268918\ncpu: 0.9295949736771155 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9518575352325072,
            "unit": "ns/iter",
            "extra": "iterations: 740910092\ncpu: 0.9517870084566207 ns\nthreads: 1"
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
          "id": "279dab7027411bc7bad9cb5a93ae429ffd80f0df",
          "message": "[CURA-11157] Remove 'support_interface_skip_height' setting",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2009/commits/279dab7027411bc7bad9cb5a93ae429ffd80f0df"
        },
        "date": 1704888199974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.4011959354960265,
            "unit": "ms/iter",
            "extra": "iterations: 2651\ncpu: 0.4011710675216899 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.010920921568743,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.010303529411765 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.502771107141534,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.49967500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 165.70793585714227,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 165.70071428571418 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 549.8592099999939,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 549.8428500000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 959.7000770000363,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 959.6105999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.361101285714304,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.360523809523804 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.82453043589666,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.82306153846152 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.86814842857208,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.86233571428567 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5031506604316799,
            "unit": "ms/iter",
            "extra": "iterations: 1390\ncpu: 0.5030994964028779 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.36865946249938,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.368231874999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 11.971286457626281,
            "unit": "ms/iter",
            "extra": "iterations: 59\ncpu: 11.97064237288133 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0007955643855068216,
            "unit": "ms/iter",
            "extra": "iterations: 873240\ncpu: 0.000795485891622006 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.00455359795717345,
            "unit": "ms/iter",
            "extra": "iterations: 153317\ncpu: 0.004553253716156723 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.014142703952047649,
            "unit": "ms/iter",
            "extra": "iterations: 49215\ncpu: 0.014141956720512081 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9334876563526371,
            "unit": "ns/iter",
            "extra": "iterations: 752324144\ncpu: 0.9334071033083874 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9517419888413153,
            "unit": "ns/iter",
            "extra": "iterations: 740848144\ncpu: 0.9516827513304799 ns\nthreads: 1"
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
          "id": "ef0284271d1c1bf21bb37aefbb3e0008f865267a",
          "message": "Fix some convex hull related issues",
          "timestamp": "2024-01-09T03:18:04Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2011/commits/ef0284271d1c1bf21bb37aefbb3e0008f865267a"
        },
        "date": 1704912753887,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.38907202722118195,
            "unit": "ms/iter",
            "extra": "iterations: 2645\ncpu: 0.38905746691871457 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.008601078125064,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 6.008434765624999 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.50709953571329,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.505421428571424 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 164.12275499999396,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 164.11492500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 547.4780290000467,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 547.4676000000001 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 945.6437540000024,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 945.6287999999997 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.397826191780713,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 6.397543150684935 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.906718641025435,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.90570769230769 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 55.008003642853964,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 55.005085714285606 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5044357261470833,
            "unit": "ms/iter",
            "extra": "iterations: 1373\ncpu: 0.5044089584850697 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.470055772152378,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.469862658227841 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.072583862067765,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.07196724137931 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008164822218036528,
            "unit": "ms/iter",
            "extra": "iterations: 859986\ncpu: 0.0008164505003569798 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004545852394158535,
            "unit": "ms/iter",
            "extra": "iterations: 154689\ncpu: 0.00454573693022775 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.01372067288762697,
            "unit": "ms/iter",
            "extra": "iterations: 50796\ncpu: 0.013719883455390177 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9312554127502368,
            "unit": "ns/iter",
            "extra": "iterations: 751914428\ncpu: 0.9312366858852213 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9296277747552755,
            "unit": "ns/iter",
            "extra": "iterations: 752350019\ncpu: 0.9296115934570085 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "c.lamboo@ultimaker.com",
            "name": "Casper Lamboo",
            "username": "casperlamboo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f31b2c627fb804e62ab664c2ec0285e3e59eb703",
          "message": "[CURA-11157] Remove 'support_interface_skip_height' setting (#2009)",
          "timestamp": "2024-01-10T19:51:00+01:00",
          "tree_id": "41cfbe11b5df0d2a3029cd552fba47535daee127",
          "url": "https://github.com/Ultimaker/CuraEngine/commit/f31b2c627fb804e62ab664c2ec0285e3e59eb703"
        },
        "date": 1704913261191,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3813362304093418,
            "unit": "ms/iter",
            "extra": "iterations: 2565\ncpu: 0.3813269395711501 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 6.004221231372706,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 6.004119215686274 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.59685635714358,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.59634642857145 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 163.16265137500352,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 163.16121250000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 551.53416349998,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 551.5256000000002 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 950.1468800000339,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 950.1213999999995 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.480591013605342,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.480234693877551 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.783073410257202,
            "unit": "ms/iter",
            "extra": "iterations: 39\ncpu: 20.782951282051307 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.525278642854246,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.52468571428579 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.5106357487065853,
            "unit": "ms/iter",
            "extra": "iterations: 1353\ncpu: 0.5106278640059136 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.43259143670891,
            "unit": "ms/iter",
            "extra": "iterations: 158\ncpu: 4.432585443037978 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.565770245614978,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.565919298245614 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008432439992292323,
            "unit": "ms/iter",
            "extra": "iterations: 866597\ncpu: 0.0008432474379671285 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004473915336719544,
            "unit": "ms/iter",
            "extra": "iterations: 155144\ncpu: 0.004473658665497869 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013779260408374142,
            "unit": "ms/iter",
            "extra": "iterations: 50248\ncpu: 0.013779113596561032 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9356656290502415,
            "unit": "ns/iter",
            "extra": "iterations: 753981290\ncpu: 0.9356322356487079 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 1.2383240449525816,
            "unit": "ns/iter",
            "extra": "iterations: 565025107\ncpu: 1.2383290429605587 ns\nthreads: 1"
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
          "id": "3b52ae69c7d9d66146f105c0e1b8ea6f7a13e1da",
          "message": "Fix remaining raft issues",
          "timestamp": "2024-01-11T07:20:36Z",
          "url": "https://github.com/Ultimaker/CuraEngine/pull/2012/commits/3b52ae69c7d9d66146f105c0e1b8ea6f7a13e1da"
        },
        "date": 1704969978662,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "InfillTest/Infill_generate_connect/1/400",
            "value": 0.3856030784482776,
            "unit": "ms/iter",
            "extra": "iterations: 2320\ncpu: 0.3855824568965517 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/400",
            "value": 5.993322718749861,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 5.9930140625 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/800",
            "value": 47.53810249999901,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 47.53569285714286 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/800",
            "value": 166.95194225000165,
            "unit": "ms/iter",
            "extra": "iterations: 8\ncpu: 166.8674 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/1/1200",
            "value": 548.8161609999906,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 548.7969500000003 ms\nthreads: 1"
          },
          {
            "name": "InfillTest/Infill_generate_connect/0/1200",
            "value": 953.3882459999745,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 953.3762000000002 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/3",
            "value": 6.361916061224543,
            "unit": "ms/iter",
            "extra": "iterations: 147\ncpu: 6.361721768707484 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/15",
            "value": 20.774040749999756,
            "unit": "ms/iter",
            "extra": "iterations: 40\ncpu: 20.77365499999999 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/generateWalls/9999",
            "value": 54.60430928571571,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 54.60125714285713 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/3",
            "value": 0.4994704605839622,
            "unit": "ms/iter",
            "extra": "iterations: 1370\ncpu: 0.49943788321167887 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/15",
            "value": 4.4281894812499445,
            "unit": "ms/iter",
            "extra": "iterations: 160\ncpu: 4.428079374999994 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getRegionOrder/9999",
            "value": 12.150608999999593,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.150336206896542 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/3",
            "value": 0.0008499673307367222,
            "unit": "ms/iter",
            "extra": "iterations: 817986\ncpu: 0.0008499144239632462 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/15",
            "value": 0.004808948446621435,
            "unit": "ms/iter",
            "extra": "iterations: 149030\ncpu: 0.004808853251023295 ms\nthreads: 1"
          },
          {
            "name": "WallTestFixture/InsetOrderOptimizer_getInsetOrder/9999",
            "value": 0.013964728664943403,
            "unit": "ms/iter",
            "extra": "iterations: 49496\ncpu: 0.013964526426377943 ms\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_local",
            "value": 0.9287873179314619,
            "unit": "ns/iter",
            "extra": "iterations: 752720547\ncpu: 0.9287756296627322 ns\nthreads: 1"
          },
          {
            "name": "SimplifyTestFixture/simplify_slot_noplugin",
            "value": 0.9452720880059207,
            "unit": "ns/iter",
            "extra": "iterations: 723297410\ncpu: 0.9452584656704375 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}