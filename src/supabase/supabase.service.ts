import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
private supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_SERVICE_ROLE_KEY!
);

  async insertImage(user_id: string, url: string) {
    const { error } = await this.supabase
      .from('images')
      .insert({ user_id, image_url: url });

    if (error) throw error;
  }

  async getAllImages() {
  const { data, error } = await this.supabase
    .from('images')
    .select('*');

  if (error) throw error;
  return data;
}

}