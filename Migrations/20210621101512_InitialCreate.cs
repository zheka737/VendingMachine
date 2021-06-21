using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VendingMachine.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BeverageTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<byte[]>(nullable: true),
                    Cost = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeverageTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CoinTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nominal = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoinTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BeverageStores",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Quantity = table.Column<int>(nullable: false),
                    BeverageTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeverageStores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BeverageStores_BeverageTypes_BeverageTypeId",
                        column: x => x.BeverageTypeId,
                        principalTable: "BeverageTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoinsInBasket",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CoinTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoinsInBasket", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoinsInBasket_CoinTypes_CoinTypeId",
                        column: x => x.CoinTypeId,
                        principalTable: "CoinTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoinTypeSettings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Blocked = table.Column<bool>(nullable: false),
                    CoinTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoinTypeSettings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoinTypeSettings_CoinTypes_CoinTypeId",
                        column: x => x.CoinTypeId,
                        principalTable: "CoinTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoinVaults",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Count = table.Column<int>(nullable: false),
                    CoinTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoinVaults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoinVaults_CoinTypes_CoinTypeId",
                        column: x => x.CoinTypeId,
                        principalTable: "CoinTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeverageStores_BeverageTypeId",
                table: "BeverageStores",
                column: "BeverageTypeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CoinsInBasket_CoinTypeId",
                table: "CoinsInBasket",
                column: "CoinTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CoinTypeSettings_CoinTypeId",
                table: "CoinTypeSettings",
                column: "CoinTypeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CoinVaults_CoinTypeId",
                table: "CoinVaults",
                column: "CoinTypeId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeverageStores");

            migrationBuilder.DropTable(
                name: "CoinsInBasket");

            migrationBuilder.DropTable(
                name: "CoinTypeSettings");

            migrationBuilder.DropTable(
                name: "CoinVaults");

            migrationBuilder.DropTable(
                name: "BeverageTypes");

            migrationBuilder.DropTable(
                name: "CoinTypes");
        }
    }
}
