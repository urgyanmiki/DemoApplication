using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WevAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WevAPI.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        DataAccesLayer db = new DataAccesLayer();

        [HttpGet]
        [Route("api/blog/getall")]
        public IEnumerable<Tblcomments> Get()
        {
            return db.GetAllComments();
        }


        [HttpPost]
        [Route("api/blog/new")]
        public int Create(Tblcomments comment)
        {
            return db.AddComment(comment);
        }


        [HttpGet]
        [Route("api/blog/one/{id}")]
        public Tblcomments Details(int id)
        {
            return db.GetOneComment(id);
        }


        [HttpPut]
        [Route("api/blog/edit")]
        public int Edit(Tblcomments comment)
        {
            return db.UpdateComment(comment);
        }


        [HttpDelete]
        [Route("api/blog/delete/{id}")]
        public int Delete(int id)
        {
            return db.DeleteComment(id);
        }
    }
}
