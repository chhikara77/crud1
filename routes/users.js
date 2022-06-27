import express from 'express';
const router = express.Router();

import { getuser,createuser,getbyid, deletebyid, updatebyid } from '../controller/userController.js';

router.get('/',getuser);

router.post('/',createuser);

router.get('/:id',getbyid);

router.delete("/:id",deletebyid)

router.patch("/:id",updatebyid)

export default router;