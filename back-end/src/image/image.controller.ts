import { Controller } from "@nestjs/common";
import { ImageSerivce } from "./image.service";

@Controller('/image')
export class ImageController{
    constructor(private imageSerivce: ImageSerivce){}
}