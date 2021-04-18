import {NextFunction, Request, Response} from 'express';
import FavoriteService from "../services/favorite.service";
import {City} from "../interfaces/city.interface";
import {CreateCityDto, CreateCityIdDto} from "../dtos/weather.dto";


class FavoriteController {
    public favoriteService = new FavoriteService();

    public getFavoriteCities = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllUsersData: City[] = await this.favoriteService.findAllFavorites();
            res.status(200).json({data: findAllUsersData, message: 'findAll'});
        } catch (error) {
            next(error);
        }
    };

    public getCityById = async (req: Request, res: Response, next: NextFunction) => {
        const cityIdDto: CreateCityIdDto = req.params as unknown as CreateCityIdDto;

        try {
            const findOneUserData: City = await this.favoriteService.findCityById(cityIdDto);
            res.status(200).json({data: findOneUserData, message: 'findOne'});
        } catch (error) {
            next(error);
        }
    };

    public addCity = async (req: Request, res: Response, next: NextFunction) => {
        const cityDto: CreateCityDto = req.body;

        console.log(cityDto);

        try {
            const createUserData: City = await this.favoriteService.addToFavorites(cityDto);
            res.status(201).json({data: createUserData, message: 'created'});
        } catch (error) {
            next(error);
        }
    };

    public deleteCity = async (req: Request, res: Response, next: NextFunction) => {
        const cityIdDto: CreateCityIdDto = req.params as unknown as CreateCityIdDto;
        console.log(req.params)

        try {
            const deleteUserData: City = await this.favoriteService.deleteFromFavorites(cityIdDto);
            res.status(200).json({data: deleteUserData, message: 'deleted'});
        } catch (error) {
            next(error);
        }
    };
}

export default FavoriteController;
