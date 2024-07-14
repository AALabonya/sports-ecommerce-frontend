import { MdOutlineSportsTennis } from "react-icons/md";

import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    // <section className="w-full py-12 md:py-20 lg:py-24">
    //   <div className=" rounded-full px-4 md:px-6">
    //     <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
    //       <div className="group rounded-full">
    //         <Card className="flex flex-col items-center gap-2 p-4 rounded-full  transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center bg-primary/10 transition-colors group-hover:bg-primary">
    //             <FaBasketballBall className="h-24 w-24 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Basketball</span>
    //         </Card>
    //       </div>
    //       <div className="group">
    //         <Card className="flex flex-col items-center gap-2 p-4 transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
    //             <RiGolfBallFill className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Golf</span>
    //         </Card>
    //       </div>
    //       <div className="group">
    //         <Card className="flex flex-col items-center gap-2 p-4 transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
    //             <MdOutlineSportsSoccer className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Soccer</span>
    //         </Card>
    //       </div>
    //       <div className="group">
    //         <Card className="flex flex-col items-center gap-2 p-4 transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
    //             <MdMonitor className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Running</span>
    //         </Card>
    //       </div>
    //       <div className="group">
    //         <Card className="flex flex-col items-center gap-2 p-4 transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
    //             <MdOutlineDirectionsBike className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Cycling</span>
    //         </Card>
    //       </div>
    //       <div className="group">
    //         <Card className="flex flex-col items-center gap-2 p-4 transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
    //             <LiaTableTennisSolid className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Tennis</span>
    //         </Card>
    //       </div>
    //       <div className="group">
    //         <Card className="flex flex-col items-center gap-2 p-4 transition-all hover:bg-primary hover:text-primary-foreground">
    //           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
    //             <FaSatelliteDish className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
    //           </div>
    //           <span className="text-sm font-medium">Swimming</span>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div>
      <div className="container py-20 space-y-10">
        <div className="w-2/4 mx-auto text-center space-y-3">
          <h1 className="text-4xl font-bold">Our Product Categories</h1>
          <p className="">
            Explore our top categories to quickly find the perfect products for
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-green-400 hover:border-green text-green-500 hover:text-green duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <MdOutlineSportsTennis className="text-6xl" />
              <img
                src="https://th.bing.com/th/id/OIP.kD5M3hooIxbWjKKhTQBa4wAAAA?w=474&h=430&rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Swimming</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <MdOutlineSportsTennis className="text-6xl" />
              <img
                src="https://th.bing.com/th/id/OIP.ctsKqtGiWvhJPLVH9_AKHwHaHL?w=860&h=834&rs=1&pid=ImgDetMain"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Cricket</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <MdOutlineSportsTennis className="text-6xl" />
              <img
                src="https://img.freepik.com/premium-vector/running-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_316488-2195.jpg?w=2000
"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Running</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <img
                src="https://play-lh.googleusercontent.com/XSdxRQLDVR4WqDfjsj2neRJKzz9oGPbOsgnw3P6iw_z9rAZ-Vl4BwrjjwlsKWvYcrPj8"
                alt=""
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Soccer</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <img
                src="https://cdn.vectorstock.com/i/preview-1x/74/03/green-ball-of-lawn-tennis-vector-13677403.jpg"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Tennis</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <img
                src="https://th.bing.com/th/id/R.3d48a9d6827c577b57ccf92e4e3b1ee0?rik=oqJaUgtJNPEwJQ&pid=ImgRaw&r=0"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">
              Basketball{" "}
            </h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/660/364/original/golf-logo-vector.jpg"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Golf</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <MdOutlineSportsTennis className="text-6xl" />
              <img
                src="https://th.bing.com/th/id/OIP.WRqy7vpHEe475pEIq5ntSwHaGK?rs=1&pid=ImgDetMain"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">Cycling</h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <MdOutlineSportsTennis className="text-6xl" />
              <img
                src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-modern-passionate-badminton-player-in-action-logo-png-image_3571054.jpg"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">
              badminton
            </h5>
          </NavLink>
          <NavLink to={"/"} className="flex flex-col items-center space-y-4">
            <div className=" border-2 border-[#7ED957] hover:border-green text-[#7ED957] hover:text-[#7ED957] duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
              <MdOutlineSportsTennis className="text-6xl" />
              <img
                src="https://i.pinimg.com/originals/fc/54/db/fc54db64504754ab554f0530cfb03135.jpg"
                alt=""
                className="p-1"
              />
            </div>
            <h5 className="text-xl font-semibold uppercase italic">
              Accessories
            </h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
