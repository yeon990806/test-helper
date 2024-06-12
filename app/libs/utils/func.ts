/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export const shuffleArray = (arr: Array<any>) => {
	for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const detectMobileDevice = (agent: string) => {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]

  return mobileRegex.some(mobile => agent.match(mobile))
}

// const API_URL = "https://chat.openai.com/g/g-l86hooxVh-siheom-junbi-jeonmunga";
// const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// export const sendMessage = async (message: string) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "text-davinci-003",
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 150,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data.choices[0].text.trim();
//   } catch (error) {
//     console.error("sendMessage error:", error);
//     throw error;
//   }
// };1