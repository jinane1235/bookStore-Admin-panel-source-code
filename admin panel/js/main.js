// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Section toggling
  const links = document.querySelectorAll('aside nav a[data-section]');
  const sections = document.querySelectorAll('main .section');
  function show(id) {
    sections.forEach(s => s.id === id ? s.classList.remove('hidden') : s.classList.add('hidden'));
  }
  links.forEach(l => l.addEventListener('click', e => {
    e.preventDefault();
    show(l.dataset.section);
  }));
  show('dashboard');

  // Charts
  const uCtx = document.getElementById('userGrowthChart').getContext('2d');
  const bCtx = document.getElementById('bookUploadsChart').getContext('2d');
  new Chart(uCtx, {
    type: 'bar',
    data: {
      labels: ['Week 1','Week 2','Week 3','Week 4'],
      datasets: [{ label:'New Users', data:[24,28,30,35] }]
    },
    options:{responsive:true}
  });
  new Chart(bCtx, {
    type: 'bar',
    data: {
      labels: ['Week 1','Week 2','Week 3','Week 4'],
      datasets: [{ label:'Books Uploaded', data:[40,50,45,60] }]
    },
    options:{responsive:true}
  });

  // Dummy data
  const users = [
    {u:'john_doe', e:'john@example.com', d:'25 Apr 2025', s:'Active', b:0},
    {u:'booklover92', e:'booklover92@gmail.com', d:'24 Apr 2025', s:'Active', b:1},
    {u:'mary.books', e:'mary.reads@yahoo.com', d:'24 Apr 2025', s:'Active', b:2},
    {u:'user1234', e:'user1234@outlook.com', d:'23 Apr 2025', s:'Active', b:0}
  ];
  const books = [
    {t:'The Alchemist', a:'Paulo Coelho', o:'john_doe', s:'Pending', d:'25 Apr 2025'},
    {t:'1984', a:'George Orwell', o:'mary.books', s:'Approved', d:'24 Apr 2025'},
    {t:'Pride & Prejudice', a:'Jane Austen', o:'booklover98', s:'Pending', d:'23 Apr 2025'},
    {t:'The Great Gatsby', a:'F. Scott Fitzgerald', o:'user1234', s:'Approved', d:'22 Apr 2025'}
  ];

  // Render Dashboard Tables
  function render(arr, id, fn) {
    const tb = document.getElementById(id);
    arr.forEach(x => {
      const tr = document.createElement('tr');
      tr.innerHTML = fn(x);
      tb.appendChild(tr);
    });
  }

  // Recent Users
  render(users, 'usersTable', u =>
    `<td class="px-4 py-2">${u.u}</td>
     <td class="px-4 py-2">${u.e}</td>
     <td class="px-4 py-2">${u.d}</td>
     <td class="px-4 py-2">${u.s}</td>`
  );

  // Recent Books
  render(books, 'booksTable', b =>
    `<td class="px-4 py-2">${b.t}</td>
     <td class="px-4 py-2">${b.a}</td>
     <td class="px-4 py-2">${b.o}</td>
     <td class="px-4 py-2">${b.s}</td>
     <td class="px-4 py-2">${b.d}</td>`
  );

  // Users Section
  render(users, 'usersListTable', u =>
    `<td class="px-4 py-2">${u.u}</td>
     <td class="px-4 py-2">${u.e}</td>
     <td class="px-4 py-2">${u.d}</td>
     <td class="px-4 py-2">${u.s}</td>
     <td class="px-4 py-2">${u.b}</td>`
  );

  // Book Listings Section
  render(books, 'booksListTable', b =>
    `<td class="px-4 py-2">${b.t}</td>
     <td class="px-4 py-2">${b.a}</td>
     <td class="px-4 py-2">${b.o}</td>
     <td class="px-4 py-2">${b.s}</td>
     <td class="px-4 py-2">${b.d}</td>`
  );
});
