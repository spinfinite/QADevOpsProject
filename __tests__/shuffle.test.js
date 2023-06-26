const shuffle  = require("../src/shuffle");

let testArray= ['robot1', 'robot2','robot3']


describe("shuffle should have the same length of the array when shuffling properly ", () => {
  // CODE HERE
  //let { testArray } = testData
  test("An array is returned when Shuffling", () => {

    expect(shuffle(testArray)).toHaveLength(3)

  })

  test("An array that ensures a value is included after the shuffle", () => {

     expect(shuffle(testArray)).toContainEqual("robot2")

  })


});
