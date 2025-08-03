import { createHire } from "../model/hiremeModel";

export const createHireController = async (req, res) => {
  try {
    const { client, email, project_deteails } = req.body;

    if (!client || !email || !project_deteails) {
      return res.status(401).json({ message: "all fields are required" });
    }

    await createHire({ client, email, project_deteails });

    

    return res.status(200).json({
      success: true,
      message: "Hire request sent successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};
