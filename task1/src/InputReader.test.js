const { InputReader } = require("./InputReader");
const {mockdata} = require('./mockdata');
describe("InputReader", () => {
    let input_reader 
    let mock_data

    beforeEach(() => {
        input_reader = new InputReader
        mock_data = new mockdata
    })

    afterEach(() => {
        input_reader.close()
    })

    test("InputReader test modal", () => {
        const res = input_reader.readAnswers(mock_data.mq1)
        expect(res).toEqual(expect.any(Promise))

    });

    test("InputReader test modal", async() => {
        const res = await (new Promise((resolve) => {
            input_reader.handleAnswer('2',mock_data.mq1,'text',resolve)  
        }))
        expect(res).toEqual([2])

    });

    test("InputReader test modal", async() => {
        const invalidAnswers = 'Variational Autoencoders (VAEs)'
        const res = input_reader.getInvalidAnswers(invalidAnswers,mock_data.mq1)
        expect(res).toEqual([invalidAnswers])

    });
});
