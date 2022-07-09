using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Controllers
{
    public class NewsController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: News
        public ActionResult news()
        {
            return View();
        }
        public ActionResult _HeaderNews()
        {
            return View();
        }
        //public JsonResult GetTin()
        //{
        //    var list = db.Tins.Select(a => new
        //    {
        //        Matin = a.Matin,
        //        Anhtin = a.Anhtin,
        //        Tentin = a.Tentin,
        //        NoiDung = a.NoiDung,
        //        Ngaydang = a.Ngaydang,
        //        SLCon = db.Tins.Where(x => x.Matin == a.Matin).Count()
        //    }).ToList();
        //    return Json(list, JsonRequestBehavior.AllowGet);
        //}
    }
}