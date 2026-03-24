/* =====================
   STAFF DATA
===================== */

const staffs = Array.from({length:15}, (_,i)=>({
  name:["Mrs. Tonte Ageda","Mr. Paul something","Mr. mallam something","Mrs. Inedia Something","Mrs. Vivian something"][i%5],
  position:["manager","developer","designer","hR","accountant","acchetect","gorimapa","tailor","gorrrila","Accountant","lion","pig","ronm","jill","lioness"][i%15],
  image:[`/GSS Aleyita webpage/asset/Casa_Para_Estudiantes_Atras_by_estevao.jpg`,'/GSS Aleyita webpage/asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg'][i%2],
  history:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iusto adipisci dolores, maiores blanditiis deleniti at ratione optio reiciendis, explicabo nam delectus, sunt quo exercitationem quisquam ut aperiam labore quidem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iusto adipisci dolores, maiores blanditiis deleniti at ratione optio reiciendis, explicabo nam delectus, sunt quo exercitationem quisquam ut aperiam labore quidem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iusto adipisci dolores, maiores blanditiis deleniti at ratione optio reiciendis, explicabo nam delectus, sunt quo exercitationem quisquam ut aperiam labore quidem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. This staff member has years of professional experience contributing to organizational growth and innovation."
}));

/* =====================
   RENDER STAFFS
===================== */

const staffList = document.getElementById("staffList");

function renderStaff(list){
  staffList.innerHTML="";

  list.forEach(staff=>{
    const div=document.createElement("div");
    div.className="staff";

    div.innerHTML=`
      <img src="${staff.image}">
      <div class="info">
        <div class="name">${staff.name}</div>
        <div class="position">${staff.position}</div>
        <div class="history" hidden>${staff.history}</div>
      </div>
    `;

    addExpandBehaviour(div);
    staffList.appendChild(div);
  });

  observeScroll();
}

renderStaff(staffs);

/* =====================
   EXPAND / COLLAPSE
===================== */

function addExpandBehaviour(card){

  card.addEventListener("click",()=>{

    const expanded=document.querySelector(".staff.expanded");

    if(expanded && expanded!==card){
      collapse(expanded);
    }

    card.classList.toggle("expanded");

    const history=card.querySelector(".history");
    history.hidden=!card.classList.contains("expanded");
  });
}

function collapse(card){
  card.classList.remove("expanded");
  card.querySelector(".history").hidden=true;
}

/* =====================
   SEARCH FILTER
===================== */

document.getElementById("search-boxs")
.addEventListener("input",(e)=>{

  const value=e.target.value.toLowerCase();

  const filtered=staffs.filter(s =>
    s.name.toLowerCase().includes(value) ||
    s.position.toLowerCase().includes(value)
  );

  renderStaff(filtered);
});

/* =====================
   SCROLL FADE-IN
===================== */

function observeScroll(){

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{threshold:.2});

  document.querySelectorAll(".staff")
    .forEach(el=>observer.observe(el));
}
