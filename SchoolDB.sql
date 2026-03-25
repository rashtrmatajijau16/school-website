USE master;
GO

IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'RashtramataJijauSchoolDB')
    CREATE DATABASE RashtramataJijauSchoolDB;
GO

USE RashtramataJijauSchoolDB;
GO

IF OBJECT_ID('dbo.ContactMessages', 'U') IS NOT NULL DROP TABLE dbo.ContactMessages;
GO
CREATE TABLE dbo.ContactMessages (
    Id            INT IDENTITY(1,1) PRIMARY KEY,
    FullName      NVARCHAR(100)  NOT NULL,
    Email         NVARCHAR(150)  NOT NULL,
    Phone         NVARCHAR(20)   NULL,
    Subject       NVARCHAR(200)  NULL,
    Message       NVARCHAR(MAX)  NOT NULL,
    CreatedAt     DATETIME2      NOT NULL DEFAULT GETUTCDATE(),
    IsRead        BIT            NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.Appointments', 'U') IS NOT NULL DROP TABLE dbo.Appointments;
GO
CREATE TABLE dbo.Appointments (
    Id                INT IDENTITY(1,1) PRIMARY KEY,
    ParentName        NVARCHAR(100)  NOT NULL,
    ChildName         NVARCHAR(100)  NOT NULL,
    Phone             NVARCHAR(20)   NOT NULL,
    Email             NVARCHAR(150)  NULL,
    ChildAge          INT            NULL,
    ClassApplyingFor  NVARCHAR(50)   NULL,
    PreferredDate     DATE           NOT NULL,
    PreferredTime     NVARCHAR(30)   NULL,
    AdditionalNotes   NVARCHAR(MAX)  NULL,
    Status            NVARCHAR(20)   NOT NULL DEFAULT 'Pending',
    CreatedAt         DATETIME2      NOT NULL DEFAULT GETUTCDATE()
);
GO

IF OBJECT_ID('dbo.Testimonials', 'U') IS NOT NULL DROP TABLE dbo.Testimonials;
GO
CREATE TABLE dbo.Testimonials (
    Id          INT IDENTITY(1,1) PRIMARY KEY,
    Name        NVARCHAR(100) NOT NULL,
    Role        NVARCHAR(100) NULL,
    Message     NVARCHAR(MAX) NOT NULL,
    IsActive    BIT           NOT NULL DEFAULT 1,
    SortOrder   INT           NOT NULL DEFAULT 0,
    CreatedAt   DATETIME2     NOT NULL DEFAULT GETUTCDATE()
);
GO

IF OBJECT_ID('dbo.Gallery', 'U') IS NOT NULL DROP TABLE dbo.Gallery;
GO
CREATE TABLE dbo.Gallery (
    Id          INT IDENTITY(1,1) PRIMARY KEY,
    Title       NVARCHAR(200) NOT NULL,
    ImageUrl    NVARCHAR(500) NOT NULL,
    Category    NVARCHAR(100) NULL,
    IsActive    BIT           NOT NULL DEFAULT 1,
    CreatedAt   DATETIME2     NOT NULL DEFAULT GETUTCDATE()
);
GO

INSERT INTO dbo.Testimonials (Name, Role, Message, SortOrder) VALUES
(N'Mrs. Snehal Patil',   N'Parent',                   N'From admission to academic progress, the school management and teachers have been highly supportive and caring. We are extremely satisfied with the quality education and values provided.', 1),
(N'Emily Smith',         N'Parent, enrolled a child',  N'From enrollment to graduation, they were exceptionally professional, friendly, and dedicated. We are thrilled with the experience and the school.', 2),
(N'Michael Johnson',     N'Parent, graduated a child', N'Positive atmosphere, great teamwork, dedicated staff, and wonderful people! I highly recommend them!', 3);
GO

PRINT 'Database schema created successfully.';
GO
