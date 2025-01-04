import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true 
});

export async function generateMoviePoster(movieTitle, description, genre) {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
        throw new Error('OpenAI API key is not configured');
    }

    try {
        console.log('Starting generation for:', movieTitle);
        
        const prompt = `Create a dramatic movie poster for "${movieTitle}". 
            Genre: ${genre}. 
            Description: ${description}. 
            Style requirements:
            - Professional cinematic movie poster
            - Dark, moody atmosphere
            - High contrast lighting
            - Movie poster ratio
            - Text should be minimal and elegant
            - Modern Hollywood poster style
            - Deep, rich colors with emphasis on darker tones`;
        
        console.log('Sending request to OpenAI...');
        
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        console.log('OpenAI Response:', response);

        if (!response.data || !response.data[0]) {
            throw new Error('No image data received from OpenAI');
        }

        console.log('Success! Generated image URL:', response.data[0].url);
        return response.data[0].url;

    } catch (error) {
        console.error('OpenAI API Error:', error);
        if (error.response) {
            console.error('Error details:', error.response.data);
        }
        throw new Error(error.message || 'Failed to generate image');
    }
} 