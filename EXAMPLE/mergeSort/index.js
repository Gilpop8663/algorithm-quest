// const input = require('fs').readFileSync(0, 'utf-8').trim();

let arr, tmp;

const mergeSort = (st, en) => {
  if (st + 1 === en) return;

  const mid = Math.floor((st + en) / 2);

  mergeSort(st, mid);
  mergeSort(mid, en);
  merge(st, en);
};

const merge = (st, en) => {
  const N = arr.length;
  const mid = Math.floor((st + en) / 2);
  let lIdx = st;
  let rIdx = mid;

  for (let i = st; i < en; i++) {
    if (lIdx === mid) {
      tmp[i] = arr[rIdx];
      rIdx += 1;
      continue;
    }

    if (rIdx === en) {
      tmp[i] = arr[lIdx];
      lIdx += 1;
      continue;
    }

    if (arr[lIdx] <= arr[rIdx]) {
      tmp[i] = arr[lIdx];
      lIdx += 1;
    } else {
      tmp[i] = arr[rIdx];
      rIdx += 1;
    }
  }

  for (let i = st; i < en; i++) {
    arr[i] = tmp[i];
  }
};

function solution(input) {
  const [info] = input.split('\n').map((item) => item.trim());

  arr = info.split(' ').map((item) => +item);
  tmp = Array.from({ length: arr.length }, () => 0);

  mergeSort(0, arr.length);

  answer = arr.join(' ');

  return answer;
}

// const output = console.log(solution(input));

module.exports = solution;
