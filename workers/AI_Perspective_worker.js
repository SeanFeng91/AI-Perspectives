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

    // 构建对话历史
    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    console.log('Processing conversation history:', contents);

    // 构建带有 API Key 的 URL
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`;
    
    const requestBody = {
      contents,
      generationConfig: {
        temperature: 0.3,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 10000,
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

    const headers = {
      'Content-Type': 'application/json'
    };

    console.log('Sending request to Gemini API...');
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    });

    console.log('Gemini API response status:', response.status);
    const data = await response.json();
    
    // 只在开发环境打印完整响应
    if (env.DEBUG) {
      console.log('Gemini API full response:', JSON.stringify(data));
    } else {
      console.log('Gemini API response structure:', {
        status: response.status,
        hasError: !!data.error,
        hasCandidates: !!data.candidates
      });
    }
    
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
    console.error('Error in handleGeminiChat:', {
      message: error.message,
      stack: error.stack
    });
    
    let errorMessage = error.message;
    if (errorMessage.includes('invalid authentication credentials')) {
      errorMessage = 'API Key 无效或认证失败，请检查 API Key 设置';
    }

    return new Response(JSON.stringify({ 
      error: errorMessage,
      details: env.DEBUG ? error.stack : undefined
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
