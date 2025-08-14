import express from 'express';
const router = express.Router();
import { login, register } from '../controllers/auth.js';




router.get("/", (req,res) => {
    res.send("Hello Auth route");
})

router.post("/register", register);
router.post("/login", login);
// Export the router
export default router;