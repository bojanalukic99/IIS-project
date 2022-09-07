using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        int Complete();
    }
}
