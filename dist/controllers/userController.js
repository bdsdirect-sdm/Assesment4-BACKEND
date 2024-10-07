"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.addUser = void 0;
const Address_1 = require("../models/Address");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, company_address, company_city, company_state, company_zip, home_address, home_city, home_state, home_zip } = req.body;
        const user = yield Address_1.User.create({
            firstname,
            lastname,
            email,
            profile_photo: req.files['profile_photo'] ? req.files['profile_photo'][0].path : null,
        });
        console.log("Files:::", req.files['appointment_letter'].path);
        const address = yield Address_1.Address.create({
            company_address,
            company_city,
            company_state,
            company_zip,
            home_address,
            home_city,
            home_state,
            home_zip,
            appointment_letter: req.files['appointment_letter'] ? req.files['appointment_letter'][0].path : null,
            userId: user.id,
        });
        res.status(201).json({ user, address });
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
});
exports.addUser = addUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Address_1.User.findByPk(req.params.id, { include: Address_1.Address });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Error fetching user' });
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield Address_1.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        yield user.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            profile_photo: req.files['profile_photo'] ? req.files['profile_photo'][0].path : user.profile_photo,
            appointment_letter: req.files['appointment_letter'] ? req.files['appointment_letter'][0].path : null,
        });
        // Update or create address
        const address = yield Address_1.Address.findOne({ where: { userId: id } });
        if (address) {
            yield address.update(req.body);
        }
        else {
            yield Address_1.Address.create(Object.assign(Object.assign({}, req.body), { userId: user.id }));
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
    }
});
exports.updateUser = updateUser;
// import { Request, Response } from 'express';
// import User from '../models/User';
// import Address from '../models/Address';
// import { validationResult } from 'express-validator';
// // Create User
// export const createUser = async (req: any, res: any) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {
//     const user = await User.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       profilePhoto: req.file?.path,
//       appointmentLetter: req.file?.path,
//     });
//     // Handle addresses
//     const homeAddress = await Address.create({
//       userId: user.id,
//       addressType: 'Home',
//       address: req.body.homeAddress,
//       city: req.body.homeCity,
//       state: req.body.homeState,
//       zip: req.body.homeZip,
//     });
//     const companyAddress = await Address.create({
//       userId: user.id,
//       addressType: 'Company',
//       address: req.body.companyAddress,
//       city: req.body.companyCity,
//       state: req.body.companyState,
//       zip: req.body.companyZip,
//     });
//     res.status(201).json({ user, homeAddress, companyAddress });
//   } catch (error:any) {
//     res.status(500).json({ error: error.message });
//   }
// };
// // Get User
// export const getUser = async (req: any, res: any) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//       include: Address,
//     });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error:any) {
//     res.status(500).json({ error: error.message });
//   }
// };
// // Update User
// export const updateUser = async (req: any, res: any) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {
//     const user = await User.findByPk(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     user.firstName = req.body.firstName;
//     user.lastName = req.body.lastName;
//     user.email = req.body.email;
//     user.profilePhoto = req.file?.path;
//     await user.save();
//     // Update addresses similarly (fetch, modify, save)
//     res.json(user);
//   } catch (error:any) {
//     res.status(500).json({ error: error.message });
//   }
// };
