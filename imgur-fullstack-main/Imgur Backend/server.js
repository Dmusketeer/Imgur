//init code
const express = require("express");
require("dotenv").config();
const morgan = require("morgan"); // Http request logger middleware
const bodyParser = require("body-parser"); // it parse the incoming request in middleware before the handlers.
const cors = require("cors");// provdes a connect/express middleware.
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;
const mongodbURI = `mongodb+srv://tdheeraj9a@gmail.com:Qwerty@1@cluster0.fbx4t.mongodb.net/Details?retryWrites=true&w=majority`;

const postRoutes = require("./api/routes/posts");
const userRoutes = require("./api/routes/user");


// mongoose connection code
mongoose.connect(mongodbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify:false
});
mongoose.Promise = global.Promise;

// the event will be called only once
mongoose.connection.once("open", () => {
	console.log("Database Connected...");
});

// Throw an error if the connection fails
mongoose.connection.on("error", (error) => {
	console.log("Error connecting database..."), error;
});


app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(require("./api/routes/auth")); //update later
app.use(require("./api/routes/post"));

//routes
app.get("/", (req, res) => res.send("Hello World!!!"));
// app.use("/posts", postRoutes);
// app.use("/user", userRoutes);


//middleware
app.use((req, res, next) => {
	const error = new Error("route not found");
	error.status = 404;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});


//listen on
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
