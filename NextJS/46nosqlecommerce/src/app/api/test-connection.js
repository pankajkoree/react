
import { connectToAstra } from "../../dbConfig/dbConfig";

export default async function handler(req, res) {
  try {
    const client = await connectToAstra();

    // Simple query to check if the connection works
    const query =
      "SELECT table_name FROM system_schema.tables WHERE keyspace_name = ?";
    const result = await client.execute(
      query,
      [process.env.CASSANDRA_KEYSPACE],
      { prepare: true }
    );

    // If the query is successful, return the table names
    const tableNames = result.rows.map((row) => row.table_name);
    res
      .status(200)
      .json({ message: "Connection successful", tables: tableNames });
  } catch (error) {
    console.error("Connection test failed:", error);
    res.status(500).json({ error: "Failed to connect to Astra DB" });
  }
}
