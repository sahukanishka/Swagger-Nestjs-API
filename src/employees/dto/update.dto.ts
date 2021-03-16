import { ApiProperty } from '@nestjs/swagger';


export class UpdateDto{
  @ApiProperty()
  property_name: string;
  @ApiProperty()
  property_value: string;
}
