

let insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Name</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`
})