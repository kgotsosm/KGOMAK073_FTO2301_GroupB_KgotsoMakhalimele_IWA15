const data = {
	lists: [
	  ["first", [15, 11, 13, 7, 5]],
	  ["second", [2, 6, 8, 4, 14, 12, 10]],
	  ["third", [9, 3, 1]],
	],
  };
  
  const first = data.lists[0][1];
  const second = data.lists[1][1];
  const third = data.lists[2][1];
  
  const result = [];
  
  const extractBiggest = () => {
	if (first.length === 0) {
	  return second.length === 0 ? third.pop() : second.pop();
	}
  
	if (second.length === 0) {
	  return first.length === 0 ? third.pop() : first.pop();
	}
  
	if (third.length === 0) {
	  return first.length === 0 ? second.pop() : first.pop();
	}
  
	if (first[first.length - 1] >= second[second.length - 1] && first[first.length - 1] >= third[third.length - 1]) {
	  return first.pop();
	}
  
	if (second[second.length - 1] >= third[third.length - 1] && second[second.length - 1] >= first[first.length - 1]) {
	  return second.pop();
	}
  
	return third.pop();
  };
  
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)