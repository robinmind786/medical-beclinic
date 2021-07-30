const department = [
	{
		id: 1,
		title: 'Pulmonary',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-5.png',
	},
	{
		id: 2,
		title: 'Pulmonary',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-6.png',
	},
	{
		id: 3,
		title: 'Pulmonary',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-7.png',
	},
	{
		id: 4,
		title: 'Births',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-8.png',
	},
	{
		id: 5,
		title: 'Gynaecology',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-9.png',
	},
	{
		id: 6,
		title: 'Dental',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-10.png',
	},
	{
		id: 7,
		title: 'NMR',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-11.png',
	},
	{
		id: 8,
		title: 'For disabled',
		desc: 'Treatment perfectly match your goals.',
		img: './img/department/icon-img-12.png',
	},
];


const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
	let displayMenu = department.map(function(item){
		return `
          <div class="item-content">
            <div class="item-img">
              <img src=${item.img}>
            </div>
            <div class="item-info">
              <h5 class="section-title"><a href="#">${item.title}</a></h5>
              <p class="section-desc">${item.desc}</p>
            </div>
          </div>
		`;
	});
	displayMenu = displayMenu.join('');
	sectionCenter.innerHTML = displayMenu;

});




// doctor
const doctor = [
	{
		id: 1,
		skill: 'CONSULTING DOCTOR',
		name: 'Dr. Sarah Johnson',
		phone: '+82682 2458',
		email: 'sara@gmail.com',
		address: 'santa monica, ca',
		desc: '"Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!"',
		img: './img/team-1.jpg',
	},
	{
		id: 2,
		skill: 'DENTAL HYGIENIST',
		name: 'Dr. Greg House',
		phone: '+98564200',
		email: 'greg@gmail.com',
		address: 'santa monica, ca',
		desc: '"Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!"',
		img: './img/team-2.jpg',
	},
	{
		id: 3,
		skill: 'PEDIATRICIAN',
		name: 'Dr. Marta Stewart',
		phone: '+0178965',
		email: 'marta@gmail.com',
		address: 'santa monica, ca',
		desc: '"Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity."',
		img: './img/team-3.jpg',
	},
	{
		id: 4,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-4.jpg',
	},
];

const teamCenter = document.querySelector('.team-center');

window.addEventListener('DOMContentLoaded', function(){
	let displayDoctor = doctor.map(function(doctorItem){
		return `
          <div class="item-content">
            <div class="team-content">
              <div class="team-img">
                <img src=${doctorItem.img}>
                <div class="overlay">
                  <div class="team-social">
                    <ul>
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="team-info">
                <div class="skill">
                  <h6>${doctorItem.skill}</h6>
                </div>
                <div class="team-name">
                  <h4><a href="#">${doctorItem.name}</a></h4>
                </div>
                <div class="team-phone">
                  <h5><i class="fa fa-mobile"></i> ${doctorItem.phone}</h5>
                </div>
                <div class="team-email">
                  <h5><i class="fa fa-envelope"></i> ${doctorItem.email}</h5>
                </div>
              </div>
            </div>
          </div>
		`;
	});
	displayDoctor = displayDoctor.join('');
	teamCenter.innerHTML = displayDoctor;
});


const img = document.getElementById('reviews-img');
const desc = document.getElementById('reviews-desc');
const name = document.getElementById('reviews-name');
const address = document.getElementById('reviews-address');

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
console.log(nextBtn)

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
	showPerson(doctor)
});

function showPerson(person) {
	const item = doctor[currentItem];
	img.src = item.img;
	desc.textContent = item.desc;
	name.textContent = item.name;
	address.textContent = item.address;
}

nextBtn.addEventListener("click", function () {
	console.log('d')
  currentItem++;
  if (currentItem > doctor.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = doctor.length - 1;
  }
  showPerson(currentItem);
});