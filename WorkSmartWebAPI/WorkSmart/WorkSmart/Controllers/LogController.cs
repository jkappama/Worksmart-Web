using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDBWebAPI.Models;
using WorkSmart.Services;
using WorkSmart.Models;
using System;

namespace WorkSmart.Controllers
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    [Route("api/Logs")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly LogService _LogService;

        public LogController(LogService logService)
        {
            _LogService = logService;
        }

        //Get all the Log JSON objects
        [HttpGet]
        public ActionResult<List<Log>> Get() =>
            _LogService.Get();

        //Get a specific Log object based on ID
        [HttpGet("{id:length(24)}", Name = "GetLog")]
        public ActionResult<Log> Get(string id)
        {
            var log = _LogService.Get(id);

            if (log == null)
            {
                return NotFound();
            }

            return log;
        }

        //Create a new Log object based on data passed by the front-end
        [HttpPost]
        public ActionResult<Log> Post(Log log)
        {
            log.Date = DateTime.Now.ToString();
            _LogService.Post(log);

            return log;
        }

        //Not used (placed for future reference)
        [HttpPut]
        public ActionResult Put(Log log)
        {
            _LogService.Put(log);
            return Ok();
        }

        //Delete the Log based on ID
        [HttpDelete("{id:length(24)}", Name = "DeleteLog")]
        public ActionResult Delete(string id)
        {
            _LogService.Delete(id);
            return Ok();
        }

    }
}
