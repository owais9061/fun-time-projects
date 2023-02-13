import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (reg, res)=> {
    res.status(200).send({
        message: 'Hanjee Kiddaaan??',
    })
})

app.post('/', async (req, res)=>{
    try {
        const prompt = req.body.prompt;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`, //! prompt found from above
            temperature: 0,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        res.status(200).send({
            bot: response.data.choices[0].text
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error })
    }
})


app.listen(5000, () => console.log("Server is Running on local port server http://localhost:5000"));