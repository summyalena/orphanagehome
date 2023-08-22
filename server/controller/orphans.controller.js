import Orphans from '../model/orphans.model.js';

export const getOrphans = async (req, res) => {
  try {
    const orphans = await Orphans.find();
    res.status(200).json({
      message: 'Orphans fetched successfully',
      orphans,
      status: 200,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOrphan = async (req, res) => {
  const orphan = req.body;

  try {
    await Orphans.create(orphan);
    res
      .status(201)
      .json({ message: 'Orphan created successfully', status: 201 });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
