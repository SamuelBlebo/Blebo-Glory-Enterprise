const path = require('path')
const express = require('express')
const dotenv = require("dotenv")
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')
const flash = require ('express-flash-messages')

// Load config
dotenv.config({path: './config/config.env'})

// passport config
require('./config/passport')(passport)


// Database Connection
connectDB()


// Initializing app
const app = express()


// Logging to the terminal
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs')


// flash
app.use(flash())


// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)
 
// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000

app.listen(PORT,
   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)