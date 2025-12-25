-- 创建名为 "avatars" 的存储桶
SELECT storage.create_bucket(
  bucket_name => 'avatars',
  is_public => true -- 设置为公开访问
);

-- 为 "avatars" 存储桶添加公开访问策略
-- 允许所有用户读取存储桶中的文件
CREATE POLICY "Allow public read access"
ON storage.objects
FOR SELECT
USING (bucket_id = 'avatars');
