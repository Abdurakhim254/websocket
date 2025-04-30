import fs from 'fs';
import { Data } from 'src/types/types';

const filepath='C:\\Users\\Asus Vivobook\\Desktop\\new\\websocket\\src\\db\\data.json'


export const Readfile = async():Promise<Data | undefined> => {
    try {
        const data = fs.readFileSync(filepath, 'utf-8');
        return (await JSON.parse(data));
    } catch (error) {
        return undefined
    }
}

export const Writefile=async(writedatas)=>{
    try {
        const data=await Readfile();
        data.push(writedatas);
        fs.writeFileSync(filepath,JSON.stringify(data));
        return "Malumot yozildi"
    } catch (error) {
        return error.message
    }
}