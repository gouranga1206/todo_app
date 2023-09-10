import express, { Request, Response, Express } from "express";
import connectDB from "../db/connect";

const app:Express = express();

const port: string|number = process.env.PORT || 4000;



//database connection
connectDB();


app.get("/", (req: Request, res: Response) => {
  res.send(`Yes Running in localHost: ${port}`);
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});


