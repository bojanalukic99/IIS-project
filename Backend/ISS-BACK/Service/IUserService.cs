using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IUserService
    {
        User Add(User entity);
        User GetUserWithEmailAndPassword(string email, string password);
        User GetUserWithEmail(string email);
        User Get(long id);
        User CreateUser(User user);
        User GetUserWithRegistrationToken(string token);
        User ChangePasswordWithToken(User userData);
        bool RequestPasswordReset(string email);
        bool PasswordReset(string token, string password);
        bool Activate(string token);
        IEnumerable<User> GetAll();

        IEnumerable<User> GetAllOpticians();

        IEnumerable<User> Search(string id);


        bool Update(long id, User ent);

    }
}
