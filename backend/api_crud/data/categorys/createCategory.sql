INSERT INTO [dbo].[categorys]
    (
        [category_name],
        [user_id]
    )
VALUES 
    (
        @category_name,
        @user_id
    )

SELECT SCOPE_IDENTITY() AS product_id