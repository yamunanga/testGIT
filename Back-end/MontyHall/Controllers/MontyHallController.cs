using System;
using Microsoft.AspNetCore.Mvc;
using MontyHall.Models;

namespace MontyHall.Controllers
{
    [Produces("application/json")]
    [Route("api/MontyHall")]
    public class MontyHallController : Controller
    {
        [HttpPost("simulate")]
        public IActionResult Post([FromBody]  dataFormat data)
        {
            
            int wins = 0;
            int losses = 0;

            //Iterate through a given number Of Simulations
            for (int i = 0; i < data.numberOfSimulations; i++)
            {


                bool result = SelectByMontyHall(data.changeDoor);
                                            

                if (result)
                    wins++;
                else
                    losses++;
            }
          

            // Calculate win percentage
            double winPercentage = (double)wins / data.numberOfSimulations * 100;

            // Return the game results
            var gameResults = new
            {
                NumberOfSimulations = data.numberOfSimulations,
                Wins = wins,
                Losses= losses,
                WinPercentage = winPercentage
            };

            return Ok(gameResults);
        }

        public static bool SelectByMontyHall(bool changeDoor)
                                      
        {
            Random random = new Random();
            int chosenDoor = random.Next(3);
            int carDoor = random.Next(3);
            int goatToRemove = random.Next(1);
            bool win = false;

            // Take out one of the goat doors at random.
            // but not the ONE that the "contestants picked"!
            int Goat_Left = 0;
            int Goat_Right = 2;
            switch (chosenDoor)
            {
                case 0: Goat_Left = 1; Goat_Right = 2; break;
                case 1: Goat_Left = 0; Goat_Right = 2; break;
                case 2: Goat_Left = 0; Goat_Right = 1; break;
            }

            int theGoat = goatToRemove == 0 ? Goat_Right : Goat_Left;

            // With the switch or the stay, would the contestant prevail?
            if (changeDoor == false)
            {
                // keeping the door that was initially selected
                win = carDoor == chosenDoor;
            }
            else
            {
                // switching from the selected door to the remaining door
                win = carDoor != theGoat;
            }

            return win;
        }
    }
    
}