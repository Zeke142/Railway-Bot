require("dotenv").config();
const axios = require("axios");

async function testOpenAI() {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: "Hello, who are you?" }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Success! Response from OpenAI:");
    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error("❌ OpenAI API request failed:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}

testOpenAI();
