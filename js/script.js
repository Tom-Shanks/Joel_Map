function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
    } else {
        modal.classList.add('show');
    }
}