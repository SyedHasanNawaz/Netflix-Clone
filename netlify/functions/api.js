const axios = require("axios");

exports.handler = async function (event) {
  const { OPENAI_KEY, TMDB_KEY } = process.env;
  const path = event.path.replace("/.netlify/functions/api", "");

  if (event.httpMethod === "POST" && path === "/chatbot") {
    // Chatbot proxy to OpenAI
    try {
      const body = JSON.parse(event.body);
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        body,
        {
          headers: {
            Authorization: `Bearer ${OPENAI_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    } catch (error) {
      return {
        statusCode: error.response?.status || 500,
        body: JSON.stringify(error.response?.data || { error: error.message }),
      };
    }
  }

  // TMDB proxy for GET requests
  if (event.httpMethod === "GET") {
    try {
      const url = `https://api.themoviedb.org/3${path}?api_key=${TMDB_KEY}&language=en-US`;
      const response = await axios.get(url);
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    } catch (error) {
      return {
        statusCode: error.response?.status || 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  return { statusCode: 404, body: "Not found" };
};
