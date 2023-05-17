const mongoose = require("mongoose");

mongoose
	.connect("mongodb+srv://sarataurizs:123xd@cluster0.yz3wqzm.mongodb.net/")
	.then((db) => console.log("Base de datos conectada "))
	.catch((err) => console.log(err));
