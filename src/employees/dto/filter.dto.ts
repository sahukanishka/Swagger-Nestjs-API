import { ApiProperty } from '@nestjs/swagger';


export class FilterDto{
  @ApiProperty()
  skip: number;
  @ApiProperty()
  limit: number;
}
