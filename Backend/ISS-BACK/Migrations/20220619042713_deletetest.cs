using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class deletetest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Test",
                table: "OpticianAppointments");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Test",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
