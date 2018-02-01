function produceDrivingRange(blockRange) {
  return function(x, y) {
    let nums = y.slice(0, 2) - x.slice(0, 2);
    debugger;
    if (blockRange > nums) {
      return `within range by ${blockRange - nums}`;
    } else {
      debugger;
      return `${nums - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(total) {
    return total * percent;
  };
}

function createDriver() {
  let id = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++id;
    }
  };
}
