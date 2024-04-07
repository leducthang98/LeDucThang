import { Router } from 'express';
import { controllerHandler } from '../../middleware/error-handler';
import { createStudentController, deleteStudentByIdController, getStudentDetailByIdController, getStudentListController, updateStudentByIdController } from './student.controller';

const path = '/student';
const router: Router = Router();

router.post('/create', controllerHandler(createStudentController));
router.get('/list', controllerHandler(getStudentListController));
router.get('/:id', controllerHandler(getStudentDetailByIdController));
router.delete('/:id', controllerHandler(deleteStudentByIdController));
router.put('/:id', controllerHandler(updateStudentByIdController));

export default { path, router };