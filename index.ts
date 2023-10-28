import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('assets'));

app.get('/', (req, res: Response) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
