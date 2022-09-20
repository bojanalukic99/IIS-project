using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User GetUserWithEmail(string email);
        User GetById(int id);
        User GetUserWithEmailAndPassword(string email, string password);
        User GetUserWithRegistationToken(string token);
        User GetUserWithRegistrationToken(string token);
        User GetUserWithResetToken(string token);
        User Search(string token);
        IEnumerable<User> GetAll(string term);

        IEnumerable<User> GetAllOpticians(string term);
        IEnumerable<User> GetSellers(string term);

        IEnumerable<User> GetPatients(string term);
    }
}
