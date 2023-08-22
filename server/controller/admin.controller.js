import Admin from '../model/admin.model.js';

export const loginAdmin = async (req, res) => {
  const admin = req.body;

  try {
    const adminFound = await Admin.findOne({ username: admin.username });
    if (adminFound) {
      if (adminFound.password === admin.password) {
        res.status(200).json({
          message: 'Admin logged in successfully',
          admin: adminFound,
          status: 200,
        });
      } else {
        res.status(404).json({
          message: 'Admin not found',
          status: 404,
        });
      }
    } else {
      res.status(404).json({
        message: 'Admin not found',
        status: 404,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signUpAdmin = async (req, res) => {
  const admin = req.body;

  try {
    await Admin.create(admin);
    res
      .status(201)
      .json({ message: 'Admin created successfully', status: 201 });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
