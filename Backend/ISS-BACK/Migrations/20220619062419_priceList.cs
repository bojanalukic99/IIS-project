using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class priceList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Price",
                table: "PriceLists",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ProductId",
                table: "PriceLists",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PriceLists_ProductId",
                table: "PriceLists",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_PriceLists_Products_ProductId",
                table: "PriceLists",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PriceLists_Products_ProductId",
                table: "PriceLists");

            migrationBuilder.DropIndex(
                name: "IX_PriceLists_ProductId",
                table: "PriceLists");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "PriceLists");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "PriceLists");
        }
    }
}
