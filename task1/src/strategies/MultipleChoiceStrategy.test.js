const { MultipleChoiceStrategy } = require("./MultipleChoiceStrategy");

describe("MultipleChoiceStrategy", () => {
    test("MultipleChoiceStrategy modal test", () => {
        const data = new MultipleChoiceStrategy([1,3,4])

         expect(data).toEqual({"correctAnswers":[1,3,4],"maxAnswers":3})
    });

    test("MultipleChoiceStrategy modal right test", () => {
        const data = new MultipleChoiceStrategy([1,3,4])
        const res = data.checkAnswer([1,3,4])

         expect(res).toEqual(true)
    });


    test("MultipleChoiceStrategy modal false test", () => {
        const data = new MultipleChoiceStrategy([1,3,4])
        const res = data.checkAnswer([5])

         expect(res).toEqual(false)
    });
});
