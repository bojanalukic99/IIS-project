using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IEquipmentService
    {
        bool Update(long id, Equipment equipment);

        IEnumerable<Equipment> GetAll(string term);
        Equipment AddEquipment(Equipment equipment);
        Equipment GetById(long id);

    }
}
