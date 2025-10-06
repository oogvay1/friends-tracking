import express from "express"
import cors from "cors";
import locationRoute from "./routers/location.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/geolocation', locationRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});