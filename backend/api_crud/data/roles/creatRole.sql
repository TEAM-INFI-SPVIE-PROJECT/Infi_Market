INSERT INTO [dbo].[roles]
    (
        [name]
    )
VALUES 
    (
        @name
    )

SELECT SCOPE_IDENTITY() AS role_id