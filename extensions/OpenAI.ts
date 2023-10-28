import OpenAI from 'openai';

export class OpenAi {

    private readonly openai = new OpenAI({
        apiKey: ''
    });

    public async getImage(): Promise<string> {
        const response = this.openai.createImage({
            prompt: '',
            n: 1,
            size: '1024x1024'
        });

        const image = response.data.data[0].url;

        return image;
    }
}
