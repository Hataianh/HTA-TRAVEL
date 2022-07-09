using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Controllers
{
    
    public class TrangChuController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: TrangChu
        public ActionResult trangchu()
        {
            return View();
        }
        public ActionResult _HeaderHome()
        {
            return View();
        }
        public ActionResult FormHome()
        {
            return View();
        }
        public ActionResult Why()
        {
            return View();
        }
        public ActionResult FavouritePlaces()
        {
            return View();
        }
        
        public ActionResult FamousPlaces()
        {
            return View();
        }
        public ActionResult NewsHome()
        {
            return View();
        }
    }
}