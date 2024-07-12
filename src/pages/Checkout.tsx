const Checkout = () => {
  return (
    <div className=" flex justify-center bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 ">
      <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
        <div className="max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <div className="flex flex-col space-y-1">
            <h3 className="text-3xl font-bold tracking-tight">
              Delivery Details
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Please fill in the form to delivery the service.
            </p>
          </div>
          <div>
            <form className="space-y-6">
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="email"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <label
                    className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                    htmlFor="first_name"
                  >
                    Quantity
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                    id="first_name"
                    placeholder="Enter first name"
                    name="first_name"
                    type="text"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <label
                    className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                    htmlFor="last_name"
                  >
                    Stock
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                    id="last_name"
                    placeholder="Enter last name"
                    name="last_name"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="password_"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="password_"
                  placeholder="password"
                  name="password"
                  type="password"
                />
              </div>
              <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Right side content */}
        <div className="w-full sm:w-1/2">
          <p className="mb-6 text-sm">
            If you don&apos;t already have an account click the button below to
            create your account.
          </p>
          <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
            Create Account
          </button>
          <p className="my-4 text-center">OR</p>
          <button className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6 text-white"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            SIGN IN WITH FACEBOOK
          </button>
          <button className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="size-6 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
