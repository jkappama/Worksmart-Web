using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDBWebAPI.Models;
using WorkSmart.Services;
using WorkSmart.Models;
using System;

namespace WorkSmart.Controllers
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    [Route("api/Messages")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly MessageService _messageService;

        public MessagesController(MessageService messageService)
        {
            _messageService = messageService;
        }

        //Get all the Message objects
        [HttpGet]
        public ActionResult<List<Message>> Get() =>
            _messageService.Get();

        //Get a specific Message object based on ID
        [HttpGet("{id:length(24)}", Name = "GetMessage")]
        public ActionResult<Message> Get(string id)
        {
            var msg = _messageService.Get(id);

            if (msg == null)
            {
                return NotFound();
            }

            return msg;
        }

        //Create a new Message object from data passed back
        [HttpPost]
        public ActionResult<Message> Post(Message message)
        {
            message.Date = DateTime.Now.ToString();
            _messageService.Post(message);

            return message;
        }

        //Not used (for future reference)
        [HttpPut]
        public ActionResult Put(Message message)
        {
            _messageService.Put(message);
            return Ok();
        }

        //Delete a Message object based on ID
        [HttpDelete("{id:length(24)}", Name = "DeleteMessage")]
        public ActionResult Delete(string id)
        {
            _messageService.Delete(id);
            return Ok();
        }

    }
}
