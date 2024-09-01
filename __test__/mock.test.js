const mocker = require("../mock");

test("Mock function", () => {
  const mocker = jest.fn((name)=> `Hello ${name}`);
  expect(mocker("Youssef")).toBe("Hello Youssef");
  expect(mocker("Osama")).toBe("Hello Osama");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(2);
  expect(mocker).toHaveBeenCalledWith("Youssef");
  expect(mocker).toHaveBeenLastCalledWith("Osama");
})