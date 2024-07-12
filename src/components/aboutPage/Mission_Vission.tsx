import { Fade, Zoom } from "react-awesome-reveal";
export default function Mission_Vission() {
  return (
    <>
      {" "}
      <section className="py-10 lg:px-24 md:px-16 shoe-Gallary overflow-hidden ">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between">
            <div className="gallery">
              <Zoom>
                <img
                  src="https://sportite-store-demo.myshopify.com/cdn/shop/articles/blog9_1024x1024.jpg?v=1587177218"
                  alt="shoe"
                />
              </Zoom>
            </div>

            <Fade right>
              <figure>
                <h1 className="title lg:text-5xl text-4xl font-bold  ">
                  Our
                  <span className="text-primary"> Mission</span>
                </h1>
                <p className="py-4 text-slate-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  inventore dolorum, molestiae officia nulla modi repellendus
                  eveniet non saepe unde, hic odio veritatis dolor magni
                  reiciendis minus assumenda quasi quae.
                </p>
                <button className="p-3 bg-primary px-10 font-bold text-gray-50 my-3 rounded-full">
                  Show Package
                </button>
              </figure>
            </Fade>
          </div>
        </div>
      </section>
      <section className="py-10 lg:px-24 md:px-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between">
            <Fade left>
              <figure>
                <h1 className="title lg:text-5xl text-4xl font-bold  ">
                  Our
                  <span className="text-primary"> Vision</span>
                </h1>
                <p className="py-4 text-slate-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  inventore dolorum, molestiae officia nulla modi repellendus
                  eveniet non saepe unde, hic odio veritatis dolor magni
                  reiciendis minus assumenda quasi quae.
                </p>
                <button className="p-3 bg-primary px-10 font-bold text-gray-50 my-3 rounded-full">
                  Show Package
                </button>
              </figure>
            </Fade>
            <div className="gallery">
              <Zoom>
                <img
                  src="https://sportite-store-demo.myshopify.com/cdn/shop/articles/blog8_1024x1024.jpg?v=1587177160"
                  alt="shoe"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
