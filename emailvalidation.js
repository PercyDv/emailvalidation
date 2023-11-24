  document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario
    const firstNameInput = document.getElementById('first_name');
    const lastNameInput = document.getElementById('last_name');
    const emailInput = document.getElementById('email');

    const errorFirstName = document.getElementById('error-first-name');
    const errorLastName = document.getElementById('error-last-name');
    const errorEmail = document.getElementById('error-email');

    const nextButton = document.getElementById('nextButton');

    // Obtener el formulario
    const form = document.getElementById('email-form'); // Reemplaza 'email-form' con el ID real de tu formulario

    // Agregar evento click al botón de siguiente
    nextButton.addEventListener('click', function () {
      // Validar el primer slider
      if (validateSlider1()) {
        // Pasar al segundo slider
        // Puedes usar las funciones de Webflow para hacer esto
        // Por ejemplo: Webflow.goToNextSlide('slider1', 'slider2');
      }
    });

    // Agregar evento submit al formulario
    form.addEventListener('submit', function (event) {
      // Validar el primer slider antes de enviar el formulario
      if (!validateSlider1()) {
        event.preventDefault(); // Impedir el envío del formulario si la validación falla
        console.log('Formulario no enviado debido a errores de validación.');
      }
    });

    // Agregar eventos de entrada a los campos de entrada para ocultar el mensaje de error al escribir
    firstNameInput.addEventListener('input', function () {
      errorFirstName.style.display = 'none';
      firstNameInput.style.border = ''; // Restaurar el borde por defecto
    });

    lastNameInput.addEventListener('input', function () {
      errorLastName.style.display = 'none';
      lastNameInput.style.border = ''; // Restaurar el borde por defecto
    });

    emailInput.addEventListener('input', function () {
      errorEmail.style.display = 'none';
      emailInput.style.border = ''; // Restaurar el borde por defecto
    });

    // Función para validar el primer slider
    function validateSlider1() {
      let isValid = true;

      // Validar el campo de nombre
      if (firstNameInput.value.trim() === '') {
        isValid = false;
        errorFirstName.style.display = 'block';
        firstNameInput.style.border = '1px solid red';
      } else {
        errorFirstName.style.display = 'none';
        firstNameInput.style.border = ''; // Restaurar el borde por defecto
      }

      // Validar el campo de apellido
      if (lastNameInput.value.trim() === '') {
        isValid = false;
        errorLastName.style.display = 'block';
        lastNameInput.style.border = '1px solid red';
      } else {
        errorLastName.style.display = 'none';
        lastNameInput.style.border = ''; // Restaurar el borde por defecto
      }

      // Validar el campo de correo electrónico
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const invalidEmailDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'outlook.es', 'yahoo.com', 'aol.com', 'hotmail.co.uk', 'inbox.com', 'icloud.com', 'me.com', 'mail.com', 'protonmail.com', 'rocketmail.com', 'yahoo.co.uk', 'yahoo.com.au', 'yahoo.com.br', 'yahoo.com.mx', 'yahoo.com.ar', 'yahoo.com.ve', 'yahoo.com.co', 'yahoo.com.pe', 'yahoo.com.gt', 'yahoo.com.pa', 'yahoo.com.do', 'yahoo.com.hn', 'yahoo.com.ni', 'yahoo.com.cr', 'yahoo.com.sv', 'yahoo.com.pr', 'yahoo.com.bo', 'yandex.com', 'proton.me', 'outlook.fr', 'outlook.com.ar', 'outlook.com.au', 'outlook.at', 'outlook.be', 'outlook.com.br', 'outlook.cl', 'outlook.cz', 'outlook.dk', 'outlook.fr', 'outlook.de', 'utlook.com.gr', 'outlook.co.il', 'outlook.in', 'outlook.co.id', 'outlook.ie', 'outlook.it', 'outlook.hu', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.co.nz', 'outlook.com.pe', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'outlook.co.th', 'outlook.com.tr', 'outlook.com.vn'];

      if (!emailPattern.test(emailInput.value) || invalidEmailDomains.some(domain => emailInput.value.endsWith(domain))) {
        isValid = false;
        errorEmail.style.display = 'block';
        emailInput.style.border = '1px solid red';

        // Si el correo electrónico termina con algún dominio inválido, no permitir el envío del formulario
        if (invalidEmailDomains.some(domain => emailInput.value.endsWith(domain))) {
          isValid = false;
          console.log('Formulario no enviado debido a un correo electrónico con dominio inválido.');
        }
      } else {
        errorEmail.style.display = 'none';
        emailInput.style.border = ''; // Restaurar el borde por defecto
      }

      return isValid;
    }
  });
