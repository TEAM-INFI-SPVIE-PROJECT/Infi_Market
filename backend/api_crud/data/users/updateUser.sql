UPDATE  [dbo].[users]
SET     [last_name]=@last_name,
        [first_name]=@first_name,
        [role_id]=@role_id,
        [email]=@email,
        [password]=@password
WHERE [user_id]=@user_id