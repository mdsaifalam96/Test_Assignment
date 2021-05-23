const app = require("express")();
const axios = require("axios");

app.get("/api/todos", async (req, res) => {
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
	res.json(data);
});

app.listen(5000, () => console.log("Listening on http://localhost:5000"))
