"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = require("../middleware/upload");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
// Route to create a new user
router.post('/', upload_1.upload.fields([{ name: 'profile_photo' }, { name: 'appointment_letter' }]), userController_1.addUser);
// Route to get a user's details by ID
router.get('/:id', userController_1.getUser);
// Route to update a user's details by ID
router.put('/:id', upload_1.upload.fields([{ name: 'profile_photo' }, { name: 'appointment_letter' }]), userController_1.updateUser);
exports.default = router;
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
