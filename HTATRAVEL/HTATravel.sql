USE MASTER
drop database if exists HTATravel
go
CREATE DATABASE HTATravel
GO
USE HTATravel
GO
CREATE TABLE Users(
	MaNguoiDung int NOT NULL,
	TaiKhoan varchar(50) NULL,
	MatKhau varchar(100) NULL,
	HoTen nvarchar(150) NULL,
	Email varchar(50) NULL,
	SDT nchar(10) NULL
) ON [PRIMARY]
GO
CREATE TABLE Tour(
	MaVN int IDENTITY(1,1) primary key,
	[TenVN] nvarchar(150) NULL,
	[Anh1] varchar(250) NULL,
	[Anh2] varchar(250) NULL,
	[Anh3] varchar(250) NULL,
	[Anh4] varchar(250) NULL,
	[Anh5] varchar(250) NULL,
	Giasale int NULL,
	Giagoc int NULL,
	Luotxem int NULL,
	Chuongtrinh ntext NULL,
	IsDeleted BIT DEFAULT 0
)
GO
CREATE TABLE TourQT(
	MaQT int IDENTITY(1,1) primary key,
	[TenQT] nvarchar(150) NULL,
	[Anh1] varchar(250) NULL,
	[Anh2] varchar(250) NULL,
	[Anh3] varchar(250) NULL,
	[Anh4] varchar(250) NULL,
	[Anh5] varchar(250) NULL,
	Giasale int NULL,
	Giagoc int NULL,
	Luotxem int NULL,
	Chuongtrinh ntext NULL,
	IsDeleted BIT DEFAULT 0
)
GO
CREATE TABLE Tin(
	MaTin int IDENTITY(1,1) primary key,
	Tieude nvarchar(150) NULL,
	[Anh1] varchar(250) NULL,
	[Anh2] varchar(250) NULL,
	[Anh3] varchar(250) NULL,
	[Anh4] varchar(250) NULL,
	[Anh5] varchar(250) NULL,
	Ngaydang date NULL,
	Luotxem int NULL,
	Noidung ntext NULL,
	IsDeleted BIT DEFAULT 0
)
GO