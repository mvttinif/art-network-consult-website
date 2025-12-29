import emailjs from '@emailjs/browser';

// IMPORTANTE: Substitua estas constantes pelos seus dados do EmailJS
// Crie uma conta em https://www.emailjs.com/
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Nao fornecido',
        company: formData.company || 'Nao fornecido',
        service: formData.service,
        message: formData.message,
      },
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
};

// Inicializar EmailJS
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};
