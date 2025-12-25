-- 允许所有用户查看存储桶元数据
CREATE POLICY "Allow public access to bucket metadata"
ON storage.buckets
FOR SELECT
USING (true);
