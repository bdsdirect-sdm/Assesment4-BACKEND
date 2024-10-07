import express from 'express';
import { upload } from '../middleware/upload';
import { addUser, getUser, updateUser } from '../controllers/userController';

const router = express.Router();

// Route to create a new user
router.post('/', upload.fields([{ name: 'profile_photo' }, { name: 'appointment_letter' }]), addUser);

// Route to get a user's details by ID
router.get('/:id', getUser);

// Route to update a user's details by ID
router.put('/:id', upload.fields([{ name: 'profile_photo' }, { name: 'appointment_letter' }]), updateUser);

export default router;


























// import { Router } from 'express';
// import { createUser, getUser, updateUser } from '../controllers/userController';
// import { body } from 'express-validator';
// import multer from 'multer';

// const router = Router();
// const upload = multer({ dest: 'uploads/' });

// // Validation middleware
// const userValidation = [
//   body('firstName').notEmpty().withMessage('First name is required'),
//   body('lastName').notEmpty().withMessage('Last name is required'),
//   body('email').isEmail().withMessage('Valid email is required'),
//   body('homeAddress').notEmpty().withMessage('Home address is required'),
//   body('homeCity').notEmpty().withMessage('Home city is required'),
//   body('homeState').notEmpty().withMessage('Home state is required'),
//   body('homeZip').isLength({ min: 6, max: 6 }).withMessage('Home zip must be 6 digits'),
//   body('companyAddress').notEmpty().withMessage('Company address is required'),
//   body('companyCity').notEmpty().withMessage('Company city is required'),
//   body('companyState').notEmpty().withMessage('Company state is required'),
//   body('companyZip').isLength({ min: 6, max: 6 }).withMessage('Company zip must be 6 digits'),
// ];

// router.post('/', upload.fields([{ name: 'profilePhoto' }, { name: 'appointmentLetter' }]), userValidation, createUser);
// router.get('/:id', getUser);
// router.put('/:id', upload.fields([{ name: 'profilePhoto' }]), userValidation, updateUser);

// export default router;
