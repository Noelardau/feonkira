

const bodyParser = require("body-parser")

let cors = require("cors")
const starter = require("./route")
const app = starter.express()





app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(starter.router)







app.listen(5000)