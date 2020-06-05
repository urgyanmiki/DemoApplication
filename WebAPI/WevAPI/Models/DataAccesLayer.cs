
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WevAPI.Models
{
    public class DataAccesLayer
    {
        BloggerDBContext db = new BloggerDBContext();

        public IEnumerable<Tblcomments> GetAllComments()
        {
            try
            {
                return db.Tblcomments.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new comment     
        public int AddComment(Tblcomments comment)
        {
            try
            {
                db.Tblcomments.Add(comment);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update comment   
        public int UpdateComment(Tblcomments comment)
        {
            try
            {
                db.Entry(comment).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get one comment    
        public Tblcomments GetOneComment(int id)
        {
            try
            {
                Tblcomments comment = db.Tblcomments.Find(id);
                return comment;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee    
        public int DeleteComment(int id)
        {
            try
            {
                Tblcomments comment = db.Tblcomments.Find(id);
                db.Tblcomments.Remove(comment);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }

}

