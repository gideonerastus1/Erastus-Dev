const staffs = [
      { name: "John Doe", position: "Manager", email: "john@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Jane Smith", position: "Developer", email: "jane@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Michael Johnson", position: "Designer", email: "michael@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Emily Davis", position: "HR", email: "emily@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "David Wilson", position: "Accountant", email: "david@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Sarah Lee", position: "Marketing", email: "sarah@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "James Brown", position: "Support", email: "james@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Linda Martinez", position: "Sales", email: "linda@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Robert Taylor", position: "Engineer", email: "robert@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Patricia Anderson", position: "Consultant", email: "patricia@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Christopher Thomas", position: "Analyst", email: "chris@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Barbara Jackson", position: "Coordinator", email: "barbara@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Daniel White", position: "Technician", email: "daniel@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Susan Harris", position: "Supervisor", email: "susan@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Matthew Clark", position: "Intern", email: "matthew@example.com", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"}
    ];

    const container = document.getElementById("staff-container");
    const searchInput = document.getElementById("searchInput");

    function displayStaffs(list) {
      container.innerHTML = "";
      list.forEach(staff => {
        const card = document.createElement("div");
        card.className = "staff-card";
        card.setAttribute("tabindex", "0");

        card.innerHTML = `
          <img src="${staff.img}" alt="${staff.name}" class="staff-img" />
          <div class="staff-name">${staff.name}</div>
          <div class="staff-position">${staff.position}</div>
          <div class="staff-email">${staff.email}</div>
        `;

        card.addEventListener("click", () => expandStaff(index));
        container.appendChild(card);                           
        setTimeout(() => card.classList.add("show"), 50);
      });
    }

                     
    displayStaffs(staffs);

                   
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = staffs.filter(staff =>
        staff.name.toLowerCase().includes(keyword) ||
        staff.position.toLowerCase().includes(keyword)
      );
      displayStaffs(filtered);
    });

                                              
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll(".staff-card").forEach(card => {
        observer.observe(card);
      });
    }, 100);

