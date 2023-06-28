function recursiveBubbleSort (arr, arr_length) { 

    for(let i =0; i < arr_length - 1; i++) {

        if (arr[i] > arr[i + 1]){
            const temp = arr[i]
            arr[i] = arr[i + 1]
            arr[ i + 1 ] = temp
        }

    }
    
    if (arr_length > 1) {
        recursiveBubbleSort(arr, arr_length - 1)
    }

    return arr
}

console.log(recursiveBubbleSort(arr = [
    2,5,7,9,12,18,19,27,13
], arr.length))

