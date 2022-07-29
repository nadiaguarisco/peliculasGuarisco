import React from "react";

function CartWidget() {
  return (
    <div>
      <svg className="imgCarrito" width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.5C0 2.22386 0.223858 2 0.5 2H2C2.22943 2 2.42943 2.15615 2.48507 2.37873L2.89039 4H14.5C14.654 4 14.7993 4.07094 14.8941 4.19229C14.9889 4.31365 15.0224 4.4719 14.9851 4.62127L13.4851 10.6213C13.4294 10.8439 13.2294 11 13 11H4C3.77057 11 3.57057 10.8439 3.51493 10.6213L1.60961 3H0.5C0.223858 3 0 2.77614 0 2.5ZM3.14039 5L4.39039 10H12.6096L13.8596 5H3.14039ZM5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13ZM3 14C3 12.8954 3.89543 12 5 12C6.10457 12 7 12.8954 7 14C7 15.1046 6.10457 16 5 16C3.89543 16 3 15.1046 3 14ZM12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13ZM10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14Z" fill="black" />
      </svg>
    </div>
  );
}

export default CartWidget;
