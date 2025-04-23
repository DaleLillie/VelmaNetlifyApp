
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

exports.handler = async function (event, context) {
  const { message } = JSON.parse(event.body);

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: message }],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ reply: completion.data.choices[0].message.content }),
  };
};
