function checkPassword() { var password = document.getElementById('password-input').value;
 if (password === '123456789') { document.getElementById('password-form').style.display = 'none';
  document.getElementById('content').style.display = 'block';

 } else { alert('Неверный пароль. Попробуйте еще раз.'); } }