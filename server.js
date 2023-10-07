const sequelize = require('./config/database');

const App = require('./app');

const port = process.env.PORT || 5000;

const connectServer = async () => {
  try {
    await sequelize.sync();
    App.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

connectServer();
