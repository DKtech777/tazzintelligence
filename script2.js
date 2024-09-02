document.addEventListener('DOMContentLoaded', () => {
    // Mini Navbar Filtering
    const miniNavItems = document.querySelectorAll('.mini-nav-item');
    const bookCards = document.querySelectorAll('.book-card');

    miniNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            miniNavItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            bookCards.forEach(card => {
                card.style.display = category === 'all' || card.getAttribute('data-category') === category ? 'block' : 'none';
            });
        });
    });

    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', function() {
            const targetModalId = this.getAttribute('data-target');
            const targetModal = document.querySelector(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'flex';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
