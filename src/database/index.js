import mongoose from 'mongoose';
import config from '../config';

const { dbUrl } = config;

export default () => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  });

  mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB.');
  });

  mongoose.connection.on('error', err => {
    console.error(`Deu erro ${err}`);
  });
};
