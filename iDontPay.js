const iDontPay = () => {
    const blurs = document.querySelectorAll('.content');
    const payWall = document.querySelector('.piano-paywall');
    
    blurs.forEach(blur => blur.style.filter = 'none');
    payWall.style.display = 'none';
}

iDontPay();
