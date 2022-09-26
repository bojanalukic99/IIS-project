using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class EquipmentAppMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "EquipmentsAppointments");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "EquipmentsAppointments");

            migrationBuilder.AlterColumn<int>(
                name: "Duration",
                table: "EquipmentsAppointments",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AddColumn<int>(
                name: "StartHoure",
                table: "EquipmentsAppointments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StartMinut",
                table: "EquipmentsAppointments",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StartHoure",
                table: "EquipmentsAppointments");

            migrationBuilder.DropColumn(
                name: "StartMinut",
                table: "EquipmentsAppointments");

            migrationBuilder.AlterColumn<float>(
                name: "Duration",
                table: "EquipmentsAppointments",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<float>(
                name: "EndTime",
                table: "EquipmentsAppointments",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "StartTime",
                table: "EquipmentsAppointments",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }
    }
}
