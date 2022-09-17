using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class EyeDetailsRepository : BaseRepository<EyeDetails>, IEyeDetailsRepository
    {
        public EyeDetailsRepository(ApplicationContext context) : base(context)
        {


        }
    }
}
