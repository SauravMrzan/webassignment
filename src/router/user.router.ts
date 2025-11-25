import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router: Router = Router();
const userController : UserController = new UserController();

router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserbyID);

router.post('/',userController.createUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

export default router;