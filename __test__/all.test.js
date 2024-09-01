const allData= require("../all");

test("Check if Array contains 6 elements", ()=>{
  expect(allData.length).toBe(6);
})

test("Check if Array contains 6 elements 2nd Method", ()=>{
  expect(allData).toHaveLength(6);
})
test("Check if  'allData' contain 7 character", ()=>{
  expect("allData").toHaveLength(7);
});


test("Check if Array contains number 3", ()=>{
  expect(allData).toContain(3);
})

/* using ready function  */
test("Check if Array not contains number 7", ()=>{
  expect(allData).not.toContain(7);
})

/* if you use toBe */
test("Check if Array not contains number 0", ()=>{
  for (let i=0; i< allData.length; i++){
    expect(allData[i]).not.toBe(0);
  }
})


/*  */

test("Check if Array not contains number 0", ()=>{
  for (let i=0; i< allData.length; i++){
    expect(isNaN(allData[i])).toBe(false);
  }
})
/* check if there string */
test("Check if Array have no string 1st method", ()=>{
  for (let i=0; i< allData.length; i++){
    expect(isNaN(allData[i])).toBeFalsy();
  }
})
/* check if there string */
test("Check if Array have no string 1st method", ()=>{
  for (let i=0; i< allData.length; i++){
    expect(isNaN(allData[i])).not.toBeTruthy()
  }
})










/* check  first element  > 0 */

test("check first element  > 0",() => {
  expect(allData[0]).toBeGreaterThan(0);
})
test("check first element  > 1",() => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
})


test("check first element  < 5",() => {
  expect(allData[0]).toBeLessThanOrEqual(5);
})




test("Check For Undefined" ,() => {
  let a ;
  expect(a).toBeUndefined();
})



test("check for substring inside string by EegExp", () =>{
  let myString = "I love Elzero Web School";
  expect(myString).toMatch(/elzero/i);
})



test("check for substring inside string by EegExp", () =>{
  let myObject ={
    name: "Elzero",
    age: 20,
    city: "Jerusalem"
  };
  expect(myObject).toHaveProperty("name", "Elzero");
})

test("check for substring inside string by EegExp", () =>{
  let myObject ={
    name: "Elzero",
    age: 20,
    city: "Jerusalem"
  };
  expect(myObject).toHaveProperty("age");
})














/* //! create my own matcher */
/* the idea is create function smiler to toBeGreaterThan  */
/* 
  pass => functionality I create
  message => return message i write
*/

expect.extend({
  toBeLargerThan(received, target){
    const pass = received > target; // it like normal variable
    if (pass){
      return {
        message: () => `expected ${received} to be larger than ${target}`,
        pass: true // this pass mean that test passed
      }
    }else{
      return {
        message: () => `expected received: ${received} to be larger than target: ${target} but find target more than received `,
        pass: false // this pass mean that test failed
      }
    }
  }
})

test("Check if Number IS larger than Other numbers", () => {
  expect(10).toBeLargerThan(5)
})

// another try



expect.extend({
  toBeBetween(received, start,end){
    const pass = received > start && received < end; // it like normal variable
    if (pass){
      return {
        message: () => `expected ${received} to between ${start} and ${end}`,
        pass: true // this pass mean that test passed
      }
    }else{
      return {
        message: () => `expected received: ${received} to between ${start} and ${end} but find target is not between them `,
        pass: false // this pass mean that test failed
      }
    }
  }
})


test("Check if Number IS between", () => {
  expect(2010).toBeLargerThan(2000,2020)
})



/* //^ expect anything  video 16 from elzro*/
/* expect anything is accept anything else null or undefined */


test("Expect anything",()=>{
  let x;
  expect("osama").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
  // expect(x).toEqual(expect.anything());
})

/* //^ expect any(constructor) */
test("Expect any constructor",()=>{
  expect("Youssef").toEqual(expect.any(String));
  expect(10).toEqual(expect.any(Number));
})

test("expect array to be found in the main array",()=>{
  const myArray=[1, 2, 3, 4];
  expect(myArray).toEqual(expect.arrayContaining([1, 2, 3]))
})