// slice will give from start index to the end index
// slice cannot change the original array
const nums = [1,2,3,4,5,6,8,10];
const sliceit = nums.slice(2,5);
console.log(spliceit);
// splice will give from start to the length of the wanted array
// splice will get the spliced array out from the original one
const nums2 = nums;
const spliceit  = nums2.splice(2,5);
console.log(spliceit);
console.log(nums2);
