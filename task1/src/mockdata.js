const { MultipleChoiceStrategy } = require("./strategies/MultipleChoiceStrategy");
const {
    MultipleCorrectAnswersStrategy,
} = require("./strategies/MultipleCorrectAnswersStrategy");
const { SingleAnswerStrategy } = require("./strategies/SingleAnswerStrategy");
const {Question} = require('./Question');

class mockdata{
    mq1 =    new Question(
        "Which generative AI technique is commonly used for generating realistic human faces?",
        [
            "Variational Autoencoders (VAEs)",
            "Generative Adversarial Networks (GANs)",
            "Recurrent Neural Networks (RNNs)",
            "Deep Belief Networks (DBNs)",
        ],
        new SingleAnswerStrategy([2])
    )
    mq2 = new Question(
        "Which of the following tasks can be accomplished using generative AI?",
        [
            "Image recognition",
            "Sentiment analysis",
            "Object detection",
            "Image super-resolution",
        ],
        new MultipleChoiceStrategy([1, 3, 4])
    )

    mq3 = new Question(
        "Select a correct generative AI technique:",
        [
            "Variational Autoencoders (VAEs)",
            "Generative Adversarial Networks (GANs)",
            "Recurrent Neural Networks (RNNs)",
            "Deep Belief Networks (DBNs)",
        ],
        new MultipleCorrectAnswersStrategy([1, 2, 4])
    )


    questions = [
    new Question(
        "Which generative AI technique is commonly used for generating realistic human faces?",
        [
            "Variational Autoencoders (VAEs)",
            "Generative Adversarial Networks (GANs)",
            "Recurrent Neural Networks (RNNs)",
            "Deep Belief Networks (DBNs)",
        ],
        new SingleAnswerStrategy([2])
    ),
    new Question(
        "What is the purpose of style transfer in generative AI?",
        [
            "Generating realistic human faces",
            "Converting text to speech",
            "Transferring artistic styles onto images",
            "Predicting stock market trends",
        ],
        new SingleAnswerStrategy([3])
    )
    ]


}


module.exports = {mockdata}