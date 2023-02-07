INSERT INTO [dbo].[users]
    (
        [last_name],
        [first_name],
        [role_id],
        [email],
        [password]
    )
VALUES 
    (
        @last_name,
        @first_name,
        @role_id,
        @email,
        @password
    )

SELECT SCOPE_IDENTITY() AS user_id