using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class bugFixMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentsAppointments_Equipments_EquipmentId",
                table: "EquipmentsAppointments");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentsAppointments_Products_ProductId",
                table: "EquipmentsAppointments");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentsAppointments_Users_OpticianId",
                table: "EquipmentsAppointments");

            migrationBuilder.DropIndex(
                name: "IX_EquipmentsAppointments_OpticianId",
                table: "EquipmentsAppointments");

            migrationBuilder.DropIndex(
                name: "IX_EquipmentsAppointments_ProductId",
                table: "EquipmentsAppointments");

            migrationBuilder.DropColumn(
                name: "OpticianId",
                table: "EquipmentsAppointments");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "EquipmentsAppointments");

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentsAppointments_RequiredEquipments_EquipmentId",
                table: "EquipmentsAppointments",
                column: "EquipmentId",
                principalTable: "RequiredEquipments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentsAppointments_RequiredEquipments_EquipmentId",
                table: "EquipmentsAppointments");

            migrationBuilder.AddColumn<long>(
                name: "OpticianId",
                table: "EquipmentsAppointments",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ProductId",
                table: "EquipmentsAppointments",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentsAppointments_OpticianId",
                table: "EquipmentsAppointments",
                column: "OpticianId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentsAppointments_ProductId",
                table: "EquipmentsAppointments",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentsAppointments_Equipments_EquipmentId",
                table: "EquipmentsAppointments",
                column: "EquipmentId",
                principalTable: "Equipments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentsAppointments_Products_ProductId",
                table: "EquipmentsAppointments",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentsAppointments_Users_OpticianId",
                table: "EquipmentsAppointments",
                column: "OpticianId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
