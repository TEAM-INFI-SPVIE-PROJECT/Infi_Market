SELECT [user_id]
    ,[last_name]
    ,[first_name]
    ,[role_id]
    ,[email]
    ,[password]
FROM [dbo].[users]
WHERE [user_id]=@user_id