// AI Perspective Worker - 主要处理 AI 相关的请求调度

async function handleGeminiChat(request, env) {
  try {
    if (!env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY 环境变量未设置');
    }

    const { messages } = await request.json();
    if (!messages || !Array.isArray(messages)) {
      throw new Error('无效的消息格式');
    }

    const lastMessage = messages[messages.length - 1].content;
    console.log('Processing message:', lastMessage);

    const requestBody = {
      contents: [{
        parts: [{
          text: lastMessage
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    };

    console.log('Sending request to Gemini API with body:', JSON.stringify(requestBody));
    
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.GEMINI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Gemini API response status:', response.status);
    const data = await response.json();
    console.log('Gemini API response data:', JSON.stringify(data));
    
    if (!response.ok) {
      console.error('Gemini API error response:', data);
      throw new Error(`Gemini API 错误: ${data.error?.message || response.statusText}`);
    }

    if (data.error) {
      console.error('Error in response data:', data.error);
      throw new Error(data.error.message || '请求失败');
    }

    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      console.error('Invalid response format:', data);
      throw new Error('Gemini API 返回了无效的响应格式');
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error in handleGeminiChat:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

export default {
  async fetch(request, env) {
    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    const url = new URL(request.url);
    
    // 路由处理
    switch (url.pathname) {
      case '/api/chat':
        return handleGeminiChat(request, env);
      default:
        return new Response('Not Found', { status: 404 });
    }
  },
};
