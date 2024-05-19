import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import { studentValidationSchema } from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    // Creating a schema validation suing  JOI

    const student = req.body.student
    const { error } = studentValidationSchema.validate(student)
    const result = await StudentServices.createStudentIntoDB(student)
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      })
    }

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    })
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'Students are Retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Students are Retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
