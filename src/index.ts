import express from 'express'
import diaryRoutes from './routes/diaries'

const app = express()
app.use(express.json())


const PORT = 3000


app.get('/ping', (_req, res) => {
    console.log(new Date().toLocaleDateString() + ' - Someone pinged here!')
    res.send('pong')
})

app.use('/api/diaries', diaryRoutes)


app.listen(PORT, () => {
    console.log(`SERVER RUNING ON PORT ${PORT}`)
}) 