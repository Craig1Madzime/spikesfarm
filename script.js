// Menu Toggle
function toggleMenu() {
    const popup = document.getElementById('navPopup');
    const button = document.querySelector('.menu-button');
    popup.classList.toggle('active');
    button.classList.toggle('active');
}

function closeMenuIfClickedOutside(event) {
    if (event.target.id === 'navPopup') {
        toggleMenu();
    }
}

// FAQ Toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// AI Chat Toggle
function toggleAI() {
    const aiChat = document.getElementById('aiChat');
    aiChat.classList.toggle('active');
}

// AI Chat Functionality
function sendMessage() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    const messagesContainer = document.getElementById('aiMessages');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message user';
    userMsg.textContent = message;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate bot response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'ai-message bot';
        botMsg.textContent = getBotResponse(message.toLowerCase());
        messagesContainer.appendChild(botMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 800);
}

function getBotResponse(message) {
    if (message.includes('price') || message.includes('cost')) {
        return "Our prices vary by season and quantity. Please call us at +26772548612 or +26774332787 for current pricing. We offer special rates for bulk orders!";
    } else if (message.includes('delivery') || message.includes('deliver')) {
        return "Yes, we offer delivery services! We deliver within Palapye and can arrange delivery across Botswana for bulk orders. Contact us to discuss delivery options and fees.";
    } else if (message.includes('hours') || message.includes('open')) {
        return "We're open Monday-Saturday: 7:00 AM - 6:00 PM, and Sundays: 8:00 AM - 2:00 PM. Visit us anytime during these hours!";
    } else if (message.includes('location') || message.includes('where')) {
        return "We're located in Palapye, near Morupule. Call us at +26772548612 or +26774332787 for detailed directions!";
    } else if (message.includes('pig') || message.includes('livestock')) {
        return "We raise healthy, quality pigs with proper nutrition and care. Visit our farm to see them or call us to discuss availability and pricing. Our livestock manager Kabo would be happy to help!";
    } else if (message.includes('organic')) {
        return "We practice sustainable farming with minimal chemicals and prioritize natural methods. We're working toward full organic certification while maintaining the highest quality standards.";
    } else if (message.includes('bulk') || message.includes('wholesale')) {
        return "We absolutely accept bulk and wholesale orders! We work with restaurants, hotels, and large-scale buyers. Contact us to discuss your needs and get competitive pricing.";
    } else {
        return "Thank you for your question! For specific inquiries, please call us at +26772548612 or +26774332787. Our team will be happy to help you!";
    }
}

// Search Functionality
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }
    
    const products = ['tomatoes', 'green peppers', 'beans', 'maize', 'butternuts', 'sweet potatoes', 'okra', 'pigs'];
    const found = products.filter(p => p.includes(searchTerm));
    
    if (found.length > 0) {
        alert(`Found: ${found.join(', ')}. Redirecting to Products page...`);
        window.location.href = 'products.html';
    } else {
        alert(`No products found matching "${searchTerm}". Try searching for: tomatoes, peppers, beans, maize, butternuts, sweet potatoes, okra, or pigs.`);
    }
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon. For immediate assistance, please call us at +267 72 548 612 or +267 74 332 787.');
    event.target.reset();
}

// Smooth scrolling for navigation links (for single-page sections)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});