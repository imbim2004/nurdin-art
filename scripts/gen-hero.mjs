// Generate Hero image via Google Gemini (Nano Banana) image generation
import fs from 'node:fs';
import path from 'node:path';

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('GEMINI_API_KEY env var missing');
  process.exit(1);
}

const PROMPT = `A cinematic, editorial, atmospheric photograph of an oil painter's studio at night in Bishkek, Kyrgyzstan. Deep midnight indigo and warm candlelight tones. A single dramatic warm amber lamp casts a pool of light on a large finished oil painting on a wooden easel — the painting depicts the Kyrgyz Ala-Too mountain range in the style of Van Gogh, with thick impasto brushstrokes and vibrant color. Wooden easel in the foreground, dark studio walls fading into shadow, scattered oil paint tubes and brushes catching the golden light. The scene feels intimate, premium, gallery-like. Dominant palette: obsidian indigo #0D1624 background, champagne gold #D4A24C highlights, cream #F2EDE3 accents. Shallow depth of field, 35mm film aesthetic, moody and reverent. No text, no watermarks, no people. Wide cinematic aspect ratio 16:9.`;

async function generate() {
  const body = {
    contents: [{ parts: [{ text: PROMPT }] }],
    generationConfig: { responseModalities: ['IMAGE'] }
  };

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  );

  const txt = await res.text();
  if (!res.ok) {
    console.error('API error:', res.status, txt.slice(0, 500));
    process.exit(1);
  }

  const json = JSON.parse(txt);
  const parts = json?.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find(p => p.inlineData?.data);

  if (!imgPart) {
    console.error('No image in response:', JSON.stringify(json).slice(0, 800));
    process.exit(1);
  }

  const buf = Buffer.from(imgPart.inlineData.data, 'base64');
  const outPath = path.resolve('public/gen/hero.jpg');
  fs.writeFileSync(outPath, buf);
  console.log(`✓ hero saved: ${outPath} (${(buf.length / 1024).toFixed(0)}KB)`);
}

generate().catch(e => { console.error(e); process.exit(1); });
