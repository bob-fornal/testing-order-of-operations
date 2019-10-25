const testableCode = {
  one: () => {},
  two: () => {},
  three: () => {},
  four: () => {},
  five: () => {},

  inOrder: () => {
    testableCode.one();
    testableCode.two();
    testableCode.three();
    testableCode.four();
    testableCode.five();
  },
  outOfOrder: () => {
    testableCode.one();
    testableCode.two();
    testableCode.three();
    testableCode.five();
    testableCode.four();
  }
};

describe('code: order of operations', function() {  
  it('tests specific order', function() {
    // WHITE BOX TESTED
    let order = '';

    spyOn(testableCode, 'one').and.callFake(function() { order += '1,'; });
    spyOn(testableCode, 'two').and.callFake(function() { order += '2,'; });
    spyOn(testableCode, 'three').and.callFake(function() { order += '3,'; });
    spyOn(testableCode, 'four').and.callFake(function() { order += '4,'; });
    spyOn(testableCode, 'five').and.callFake(function() { order += '5'; });

    testableCode.inOrder();

    expect(order).toBe('1,2,3,4,5');
  });

  it('tests out of order', function() {
    // WHITE BOX TESTED
    let order = '';

    spyOn(testableCode, 'one').and.callFake(function() { order += '1,'; });
    spyOn(testableCode, 'two').and.callFake(function() { order += '2,'; });
    spyOn(testableCode, 'three').and.callFake(function() { order += '3,'; });
    spyOn(testableCode, 'four').and.callFake(function() { order += '4,'; });
    spyOn(testableCode, 'five').and.callFake(function() { order += '5'; });

    testableCode.outOfOrder();

    expect(order).not.toBe('1,2,3,4,5');
  });

});