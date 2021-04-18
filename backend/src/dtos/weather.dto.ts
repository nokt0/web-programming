import { IsString } from 'class-validator';

export class CreateCityIdDto{
  @IsString()
  public apiId: string;
}

export class CreateCityDto extends CreateCityIdDto {
  @IsString()
  public name: string;
}

export class CreateCoordinatesDto {
  @IsString()
  public lon: string;

  @IsString()
  public lat: string;
}
