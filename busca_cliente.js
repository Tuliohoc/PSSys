

// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

const clientesTable = document.getElementById('clientesTable');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', event => {
    const termoBusca = searchInput.value.toLowerCase();
    const linhasClientes = clientesTable.getElementsByTagName('tr');

    for (let i = 1; i < linhasClientes.length; i++) {
        const nomeCliente = linhasClientes[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        if (nomeCliente.includes(termoBusca)) {
            linhasClientes[i].style.display = '';
        } else {
            linhasClientes[i].style.display = 'none';
        }
    }
});
