import React, { useState } from "react";
import { getOpenAIResponse } from "./openaiService";

const App = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        const aiResponse = await getOpenAIResponse(input);
        setResponse(aiResponse);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>OpenAI API in React</h1>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ask OpenAI..." 
            />
            <button onClick={handleSubmit}>Submit</button>
            <p><strong>Response:</strong> {response}</p>
        </div>
    );
};

export default App;
