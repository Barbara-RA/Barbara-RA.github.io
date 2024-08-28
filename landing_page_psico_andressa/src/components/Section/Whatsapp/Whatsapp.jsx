import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber='+5534998677621' // Número do WhatsApp em formato internacional para onde as mensagens serão enviadas
            accountName='Psicóloga Andressa' // Nome da conta exibido no chat, pode incluir emojis para personalização
            chatMessage='Olá! 🌟 Seja bem-vindo(a) ao nosso espaço de acolhimento e apoio. Vamos juntos trabalhar para que você se sinta melhor. Como posso te ajudar?' // Mensagem exibida na caixa de chat ao abrir
            statusMessage='Disponível' // Mensagem de status exibida abaixo do nome da conta, informando a disponibilidade
            placeholder='Digite a sua mensagem' // Texto do placeholder que aparece na caixa de entrada de texto
            allowClickAway={true} // Permite que o chat seja fechado ao clicar fora dele
            allowEsc={true} // Permite que o chat seja fechado ao pressionar a tecla Escape
            darkMode={false} // Define o tema do chat; false para claro, true para escuro
            messageDelay={2} // Tempo de atraso em segundos para a exibição da mensagem de chat inicial
            notification={true} // Habilita notificações que aparecem antes do usuário abrir o chat
            notificationDelay={10} // Intervalo de tempo em segundos entre as notificações repetitivas
            notificationSound={true} // Habilita o som de notificação quando a notificação é exibida
            chatboxHeight={380} // Define a altura da caixa de chat em pixels
            // Aqui não definimos o avatar, então o avatar padrão será utilizado
        />
    );
}