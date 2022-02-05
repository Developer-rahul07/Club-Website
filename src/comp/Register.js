import React from "react";

const Register = () => {
  return (
    <>
      <main class="bg-white max-w-lg mx-auto p-5 md:p-12 my-5 rounded-lg shadow-2xl">
        <section>
          <h6 class="font-bold text-1xl">
            Register And Become Robotics Family Member🤖
          </h6>
        </section>

        <section class="mt-5">
          <form class="flex flex-col" method="POST" action="#">
            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="text"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 "
              />
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="text"
              >
                Year
              </label>
              <select
                class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-gray-200 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Final Year</option>
              </select>
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="text"
              >
                Branch
              </label>
              <select
                class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-gray-200 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select Branch</option>
                <option value="1">
                  Electronics and communication engineering
                </option>
                <option value="2">
                  Electronics and instrumentation engineering
                </option>
                <option value="3">Computer science engineering</option>
                <option value="4">Electrical engineering</option>
                <option value="5">Civil engineering</option>
                <option value="6">Petroleum and chemical engineering</option>
                <option value="7">Mechanical engineering</option>
              </select>
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3"
              />
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="email"
              >
                Profile Photo
              </label>
              <input
                type="file"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3"
              />
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3"
              />
            </div>

            <button
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Register
            </button>
          </form>
        </section>
      </main>

      <div class="max-w-lg mx-auto text-center ">
        <p class="text-black">
          Already have an account?
          <a
            href="/login"
            class="font-bold hover:underline text-blue-600 hover:text-blue-700"
          >
            Login
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Register;
