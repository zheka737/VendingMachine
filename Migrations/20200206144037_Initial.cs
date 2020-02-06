using Microsoft.EntityFrameworkCore.Migrations;

namespace VendingMachine.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BeverageTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<byte>(nullable: false),
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
                        .Annotation("SqlServer:Identity", "1, 1"),
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
                    BeverageTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantity = table.Column<int>(nullable: false),
                    BeverageTypeId1 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeverageStores", x => x.BeverageTypeId);
                    table.ForeignKey(
                        name: "FK_BeverageStores_BeverageTypes_BeverageTypeId1",
                        column: x => x.BeverageTypeId1,
                        principalTable: "BeverageTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoinTypeSettings",
                columns: table => new
                {
                    CoinTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Blocked = table.Column<bool>(nullable: false),
                    CoinTypeId1 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoinTypeSettings", x => x.CoinTypeId);
                    table.ForeignKey(
                        name: "FK_CoinTypeSettings_CoinTypes_CoinTypeId1",
                        column: x => x.CoinTypeId1,
                        principalTable: "CoinTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoinVaults",
                columns: table => new
                {
                    CoinTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Count = table.Column<int>(nullable: false),
                    CoinTypeId1 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoinVaults", x => x.CoinTypeId);
                    table.ForeignKey(
                        name: "FK_CoinVaults_CoinTypes_CoinTypeId1",
                        column: x => x.CoinTypeId1,
                        principalTable: "CoinTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeverageStores_BeverageTypeId1",
                table: "BeverageStores",
                column: "BeverageTypeId1");

            migrationBuilder.CreateIndex(
                name: "IX_CoinTypeSettings_CoinTypeId1",
                table: "CoinTypeSettings",
                column: "CoinTypeId1");

            migrationBuilder.CreateIndex(
                name: "IX_CoinVaults_CoinTypeId1",
                table: "CoinVaults",
                column: "CoinTypeId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeverageStores");

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
