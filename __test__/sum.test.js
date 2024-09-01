const theSum = require("../sum");

// test(name, fn, timeout)  
// guess => it(name, fn, timeout)
// describe (name,fn)

// describe("Check The numbers sum total", ()=> {
//   test("Return 0 if No Number", ()=>{
//     expect(theSum()).toEqual(0);
//   })
// })

// test("return 0 number ",() => { 
//   expect(theSum()).toBe(0);
// });
// test("return a number",() => { 
//   expect(theSum(10)).toBe(10);
// });

// it("return sum 2 number",() => { 
//   expect(theSum(10,20)).toBe(30);
// });

// it("return sum 3 number",() => { 
//   expect(theSum(10,20,30)).toBe(60);
// });

// it("return sum 4 number",() => { 
//   expect(theSum(10,20,30,10)).toBe(70);
// });


// it("return the result number",() => { 
//   expect(theSum(10,20,30,10)).toBe(70);
// });

// ^ console.log([].reduce((a,b) => a +b,1));


describe("Check The numbers sum total", ()=> {
  describe("Check The no bumbers oir one number only", ()=> {
    test("Return 0 if No Number", ()=>{
        expect(theSum()).toEqual(0);
      });
      test("return the number ",() => { 
        expect(theSum(10)).toBe(10);
      });
    })
  describe("for more than one number",() => {
    it("return sum 2 number",() => { 
      expect(theSum(10,20)).toBe(30);
    });

    it("return sum 3 number",() => { 
      expect(theSum(10,20,30)).toBe(60);
    });

    it("return sum 4 number",() => { 
      expect(theSum(10,20,30,10)).toBe(70);
    });


    it("return the result number",() => { 
      expect(theSum(10,20,30,10)).toBe(70);
    });

  })
})

