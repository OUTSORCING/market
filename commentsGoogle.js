//Testimonial Data
const testimonials = [
  {
    name: "ІСМ Промінь",
    job: "Створення інноваційної техніки для обробітку ґрунту.",
    image: "https://images.prom.ua/3143405647_w350_h350_aktsiyi.jpg",
    link: "https://g.co/kgs/DUxVbM9",
    testimonial:
      "Старанність та порядність команди перекрила ті маленькі недоліки які були, тому п'ять зірок. Дякую за роботу та бажаю успіхів!",
  },
  {
    name: "Блок - Стандарт",
    job: "Виробництво піноблоків",
    image: "https://blok-standart.com/wp-content/uploads/2023/03/Logo-footer.svg",
    link: "https://g.co/kgs/xBkSgU1",
    testimonial:
      "З завданням першого контакту та інформування ринку про нового оператора   Справилися  на найвищий бал. Результатом є фактичні клієнти. Решта на перспективі.У Наталії єдино було дуже глухо чомусь чути всі дзвінки, але зрозуміло.",
  },
  {
    name: "Дмитро Новіков",
    job: "UBF Consulting",
    image: "https://ubfconsult.com.ua/images/logo.png",
    link: "https://g.co/kgs/sZmGNXr",
    testimonial:
      "Якісно виконали задачі по першому контакту та інформуванню контрагентів про можливості співпраці. Подальша робота наших менеджерів та їх продажі вже окупити витрати по проекту.",
  },
  {
    name: "Star Shine Shipping",
    job: "Доставка вантажів з будь-якої частини планети",
    image: "https://star-shine-shipping.com//images/SSS-22png.png",
    link: "https://g.co/kgs/QBoSnrj",
    testimonial:
      "Дякуємо за співпрацю та старанний продаж послуг, а саме проникнення у специфіку нашої компанії для правильної подачі інформації!  Хочеться відзначити Ларису, за чіткий і переконливий голос, швидку реакцію та розуміння процесу!🌷",
  },
  {
    name: "Перегляньте всі відгуки про співпрацю з нашою компанією на Google",
    job: "",
    image: "",
    link: "https://www.google.com/search?client=firefox-b-d&q=%D0%B0%D1%83%D1%82%D1%81%D0%BE%D1%80%D1%81%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B8%D0%B9+%D0%B2%D1%96%D0%B4%D0%B4%D1%96%D0%BB+%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D1%83+#lrd=0x473ae7bbf9bbd949:0x5ae2cf6b8e129064,1,,,,",
    testimonial:
      "",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    <p><a href="${testimonials[i].link}" target="_blank">Переглянути весь коментар</a></p>
  `;
};
window.onload = displayTestimonial;