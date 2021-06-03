---
title: 문자열 편집 거리 String Edit Distance
slug: string-edit-distance
date: "2021-06-03"
---

# 동적 프로그래밍

### 문자열 편집 거리 String Edit Distance

[방송통신대] [알고리즘] [동적 프로그래밍]

문자열 편집 거리를 찾는 알고리즘은 두 개의 문자열 사이가 비슷한지 찾기 위해 사용한다. 두 문자열 X와 Y의 편집 거리(edit distance)는 문자열 X를 Y로 바꾸는데 필요한 연산의 최소 비용이다. 연산에는 삽입(delta I), 삭제(delta D), 변경 (delta C) 비용이 든다.

점화식을 만들기 위해, 3가지 경우를 생각해보자.

1) X의 마지막 글자가 Y의 마지막 글자와 같거나 같게 변경된 경우

2) X의 마지막 글자가 삭제된 경우

3) Y의 마지막 글자가 삽입된 경우

X = x1x2 ... xn 과 Y = y1y2 ... ym 간의 편집 거리를 E(i, j)로 표시하면, 점화식은

E(i, j) = min[

E(i-1, j) + delta D,

E(i, j-1) + delta I,

E(i-1, j-1) + (0 || delta C)

]

로 나타 낼 수 있다.

자바스크립트로 표현하면 아래와 같다.

```jsx
function main(x, y) {
  const ins = 1
  const del = 1
  const chg = 2

  const editDistanceTable = new Array(x.length)
  for (let i = 0; i < editDistanceTable.length; i++) {
    editDistanceTable[i] = new Array(y.length).fill(0)
  }

  for (let i = 1; i < x.length; i++) {
    editDistanceTable[i][0] = editDistanceTable[i-1][0] + del
  }
  for (let j = 1; j < y.length; j++) {
    editDistanceTable[0][j] = editDistanceTable[0][j-1] + ins
  }

  for (let i = 1; i < x.length; i++) {
    for (let j = 1; j < y.length; j++) {
      const change = x[i] === y[j] ? 0 : chg
      editDistanceTable[i][j] = Math.min(
        editDistanceTable[i-1][j] + del,
        editDistanceTable[i][j-1] + ins,
        editDistanceTable[i-1][j-1] + change
      )
    }
  }

  return editDistanceTable[x.length-1][y.length-1]
}

const x = 'snowy'
const y = 'sunny'

const res = main(x, y)
console.log(res)

/* 최종 결과 테이블
[
  [ 0, 1, 2, 3, 4 ],
  [ 1, 2, 1, 2, 3 ],
  [ 2, 3, 2, 3, 4 ],
  [ 3, 4, 3, 4, 5 ],
  [ 4, 5, 4, 5, 4 ]
]
*/
```