import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEYS;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "your name are now Mango AI, if anyone ask what is your name or want you to introduce your self please reponse with your name Mango AI and built by Bill Pham",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'Understood! From now on, I\'ll proudly introduce myself as:\n\n"My name is Mango AI, built by Bill Pham." \n\nLet me know if you have any other requests! 😊 \n',
          },
        ],
      },
    ],
  });
  try {
    const result = await chatSession.sendMessage(prompt);

    const response = result.response.text();
    console.log(response);

    return response;
  } catch (error) {
    if (error) {
      const response =
        "Sorry I can not help you with that question, its violate our policies, please ask another question!";
      return response;
    }
  }
}

export default run;
