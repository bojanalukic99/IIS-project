﻿// <auto-generated />
using System;
using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ISS_BACK.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20220926192202_chanceMig")]
    partial class chanceMig
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ISS_BACK.Model.AppForEquipment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<long?>("EquipmentId")
                        .HasColumnType("bigint");

                    b.Property<long?>("OpticianId")
                        .HasColumnType("bigint");

                    b.Property<int>("StartTimeHoure")
                        .HasColumnType("int");

                    b.Property<int>("StartTimeMinute")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EquipmentId");

                    b.HasIndex("OpticianId");

                    b.ToTable("AppForEquipments");
                });

            modelBuilder.Entity("ISS_BACK.Model.Equipment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Equipments");
                });

            modelBuilder.Entity("ISS_BACK.Model.EquipmentAppointment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<long?>("EquipmentId")
                        .HasColumnType("bigint");

                    b.Property<bool>("IsScheduled")
                        .HasColumnType("bit");

                    b.Property<long?>("OpticianAppointmentId")
                        .HasColumnType("bigint");

                    b.Property<int>("StartHoure")
                        .HasColumnType("int");

                    b.Property<int>("StartMinut")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EquipmentId");

                    b.HasIndex("OpticianAppointmentId");

                    b.ToTable("EquipmentsAppointments");
                });

            modelBuilder.Entity("ISS_BACK.Model.EyeDetails", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AdditionFigure")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AdditionForReading")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Astigmatism")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AxisFigure")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cylinder")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("Diopter")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LensPower")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EyeDetails");
                });

            modelBuilder.Entity("ISS_BACK.Model.Material", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("Manufacturer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Quatity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Materials");
                });

            modelBuilder.Entity("ISS_BACK.Model.OpticianAppointment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("DistanceBetweenPupils")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsScheduled")
                        .HasColumnType("bit");

                    b.Property<long?>("LeftEyeId")
                        .HasColumnType("bigint");

                    b.Property<string>("LensColor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("OpticianId")
                        .HasColumnType("bigint");

                    b.Property<string>("PatientName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("ProductId")
                        .HasColumnType("bigint");

                    b.Property<long?>("RightEyeId")
                        .HasColumnType("bigint");

                    b.Property<string>("TypeOfGlass")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("LeftEyeId");

                    b.HasIndex("OpticianId");

                    b.HasIndex("ProductId");

                    b.HasIndex("RightEyeId");

                    b.ToTable("OpticianAppointments");
                });

            modelBuilder.Entity("ISS_BACK.Model.PriceList", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("Price")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("ProductId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("PriceLists");
                });

            modelBuilder.Entity("ISS_BACK.Model.Product", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<float>("MakingTime")
                        .HasColumnType("real");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Price")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductType")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("ISS_BACK.Model.RequairedMaterial", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("AppointmentId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<long?>("MaterialId")
                        .HasColumnType("bigint");

                    b.Property<int>("Quatity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AppointmentId");

                    b.HasIndex("MaterialId");

                    b.ToTable("RequairedMaterials");
                });

            modelBuilder.Entity("ISS_BACK.Model.RequiredEquipment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<long?>("EquipmentId")
                        .HasColumnType("bigint");

                    b.Property<int>("MakingTime")
                        .HasColumnType("int");

                    b.Property<long?>("ProductId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("EquipmentId");

                    b.HasIndex("ProductId");

                    b.ToTable("RequiredEquipments");
                });

            modelBuilder.Entity("ISS_BACK.Model.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Enabled")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegistrationToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ResetPasswordToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserType")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ISS_BACK.Model.WorkingHour", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateUpdated")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Deleted")
                        .HasColumnType("bit");

                    b.Property<string>("EndTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("OpticianId")
                        .HasColumnType("bigint");

                    b.Property<string>("StartTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WeekDays")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OpticianId");

                    b.ToTable("WorkingHours");
                });

            modelBuilder.Entity("ISS_BACK.Model.AppForEquipment", b =>
                {
                    b.HasOne("ISS_BACK.Model.Equipment", "Equipment")
                        .WithMany()
                        .HasForeignKey("EquipmentId");

                    b.HasOne("ISS_BACK.Model.User", "Optician")
                        .WithMany()
                        .HasForeignKey("OpticianId");

                    b.Navigation("Equipment");

                    b.Navigation("Optician");
                });

            modelBuilder.Entity("ISS_BACK.Model.EquipmentAppointment", b =>
                {
                    b.HasOne("ISS_BACK.Model.RequiredEquipment", "Equipment")
                        .WithMany()
                        .HasForeignKey("EquipmentId");

                    b.HasOne("ISS_BACK.Model.OpticianAppointment", "OpticianAppointment")
                        .WithMany()
                        .HasForeignKey("OpticianAppointmentId");

                    b.Navigation("Equipment");

                    b.Navigation("OpticianAppointment");
                });

            modelBuilder.Entity("ISS_BACK.Model.OpticianAppointment", b =>
                {
                    b.HasOne("ISS_BACK.Model.EyeDetails", "LeftEye")
                        .WithMany()
                        .HasForeignKey("LeftEyeId");

                    b.HasOne("ISS_BACK.Model.User", "Optician")
                        .WithMany()
                        .HasForeignKey("OpticianId");

                    b.HasOne("ISS_BACK.Model.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.HasOne("ISS_BACK.Model.EyeDetails", "RightEye")
                        .WithMany()
                        .HasForeignKey("RightEyeId");

                    b.Navigation("LeftEye");

                    b.Navigation("Optician");

                    b.Navigation("Product");

                    b.Navigation("RightEye");
                });

            modelBuilder.Entity("ISS_BACK.Model.PriceList", b =>
                {
                    b.HasOne("ISS_BACK.Model.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("ISS_BACK.Model.RequairedMaterial", b =>
                {
                    b.HasOne("ISS_BACK.Model.OpticianAppointment", "Appointment")
                        .WithMany()
                        .HasForeignKey("AppointmentId");

                    b.HasOne("ISS_BACK.Model.Material", "Material")
                        .WithMany()
                        .HasForeignKey("MaterialId");

                    b.Navigation("Appointment");

                    b.Navigation("Material");
                });

            modelBuilder.Entity("ISS_BACK.Model.RequiredEquipment", b =>
                {
                    b.HasOne("ISS_BACK.Model.Equipment", "Equipment")
                        .WithMany()
                        .HasForeignKey("EquipmentId");

                    b.HasOne("ISS_BACK.Model.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Equipment");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("ISS_BACK.Model.WorkingHour", b =>
                {
                    b.HasOne("ISS_BACK.Model.User", "Optician")
                        .WithMany()
                        .HasForeignKey("OpticianId");

                    b.Navigation("Optician");
                });
#pragma warning restore 612, 618
        }
    }
}
