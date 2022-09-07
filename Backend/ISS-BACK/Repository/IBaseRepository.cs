using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        TEntity Get(long id);
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predict);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> Search(string term = "");

        PageResponse<TEntity> GetPage(Model.PageModel model);

        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);

        void Add(TEntity entity);
        void Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);
        void Update(TEntity entity);
        void Detach(TEntity entity);


    }
}
