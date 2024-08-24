// services.js

document.addEventListener('DOMContentLoaded', () => {
    const infoButtons = document.querySelectorAll('.info-button');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const detailsId = button.nextElementSibling.id;
            const details = document.getElementById(detailsId);
            
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                // Hide all other details
                document.querySelectorAll('.service-details').forEach(detail => {
                    detail.style.display = 'none';
                });
                
                // Show the clicked details
                details.style.display = 'block';
            }
        });
    });
});
