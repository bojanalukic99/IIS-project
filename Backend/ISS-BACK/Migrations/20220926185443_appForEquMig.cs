using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class appForEquMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppForEquipments",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OpticianAppointmentId = table.Column<long>(type: "bigint", nullable: true),
                    RequiredEquipmentId = table.Column<long>(type: "bigint", nullable: true),
                    Deleted = table.Column<bool>(type: "bit", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppForEquipments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppForEquipments_OpticianAppointments_OpticianAppointmentId",
                        column: x => x.OpticianAppointmentId,
                        principalTable: "OpticianAppointments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AppForEquipments_RequiredEquipments_RequiredEquipmentId",
                        column: x => x.RequiredEquipmentId,
                        principalTable: "RequiredEquipments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppForEquipments_OpticianAppointmentId",
                table: "AppForEquipments",
                column: "OpticianAppointmentId");

            migrationBuilder.CreateIndex(
                name: "IX_AppForEquipments_RequiredEquipmentId",
                table: "AppForEquipments",
                column: "RequiredEquipmentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppForEquipments");
        }
    }
}
