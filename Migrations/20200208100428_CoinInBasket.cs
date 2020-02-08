using Microsoft.EntityFrameworkCore.Migrations;

namespace VendingMachine.Migrations
{
    public partial class CoinInBasket : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CoinsInBasket",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
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

            migrationBuilder.CreateIndex(
                name: "IX_CoinsInBasket_CoinTypeId",
                table: "CoinsInBasket",
                column: "CoinTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoinsInBasket");
        }
    }
}
