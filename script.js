const myArr = [
  { id: 5, name: "Viola" },
  { id: 25, name: "Kristina" },
  { id: 3, name: "Simona" },
  { id: 2, name: "Ieva" },
  { id: 30, name: "Simona" },
  { id: 55, name: "Zymante" },
  { id: 40, name: "we" },
  { id: 52, name: "er" },
];

const newArr = [24, 55, 53, 12, 1, 6, 77, 4];
const newArr2 = ["fas", "sas", "cas", "zas", "aas", "bsf"];

//map custom method

const customMapFunc = (array, callback) => {
  const answer = [];
  for (i = 0; i < array.length; i++) {
    answer.push(callback(array[i], i, array));
  }
  return answer;
};

// filter

const customFilterFunc = (array, callback) => {
  const answer = [];
  array.forEach((item, index) => {
    if (callback(item, index, array)) {
      answer.push(item);
    }
  });
  return answer;
};

// every

const customEveryFunc = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
};

// .some

const customSomeFunc = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

// .reduce

const customReduceFunc = (array, callback) => {
  let acc = array[0];

  for (i = 0; array.length > i; i++) {
    acc = callback(acc, array[i], i, array);
  }

  return acc;
};

console.log(customReduceFunc(newArr2, (prev, curr) => prev + curr));
