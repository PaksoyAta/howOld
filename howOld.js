const howOld = (age, year) =>{
    if (year > 2020){
      return 'You will be '+ (age+year-2020) + ' in the year '+ year
    } else if(year < (2020-age)){
      return 'The year ' + year + ' was ' + (2020-year-age) + ' years before you were born'
    }else if(year < 2020 && year >= 2020-age){
      return 'You were ' + (age + year - 2020) + ' in the year '+ year
    }
  
  }
  
  
  console.log(howOld(5,2017))