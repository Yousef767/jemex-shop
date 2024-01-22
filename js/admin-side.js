let navInner = document.getElementById("nav");

navInner.innerHTML=`
<div class="logo bn">
<img src="../media/logo.png" alt="">
</div>
<div class="topNav">
<h3 class="pl10 pb20">Admin Dashboard</h3>
<ul class="listLinks bn g40">
  <h3 class="pl10">MAIN</h3>
  <li class="ml">
    <a href="./sales.html"><img src="../media/navIcons/cart.png" alt=""> Sales </a>
  </li>
  <li class="ml">
    <a href="./reports.html"><img src="../media/navIcons//alert.png" alt=""> Reports </a>
  </li>
  <li class="ml"><a href="./tickets.html"><img src="../media/navIcons/tickets.png" alt=""> Tickets </a>
  </li>
  <li class="ml">
    <a href="./withrawals-history.html"><img src="../media/navIcons/wids.png" alt=""> Withdrawals </a>
  </li>
  <li class="ml">
    <a href="./buyer-news.html"><img src="../media/navIcons/news.png" alt=""> Buyer News </a>
  </li>
  <li class="ml">
    <a href="./seller-news.html"><img src="../media/navIcons/news.png" alt=""> Seller News </a>
  </li>
  <li class="ml">
    <a href="./users.html"><img src="../media/navIcons/users.png" alt=""> Users  </a>
  </li>
  <li class="ml">
    <a href="./sellers.html"><img src="../media/navIcons/sellers.png" alt=""> Sellers  </a>
  </li>
  <li class="ml"><a href="./top-sellers.html"><img src="../media/navIcons/chart.png" alt=""> Top Sellers </a></li>
  <li class="ml"><a href="./deposites.html"><img src="../media/navIcons/desposites.png" alt=""> Deposites  </a></li>
  <li class="ml"><a href="./checkers.html"><img src="../media/navIcons/checkers.png" alt=""> Checkers  </a></li>
  <li class="ml"><a href="./settings.html"><img src="../media/navIcons/settings.png" alt=""> Settings </a>
  </li>
</ul>
<ul class="listLinks pb0">
  <h3 class="pl10">Items</h3>
  <li><a href="../seller-pages/items.html">Shells <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">cPanels <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">RDPs <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">SSH/WHMs <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">SMTPs <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">Mailers <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">Webmails <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">Leads <span>0</span></a></li>
  <li><a href="../seller-pages/items.html">Accounts <span>0</span></a></li>
</ul>
<div class="account">
  <div class="accInfo">
    <img src="../media/navIcons/user.png" alt="">
    <div class="aIn">
      <span>an2</span>
      <span>Buyer/Seller</span>
    </div>
  </div>
  <img class="arrow" src="../media/navIcons/arrow-down.png" alt="">
  <ul class="dropMenu dropAcc">
    <li><a href="../Buyer-Pages/account-information.html"><i class="fa-solid fa-user"></i>Edit Profile</a></li>
    <li><a href="../Buyer-Pages/Referral-System-Statistics.html"><i class="fa-solid fa-circle-dollar"></i> Earn Money </a></li>
    <li><a href="../Buyer-Pages/my-orders.html"><i class="fa-solid fa-boxes-stacked"></i>My Orders </a></li>
    <li><a href="../Buyer-Pages/add-balance.html"><i class="fa-sharp fa-solid fa-dollar-sign"></i>Add Balance </a></li>
    <li class="LogOut"><a href="##"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out </a></li>
  </ul>
</div>
</div>
<button class="menu" id="menu">
<span></span>
<span></span>
<span></span>
</button>
`;

let acc = document.querySelector(".account");
let drop = document.querySelectorAll(".drop");
drop.forEach((e) => {
  e.addEventListener("click", () => {
    acc.classList.remove("showAcc");
    drop.forEach((el) => {
      el !== e ? el.classList.remove("showMenu") : "";
    });
    e.classList.toggle("showMenu");
  });
});


acc.addEventListener("click", () => {
  drop.forEach((el) => {
    el.classList.remove("showMenu");
  });
  acc.classList.toggle("showAcc");
});

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

