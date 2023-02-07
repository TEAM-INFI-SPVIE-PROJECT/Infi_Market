INSERT INTO [dbo].[products]
    (
        [product_name],
        [product_status],
        [category_id],
        [creationDate],
        [site_name],
        [montant]
    )
VALUES 
    (
        @product_name,
        @product_status,
        @category_id,
        @creationDate,
        @site_name,
        @montant
    )

SELECT SCOPE_IDENTITY() AS product_id