using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDBWebAPI.Models;
using WorkSmart.Services;
using WorkSmart.Models;
using System;
using Microsoft.AspNetCore.Cors;

namespace WorkSmart.Controllers
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    [Route("api/Journals")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class JournalController : ControllerBase
    {
        private readonly JournalService _journalService;

        public JournalController(JournalService journalService)
        {
            _journalService = journalService;
        }

        //Get all the Journal objects
        [HttpGet]
        public ActionResult<List<Journal>> Get() =>
            _journalService.Get();

        //Get a Journal object by ID
        [HttpGet("{id:length(24)}", Name = "GetJournal")]
        public ActionResult<Journal> Get(string id)
        {
            var jrnl = _journalService.Get(id);

            if (jrnl == null)
            {
                return NotFound();
            }

            return jrnl;
        }

        //Create a Journal object
        [HttpPost]
        public ActionResult<Journal> Post([FromBody] Journal journal)
        {
            journal.Date = DateTime.Now.ToString();
            _journalService.Post(journal);

            return journal;
        }

        //Not used (for future reference)
        [HttpPut]
        public ActionResult Put([FromBody] Journal journal)
        {
            _journalService.Put(journal);
            return Ok();
        }

        //Delete a Journal object in the database based on ID
        [HttpDelete("{id:length(24)}", Name = "DeleteJournal")]
        public ActionResult Delete(string id)
        {
            _journalService.Delete(id);
            return Ok();
        }
    }
}
