using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class opticianAppointmentUpdateMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OpticianAppointments_Users_PatientId",
                table: "OpticianAppointments");

            migrationBuilder.DropIndex(
                name: "IX_OpticianAppointments_PatientId",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "DistanceBetweenPupils",
                table: "EyeDetails");

            migrationBuilder.DropColumn(
                name: "TypeOfGlass",
                table: "EyeDetails");

            migrationBuilder.AddColumn<string>(
                name: "DistanceBetweenPupils",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PatientName",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeOfGlass",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Diopter",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Astigmatism",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "AdditionForReading",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DistanceBetweenPupils",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "PatientName",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "TypeOfGlass",
                table: "OpticianAppointments");

            migrationBuilder.AddColumn<long>(
                name: "PatientId",
                table: "OpticianAppointments",
                type: "bigint",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Diopter",
                table: "EyeDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Astigmatism",
                table: "EyeDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AdditionForReading",
                table: "EyeDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DistanceBetweenPupils",
                table: "EyeDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "TypeOfGlass",
                table: "EyeDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OpticianAppointments_PatientId",
                table: "OpticianAppointments",
                column: "PatientId");

            migrationBuilder.AddForeignKey(
                name: "FK_OpticianAppointments_Users_PatientId",
                table: "OpticianAppointments",
                column: "PatientId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
