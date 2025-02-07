//Calendar functions

const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () =>{
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const today=new Date()
    const currentDateToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth +1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent=monthYearString

    let datesHTML = '';

    for (let i = firstDayIndex; i>0; i--){
        datesHTML+=`<div> </div>`;
    }

    for (let i = 1; i <=totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const isPast = date < currentDateToday;
        const sunday = date.getDay() === 0;
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        const notAvailClass = isPast ? "notavail" : "" || sunday ? "notavail" : "";

        datesHTML+=`<div class="date ${activeClass} ${notAvailClass}">${i}</div>`;
    }

    datesElement.innerHTML = datesHTML;

    document.querySelectorAll(".date").forEach(date=>{
        date.addEventListener("click", function() {
            if (!this.classList.contains("notavail")){
                document.querySelectorAll('.date').forEach(d => d.classList.remove("active"));
                this.classList.add("active");
            }
        })
    })


}

prevBtn.addEventListener('click', ()=>{
    const today=new Date()
    const currentDateToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (currentDateToday.getMonth()<=(currentDate.getMonth()-1)){
        currentDate.setMonth(currentDate.getMonth()-1);
        updateCalendar();
    } 

})

nextBtn.addEventListener('click', ()=>{
    currentDate.setMonth(currentDate.getMonth()+1);
    updateCalendar();
})

updateCalendar();


