import { MdDashboard } from "react-icons/md";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineRise,
  AiOutlineProfile,
  AiOutlineFileSearch,
  AiOutlineExclamationCircle,
  AiOutlineSetting,
  AiOutlinePlus,
} from "react-icons/ai";

export const sidebarItems = [
  { id: 1, title: "Dashboard", icon: MdDashboard },
  { id: 2, title: "Users", icon: AiOutlineUser },
  { id: 3, title: "History", icon: AiOutlineProfile },
  { id: 4, title: "Analytics", icon: AiOutlineRise },
  { id: 5, title: "Tickets", icon: AiOutlineMail },
  { id: 6, title: "Sale List", icon: AiOutlineFileSearch },
  { id: 7, title: "Reports", icon: AiOutlineExclamationCircle },
  { id: 8, title: "Settings", icon: AiOutlineSetting },
  { id: 9, title: "New Login", icon: AiOutlinePlus },
];

export const widgetItems = [
  { id: 1, title: "Total Sales", amount: "65024", per: 83, color: "#1B9C85" },
  { id: 2, title: "Site Visit", amount: "24091", per: 70, color: "#FF0060" },
  { id: 3, title: "Searches", amount: "14898", per: 50, color: "#6C9BCF" },
];

export const users = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  //   {
  //     id: 4,
  //     username: "Stark",
  //     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     email: "4snow@gmail.com",
  //     status: "active",
  //     age: 16,
  //   },
  //   {
  //     id: 5,
  //     username: "Targaryen",
  //     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     email: "5snow@gmail.com",
  //     status: "passive",
  //     age: 22,
  //   },
  //   {
  //     id: 6,
  //     username: "Melisandre",
  //     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     email: "6snow@gmail.com",
  //     status: "active",
  //     age: 15,
  //   },
];

export const dataChart = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

export const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
];

export const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "product",
    headerName: "Product",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="">
          <img
            className="w-[30px] h-[30px] rounded-full object-cover"
            src={params.row.img}
            alt="product"
          />
        </div>
      );
    },
  },
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "amount", headerName: "Amount", width: 150 },
  { field: "method", headerName: "Payment Method", width: 180 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className={`${
            params.row.status == "Approved"
              ? "text-success bg-green-200"
              : "text-danger bg-red-200"
          }  p-1 rounded-md`}
        >
          {params.row.status}
        </div>
      );
    },
  },
];
