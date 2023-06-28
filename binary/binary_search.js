var search = function(nums, target) {

    left = 0
    right = nums.length - 1

    if (nums.length == 1) {
        if (nums[0] == target){
            return 0
        }
        else{
            return -1
        }
    }

    while(left <= right) {
        midPoint = Math.floor((left - right) / 2)
        console.log(left, right)
        if (nums[midPoint] == target) {
            return midPoint
        }

        if (nums[left] == target) {
            return left
        }
        else if (nums[right] == target) {
            return right
        } else {
            left += 1
            right -= 1
        }
        
    }

    return -1


};