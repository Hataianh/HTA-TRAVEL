using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Controllers
{
    public class ServicesController : Controller
    {
        // GET: Services
        public ActionResult services()
        {
            return View();
        }
        public ActionResult _HeaderServices()
        {
            return View();
        }
    }
}