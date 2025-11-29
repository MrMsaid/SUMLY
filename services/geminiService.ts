import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeReceiptText = async (text: string): Promise<AnalysisResult> => {
  const model = "gemini-2.5-flash";

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      total: { type: Type.NUMBER, description: "Total amount of the receipt in UZS" },
      currency: { type: Type.STRING, description: "Currency code (e.g., UZS)" },
      items: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Product name" },
            amount: { type: Type.NUMBER, description: "Price of the item" },
            category: { type: Type.STRING, description: "Category (e.g., Food, Transport)" }
          }
        }
      },
      insight: { type: Type.STRING, description: "A brief analysis of the spending habits based on this receipt." },
      savingsTip: { type: Type.STRING, description: "A specific tip on how to save money on these types of items in Uzbekistan." }
    },
    required: ["total", "currency", "items", "insight", "savingsTip"]
  };

  const prompt = `
    Analyze the following text which represents a receipt or expense input in Uzbekistan.
    Identify the items, prices, and categorize them.
    Provide a helpful financial insight and a savings tip relevant to the Uzbek market.
    Input Text: "${text}"
  `;

  try {
    const result = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        systemInstruction: "You are a smart financial assistant for users in Uzbekistan. You understand local context, prices in Soums (UZS), and common retailers like Korzinka, Makro, etc."
      }
    });

    const responseText = result.text;
    if (!responseText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(responseText) as AnalysisResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};