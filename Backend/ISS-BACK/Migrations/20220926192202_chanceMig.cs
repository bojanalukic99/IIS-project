using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class chanceMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppForEquipments_OpticianAppointments_OpticianAppointmentId",
                table: "AppForEquipments");

            migrationBuilder.DropForeignKey(
                name: "FK_AppForEquipments_RequiredEquipments_RequiredEquipmentId",
                table: "AppForEquipments");

            migrationBuilder.RenameColumn(
                name: "RequiredEquipmentId",
                table: "AppForEquipments",
                newName: "OpticianId");

            migrationBuilder.RenameColumn(
                name: "OpticianAppointmentId",
                table: "AppForEquipments",
                newName: "EquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_AppForEquipments_RequiredEquipmentId",
                table: "AppForEquipments",
                newName: "IX_AppForEquipments_OpticianId");

            migrationBuilder.RenameIndex(
                name: "IX_AppForEquipments_OpticianAppointmentId",
                table: "AppForEquipments",
                newName: "IX_AppForEquipments_EquipmentId");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "AppForEquipments",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Duration",
                table: "AppForEquipments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StartTimeHoure",
                table: "AppForEquipments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StartTimeMinute",
                table: "AppForEquipments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_AppForEquipments_Equipments_EquipmentId",
                table: "AppForEquipments",
                column: "EquipmentId",
                principalTable: "Equipments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AppForEquipments_Users_OpticianId",
                table: "AppForEquipments",
                column: "OpticianId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppForEquipments_Equipments_EquipmentId",
                table: "AppForEquipments");

            migrationBuilder.DropForeignKey(
                name: "FK_AppForEquipments_Users_OpticianId",
                table: "AppForEquipments");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "AppForEquipments");

            migrationBuilder.DropColumn(
                name: "Duration",
                table: "AppForEquipments");

            migrationBuilder.DropColumn(
                name: "StartTimeHoure",
                table: "AppForEquipments");

            migrationBuilder.DropColumn(
                name: "StartTimeMinute",
                table: "AppForEquipments");

            migrationBuilder.RenameColumn(
                name: "OpticianId",
                table: "AppForEquipments",
                newName: "RequiredEquipmentId");

            migrationBuilder.RenameColumn(
                name: "EquipmentId",
                table: "AppForEquipments",
                newName: "OpticianAppointmentId");

            migrationBuilder.RenameIndex(
                name: "IX_AppForEquipments_OpticianId",
                table: "AppForEquipments",
                newName: "IX_AppForEquipments_RequiredEquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_AppForEquipments_EquipmentId",
                table: "AppForEquipments",
                newName: "IX_AppForEquipments_OpticianAppointmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppForEquipments_OpticianAppointments_OpticianAppointmentId",
                table: "AppForEquipments",
                column: "OpticianAppointmentId",
                principalTable: "OpticianAppointments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AppForEquipments_RequiredEquipments_RequiredEquipmentId",
                table: "AppForEquipments",
                column: "RequiredEquipmentId",
                principalTable: "RequiredEquipments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
