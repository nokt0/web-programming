import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from "../middlewares/validation.middleware";
import {CreateUserDto} from "../dtos/users.dto";

class FavoriteCitiesRoutes implements Route {
  public path = '/favorite';
  public router = Router();
  public favoriteCitiesController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.favoriteCitiesController.logIn);
  }
}

export default FavoriteCitiesRoutes;
