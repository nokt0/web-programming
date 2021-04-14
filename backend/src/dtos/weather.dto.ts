import { IsString } from 'class-validator';

export class CreateCityDto {
  @IsString()
  public name: string;
}

export class CreateCoordinatesDto {
  @IsString()
  public lon: number;

  @IsString()
  public lat: number;
}
