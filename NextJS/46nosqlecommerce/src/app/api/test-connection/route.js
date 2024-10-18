// src/app/api/test-connection/route.js

import { connectToCassandra } from "../../../dbConfig/dbConfig"; // Ensure the path is correct

export async function GET(req) {
  try {
    const client = await connectToCassandra(); // Attempt to connect

    // Simple query to check if the connection works
    const query = 'SELECT table_name FROM system_schema.tables WHERE keyspace_name = ?';
    const result = await client.execute(query, [process.env.CASSANDRA_KEYSPACE], { prepare: true });

    // If the query is successful, return the table names
    const tableNames = result.rows.map(row => row.table_name);
    return new Response(JSON.stringify({ message: "Connection successful", tables: tableNames }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Connection test failed:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to Cassandra" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
