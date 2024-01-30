const { OutputManager } = require("./OutputManager");
const {mockdata} = require('./mockdata');


describe("OutputManager", () => {
    let Output_Manager 

    beforeEach(() => {
        Output_Manager = new OutputManager
        clgspy  =jest.spyOn(console,'log').mockImplementation(() => {})
    })

    afterEach(() => {
        clgspy.mockRestore()
    })


    
    test("OutputManager test modal", () => {
        const text = 'hello madi'
        Output_Manager.display(text)
        expect(clgspy).toHaveBeenCalledWith(text)

    });
    test("OutputManager test modal green", () => {
        const text = 'hello madi'
        Output_Manager.display(text,'green')
        expect(clgspy).toHaveBeenCalledWith('\x1b[32m%s\x1b[0m',text)

    });
    test("OutputManager test modal red", () => {
        const text = 'hello madi'
        Output_Manager.display(text,'red')
        expect(clgspy).toHaveBeenCalledWith('\x1b[31m%s\x1b[0m',text)

    });
});
