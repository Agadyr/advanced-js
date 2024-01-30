const { MultipleChoiceStrategy } = require("./strategies/MultipleChoiceStrategy");
const {
    MultipleCorrectAnswersStrategy,
} = require("./strategies/MultipleCorrectAnswersStrategy");
const { SingleAnswerStrategy } = require("./strategies/SingleAnswerStrategy");
const {Question} = require('./Question');
const { mockdata } = require("./mockdata");


describe("Question", () => {
    let mock_data

    beforeEach(() => {
        mock_data = new mockdata()
    })
    test("structure test", () => {
        const res = new Question(
            "Which generative AI technique is commonly used for generating realistic human faces?",
            [
                "Variational Autoencoders (VAEs)",
                "Generative Adversarial Networks (GANs)",
                "Recurrent Neural Networks (RNNs)",
                "Deep Belief Networks (DBNs)",
            ],
            new SingleAnswerStrategy([2])
        )
        expect(res).toEqual(mock_data.mq1)
    });

    test("structure test", () => {
        const res = new Question(
            "Which of the following tasks can be accomplished using generative AI?",
            [
                "Image recognition",
                "Sentiment analysis",
                "Object detection",
                "Image super-resolution",
            ],
            new MultipleChoiceStrategy([1, 3, 4])
        )
        expect(res).toEqual(mock_data.mq2)
    });

    test("structure test", () => {
        const res =  new Question(
            "Select a correct generative AI technique:",
            [
                "Variational Autoencoders (VAEs)",
                "Generative Adversarial Networks (GANs)",
                "Recurrent Neural Networks (RNNs)",
                "Deep Belief Networks (DBNs)",
            ],
            new MultipleCorrectAnswersStrategy([1, 2, 4])
        )
        expect(res).toEqual(mock_data.mq3)
    });
});
