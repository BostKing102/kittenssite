import React from 'react';

const queryParams = new URLSearchParams(window.location.search)

let userid;

if (queryParams.has('id')) {
  userid = queryParams.get('id');
} else {
  userid = 1
}

let formData = new FormData();
formData.append('id', userid);

let leader = []

const responce = await fetch('http://localhost/getleader.php?' + new URLSearchParams({id:userid}),{
  method : "GET",
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
})

leader = await responce.json()
if (leader.type === 0) {
  window.location.href = 'user?id=1';
}
console.log(leader)

function Header () { 
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

const datesets = new Date(leader.dateSet * 1000)
const dateend = new Date((leader.dateSet * 1000) + (2592000 * 1000) + (leader.dopdays * 86400 * 1000))

function InfoUser() {
  return (
    <div className='userInfo'>
      <div className='maininfo'>
        <div className='cardInfo'>
          <div><img className='cardAvatar' src='https://uprostim.com/wp-content/uploads/2021/02/discord-karen-dessire.jpg'></img></div>
          <div className='CardNick'>{leader.nick}</div>
          <div className='CardRank'>{leader.rank}</div>
        </div>
        <div className='mainInfoText'>
          <div className='infoBlock'>
            <div class="infoLabel">Организация</div>
            <div class="infoInfo">{leader.fraction}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Причина назначения</div>
            <div class="infoInfo">{leader.reason}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Строгие выговоры</div>
            <div class="infoInfo">{leader.strwarn}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Устные выговоры</div>
            <div class="infoInfo">{leader.ustwarn}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Дата постановления</div>
            <div class="infoInfo">{datesets.getDate() + '.' +  datesets.getMonth() + '.' + datesets.getFullYear()}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Дней на посту</div>
            <div class="infoInfo">{Math.floor(((Date.now()/1000) - leader.dateSet) / (60 * 60 * 24))}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Дополнительные дни</div>
            <div class="infoInfo">{leader.dopdays}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Дата окончания поста</div>
            <div class="infoInfo">{dateend.getDate() + '.' +  dateend.getMonth() + '.' + dateend.getFullYear()}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Discord</div>
            <div class="infoInfo">{leader.discord}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Баллы</div>
            <div class="infoInfo">{leader.score}</div>
          </div>
          <div className='infoBlock'>
            <div class="infoLabel">Иммунитеты</div>
            <div class="infoInfo">{leader.immunities}</div>
          </div>
        </div>
      </div>
      <div className='buttonLogs'>
        <div className='buttonsframe'>
          <div className='onlinebuttons'><h1>Онлайн</h1></div>
          <div className='onlinebuttons'><h1>Архив онлайна</h1></div>
          <div className='onlinebuttons'><h1>История</h1></div>
          <a href={leader.forum} className='arzforumbutton'><img className='iconhrefs' src='assets/arzlogo.png'></img></a>
          <a href={leader.vk} className='vkbutton'><img className='iconhrefs' src='assets/vkicon.png'></img></a>

        </div>
        <div className='LogsFrame'>

        </div>
      </div>
      <div className='logs'>
        
      </div>
    </div>
  )
}

function User() {
  return (
    <div>
      <Header />
      <InfoUser />
    </div>
  )
}

export default User