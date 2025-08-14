import Hotel from '../models/Hotels.js';

export const creatHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
    console.log("Hotel saved successfully:", savedHotel);
  } catch (err) {
    next(err);
    console.error("Error saving hotel:", err);
  }
};

export const updateHotel = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedHotel = await Hotel.findByIdAndUpdate(
             id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHotel);
        console.log('Hotel updated successfully:', updatedHotel);
    } catch (err) {
        next(err);
        console.error('Error updating hotel:', err);
    }
};

export const deleteHotel = async (req, res, next) => {
try {
        const id = req.params.id;
        await Hotel.findByIdAndDelete(id);
        res.status(200).json("Hotel has been deleted.");
        console.log('Hotel deleted successfully:', id);
    } catch (err) {
        next(err);
        console.error('Error deleting hotel:', err);
    }
};
export const getHotel = async (req, res, next) => {
try {
        const id = req.params.id;
        const hotel = await Hotel.findById(id);
        res.status(200).json(hotel);
        console.log('Hotel retrieved successfully:', hotel);
    } catch (err) {
        next(err);
        //console.error('Error retrieving hotel:', err);
    }
};

export const getAllHotels = async (req, res, next) => {
    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
        console.log('Hotels retrieved successfully:', hotel);

    } catch (err) {
        next(err);
        //console.error('Error retrieving hotels:', err);
    }
}
