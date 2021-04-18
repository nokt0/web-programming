import { IsString } from 'class-validator';

export class CreateCityIdDto{
  @IsString()
  public apiId: string;
}

export class CreateCityNameDto{
  @IsString()
  public name: string;
}

export class CreateCityDto  {
  @IsString()
  public name: string;

  @IsString()
  public apiId: string;
}

export class CreateCoordinatesDto {
  @IsString()
  public lon: string;

  @IsString()
  public lat: string;
}
