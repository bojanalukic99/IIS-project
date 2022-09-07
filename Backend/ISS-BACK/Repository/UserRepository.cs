using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class UserRepository : BaseRepository<User> ,IUserRepository
    {
        public UserRepository(Model.ApplicationContext context) : base(context)
        {


        }

        public IEnumerable<User> GetAllOpticians()
        {
            return ApplicationContext.Users.Where(x => x.UserType == UserType.Ophtamologist);
        }

        public User GetById(int id)
        {
            return ApplicationContext.Users.Where(x => x.Id == id).SingleOrDefault();
        }

        public User GetUserWithEmail(string email)
        {
            return ApplicationContext.Users.Where(x => x.Email == email).SingleOrDefault();
        }

        public User GetUserWithEmailAndPassword(string email, string password)
        {
            return ApplicationContext.Users.Where(x => x.Email == email && x.Password == password).SingleOrDefault();
        }

        public User GetUserWithRegistationToken(string token)
        {
            return ApplicationContext.Users.Where(x => x.RegistrationToken == token).SingleOrDefault();
        }

        public User GetUserWithRegistrationToken(string token)
        {
            return ApplicationContext.Users.Where(x => x.RegistrationToken == token).SingleOrDefault();
        }

        public User GetUserWithResetToken(string token)
        {
            return ApplicationContext.Users.Where(x => x.ResetPasswordToken == token).SingleOrDefault();
        }

        public User Search(string token)
        {
            return ApplicationContext.Users.Where(x => x.LastName.Contains(token) || x.FirstName.Contains(token)).SingleOrDefault();
        }
    }
}
