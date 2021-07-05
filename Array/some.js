const nums = [3,3,3,2];

function par(){
   for(let row in nums){
       if(nums[row] % 2 == 0){
          return true;
       }
   }
   return false;
}

console.log(nums.some( par ));

