INSERT INTO [dbo].[sites]
    (
        [site_name]
    )
VALUES 
    (
        @site_name
    )

SELECT SCOPE_IDENTITY() AS site_id