import { Router } from "express";
import { UserController } from "../../../interface/user.controller";

const router: Router = Router();

router.post("/", UserController.create);
router.get("/", UserController.list);

export default router;
