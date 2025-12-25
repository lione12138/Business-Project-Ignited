-- 允许用户插入或覆盖文件到 "avatars" 存储桶
CREATE POLICY "Allow user to insert or upsert files"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'avatars' AND auth.uid() IS NOT NULL);

-- 允许用户更新自己的文件
CREATE POLICY "Allow user to update their files"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'avatars' AND auth.uid() = owner);

-- 允许用户删除自己的文件
CREATE POLICY "Allow user to delete their files"
ON storage.objects
FOR DELETE
USING (bucket_id = 'avatars' AND auth.uid() = owner);

-- 允许所有用户读取 "avatars" 存储桶中的文件
CREATE POLICY "Allow public read access"
ON storage.objects
FOR SELECT
USING (bucket_id = 'avatars');
