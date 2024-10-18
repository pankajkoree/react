import cassandra from "cassandra-driver";
import path from "path";

let client;

export async function connectToCassandra() {
  if (!client) {
    // Resolve the secure connect bundle path
    const bundlePath = path.resolve(process.env.CASSANDRA_SECURE_CONNECT_BUNDLE_PATH);
    
    // Log the resolved path to the console
    console.log("Resolved secure connect bundle path:", bundlePath);
    
    client = new cassandra.Client({
      cloud: {
        secureConnectBundle: bundlePath, // Use the resolved path
      },
      credentials: {
        username: process.env.CASSANDRA_CLIENT_ID,
        password: process.env.CASSANDRA_CLIENT_SECRET,
      },
      keyspace: process.env.CASSANDRA_KEYSPACE,
    });

    try {
      await client.connect();
      console.log("Cassandra connected successfully");
    } catch (error) {
      console.error("Error connecting to Cassandra:", error);
      throw new Error("Could not connect to Cassandra");
    }
  }

  return client;
}
