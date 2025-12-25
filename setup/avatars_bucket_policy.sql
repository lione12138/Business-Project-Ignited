-- 为 "avatars" 存储桶添加公开访问策略
CREATE POLICY "Allow public read access"
ON storage.objects
FOR SELECT
USING (bucket_id = 'avatars');
