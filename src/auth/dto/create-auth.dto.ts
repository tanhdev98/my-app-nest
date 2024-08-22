import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  email: string;

  @IsOptional()
  name: string;

  @IsNotEmpty()
  password: string;
}
