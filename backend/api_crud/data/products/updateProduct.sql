UPDATE  [dbo].[products]
SET     [product_name]=@product_name,
        [product_status]=@product_status,
        [category_id]=@category_id,
        [creationDate]=@creationDate,
        [site_name]=@site_name,
        [montant]=@montant
WHERE [product_id]=@product_id