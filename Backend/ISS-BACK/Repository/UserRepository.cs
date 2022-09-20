using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class UserRepository : BaseRepository<User> ,IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context)
        {


        }

        public IEnumerable<User> GetAll(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Users.Where(x => !x.Deleted).ToList();
            }
            return ApplicationContext.Users.Where(x => !x.Deleted && (x.FirstName.Contains(term)) && x.LastName.Contains(term) && x.Email.Contains(term)).ToList();

        }

        public IEnumerable<User> GetAllOpticians(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Users.Where(x => !x.Deleted).ToList();
            }
            return ApplicationContext.Users.Where(x => !x.Deleted && x.UserType==UserType.Optician && (x.FirstName.Contains(term)) && x.LastName.Contains(term) && x.Email.Contains(term)).ToList();

        }

        public User GetById(int id)
        {
            return ApplicationContext.Users.Where(x => x.Id == id).SingleOrDefault();
        }

        public IEnumerable<User> GetPatients(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Users.Where(x => !x.Deleted).ToList();
            }
            return ApplicationContext.Users.Where(x => !x.Deleted && x.UserType == UserType.Patient && (x.FirstName.Contains(term)) && x.LastName.Contains(term) && x.Email.Contains(term)).ToList();
        }
        public IEnumerable<User> GetSellers(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Users.Where(x => !x.Deleted).ToList();
            }
            return ApplicationContext.Users.Where(x => !x.Deleted && x.UserType == UserType.Seller && (x.FirstName.Contains(term)) && x.LastName.Contains(term) && x.Email.Contains(term)).ToList();
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
