using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class productDetailsMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductType",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "AdditionFigure",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AxisFigure",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cylinder",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LensPower",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductType",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "AdditionFigure",
                table: "EyeDetails");

            migrationBuilder.DropColumn(
                name: "AxisFigure",
                table: "EyeDetails");

            migrationBuilder.DropColumn(
                name: "Cylinder",
                table: "EyeDetails");

            migrationBuilder.DropColumn(
                name: "LensPower",
                table: "EyeDetails");
        }
    }
}
