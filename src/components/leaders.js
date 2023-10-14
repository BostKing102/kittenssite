import React from 'react'
let leaders = []

const responce = await fetch('http://localhost/getleaders.php',{
  method : "GET",
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

leaders = await responce.json()
console.log(leaders)

const Header = () => { 
  return (<div class="main-header">
  <a class="menubutton" href="s">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 64 50" fill="none">
        <path d="M5 5H59" stroke="#6A8EAA" stroke-width="9" stroke-linecap="round"/>
        <path d="M5 26.0938H59" stroke="#6A8EAA" stroke-width="9" stroke-linecap="round"/>
        <path d="M5 47.1875H59" stroke="#6A8EAA" stroke-width="9" stroke-linecap="round"/>
    </svg>
  </a>
  <a class="logo" href="leaders">
    <img class="logo" src="assets/logo3.png" alt="sd"></img>
  </a>
</div>
)}

const Buttonframe = () => {
  return (
    <div class="buttonframe">
        <div class="infobar">
            <p class="infotext">Список лидеров (Всего: {leaders.length})</p>
        </div>
        <div>
            <input type="text" class="SearchStroke" placeholder="Найти ник"></input>
        </div>
        <div class="controlbuttons">
            <a href="arhive.html" class="arhivebutton">Архив</a>
            <div>
                <img src="assets/AddLeaderButton.svg" alt="" class="addleaderbutton"></img>
            </div>
        </div>
    </div>
  )
}

const LeadersHeader = () => {
  const leaderElements = [];

  for (let i = 0; i < leaders.length; i++) {
    leaderElements.push(
      <a class="leaderStroke" href={`user?id=${leaders[i].id}`}>
        <img src="https://cdn.discordapp.com/avatars/560428205677477889/8f12fb5e4ae5356715f093daf3b71e3c.webp?size=40" alt="sda" />
        <div className="nickp">{leaders[i].nick}</div>
        <div className="orgnamep">{leaders[i].fraction}</div>
        <div className="orgnamep">{leaders[i].rank}</div>
        <div className="orgnamep">{leaders[i].strwarn}</div>
        <div className="daysofpostp">{Math.floor(((Date.now()/1000) - leaders[i].dateSet) / (60 * 60 * 24))}</div>
      </a>
    );
  }

  return (leaderElements);
}


const LeadersFrame = () => {
  return (<div class="leadersFrame">
        <div class="LeadersHeader">
            <div class="nick">Ник</div>
            <div class="orgname">Организация</div>
            <div class="orgname">Должность</div>
            <div class="orgname">Выговоры</div>
            <div class="daysofpost">Дней на посту</div>
        </div>
        <div class="LeadersList" id="leaders">
          <LeadersHeader />
        </div>
    </div>
  )
}

function Leaders() {
  return(
    <div>
        <Header />
        <Buttonframe />
        <LeadersFrame />
    </div>
  )
}

export default Leaders