import express from "express";
import router from "./routers/app-route.js";

const app = express();

app.use('/', router);
app.use('/about', router);
app.use('/contact', router);

app.listen(3000, ()=> console.log('Server berjalan dengan baik...'));