using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Controllers
{
    public class PlacesController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: Places
        public ActionResult places()
        {
            return View();
        }
        public ActionResult _HeaderPlaces()
        {
            return View();
        }
        public JsonResult GetVN()
        {
            var list = db.Tour.Select(a => new
            {
                MaVN = a.MaVN,
                TenVN = a.TenVN,
                Anh1 = a.Anh1,
                Giasale = a.Giasale,
                Giagoc = a.Giagoc,
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetQT()
        {
            var list = db.TourQT.Select(a => new
            {
                MaQT = a.MaQT,
                TenQT = a.TenQT,
                Anh1 = a.Anh1,
                Giasale = a.Giasale,
                Giagoc = a.Giagoc,
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        
    }
}