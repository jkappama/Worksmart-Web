using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDBWebAPI.Models;
using WorkSmart.Services;
using WorkSmart.Models;
using System;

namespace WorkSmart.Controllers
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb

    [Route("api/Responses")]
    [ApiController]
    public class ResponseController : ControllerBase
    {
        private readonly ResponseService _responseService;

        public ResponseController(ResponseService responseService)
        {
            _responseService = responseService;
        }

        //Get all the responses
        [HttpGet]
        public ActionResult<List<Response>> Get() =>
            _responseService.Get();

        //Get a Response object by ID
        [HttpGet("{id:length(24)}", Name = "GetResponse")]
        public ActionResult<Response> Get(string id)
        {
            var rspns = _responseService.Get(id);

            if (rspns == null)
            {
                return NotFound();
            }

            return rspns;
        }

        //Create a new Response object
        [HttpPost]
        public ActionResult<Response> Post(Response response)
        {
            response.Date = DateTime.Now.ToString();
            if (String.IsNullOrEmpty(response.Type))
                response.Type = "Email";
            ResponseKnowledgeBase knowledgeBase = new ResponseKnowledgeBase();
            knowledgeBase.CheckRule(response);
            InferenceEngine inferenceEngine = new InferenceEngine();
            response.ResponseContent = inferenceEngine.GenerateContent(knowledgeBase, response);
            _responseService.Post(response);

            return response;
        }

        //Not used (for future reference)
        [HttpPut]
        public ActionResult Put(Response response)
        {
            _responseService.Put(response);
            return Ok();
        }

        //Delete a Response object based on ID
        [HttpDelete("{id:length(24)}", Name = "DeleteResponse")]
        public ActionResult Delete(string id)
        {
            _responseService.Delete(id);
            return Ok();
        }

    }
}
