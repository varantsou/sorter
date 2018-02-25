class Sorter {
  constructor() {
    this.array = [];
    this.defaultComparator = (left,right) => left - right;
    this.comparator = this.defaultComparator;
  }
 
  add(element) {
    this.array.push(element);
  }
 
  at(index) {
    return this.array[index];
  }
 
  get length() {
    return this.array.length;
  }
 
  toArray() {
    return this.array;
  }
 
  sort(indices) {
    var sortedArray = [];
    indices.sort(this.defaultComparator);
    for(var i = 0; i < indices.length; i++){
      sortedArray.push(this.array[indices[i]]);
    }
    sortedArray.sort(this.comparator);
 
    for(var i = 0; i < indices.length; i++){
      this.array[indices[i]] = sortedArray[i];
    }
  }
 
  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
 
module.exports = Sorter;
