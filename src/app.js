import express from 'express';
import connectDB from './config/db.js'
import explorerRouter from './routers/explorerRouter.js';


connectDB();


const app = express();
app.use(express.json());

app.use('/Expedition', expeditionRouter);
app.use('/Explorer', explorerRouter)
app.use('/Species', speciesRouter)


app.listen(3000, () => console.log('Server running on port 3000'));

