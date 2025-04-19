import { Injectable } from '@nestjs/common';
import { CreateWebsocketDto } from './dto/create-websocket.dto';
import { UpdateWebsocketDto } from './dto/update-websocket.dto';
import { Readfile, Writefile } from 'src/functions/functions';
import { Data } from 'src/types/types';

@Injectable()
export class WebsocketService {
  async create(createWebsocketDto: CreateWebsocketDto) {
    const message=await Writefile(createWebsocketDto);
    return message
  }

  async findAll():Promise<Data | undefined> {
    const datas=Readfile();
    return datas
  }

  async findOne(id: number) {
    const datas=await Readfile();
    const data=datas.find((data)=>data.id===id);
    return data
  }

  async update(id: number, updateWebsocketDto: UpdateWebsocketDto) {
    try {
      const datas = await Readfile();  
      const updatedData = datas.find((data) =>
        data.id === id ? { ...data, ...updateWebsocketDto } : data
      );
  
      await Writefile(updatedData);
      return "Xabar yangilandi";
    } catch (error) {
      return 'Error: ' + error.message;
    }
  }
  

  async remove(id: number) {
    const datas=await Readfile();
    const data=datas.filter((data)=>data.id!==id);
    await Writefile(data);
    return "Xabar o'chirildi";
  }
}
