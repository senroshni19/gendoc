// pages/api/analyze.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4', // or "gpt-3.5-turbo" if you're using the free version
        messages: [
          {
            role: 'system',
            content: 'You are a legal assistant that simplifies complex legal language into plain English.'
          },
          {
            role: 'user',
            content: `Simplify this legal text:\n\n${text}`
          }
        ],
        temperature: 0.5
      })
    });

    const data = await response.json();
    const simplifiedText = data.choices?.[0]?.message?.content;

    res.status(200).json({ simplifiedText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to analyze text' });
  }
}
