import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface GenAIResponse {
  text: string;
  sources: Array<{ web?: { uri: string; title: string } }>;
}

export const generateRealEstateAdvice = async (
  prompt: string,
  systemContext: string
): Promise<GenAIResponse> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("No API_KEY provided. Returning mock response.");
      return {
        text: "I am currently in demo mode because no API Key was provided. In a live environment, I would analyze live market data for you.",
        sources: []
      };
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemContext,
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "I couldn't generate a response at this moment.";
    
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = groundingChunks
      .filter(chunk => chunk.web?.uri && chunk.web?.title)
      .map(chunk => ({
        web: {
          uri: chunk.web!.uri as string,
          title: chunk.web!.title as string
        }
      }));

    return { text, sources };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm having trouble connecting to the real estate knowledge base right now. Please try again later.",
      sources: []
    };
  }
};