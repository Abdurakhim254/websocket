import { PartialType } from '@nestjs/mapped-types';
import { CreateWebsocketDto } from './create-websocket.dto';

export class UpdateWebsocketDto extends PartialType(CreateWebsocketDto) {
  name?: string;
  email?: string;
  password?: string;
  description?: string;
  age?: number;
  title?: string;
 id?: number; 
}
