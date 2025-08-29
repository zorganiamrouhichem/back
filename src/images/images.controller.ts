import { Controller, Post, UploadedFile, UseInterceptors, Req, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { SupabaseService } from '../supabase/supabase.service';
import { memoryStorage } from 'multer';


@Controller('images')
export class ImagesController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly supabaseService: SupabaseService
  ) {}

  @Post('upload')
@UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
async uploadImage(@UploadedFile() file: Express.Multer.File, @Req() req) {
    const imageUrl = await this.cloudinaryService.uploadImage(file);

  const user_id = '2ecbdc27-8593-462b-b4a6-d24f3218ab54'; // a valid UUID
await this.supabaseService.insertImage(user_id, imageUrl);


    return { imageUrl };
  }
  @Get()
  async getAllImages() {
    const images = await this.supabaseService.getAllImages();
    return images;
  }
}