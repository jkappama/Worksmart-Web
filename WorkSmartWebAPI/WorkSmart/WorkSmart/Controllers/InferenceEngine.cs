using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkSmart.Models;

namespace WorkSmart.Controllers
{
    //Inference engine for automated responses to generate content (consequence) based on a rule. Forward chaining is used here.
    public class InferenceEngine
    {
        public string Content { get; set; }

        public InferenceEngine()
        {
            Content = string.Empty;
        }

        //Generate the content using the knowledge base and keywords of the response
        public string GenerateContent(ResponseKnowledgeBase knowledgeBase, Response response)
        {
            //Rule 1 is true
            if(knowledgeBase.Rule1)
            {
                //email type and business meeting occasion
                //Use keywords from response object
                Content = "Hi All,\nWe will have our business meeting coming up shortly on _insert date here_. We look forward to everyone " +
                    " attending this meeting. We will specifically talk about " + response.Keywords + " and will keep the meeting as short " +
                    " as possible to respect everyone's time.\nThank you,\n_insert your name here_";
            }

            //Rule 2 is true
            if (knowledgeBase.Rule2)
            {
                //email type and off request occasion
                //Use keywords from response object
                Content = "Hi _insert manager's name here_,\nI would like to see if it's possible for me to take some off shortly. I am aware" +
                    " we have multiple projects going on, but I would still like to take off because of " + response.Keywords + " and it would give me" +
                    " a good referesher and break from all the current project.\nThank you,\n_insert your name here_";
            }

            //Rule 3 is true
            if (knowledgeBase.Rule3)
            {
                //informative speech type and performance review occasion
                //Use keywords from response object
                Content = "Hi All,\nIn this informational speech, I will embark you on a journey to describe how you can be most productive" +
                    " in your perform review. I will cover the following topics in specific: " + response.Keywords + " and the end of the speech," +
                    " I will open up for any questions that you may have.\nThank you for listening!";
            }

            //Rule 4 is true
            if (knowledgeBase.Rule4)
            {
                //Motivational speech type and annual business conference occasion
                //Use keywords from response object
                Content = "Hi All,\nIn this motivational speech, we will discover the key ingredients to reveal what makes a business sucessful. I am" +
                    " so glad to see all of you here in this annual business conference event. We will be specifically be talking about" 
                    + response.Keywords +" and I will open up the end of the speech for any questions.\nThank you for listening!";
            }

            //Rule 5 is true
            if (knowledgeBase.Rule5)
            {
                //Motivational speech type and annual business conference occasion
                //Use keywords from response object
                Content = "Hi All,\nIn this new hire training presentation, we are going to analyze what it takes to be a great employee at _insert company name here_" +
                    " and how to do your best so you will be most successful. " + " I will specifically be talking about "
                    + response.Keywords + " and I will open up the end of the presntation for any questions.\nThank you for listening!";
            }

            //Rule 6 is true
            if (knowledgeBase.Rule6)
            {
                //Discussion type and project disaster occasion
                //Use keywords from response object
                Content = "Hi All,\nIt pains me to say this, but we did not do well in our last project. We need to make sure we communicate" +
                    " well with each other and work as a team. Each one of you have unique strengths and weaknesses and we need to work as" + 
                    " a team to account for those strengths and weakness. In this discussion, I would like to discuss about "
                    + response.Keywords + " and I will open up the end of the discussion for any questions.\nThank you for listening!";
            }

            //Rule 7 is true
            if (knowledgeBase.Rule7)
            {
                //Meeting type and sprint planning occasion
                //Use keywords from response object
                Content = "Hi All,\nWell done! We finished another sprint and we are going to start on a new sprint. " +
                    " Let's all make sure that we learn from the retrospectives and apply what we learn to the coming sprints. " +
                    " This meeting will be largerly focused on "
                    + response.Keywords + " and I will open up the end of the discussion for any questions.\nThank you for listening!";
            }

            //Rule 8 is true
            if (knowledgeBase.Rule8)
            {
                //Meeting type and sprint retrospective occasion
                //Use keywords from response object
                Content = "Hi All,\nWell done! We finished another sprint and we are going to learn from what we just finished. " +
                    " I know it's hard and there were some tough challenging tasks, but we did manage to get through most of our tasks. " +
                    " This meeting will be largerly focused on learning from the previous sprint and "
                    + response.Keywords + " and I will open up the end of the discussion for any questions.\nThank you for listening!";
            }

            return Content;
        }
    }
}
