import Donator from '../model/donators.model.js';

export const getDonators = async (req, res) => {
  try {
    const donators = await Donator.find();
    res.status(200).json({
      message: 'Donators fetched successfully',
      donators,
      status: 200,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDonator = async (req, res) => {
  const donator = req.body;

  console.log(donator);

  try {
    await Donator.create(donator);

    res
      .status(201)
      .json({ message: 'Donator created successfully', status: 201 });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
