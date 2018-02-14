class Comparator {
  static getComparator(name){
    return comparators[name];
  }

  compare(first, second){
    throw new Error('Not implemented');
  }
}

class AscComparator extends Comparator {
  compare(first, second){
    return first > second;
  }
}

class DescComparator extends Comparator {
  compare(first, second){
    return first < second;
  }
}

const comparators = {
  'asc' : new AscComparator(),
  'desc': new DescComparator()
}
