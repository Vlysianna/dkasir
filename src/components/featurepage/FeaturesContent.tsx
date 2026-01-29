import type { JSX } from "react";

const features = [
  {
    icon: "cart",
    title: "Kasir",
    description: "Transaksi cepat dan mudah dengan sistem POS modern",
    image: "/ipadkasir.png",
  },
  {
    icon: "payment",
    title: "Pembayaran",
    description: "Mendukung berbagai metode pembayaran online & offline",
    image: "/ipadpembayaran.png",
  },
  {
    icon: "chart",
    title: "Laporan Penjualan",
    description: "Pantau performa bisnis secara real-time",
    image: "/ipadlaporan.png",
  },
  {
    icon: "users",
    title: "Karyawan",
    description: "Kelola akses dan role karyawan",
    image: "/ipadabsen.png",
  },
  {
    icon: "store",
    title: "Outlet",
    description: "Manajemen banyak cabang dalam satu akun",
    image: "/ipadoutlet.png",
  },
  {
    icon: "box",
    title: "Produk",
    description: "Kelola produk, kategori, dan harga dengan mudah",
    image: "/ipadproduk.png",
  },
];

const iconMap: Record<string, JSX.Element> = {  
  cart: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.293-2.707l1.414 1.414c.195.195.451.293.707.293h12c.256 0 .512-.098.707-.293l3.293-3.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.879 2.879h-10.586l-2.879-2.879c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3.293 3.293zm13.293-7.293v-2c0-1.104-.896-2-2-2h-8c-1.104 0-2 .896-2 2v2h-2v2h2v8h12v-8h2v-2h-2zm-10 0v-2h8v2h-8z"/></svg></span>,
  payment: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 14h-16v-8h16v8zm0-10h-16v-2h16v2z"/></svg></span>,
  chart: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M3 17h2v-7h-2v7zm4 0h2v-12h-2v12zm4 0h2v-4h-2v4zm4 0h2v-9h-2v9zm4 0h2v-2h-2v2z"/></svg></span>,
  users: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M16 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm-8 0c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45v2.5h6v-2.5c0-2.33-4.67-3.5-7-3.5zm-8-2c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/></svg></span>,
  store: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M20 6h-16l-2 6v2c0 1.104.896 2 2 2h1v4c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-4h1c1.104 0 2-.896 2-2v-2l-2-6zm-2 14h-12v-4h12v4zm3-8c0 .552-.447 1-1 1h-18c-.553 0-1-.448-1-1v-1h20v1zm-1.618-3l1.382 4h-18.528l1.382-4h15.764z"/></svg></span>,
  box: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M21 16v-8c0-1.104-.896-2-2-2h-14c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2zm-2 0h-14v-8h14v8zm-7-10c.552 0 1-.447 1-1s-.448-1-1-1-1 .447-1 1 .448 1 1 1z"/></svg></span>,
};

interface FeaturesContentProps {
  iconMap?: Record<string, JSX.Element>;
}

