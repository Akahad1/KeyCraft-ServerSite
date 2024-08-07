import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

console.log(config.database);
async function main() {
  try {
    await mongoose.connect(config.database as string);
    const port = 5000;
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
