SELECT  [product_id]
       ,[product_name]
       ,[product_status]
       ,[category_id]
       ,[creationDate]
       ,[site_name]
       ,[montant]
FROM [dbo].[products]
WHERE [product_id]=@product_id