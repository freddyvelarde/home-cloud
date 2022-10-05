import app from "./app";

const port = app.get("port");

app.listen(port, () => console.log(`The server is listing on port: ${port}`));
