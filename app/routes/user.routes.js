import express from 'express';
import {
    allAccess,
    userBoard,
    adminBoard,
    moderatorBoard,
} from '../controllers/user.controller.js';
import { 
    verifyToken,
    isAdmin,
    isModerator
} from '../middlewares/authjwt.js';  

const router = express.Router();

router.get('/all', allAccess);
router.get('/user', [verifyToken], userBoard);
router.get('/admin', [verifyToken, isAdmin], adminBoard);
router.get('/mod', [verifyToken, isModerator], moderatorBoard);

export default router;
