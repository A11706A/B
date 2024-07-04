let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', '', 'Web Designer', ''],
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 1200,
    loop: true,
  });

  function openWhatsAppChat() {
    var phoneNumber = "201098042976";  // استبدل هذا الرقم برقم هاتفك الدولي
    var message = "مرحبًا! كيف يمكنني مساعدتك؟";  // الرسالة الافتراضية
    var url = "https://web.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
    var width = 400;
    var height = 600;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;

    window.open(url, 'whatsappChat', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
}

