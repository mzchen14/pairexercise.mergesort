describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([4,2,7,3,5])).toEqual([[4,2], [7,3,5]])
  });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect(merge([4,7],[2,3,5])).toEqual([2,3,4,5,7])
    });
});

describe('mergeSort function', function() {
  it('takes an array and returns a sorted array', function(){
    expect(mergeSort([18, 29, 412, 72, 107])).toEqual([18, 29, 72, 107, 412])
  })
})
