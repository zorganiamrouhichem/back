import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { SupabaseService } from '../supabase/supabase.service';

@Module({
  controllers: [ImagesController],
  providers: [CloudinaryService, SupabaseService],
})
export class ImagesModule {}
