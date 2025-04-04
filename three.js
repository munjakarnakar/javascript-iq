var merge = function(nums1, m, nums2, n) {
    const nums11 = nums1.slice(0,m)
    const nums22 = nums2.slice(0,n)
    console.log(nums11, nums22)
    const finalArray = [...nums11,...nums22].sort()
    console.log(finalArray)
    return finalArray
};

merge([0],0,[1],1)