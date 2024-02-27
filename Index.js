import express from 'express';
import authRouter from './Routes/Auth.js'; // Adjust the path if necessary
import adminRouter from './Routes/Admin.js'; // Adjust the path if necessary
import userRouter from './Routes/Users.js'
import './Db.js'
const app = express();

app.use(express.json());

// Use routers
app.use('/', authRouter);
app.use('/admin', adminRouter);
app.use('/user',userRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
