import express from 'express';
const router = express.Router();
import Hotel from '../models/Hotels.js';
import { creatHotel,updateHotel,deleteHotel,getHotel,getAllHotels } from '../controllers/hotel.js';

//Add Hotel

router.post("/",creatHotel);
// update Hotel
router.put("/:id",updateHotel);
// Delete Hotel
router.delete("/:id",deleteHotel);
// Get Hotel
router.get("/:id", getHotel);
// Get All Hotels
router.get("/", getAllHotels);


// Export the router
export default router;