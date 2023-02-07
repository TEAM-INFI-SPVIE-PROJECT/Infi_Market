SELECT [email]
    ,[password]
FROM [dbo].[users]
WHERE [email]=@email AND [password]=@password