const filterName = require("../input");


/* 
  test.only     != test.skip
  describe.only != test.skip
*/

describe("Valid the input field" , () =>{
  test("Check if Name is Empty", () =>{
    expect(filterName()).toBe("Unknown");
  });

  test("Check for space (start and end)", () =>{
    expect(filterName(" youssef ")).toBe("youssef");
  });

  test("if length name is more then 10 just return first 10 character ", () =>{
    expect(filterName(" youssefdegachi")).toBe("youssefdeg");
  });

  test("if name start with special characters", () =>{
    expect(filterName("_youssef")).toBe("youssef");
  })
})