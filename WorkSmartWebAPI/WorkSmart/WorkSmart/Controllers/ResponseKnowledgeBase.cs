using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkSmart.Models;

namespace WorkSmart.Controllers
{
    public class ResponseKnowledgeBase
    {
        //Knowledge base for Expert System for Automated Responses feature
        public bool Rule1 { get; set; }
        public bool Rule2 { get; set; }
        public bool Rule3 { get; set; }
        public bool Rule4 { get; set; }
        public bool Rule5 { get; set; }
        public bool Rule6 { get; set; }
        public bool Rule7 { get; set; }
        public bool Rule8 { get; set; }

        public ResponseKnowledgeBase()
        {
            Rule1 = false;
            Rule2 = false;
            Rule3 = false;
            Rule4 = false;
            Rule5 = false;
            Rule6 = false;
            Rule7 = false;
            Rule8 = false;
        }

        //Check the rule based on front-end parameters
        public bool CheckRule(Response response)
        {
            bool result = false;
            if(response.Type.ToLower().Equals("email") && response.Occasion.ToLower().Equals("business meeting"))
            {
                Rule1 = true;
                result = Rule1;
            }
            else if(response.Type.ToLower().Equals("email") && response.Occasion.ToLower().Equals("Off Request"))
            {
                Rule2 = true;
                result = Rule2;
            }
            else if (response.Type.ToLower().Equals("informative speech") && response.Occasion.ToLower().Equals("performance review"))
            {
                Rule3 = true;
                result = Rule3;
            }
            else if (response.Type.ToLower().Equals("motivational speech") && response.Occasion.ToLower().Equals("annual business conference"))
            {
                Rule4 = true;
                result = Rule4;
            }
            else if (response.Type.ToLower().Equals("presentation") && response.Occasion.ToLower().Equals("new hire training"))
            {
                Rule5 = true;
                result = Rule5;
            }
            else if (response.Type.ToLower().Equals("discussion") && response.Occasion.ToLower().Equals("project disaster"))
            {
                Rule6 = true;
                result = Rule6;
            }
            else if (response.Type.ToLower().Equals("meeting") && response.Occasion.ToLower().Equals("sprint planning"))
            {
                Rule7 = true;
                result = Rule7;
            }
            else if (response.Type.ToLower().Equals("meeting") && response.Occasion.ToLower().Equals("sprint retrospective"))
            {
                Rule8 = true;
                result = Rule8;
            }

            return result;
        }
    }
}
