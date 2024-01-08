let otpGet = document.getElementById("generaterBtn") 
let displayOtp = document.getElementById('otpDisplay')

otpGet.addEventListener('click', ()=>{
    const otpLength = 6;
    let otp = Math.floor(Math.random()* Math.pow(10, otpLength))
    displayOtp.innerHTML= `${otp}`
    
})