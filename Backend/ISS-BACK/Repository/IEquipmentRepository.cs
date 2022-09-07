using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IEquipmentRepository : IBaseRepository<Equipment>
    {
        IEnumerable<Equipment> GetAll(string term);
        Equipment GetById(long id);
    }
}
