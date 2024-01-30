const { SingleAnswerStrategy } = require("./SingleAnswerStrategy");

describe("SingleAnswerStrategy", () => {
    describe("SingleAnswerStrategy", () => {
        test("SingleAnswerStrategy modal test", () => {
            const data = new SingleAnswerStrategy([2])
    
             expect(data).toEqual({"correctAnswers":[2],"maxAnswers":1})
        });
        test("SingleAnswerStrategy modal right test", () => {
            const data = new SingleAnswerStrategy([1])
            const res = data.checkAnswer([1])

            expect(res).toEqual(true)
        });
    
    
        test("SingleAnswerStrategy modal false test", () => {
            const data = new SingleAnswerStrategy([1])
            const res = data.checkAnswer([5])
    
             expect(res).toEqual(false)
        });
    });
});
