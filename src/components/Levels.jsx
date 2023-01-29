import React from "react";

function Levels(){
    return (
    <><div className="container">
        <div className="row">
            <div className="col text-center">
            <h2> 3X3 TicTacToe</h2>
            </div>
        </div>
            </div>
            <div className="container-fluid">
        <div className="row">
            <div className="col-6 lev text-center">
            <h3> Basic</h3>
            <img src="image/3basic.png" height="300px" alt="image"></img>
            <a className="hover-1 " href="https://dhananjaysarathe.github.io/TicTacToe_Basic/" >Play</a>
            <h4>This is Simple TicTacToe.There is a 3X3 table where you have to play.There is a restart button at the bottom to restart the game. </h4>
            </div>
            <div className="col-6 lev text-center">
            <h3> Upgrade-1</h3>
            <img src="image/3up1.png" height="300px" alt="image"></img>
            <a className="hover-1" href="https://dhananjaysarathe.github.io/tictactoe_up_3_6/" >Play</a>
            <h4>Maximum of 5 boxes can be filled.When user try to fill 6th box his least recent box ( जो user ने पहले चला था बो हठ जाएग ) filled is emptied. <span className="frus"> [IF IT SEEMS FRUSTRATING PLEASE TRY UPGRADE 2] </span></h4>
            </div>
            <div className="col-1 mt-2 mb-2"></div>
            <div className="mt-2 mb-2 col-10 lev text-center">
            <h3> Upgrade-2</h3>
            <img src="image/3up2.png" height="500px" alt="image"></img>
            <a className="hover-1" href="https://dhananjaysarathe.github.io/tictactoe_3_up/" >Play</a>
            <h4>Maximum of 6 boxes can be filled.When user try to fill 7th box his least recent box ( जो user ने पहले चला था बो हठ जाएग ) filled is emptied. <span className="frus"> [ THIS UPGRADE IS LESS FRUSTRATING ]</span></h4>
        </div>
            <div className="col-1"></div>
        </div>
    </div>
    <div className="container mt-4">
        <div className="row">
            <div className="col text-center">
            <h2> 4X4 TicTacToe</h2>
            </div>
        </div>
            </div>
            <div className="container-fluid">
        <div className="row">
            
            <div className="col-1 mt-2 mb-2"></div>
            <div className="mt-2 mb-2 col-10 lev text-center">
            <h3> Basic</h3>
            <img src="image/4basic.png" height="500px" alt="image"></img>
            <a className="hover-1" href="https://dhananjaysarathe.github.io/tictactoe_4_Basics/" >Play</a>
            <h4>There is a 4X4 Table.You have to align three O or three X continously (Vertically,Horizontally,Diagonally same as we did in 3X3).</h4>
        </div>
            <div className="col-1"></div>
            <div className="col-1 mt-2 mb-2"></div>
            <div className="mt-2 mb-2 col-10 lev text-center">
            <h3> Upgrade</h3>
            <img src="image/4up.png" height="500px" alt="image"></img>
            <a className="hover-1" href="https://dhananjaysarathe.github.io/tictactoe_4_up_7/" >Play</a>
            <h4>Maximum of 7 boxes can be filled.When user try to fill 8th box his least recent box ( जो user ने पहले चला था बो हठ जाएग ) filled is emptied. <span className="frus"> [ AAPNE JIS SEQUENCE MAI BOX FILLING KI HAI USSI SEQUENCE MAI BOX  KE ELEMENTS KA DELETION HOGA!! ] </span></h4>
        </div>
            <div className="col-1"></div>
        </div>
    </div>
    </>)
}

export default Levels;