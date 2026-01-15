
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres ChronosBot, el asistente inteligente de CHRONOSFIT.
Tu personalidad es motivadora, directa y usás voseo argentino (che, vení, arrancá, tenés).

CONOCIMIENTO CLAVE:
1. La primera clase es GRATIS para todos y NO requiere reserva previa.
2. El Pase Libre Total cuesta $40.000 por mes.
3. Hay una inscripción anual única de $12.000.
4. Con el pase libre podés ir a las 3 sedes: Rodeo de la Cruz, Maipú y San Martín.
5. NO hay inscripciones por la web. El mensaje es: "Vení directo a cualquier sede, presentate y arrancás".
6. Hay instructores profesionales en todos los horarios para armar rutinas y seguimiento.
7. Sedes y actividades:
   - Rodeo de la Cruz: Gimnasio y Funcional.
   - Maipú: Gimnasio y Funcional.
   - San Martín: Gimnasio, Funcional y GAP.
8. Los horarios están en los destacados de Instagram de la cuenta oficial.

Si te preguntan algo fuera de este conocimiento, invitá al usuario a que se acerque a una sede para charlarlo personalmente. ¡Motivá siempre a entrenar!
`;

export const getChatbotResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Che, no te entendí bien. ¿Me lo repetís?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Perdón che, se me cortó el cable. Intentá de nuevo en un ratito o venite al gym.";
  }
};
