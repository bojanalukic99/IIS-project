using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ISS_BACK.Migrations
{
    public partial class baseUpdateMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "OpticianAppointments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "LeftEyeId",
                table: "OpticianAppointments",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "PatientId",
                table: "OpticianAppointments",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "RightEyeId",
                table: "OpticianAppointments",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "EyeDetails",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Diopter = table.Column<int>(type: "int", nullable: false),
                    DistanceBetweenPupils = table.Column<int>(type: "int", nullable: false),
                    Astigmatism = table.Column<int>(type: "int", nullable: false),
                    AdditionForReading = table.Column<int>(type: "int", nullable: false),
                    TypeOfGlass = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Deleted = table.Column<bool>(type: "bit", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EyeDetails", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OpticianAppointments_LeftEyeId",
                table: "OpticianAppointments",
                column: "LeftEyeId");

            migrationBuilder.CreateIndex(
                name: "IX_OpticianAppointments_PatientId",
                table: "OpticianAppointments",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_OpticianAppointments_RightEyeId",
                table: "OpticianAppointments",
                column: "RightEyeId");

            migrationBuilder.AddForeignKey(
                name: "FK_OpticianAppointments_EyeDetails_LeftEyeId",
                table: "OpticianAppointments",
                column: "LeftEyeId",
                principalTable: "EyeDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OpticianAppointments_EyeDetails_RightEyeId",
                table: "OpticianAppointments",
                column: "RightEyeId",
                principalTable: "EyeDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OpticianAppointments_Users_PatientId",
                table: "OpticianAppointments",
                column: "PatientId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OpticianAppointments_EyeDetails_LeftEyeId",
                table: "OpticianAppointments");

            migrationBuilder.DropForeignKey(
                name: "FK_OpticianAppointments_EyeDetails_RightEyeId",
                table: "OpticianAppointments");

            migrationBuilder.DropForeignKey(
                name: "FK_OpticianAppointments_Users_PatientId",
                table: "OpticianAppointments");

            migrationBuilder.DropTable(
                name: "EyeDetails");

            migrationBuilder.DropIndex(
                name: "IX_OpticianAppointments_LeftEyeId",
                table: "OpticianAppointments");

            migrationBuilder.DropIndex(
                name: "IX_OpticianAppointments_PatientId",
                table: "OpticianAppointments");

            migrationBuilder.DropIndex(
                name: "IX_OpticianAppointments_RightEyeId",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Comment",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "LeftEyeId",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "OpticianAppointments");

            migrationBuilder.DropColumn(
                name: "RightEyeId",
                table: "OpticianAppointments");
        }
    }
}
