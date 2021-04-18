import HttpException from '../exceptions/HttpException';
import {CreateCityDto, CreateCityIdDto} from "../dtos/weather.dto";
import cityModel from "../models/cities.model";
import {City} from "../interfaces/city.interface";
import {isEmpty} from "../utils/util";

class FavoriteService {
    public favoriteCities = cityModel;

    async addToFavorites(cityData: CreateCityDto) : Promise<City> {
        if(isEmpty(cityData)) throw new HttpException(400, "You're not city name");

        const findCity: City = await this.favoriteCities.findOne(cityData );

        if (findCity) throw new HttpException(409, `You're city ${findCity.name} already exists`);

        return await this.favoriteCities.create({...cityData});
    }

    async deleteFromFavorites(cityIdDto: CreateCityIdDto) : Promise<City> {
        if(!cityIdDto) throw new HttpException(400, "You're not city name");
        const deleteCityByName: City = await this.favoriteCities.findOneAndDelete(cityIdDto);

        if (!deleteCityByName) throw new HttpException(409, "There is no city in the favorites");

        return deleteCityByName;
    }


    async findAllFavorites() : Promise<City[]> {
        return await this.favoriteCities.find();
    }

    public async findCityById(cityIdDto: CreateCityIdDto): Promise<City> {
        const foundCity: City = await this.favoriteCities.findOne(cityIdDto);
        if (!foundCity) throw new HttpException(409, "You're not user");

        return foundCity;
    }

}

export default FavoriteService;
