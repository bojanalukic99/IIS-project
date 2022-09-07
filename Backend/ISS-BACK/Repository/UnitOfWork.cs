using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly Model.ApplicationContext _context;

        private Dictionary<string, dynamic> _repositories;

        public UnitOfWork(Model.ApplicationContext context)
        {
    
            _context = context;
            Users = new UserRepository(_context);
            EquipmentAppointments = new EquipmentAppointmentRepository(_context);
            Equipments= new EquipmentRepository(_context);
            Materials = new MaterialRepository(_context);
            OpticianAppointments = new OpticianAppointmentRepository(_context);
            PriceLists = new PriceListRepository(_context);
            Products = new ProductRepository(_context);
            RequiredEquipments = new RequiredEquipmentRepository(_context);
            WorkingHours = new WorkinHourRepository(_context);

        }

        public IUserRepository Users { get; private set; }
        public IEquipmentAppointmentRepository EquipmentAppointments { get; private set; }
        public IEquipmentRepository Equipments { get; private set; }
        public IMaterialRepository Materials{ get; private set; }
        public IOpticianAppointmentRepository OpticianAppointments { get; private set; }
        public IPriceListRepository PriceLists { get; private set; }
        public IProductRepository Products { get; private set; }
        public IRequiredEquipmentRepository RequiredEquipments { get; private set; }
        public IWorkingHourRepository WorkingHours { get; private set; }


        public IBaseRepository<TEntity> GetRepository<TEntity>() where TEntity : class
        {
            if (_repositories == null)
            {
                _repositories = new Dictionary<string, dynamic>();
            }

            string type = typeof(TEntity).Name;

            if (_repositories.ContainsKey(type))
            {
                return (IBaseRepository<TEntity>)_repositories[type];
            }

            if (_repositories.ContainsKey(type))
            {
                return (IBaseRepository<TEntity>)_repositories[type];
            }

            Type repositoryType = typeof(BaseRepository<>);

            _repositories.Add(type, Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), _context));

            return (IBaseRepository<TEntity>)_repositories[type];
        }

        public Model.ApplicationContext Context
        {
            get { return _context; }
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
