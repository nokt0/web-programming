import {City} from "./city.interface";
import {User} from "./users.interface";

export interface FavoriteCities{
  cities: Array<City>
  user: User
}
