import express from 'express'
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  
  const feedback = await prisma.feedback.create({
    data:{
      type: req.body.type,
      comment: req.body.comment,
      screenshot: req.body.screenshot,

    }
  })
  return res.status(201).json(feedback);
})

app.listen(3333, () => {
  console.log('HTTP server running! :D')
})