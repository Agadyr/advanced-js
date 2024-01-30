const { QuizManager } = require("./QuizManager");
const {OutputManager} = require('./OutputManager');
const {InputReader} = require('./InputReader');
const { mockdata } = require("./mockdata");

describe("QuizManager", () => {
    let Quiz_Manager 
    let mock_data    
    let Output_Manager 
    let Input_Reader   
    beforeEach(() => {
        clgspy  =jest.spyOn(console,'log').mockImplementation(() => {})
        Output_Manager = new OutputManager()
        mock_data  = new mockdata()
        Input_Reader  = new InputReader()
        Quiz_Manager  = new QuizManager(mock_data.questions,Output_Manager,Input_Reader)
    })

    afterEach(() => {
        clgspy.mockRestore()
        Input_Reader.close()
    })

    test("start test question", () => {
        Quiz_Manager.startQuiz()
    
        expect(clgspy).toHaveBeenNthCalledWith(1, 'Question 1: Which generative AI technique is commonly used for generating realistic human faces?')

    });

    test("start test displayQuestion", () => {
        Quiz_Manager.displayQuestion()
    
        expect(clgspy).toHaveBeenNthCalledWith(1, 'Question 1: Which generative AI technique is commonly used for generating realistic human faces?')

    });

    test("start test answerQuestion", () => {
        const res = Quiz_Manager.answerQuestion()
    
        expect(res).toEqual(expect.any(Promise))

    });
});
