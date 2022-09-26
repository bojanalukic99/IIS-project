using ISS_BACK.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class ApplicationContext : DbContext
    {
        private static ProjectConfiguration _configuration;
        public ApplicationContext() { }

        public ApplicationContext(DbContextOptions<ApplicationContext> options, ProjectConfiguration configuration) : base(options)
        {
            if (configuration != null)
            {
                _configuration = configuration;
            }
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Equipment> Equipments { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<PriceList> PriceLists { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<RequiredEquipment> RequiredEquipments { get; set; }
        public DbSet<WorkingHour> WorkingHours { get; set; }
        public DbSet<OpticianAppointment> OpticianAppointments { get; set; }
        public DbSet<RequairedMaterial> RequairedMaterials { get; set; }
        public DbSet<EquipmentAppointment> EquipmentsAppointments { get; set; }
        public DbSet<AppForEquipment> AppForEquipments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured)
            {
                return;
            }
            optionsBuilder.UseSqlServer("data source=DESKTOP-FIDM5HD; Initial Catalog=IIS; Integrated Security=true");
        }
    }
}
