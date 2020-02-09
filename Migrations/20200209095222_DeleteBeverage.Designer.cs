﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VendingMachine.Model.DAL;

namespace VendingMachine.Migrations
{
    [DbContext(typeof(DbVendingMachineContext))]
    [Migration("20200209095222_DeleteBeverage")]
    partial class DeleteBeverage
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VendingMachine.Model.DAL.BeverageStore", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BeverageTypeId")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BeverageTypeId")
                        .IsUnique();

                    b.ToTable("BeverageStores");
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.BeverageType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Cost")
                        .HasColumnType("int");

                    b.Property<byte[]>("Image")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("BeverageTypes");
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinInBasket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CoinTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CoinTypeId");

                    b.ToTable("CoinsInBasket");
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Nominal")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("CoinTypes");
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinTypeSettings", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Blocked")
                        .HasColumnType("bit");

                    b.Property<int>("CoinTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CoinTypeId")
                        .IsUnique();

                    b.ToTable("CoinTypeSettings");
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinVault", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CoinTypeId")
                        .HasColumnType("int");

                    b.Property<int>("Count")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CoinTypeId")
                        .IsUnique();

                    b.ToTable("CoinVaults");
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.BeverageStore", b =>
                {
                    b.HasOne("VendingMachine.Model.DAL.BeverageType", "BeverageType")
                        .WithOne("BeverageStore")
                        .HasForeignKey("VendingMachine.Model.DAL.BeverageStore", "BeverageTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinInBasket", b =>
                {
                    b.HasOne("VendingMachine.Model.DAL.CoinType", "CoinType")
                        .WithMany()
                        .HasForeignKey("CoinTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinTypeSettings", b =>
                {
                    b.HasOne("VendingMachine.Model.DAL.CoinType", "CoinType")
                        .WithOne("CoinTypeSettings")
                        .HasForeignKey("VendingMachine.Model.DAL.CoinTypeSettings", "CoinTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VendingMachine.Model.DAL.CoinVault", b =>
                {
                    b.HasOne("VendingMachine.Model.DAL.CoinType", "CoinType")
                        .WithOne("CoinVault")
                        .HasForeignKey("VendingMachine.Model.DAL.CoinVault", "CoinTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}