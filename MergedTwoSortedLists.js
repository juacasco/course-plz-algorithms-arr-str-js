function mergeTwoSortedLists(nums1, nums2, m, n)
{
    let pointerNum1 = m-1;
    let pointerNum2 = n-1;

    for (let index = nums1.length -1; index >= 0; index--) {
        if (pointerNum1 < 0) {
            nums1[index] = nums2[pointerNum2];
            pointerNum2--;
        } else if (pointerNum2 < 0) {
            nums1[index] = nums1[pointerNum1];
            pointerNum1--;
        } else if (nums1[pointerNum1] >= nums2[pointerNum2]) {
            nums1[index] = nums1[pointerNum1];
            pointerNum1--;
        } else if (nums1[pointerNum1] < nums2[pointerNum2]) {
            nums1[index] = nums2[pointerNum2];
            pointerNum2--;
        }
    }
    return nums1;
}

const nums1 = [1,2,3,0,0,0,0]
const nums2 = [-4,2,3,9]
const m = 3;
const n = 4;
console.log(mergeTwoSortedLists(nums1,nums2,m,n));