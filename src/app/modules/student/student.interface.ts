import { Schema, model, connect } from 'mongoose'
// 1. Create an interface representing a document in MongoDB.
export interface Guardian {
  fatherName: string
  fatherOccupation: string
  fatherContactNumber: string
  motherName: string
  motherOccupation: string
  motherContactNumber: string
}
export interface Student {
  id: string
  name: {
    firstName: string
    middleName?: string
    lastName: string
  }
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNumber: string
  emergencyContactNumber: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
}
