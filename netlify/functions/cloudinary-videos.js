/**
 * Netlify Serverless Function: cloudinary-videos
 *
 * Fetches all uploaded videos from Cloudinary (excluding built-in samples).
 * Reads bilingual captions from each video's Context metadata:
 *   caption_en  →  English caption
 *   caption_hi  →  Hindi caption
 *
 * To set captions: Cloudinary Dashboard → select video → Edit → Context → Add
 *
 * Endpoint: GET /.netlify/functions/cloudinary-videos
 */

export default async (req, context) => {
  const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
  const API_KEY    = process.env.CLOUDINARY_API_KEY;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET;

  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    return new Response(
      JSON.stringify({ error: 'Cloudinary env vars not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const credentials = btoa(`${API_KEY}:${API_SECRET}`);

  // context=true → Cloudinary returns the custom metadata (caption_en, caption_hi)
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/video?max_results=50&type=upload&context=true`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${credentials}` },
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(
        JSON.stringify({ error: 'Cloudinary API error', detail: text }),
        { status: res.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await res.json();

    const videos = (data.resources || [])
      // Exclude Cloudinary's built-in sample videos
      .filter((r) => !r.public_id.startsWith('samples/'))
      .map((r) => {
        // Context metadata comes back as r.context.custom (key-value object)
        const ctx = r.context?.custom || {};
        return {
          public_id: r.public_id,
          src:   `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${r.public_id}.mp4`,
          thumb: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,w_400,h_400,c_fill,q_auto/${r.public_id}.jpg`,
          created_at: r.created_at,
          // Bilingual captions — keys are "en" and "hi" in Cloudinary Context
          captionEn: ctx.en || '',
          captionHi: ctx.hi || '',
        };
      });

    // Sort oldest → newest so upload order determines display order
    videos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    return new Response(JSON.stringify({ videos }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Fetch failed', detail: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const config = {
  path: '/.netlify/functions/cloudinary-videos',
};
