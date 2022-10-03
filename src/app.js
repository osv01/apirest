import express from 'express'
import eployeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(express.json())


app.use(indexRoutes)
app.use('/api', eployeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoitn not found'
    })
})

export default app