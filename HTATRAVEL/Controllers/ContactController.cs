using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact
        public ActionResult contact()
        {
            return View();
        }
        public ActionResult _HeaderContact()
        {
            return View();
        }
    }
}