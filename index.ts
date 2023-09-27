import express from 'express'
import router from './routes/user.routes';

const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

// app.get('/', async(req, res) => {
//     return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
// })

    app.listen(port, () => {
        console.log(`Server running on 4000`)
    })