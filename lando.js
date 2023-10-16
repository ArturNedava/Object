const bankAccount = {
    ownerName: "Artur",
    AccountNumber: 1,
    balance: 0,

    deposit(money){
        this.balance += money;
    },

    withDraw(money){
        this.balance -= money;
    
    },

    getBalance(){
        return this.balance;
    }
}

const btnDeposit = document.querySelector(".btnDeposit")
const btnWithdraw = document.querySelector(".btnWithDraw")

btnDeposit.addEventListener("click", () => {
    const addMoney = Number(document.querySelector(".deposit").value);
    bankAccount.deposit(addMoney)
    console.log(`У вас на счету ${bankAccount.getBalance()}`)
});

btnWithdraw.addEventListener("click", () => {
    const subtractMoney = Number(document.querySelector(".WithDraw").value);
    bankAccount.withDraw(subtractMoney);
    console.log(`У вас на счету ${bankAccount.getBalance()}`)

})

//2

const weathers = document.querySelector(".weather")
//const weatherValue = parseFloat(weathers.value);



const weather = {
    temperatur: -1,
    humidity: 20,
    windspeed: 50,

    weatherSpead(){
        if(this.temperatur < 0){
            return true;
        }else{
           
            return false;
        }
        
        
    }
}


if (weather.weatherSpead()) {
    console.log("Температура нижче 0 градусів Цельсія");
  } else {
    console.log("Температура вище або рівна 0 градусів Цельсія");
  }


  //3

const inputEmail = document.querySelector(".emails")
const inputName = document.querySelector(".names")
const inputPassword = document.querySelector(".passwords")
const btnUser = document.querySelector(".btnUser")

  const user = {
    name: "Artur",
    email: "Artur.Piroshkov.@gmail.com",
    password: "1989",

    login(Email, Password){
        if(Email === this.email && Password === this.password){
            console.log("Добро пажаловать " + this.name)
        }else{
            console.log("Пароль или email был введен не правильно")
        }
    }
  }
  btnUser.addEventListener("click" ,function(){
  user.login(inputEmail.value, inputPassword.value);
    
  })


  //4

  const inputTitle = document.querySelector(".Title")
  const inputDirection = document.querySelector(".direction")
  const inputYear = document.querySelector(".year")
  const inpurRating = document.querySelector(".rating")
  const Movie = document.querySelector(".movies")




  const movie = {
    title:"Arsen Lupen",
    director:"Jungle",
    year:"1999",
    rating: 9,


    movieStar(){
        if(this.rating > 8){
            return true;
        }else{
            return false;
        }
    }
  }

inputTitle.innerHTML = movie.title;
inputDirection.innerHTML = movie.director
inpurRating.innerHTML = movie.rating
inputYear.innerHTML = movie.year






  if(movie.movieStar()){
    document.querySelector(".Title").style.color = "green"
  }

