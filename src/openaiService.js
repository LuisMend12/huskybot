import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const getOpenAIResponse = async (prompt) => {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",  // or "gpt-4"
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Error occurred.";
    }
};
