import express from 'express';
import { index, store } from '../controllers/ProductController.js';

var router = express.Router();

router.post('/', store);
router.get('/', index);


export default router;