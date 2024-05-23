const openModalButton = document.getElementById('openModalButton');
 const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close');
   openModalButton.addEventListener('click', function () { modal.style.display = 'block'; });
    closeButton.addEventListener('click', function () { modal.style.display = 'none'; });
     window.addEventListener('click', function (e) { if (e.target === modal) { modal.style.display = 'none';
 } });