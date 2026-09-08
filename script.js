const products=[
{name:"لنت ترمز جلو پژو 206 تیپ 5",brand:"امکو",price:850000,icon:"🛞",off:"۲۳٪"},
{name:"روغن موتور 5W40 توتال",brand:"Total",price:1290000,icon:"🛢️",off:"۱۸٪"},
{name:"فیلتر روغن پراید",brand:"به‌ران فیلتر",price:185000,icon:"⚙️",off:"۱۲٪"},
{name:"شمع NGK پایه بلند",brand:"NGK",price:330000,icon:"🔩",off:"۱۵٪"},
{name:"چراغ جلو پژو 206",brand:"کروز",price:1280000,icon:"💡",off:"۱۰٪"},
{name:"کمک فنر عقب پراید",brand:"عظام",price:520000,icon:"🔧",off:"۲۰٪"},
{name:"فیلتر هوا دنا",brand:"سرکان",price:210000,icon:"🧰",off:"۱۷٪"},
{name:"دیسک و صفحه پژو 405",brand:"والئو",price:3850000,icon:"⚙️",off:"۹٪"}];
let cart=[];
const money=n=>n.toLocaleString("fa-IR")+" تومان";
function render(list=products){document.getElementById("productGrid").innerHTML=list.map((p,i)=>`<div class="product"><span class="badge">تخفیف ${p.off}</span><div class="pic">${p.icon}</div><div class="product-body"><h3>${p.name}</h3><div class="meta">برند: ${p.brand}</div><div class="price">${money(p.price)}</div><button class="add" onclick="addCart(${i})">افزودن به سبد</button></div></div>`).join("")}
function addCart(i){cart.push(products[i]);document.getElementById("cartCount").textContent=cart.length;openCart()}
function openCart(){document.getElementById("cartModal").style.display="flex";let box=document.getElementById("cartItems");if(!cart.length)box.innerHTML="<p>سبد خرید شما خالی است.</p>";else box.innerHTML=cart.map((p,i)=>`<div class="cart-row"><span>${p.name}</span><b>${money(p.price)}</b></div>`).join("");document.getElementById("cartTotal").textContent=money(cart.reduce((a,p)=>a+p.price,0))}
function closeCart(){document.getElementById("cartModal").style.display="none"}
function filterProducts(){let q=document.getElementById("searchInput").value.trim().toLowerCase();render(products.filter(p=>(p.name+" "+p.brand).toLowerCase().includes(q)))}
function vehicleSearch(){let b=document.getElementById("brand").value,m=document.getElementById("model").value;document.getElementById("searchInput").value=(b+" "+m).trim();filterProducts();document.getElementById("products").scrollIntoView({behavior:"smooth"})}
function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
render();
