import express from 'express';
import emailController from '../controllers/emailController';
import nodemailer from 'nodemailer'
const router = express.Router();

// router.get('/',emailController.getEvents);
// router.get('/:event_id', emailController);

router.post('/', emailController.handleSayHello); // handle the route at yourdomain.com/sayHello

// router.post('/',emailController.postEvent);

export default router;