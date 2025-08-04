import createPool from "./db.js";

const db = await createPool();

export const createHireMeTable = async () => {
  try {
    await db.query(`
            CREATE TABLE IF NOT EXISTS hire_request (
            id INT AUTO_INCREMENT PRIMARY KEY,
            client VARCHAR(255),
            email VARCHAR(255),
            project_details TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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

    const [results] = await db.query(query, [client, email, project_details]);
    console.log(" hire request successfull ");
    return results;
  } catch (error) {
    console.log("something went wrong: ", error);
    throw error;
  }
};

export const getAllHireRequest = async () => {
  try {
    const [rows] = await db.query(`SELECT * FROM hire_request`);
    console.log("something went wrong");
    return rows;
  } catch (error) {
    console.log("error message: ", error);
    throw error;
  }
};
