function appendImageElem(keyword,index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;
    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}
function removePhotos(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML='';
}
function searchPhotos(event){
    const keyword = event.target.value; //ค่าที่ user พิมอยู่่ ณ ปัจจุบัน
    if(event.key === 'Enter'&&keyword!=='') {
        removePhotos();
        for(let i=1;i<=9;i++){
            appendImageElem(keyword,i);
        }
    }
}
function run(){
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown',searchPhotos);
}
run();
//Ctrl+Enter       = เพิ่มบรรทัดข้างล่าง
//Ctrl-Shift-Enter = เพิ่มบรรทัดข้างบน
//Ctrl-x           = ตัดทั้งบรรทัด
//Ctrl-Shift-k     = ลบทั้งบรรทัด
//Home or End      = ไปที่จุดเริ่มต้น/สิ้นสุดของแต่ละบรรทัด
//Ctrl+Shift+l     = เลือกส่วนที่เหมือนทั้งหมด
//Ctrl-l           = เลือกทั้งบรรทัด