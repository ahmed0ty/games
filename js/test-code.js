import { GameDisplay } from "./index.js";
import { Navbar, GameMenu } from "./games.js";

const rowElement = document.getElementById('row');
const gameMenu = new GameMenu();
gameMenu.addEventListeners(handleGameClick);


const overlay = document.getElementById('overlay');
const spinner = document.querySelector('.spinner');

 export async function getgames(game) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c2a50a212dmshbf82ddf4fa64d01p152ee2jsn1d27e587f8ee',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`, options);
        const response = await api.json();
        // console.log(response);

        
        const gameDisplay = new GameDisplay(response, rowElement);
        gameDisplay.display();
        
        
      
        
    } catch (error) {
        console.error('Error fetching or displaying games:', error);
    } finally {
        overlay.style.display = 'none';
        spinner.style.display = 'none';
    }
}

function handleGameClick(game) {
    getgames(game);
}

document.addEventListener("DOMContentLoaded", function() {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    getgames('MMORPG');

    const navbar = new Navbar();
});






import { detailsDisplay } from "./index.js"; 

export const rowElement2 = document.getElementById('row2');

export async function getdetails(gameId) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c2a50a212dmshbf82ddf4fa64d01p152ee2jsn1d27e587f8ee',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const apidetail = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const responsedetail = await apidetail.json();
        
        // console.log(responsedetail);

        
        const detailsDisplayInstance = new detailsDisplay([responsedetail], rowElement2);
        detailsDisplayInstance.display();
    } catch (error) {
        console.error(error);
    }
    finally{
        overlay.style.display = 'none';
        spinner.style.display = 'none';
    }
}





