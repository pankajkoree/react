const username = process.env.dbusername;
const password = process.env.dbpassword;

if (!username || !password) {
  throw new Error("Missing database credentials");
}
export const connectionString = `mongodb+srv://${username}:${password}@cluster0.qmuqy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0`;
