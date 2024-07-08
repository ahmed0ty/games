
import {getdetails,getgames} from "./test-code.js"
export class GameDisplay {

    constructor(allgames, row) {
        this.allgames = allgames;
        this.row = row;
        this.display()


    }

    display() {
        var box = '';

        for (var i = 0; i < this.allgames.length; i++) {
            box += `<div class="col-md-3 ">
                        <div id="${this.allgames[i].id}" class="gameitem my-3 border border-1 border-black border-opacity-25">
                            <div class="p-2">
                                <img src="${this.allgames[i].thumbnail}" alt="" class="w-100">
                                <div class="d-flex justify-content-between align-items-center my-1">
                                <p class="text-white p-1 py-2">${this.allgames[i].title}</p>
                                <button class="text-white free p-1 rounded-2 border border-0">Free</button>
                                </div>
                                <p class="text-center desc">${this.allgames[i].short_description}</p>
                            </div>
                            <div class="card-footer small d-flex justify-content-between border border-1 border-black border-opacity-25 w-100 p-1">
                                <p class="text-white">MMORPG</p>
                                <p class="text-white">${this.allgames[i].platform}</p>
                            </div>
                         </div>
                    </div>`;
        }
        this.row.innerHTML = box;

        document.querySelectorAll('.gameitem').forEach((item) => {
            item.addEventListener('click', function () {
                // console.log(item.getAttribute('id'));

                const gameId = item.getAttribute('id');
                getdetails(gameId); 




            });
        });
    }


}





export class detailsDisplay {
    constructor(alldetailes, row2) {
        this.alldetailes = alldetailes;
        this.row2 = row2;
    }

    display() {
        var box = '';
        for (var i = 0; i < this.alldetailes.length; i++) {

            box += `
            <div class="d-flex justify-content-between align-items-center">
            <h1 class="text-white p-5">Details Game</h1>
             <i class="fa-solid fa-xmark text-white fs-5"></i>
            </div>
             <div class="col-md-4">

                    <img src="${this.alldetailes[i].thumbnail}" alt="" class="w-100">
                </div>
                <div class="col-md-7">
                    <h2 class="text-white fw-semibold">Title: ${this.alldetailes[i].title}</h2>
                    <p class="text-white fw-semibold">Category: <span class="fw-bold p-1">${this.alldetailes[i].genre}</span></p>
                    <p class="text-white fw-semibold">Platform: <span class="fw-bold p-1">${this.alldetailes[i].platform}</span></p>
                    <p class="text-white fw-semibold">Status: <span class="fw-bold p-1">${this.alldetailes[i].status}</span></p>
                    <p class="text-white fw-semibold">${this.alldetailes[i].description}</p>
                    <button type="button" class="btn btn-outline-warning text-white fw-semibold my-5">Show Game</button>

                </div>
                   

            `;
        }
        this.row2.innerHTML = box;
        const hideElement = document.querySelector('.games'); 
        const showElement = document.querySelector('.gamesdetails'); 
        if (hideElement) {
            hideElement.style.display = 'none';
            showElement.style.display = 'block';
          
           

        }
        const xmarkIcon = this.row2.querySelector('.fa-xmark');
        if (xmarkIcon) {
            xmarkIcon.addEventListener('click', () => {
                hideElement.style.display = 'block' ;
                showElement.style.display = 'none' ;
              
            });
        }

    }


}