const FeaturesContent = ({ iconMap: customIconMap }: FeaturesContentProps = {}) => {
  const icons = customIconMap || iconMap;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <div className="flex items-start gap-6 w-full">
            <svg width="117" height="113" viewBox="0 0 117 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28">
<path d="M32.2636 14.6576C46.9356 5.94333 46.3189 1.49292 61.7563 1.49292C77.1937 1.49292 78.338 7.98952 90.8307 20.0393C103.323 32.0892 111.118 31.2052 111.728 49.6899C112.338 68.1747 104.064 76.4376 88.9474 92.0494C73.8308 107.661 69.8007 112.135 51.2707 112.135C32.7407 112.135 28.7966 104.865 19.1459 93.9744C9.49517 83.0839 14.0703 78.9644 9.8522 65.477C5.63412 51.9896 -1.7452 48.3013 3.0677 36.3462C7.88061 24.3912 17.5917 23.3711 32.2636 14.6576Z" fill="#EAF3EF"/>
<g filter="url(#filter0_d_156_113)">
<path d="M20.1195 27.0024H93.1834C93.9383 27.0024 94.6624 27.3013 95.1962 27.8333C95.73 28.3653 96.0299 29.0869 96.0299 29.8392V79.0127C96.0299 79.7651 95.73 80.4866 95.1962 81.0186C94.6624 81.5506 93.9383 81.8495 93.1834 81.8495H20.1195C19.3645 81.8495 18.6405 81.5506 18.1067 81.0186C17.5729 80.4866 17.2729 79.7651 17.2729 79.0127V29.8392C17.2729 29.0869 17.5729 28.3653 18.1067 27.8333C18.6405 27.3013 19.3645 27.0024 20.1195 27.0024Z" fill="url(#paint0_linear_156_113)"/>
</g>
<path opacity="0.151" d="M19.5336 26.9974H93.7615C94.3621 26.9974 94.9381 27.2352 95.3628 27.6584C95.7874 28.0817 96.026 28.6557 96.026 29.2542V36.4534H17.269V29.2542C17.269 28.6557 17.5076 28.0817 17.9323 27.6584C18.357 27.2352 18.933 26.9974 19.5336 26.9974Z" fill="white"/>
<path opacity="0.151" d="M90.3326 47.395H83.6907V77.1194H90.3326V47.395Z" fill="white"/>
<path opacity="0.151" d="M75.1502 54.859H68.5083V77.1178H75.1502V54.859Z" fill="white"/>
<path opacity="0.151" d="M59.9688 65.7678H53.3269V77.1158H59.9688V65.7678Z" fill="white"/>
<path opacity="0.151" d="M44.7867 62.4136H38.1448V77.1144H44.7867V62.4136Z" fill="white"/>
<g filter="url(#filter1_d_156_113)">
<path d="M46.6736 45.4319H40.0317V47.3231H46.6736V45.4319Z" fill="#F7AD36"/>
</g>
<path opacity="0.151" d="M58.0576 50.1525H40.0288V52.0437H58.0576V50.1525Z" fill="white"/>
<g filter="url(#filter2_d_156_113)">
<path d="M25.7081 75.9762C29.5579 75.3383 33.2793 74.0858 36.7289 72.2668C42.157 69.3254 41.2202 65.4212 46.7268 64.5538C52.2334 63.6864 55.4589 71.3881 61.6215 69.0185C67.784 66.6489 65.9928 59.2217 71.907 55.0406C77.8212 50.8595 80.1348 53.828 84.1355 51.1288C88.1362 48.4297 87.5821 41.8263 87.5821 41.8263H84.7281C84.7281 41.8263 85.4074 46.8469 82.69 48.7584C79.9725 50.6699 75.7673 48.4801 70.1731 53.084C64.5789 57.6878 64.8718 64.3364 60.9851 66.2757C57.0984 68.2151 52.6304 60.563 46.1282 61.544C39.6259 62.5249 40.2842 66.6549 35.1792 69.7038C32.2318 71.4943 29.0413 72.8533 25.7058 73.739L25.7081 75.9762Z" fill="url(#paint1_linear_156_113)"/>
</g>
<path d="M27.1056 47.4008C27.1056 48.0027 26.7569 48.4262 25.9809 48.4262H24.8818V46.4018H25.9809C26.7569 46.4018 27.1056 46.7923 27.1056 47.4008ZM23.8877 45.5931V51.6338H24.8818V49.2176H25.6427L27.0362 51.6338H28.222L26.7221 49.1311C27.1239 49.0552 27.4857 48.8396 27.7428 48.5228C27.9999 48.2059 28.1358 47.8083 28.1262 47.4008C28.1262 46.4184 27.4196 45.5954 25.9809 45.5954L23.8877 45.5931ZM30.8323 47.549V46.8449H29.8359V53.9095H30.83V50.9388C31.035 51.1822 31.2913 51.3777 31.5807 51.5114C31.87 51.645 32.1854 51.7136 32.5043 51.7121C32.8199 51.705 33.1307 51.6338 33.4177 51.5027C33.7047 51.3717 33.9619 51.1837 34.1734 50.9501C34.3849 50.7166 34.5464 50.4424 34.6479 50.1445C34.7493 49.8466 34.7887 49.5312 34.7635 49.2176C34.7887 48.906 34.749 48.5926 34.6471 48.297C34.5452 48.0014 34.3832 47.7299 34.1712 47.4996C33.9593 47.2692 33.7019 47.0849 33.4152 46.9581C33.1285 46.8314 32.8187 46.7649 32.505 46.7629C32.1841 46.7574 31.8662 46.8255 31.5758 46.9618C31.2854 47.0981 31.0302 47.299 30.83 47.549H30.8323ZM33.7543 49.2176C33.7713 49.4222 33.7463 49.6282 33.6807 49.8228C33.6151 50.0175 33.5103 50.1968 33.3728 50.3497C33.2353 50.5027 33.068 50.626 32.881 50.7123C32.694 50.7986 32.4913 50.8459 32.2854 50.8515C32.0813 50.8466 31.8803 50.8001 31.6949 50.715C31.5094 50.6298 31.3434 50.5078 31.2069 50.3564C31.0705 50.205 30.9666 50.0275 30.9015 49.8346C30.8364 49.6417 30.8116 49.4376 30.8285 49.2349C30.8124 49.0327 30.8379 48.8294 30.9034 48.6374C30.9689 48.4454 31.0731 48.2688 31.2094 48.1183C31.3458 47.9678 31.5116 47.8466 31.6966 47.7622C31.8816 47.6778 32.0819 47.6319 32.2854 47.6273C32.4889 47.6278 32.6902 47.6704 32.8764 47.7522C33.0627 47.834 33.23 47.9534 33.3677 48.1027C33.5055 48.2521 33.6107 48.4282 33.6769 48.6201C33.743 48.812 33.7686 49.0154 33.752 49.2176H33.7543Z" fill="white"/>
<g filter="url(#filter3_d_156_113)">
<path d="M20.1199 66.7172C22.5597 66.7172 24.9446 67.4382 26.9732 68.789C29.0018 70.1398 30.5829 72.0598 31.5166 74.3062C32.4503 76.5525 32.6945 79.0244 32.2186 81.4091C31.7426 83.7938 30.5677 85.9843 28.8426 87.7036C27.1174 89.4229 24.9194 90.5937 22.5265 91.068C20.1336 91.5424 17.6533 91.2989 15.3992 90.3685C13.1452 89.438 11.2186 87.8623 9.86312 85.8406C8.50766 83.819 7.78418 81.4421 7.78418 79.0107C7.78418 75.7503 9.08383 72.6233 11.3972 70.3179C13.7106 68.0124 16.8483 66.7172 20.1199 66.7172Z" fill="url(#paint2_linear_156_113)"/>
</g>
<g filter="url(#filter4_d_156_113)">
<path d="M94.1341 17.5465C97.1369 17.5465 100.072 18.4339 102.569 20.0964C105.066 21.759 107.012 24.122 108.161 26.8867C109.31 29.6514 109.61 32.6936 109.025 35.6286C108.439 38.5637 106.993 41.2596 104.87 43.3756C102.746 45.4917 100.041 46.9327 97.0961 47.5165C94.151 48.1003 91.0983 47.8007 88.3242 46.6555C85.55 45.5103 83.1788 43.571 81.5106 41.0828C79.8423 38.5947 78.9519 35.6694 78.9519 32.6769C78.9519 28.664 80.5515 24.8156 83.3987 21.9781C86.2459 19.1406 90.1076 17.5465 94.1341 17.5465Z" fill="url(#paint3_linear_156_113)"/>
</g>
<path d="M20.0747 75.2426C18.754 75.2426 17.6796 76.3133 17.6796 77.6295C17.6796 78.9456 18.754 80.0164 20.0747 80.0164C21.3954 80.0164 22.4698 78.9456 22.4698 77.6295C22.4698 76.3133 21.3954 75.2426 20.0747 75.2426ZM20.0747 73.738C22.2313 73.738 23.9795 75.4803 23.9795 77.6295C23.9795 79.7787 22.2313 81.5209 20.0747 81.5209C17.9181 81.5209 16.1699 79.7787 16.1699 77.6295C16.1699 75.4803 17.9181 73.738 20.0747 73.738Z" fill="white"/>
<path d="M16.5161 84.9935C16.5161 84.9935 16.2572 81.0583 20.0767 81.0583C23.8963 81.0583 23.6366 84.9935 23.6366 84.9935" stroke="white" strokeWidth="1.50453"/>
<path d="M94.4594 26.8324C92.6241 26.8324 91.131 28.3204 91.131 30.1494C91.131 31.9784 92.6241 33.4664 94.4594 33.4664C96.2946 33.4664 97.7877 31.9784 97.7877 30.1494C97.7877 28.3204 96.2946 26.8324 94.4594 26.8324ZM94.4594 25.3279C97.1314 25.3279 99.2974 27.4865 99.2974 30.1494C99.2974 32.8123 97.1314 34.9709 94.4594 34.9709C91.7874 34.9709 89.6213 32.8123 89.6213 30.1494C89.6213 27.4865 91.7874 25.3279 94.4594 25.3279Z" fill="white"/>
<path d="M90.0485 39.0958C90.0485 39.0958 89.7285 34.2346 94.4462 34.2346C99.164 34.2346 98.844 39.0958 98.844 39.0958" stroke="white" strokeWidth="1.50453"/>
<g filter="url(#filter5_d_156_113)">
<path d="M70.2133 14.71C70.0131 14.71 69.8211 14.6308 69.6795 14.4897C69.538 14.3486 69.4584 14.1573 69.4584 13.9578V12.3457H67.8408C67.6406 12.3457 67.4486 12.2664 67.307 12.1253C67.1655 11.9843 67.0859 11.7929 67.0859 11.5934V11.2067C67.0859 11.0072 67.1655 10.8159 67.307 10.6748C67.4486 10.5337 67.6406 10.4545 67.8408 10.4545H69.4584V8.84236C69.4584 8.64284 69.538 8.4515 69.6795 8.31042C69.8211 8.16934 70.0131 8.09009 70.2133 8.09009H70.6013C70.8015 8.09009 70.9935 8.16934 71.135 8.31042C71.2766 8.4515 71.3561 8.64284 71.3561 8.84236V10.4545H72.9737C73.0729 10.4545 73.171 10.4739 73.2626 10.5117C73.3542 10.5495 73.4374 10.6049 73.5075 10.6748C73.5776 10.7447 73.6332 10.8276 73.6711 10.9189C73.7091 11.0101 73.7286 11.1079 73.7286 11.2067V11.5934C73.7286 11.7929 73.6491 11.9843 73.5075 12.1253C73.3659 12.2664 73.1739 12.3457 72.9737 12.3457H71.3561V13.9578C71.3561 14.0566 71.3366 14.1544 71.2986 14.2457C71.2607 14.3369 71.2051 14.4199 71.135 14.4897C71.0649 14.5596 70.9817 14.615 70.8901 14.6528C70.7985 14.6906 70.7004 14.71 70.6013 14.71H70.2133Z" fill="#7CB942"/>
</g>
<g filter="url(#filter6_d_156_113)">
<path d="M50.2924 106.433C50.0922 106.433 49.9002 106.354 49.7586 106.213C49.6171 106.072 49.5375 105.881 49.5375 105.681V104.069H47.9199C47.7197 104.069 47.5277 103.99 47.3861 103.849C47.2446 103.708 47.165 103.516 47.165 103.317V102.93C47.165 102.73 47.2446 102.539 47.3861 102.398C47.5277 102.257 47.7197 102.178 47.9199 102.178H49.5375V100.566C49.5375 100.366 49.6171 100.175 49.7586 100.034C49.9002 99.8926 50.0922 99.8134 50.2924 99.8134H50.6804C50.8806 99.8134 51.0726 99.8926 51.2141 100.034C51.3557 100.175 51.4352 100.366 51.4352 100.566V102.178H53.0528C53.152 102.178 53.2501 102.197 53.3417 102.235C53.4333 102.273 53.5165 102.328 53.5866 102.398C53.6567 102.468 53.7123 102.551 53.7502 102.642C53.7882 102.733 53.8077 102.831 53.8077 102.93V103.317C53.8077 103.516 53.7282 103.708 53.5866 103.849C53.445 103.99 53.253 104.069 53.0528 104.069H51.4352V105.681C51.4352 105.78 51.4157 105.878 51.3778 105.969C51.3398 106.06 51.2842 106.143 51.2141 106.213C51.144 106.283 51.0608 106.338 50.9692 106.376C50.8776 106.414 50.7795 106.433 50.6804 106.433H50.2924Z" fill="#7CB942"/>
</g>
<path d="M11.1014 38.3452C11.8876 38.3452 12.525 37.71 12.525 36.9265C12.525 36.1429 11.8876 35.5077 11.1014 35.5077C10.3151 35.5077 9.67773 36.1429 9.67773 36.9265C9.67773 37.71 10.3151 38.3452 11.1014 38.3452Z" fill="#7CB942"/>
<path d="M72.7796 91.3034C73.5659 91.3034 74.2032 90.6682 74.2032 89.8846C74.2032 89.101 73.5659 88.4658 72.7796 88.4658C71.9933 88.4658 71.356 89.101 71.356 89.8846C71.356 90.6682 71.9933 91.3034 72.7796 91.3034Z" fill="#7CB942"/>
<defs>
<filter id="filter0_d_156_113" x="10.5025" y="24.7456" width="92.2979" height="68.3879" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.5136"/>
<feGaussianBlur stdDeviation="3.3852"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.251 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<filter id="filter1_d_156_113" x="37.7749" y="43.1751" width="11.1555" height="6.40484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.1284"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.678431 0 0 0 0 0.211765 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<filter id="filter2_d_156_113" x="21.1922" y="38.065" width="70.9296" height="43.1771" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.752267"/>
<feGaussianBlur stdDeviation="2.2568"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.678431 0 0 0 0 0.729412 0 0 0 0 0.388235 0 0 0 0.502 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<filter id="filter3_d_156_113" x="1.01377" y="64.4604" width="38.2122" height="38.128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.5136"/>
<feGaussianBlur stdDeviation="3.3852"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.72549 0 0 0 0 0.258824 0 0 0 0.502 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<filter id="filter4_d_156_113" x="72.1815" y="15.2897" width="43.9053" height="43.8016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.5136"/>
<feGaussianBlur stdDeviation="3.3852"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.678431 0 0 0 0 0.211765 0 0 0 0.502 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<filter id="filter5_d_156_113" x="62.5723" y="4.32875" width="15.6698" height="15.6472" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.752267"/>
<feGaussianBlur stdDeviation="2.2568"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.72549 0 0 0 0 0.258824 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<filter id="filter6_d_156_113" x="42.6514" y="96.052" width="15.6698" height="15.6472" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.752267"/>
<feGaussianBlur stdDeviation="2.2568"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.72549 0 0 0 0 0.258824 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_156_113" result="shape"/>
</filter>
<linearGradient id="paint0_linear_156_113" x1="91.3833" y1="36.2167" x2="43.7246" y2="94.8195" gradientUnits="userSpaceOnUse">
<stop stopColor="#505050"/>
<stop offset="1" stopColor="#212121"/>
</linearGradient>
<linearGradient id="paint1_linear_156_113" x1="87.6082" y1="41.8263" x2="59.2938" y2="93.8268" gradientUnits="userSpaceOnUse">
<stop stopColor="#F7AD36"/>
<stop offset="1" stopColor="#7CB942"/>
</linearGradient>
<linearGradient id="paint2_linear_156_113" x1="20.1199" y1="66.7172" x2="20.1199" y2="91.3043" gradientUnits="userSpaceOnUse">
<stop stopColor="#86D839"/>
<stop offset="1" stopColor="#7CB942"/>
</linearGradient>
<linearGradient id="paint3_linear_156_113" x1="94.1341" y1="17.5465" x2="94.1341" y2="47.8072" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFC569"/>
<stop offset="1" stopColor="#E68F01"/>
</linearGradient>
</defs>
            </svg>
            <div className="flex flex-col">
              <div className="mb-4">{icons[features[0].icon]}</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{features[0].title}</h2>
              <p className="text-lg text-gray-700 mb-2">Halaman awal aplikasi.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src="/ipadkasir.png" alt="Kasir" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16 mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <div className="mb-4">{icons[features[1].icon]}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{features[1].title}</h2>
          <p className="text-lg text-gray-700 mb-2">Halaman pembayaran.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src="/ipadpembayaran.png" alt="Pembayaran" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
        </div>
      </div>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
                <div className="mb-4">{icons[features[2].icon]}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[2].title}</h2>
                <p className="text-lg text-gray-700 mb-2">{features[2].description}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[2].image} alt={features[2].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
                <div className="mb-4">{icons[features[3].icon]}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[3].title}</h2>
                <p className="text-lg text-gray-700 mb-2">{features[3].description}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[3].image} alt={features[3].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
                <div className="mb-4">{icons[features[4].icon]}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[4].title}</h2>
                <p className="text-lg text-gray-700 mb-2">{features[4].description}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[4].image} alt={features[4].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
                <div className="mb-4">{icons[features[5].icon]}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[5].title}</h2>
                <p className="text-lg text-gray-700 mb-2">{features[5].description}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[5].image} alt={features[5].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>
                  <div className="mb-20">
                <div className="flex flex-col items-start gap-2 mb-6">
                  <span 
                    className="inline-flex items-center justify-center text-base font-bold text-black bg-[#7CFF00] rounded-[10px]"
                    style={{
                      width: '380px',
                      height: '65px',
                      boxShadow: '0px 38.5px 25.5px rgba(68,68,68,0.06), 0px 20px 13px rgba(68,68,68,0.05), 0px 8.15px 6.52px rgba(68,68,68,0.039), 0px 1.85px 3.15px rgba(68,68,68,0.024)',
                      clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
                    }}
                  >
                    List Order Management (Kitchen)
                  </span>
                </div>
                <div className="flex justify-center">
                  <img src="/ipaddapur.png" alt="List Order Management (Kitchen)" className="w-[600px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
      </div>
    </>
  );
};

export default FeaturesContent;
