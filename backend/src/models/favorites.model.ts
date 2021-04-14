import {model, Schema, Document} from 'mongoose';
import {FavoriteCities} from "../interfaces/favorites.interface";

const favoritesSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  cities: [{
    type: Schema.Types.ObjectId,
    ref: 'City'
  }],
});

const favoriteCities = model<FavoriteCities & Document>('Favorite', favoritesSchema);

export default favoriteCities;
