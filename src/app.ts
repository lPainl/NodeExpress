import express from 'express'
import templateRouter from './routes/template.routes'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.use('/', templateRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

export default app
