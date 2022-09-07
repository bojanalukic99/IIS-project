using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class startTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Duration",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "OpticianAppointments");

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartTime",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(float),
                oldType: "real");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "StartTime",
                table: "OpticianAppointments",
                type: "real",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<float>(
                name: "Duration",
                table: "OpticianAppointments",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "EndTime",
                table: "OpticianAppointments",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }
    }
}
