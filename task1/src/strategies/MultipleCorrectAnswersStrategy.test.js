const {
    MultipleCorrectAnswersStrategy,
} = require("./MultipleCorrectAnswersStrategy");

describe("MultipleCorrectAnswersStrategy", () => {
    describe("MultipleCorrectAnswersStrategy", () => {
        test("MultipleCorrectAnswersStrategy modal test", () => {
            const data = new MultipleCorrectAnswersStrategy([1,3,4])
    
             expect(data).toEqual({"correctAnswers":[1,3,4],"maxAnswers":1})
        });
    
        test("MultipleCorrectAnswersStrategy modal right test", () => {
            const data = new MultipleCorrectAnswersStrategy([1,3,4])
            const res = data.checkAnswer([1])

            expect(res).toEqual(true)
        });
    
    
        test("MultipleCorrectAnswersStrategy modal false test", () => {
            const data = new MultipleCorrectAnswersStrategy([1,3,4])
            const res = data.checkAnswer([5])
    
             expect(res).toEqual(false)
        });
    });
    
});
