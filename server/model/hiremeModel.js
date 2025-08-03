import createPool from "./db.js";

const db = await createPool();

export const createHireMeTable = async () => {
  try {
    await db.query(`
            CREATE TABLE IF NOT EXISTS hire_request (
            id INT AUTO_INCREAMENT PRIMARY KEY,
            client VARCHAR(255),
            email VARCHAR(255),
            project_details TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRNET_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) 
            `);
    console.log("hire_request table created successfully");
  } catch (error) {
    console.log(error, " : something went wrong");
    throw error;
  }
};

export const createHire = async (hire) => {
  try {
    const { client, email, project_details } = hire;

    const query = `
          INSERT INTO hire_request (client, email, project_details) 
          VALUE(?, ?, ?)
        `;

    await db.query(query, [client, email, project_details]);
    console.log("")
  } catch (error) {}
};
