using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class RequairedMaterialRepository : BaseRepository<RequairedMaterial>, IRequairedMaterialRepository
    {
        public RequairedMaterialRepository(ApplicationContext context) : base(context) { }



        public IEnumerable<RequairedMaterial> GetAllByAppointment(long id)
        {
            return ApplicationContext.RequairedMaterials.Include(x => x.Material).Include(x => x.Appointment).Where(x => !x.Deleted && x.Appointment.Id == id).ToList();
        }
    }
}
