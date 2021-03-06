import express from 'express';
import eventController from '../controllers/eventController';
import multer from 'multer';
const upload = multer({ dest: './uploads/events' });
const router = express.Router();

router.get('/',eventController.getEvents);
router.get('/:event_id', eventController.getSpecificEvent);
// router.get('/:guest_id', eventController.getSpecificGuest);
// router.get('/guest/:guest_id', eventController.getEventFromGuestId);

router.post('/postEvents', eventController.postEvent);
router.post('/postEventsWithImage',upload.single('eventImage'), eventController.postEventsWithImage);
router.put('/postInvite/:event_id', eventController.postInvite);
router.put('/guest/:event_id', eventController.postGuest);
router.put('/guest/update/:event_id', eventController.updateGuestInfo);
router.put('/guest/deleteGuest/:event_id', eventController.deleteGuest);
router.put('/host/:event_id', eventController.addNewHost)
router.put('/updateEvents/:event_id', eventController.updateEvents);
router.put('/updateEventsWithImage/:event_id',upload.single('eventImage'), eventController.updateEventsWithImage);

router.put('/:event_id', eventController.updateGuestResponse)

router.delete('/:event_id', eventController.deleteEvent);



export default router;
