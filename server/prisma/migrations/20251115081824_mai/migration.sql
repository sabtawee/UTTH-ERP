BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[webmes_User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] NVARCHAR(1000) NOT NULL,
    [fullName] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [department] NVARCHAR(1000),
    [plant] NVARCHAR(1000),
    [section] NVARCHAR(1000),
    [adDn] NVARCHAR(1000),
    [isActive] BIT NOT NULL CONSTRAINT [webmes_User_isActive_df] DEFAULT 1,
    [password] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [webmes_User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [webmes_User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [webmes_User_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [webmes_User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[webmes_Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [webmes_Role_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [webmes_Role_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[webmes_Permission] (
    [id] INT NOT NULL IDENTITY(1,1),
    [code] NVARCHAR(1000) NOT NULL,
    [module] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [webmes_Permission_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [webmes_Permission_code_key] UNIQUE NONCLUSTERED ([code])
);

-- CreateTable
CREATE TABLE [dbo].[webmes_UserRole] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userId] INT NOT NULL,
    [roleId] INT NOT NULL,
    CONSTRAINT [webmes_UserRole_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [webmes_UserRole_userId_roleId_key] UNIQUE NONCLUSTERED ([userId],[roleId])
);

-- CreateTable
CREATE TABLE [dbo].[webmes_RolePermission] (
    [id] INT NOT NULL IDENTITY(1,1),
    [roleId] INT NOT NULL,
    [permissionId] INT NOT NULL,
    CONSTRAINT [webmes_RolePermission_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [webmes_RolePermission_roleId_permissionId_key] UNIQUE NONCLUSTERED ([roleId],[permissionId])
);

-- AddForeignKey
ALTER TABLE [dbo].[webmes_UserRole] ADD CONSTRAINT [webmes_UserRole_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[webmes_User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[webmes_UserRole] ADD CONSTRAINT [webmes_UserRole_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[webmes_Role]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[webmes_RolePermission] ADD CONSTRAINT [webmes_RolePermission_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[webmes_Role]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[webmes_RolePermission] ADD CONSTRAINT [webmes_RolePermission_permissionId_fkey] FOREIGN KEY ([permissionId]) REFERENCES [dbo].[webmes_Permission]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
