import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_mdy786w';
const TEMPLATE_ID = 'template_pu22h1u';
const PUBLIC_KEY = 'cvexUCA44zNBJR4JG';

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
