let nums = [1,2,3,4,5,6,7,8,9];
let sum=0
let count=0
for(let i=0;i<nums.length;i++) {
  if(nums[i]%2==0) {
    sum+=nums[i]
    count+=1
  }
}
console.log(sum/count)