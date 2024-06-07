import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white  h-screen w-full py-10 text-black">
      <div className="container  w-4/5 mx-auto">
        {" "}
        <NavBar />
        <main className=" mx-auto my-10 flex md:flex-row flex-col justify-center items-center  md:gap-28">
          <div className="flex flex-col md:w-1/2  gap-5">
            <h1 className="first:capitalize text-6xl  font-extrabold">
              make the best financial decisions
            </h1>
            <p className="first:capitalize text-lg text-gray-500 font-medium">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <button className="bg-black text-white px-8 py-3  hover:bg-slate-800  rounded-sm">
                GetStarted→
              </button>
              <Image
                width={30}
                height={30}
                className="cursor-pointer"
                src="Group 3.svg"
                alt=""
              />
              <span className="font-semibold cursor-pointer">Watch video</span>
            </div>
            <div>
              <Image width={500} height={500} src="firstImg.svg" alt="" />
            </div>{" "}
          </div>
          <div className="md:w-1/2">
            <Image width={500} height={500} src="Frame 1.svg" alt="" />
          </div>
        </main>
        <main className=" mx-auto my-10 flex flex-col md:flex-row md:gap-28 items-center">
          <div className="flex flex-col md:w-1/2  gap-5">
            <div>
              <Image width={500} height={500} src="Group10.svg" alt="" />
            </div>{" "}
          </div>
          <div className=" flex flex-col gap-4 md:w-1/2">
            <div>
              <p className="first:capitalize text-red-400 font-semibold">
                F E A T U R E S
              </p>
              <h1 className="first:capitalize text-5xl font-bold">
                Uifry Premium
              </h1>
            </div>

            <h2 className="first:capitalize font-bold flex items-center gap-2">
              <Image width={20} height={20} src="star-05.svg" alt="" />
              Budgeting Intervals
            </h2>
            <p className="text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <h2 className="first:capitalize font-bold flex items-center gap-2">
              <Image width={20} height={20} src="cube-02.svg" alt="" />
              Budgeting Intervals
            </h2>
            <p className="text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <h2 className="first:capitalize font-bold flex items-center gap-2">
              <Image width={20} height={20} src="cube-04.svg" alt="" />
              Budgeting Intervals
            </h2>
            <p className="text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </main>
        <main className=" mx-auto my-10 flex-col md:flex-row md:gap-28 flex  items-center">
          <div className=" flex flex-col gap-4 md:w-1/2">
            <div>
              <p className="first:capitalize text-red-400 font-semibold">
                A D V A T H A G E S
              </p>
              <h1 className="first:capitalize text-5xl font-bold">
                Why Choose Uifry?
              </h1>
            </div>

            <h2 className="first:capitalize font-bold text-2xl flex items-center gap-2">
              <Image width={40} height={20} src="bell1.svg" alt="" />
              clever notifications
            </h2>
            <p className="text-gray-500">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <div className="flex flex-col md:w-1/2  gap-5">
            <div>
              <Image width={500} height={500} src="Nav.svg" alt="" />
            </div>{" "}
          </div>
        </main>
        <main className=" mx-auto my-10 flex flex-col md:flex-row md:gap-28 gap-28 items-center">
          <div className="flex flex-col md:w-1/2  gap-5">
            <div>
              <Image width={500} height={400} src="Group10.svg" alt="" />
            </div>{" "}
          </div>
          <div className=" flex flex-col gap-4 md:w-1/2">
            <h2 className="first:capitalize font-bold text-2xl flex items-center gap-2">
              <Image width={40} height={20} src="bell1.svg" alt="" />
              Fully Customizable
            </h2>
            <p className="text-gray-500">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </main>
        <main className=" mx-auto my-10 flex  items-center flex-col">
          <div className="flex-col flex items-center md:w-1/3 text-center">
            <p className="font-semibold">T E S T I M O N I A L</p>
            <h1 className="first:capitalize text-5xl font-bold">
              what our users say about us?
            </h1>
          </div>
          <div className="flex items-center flex-col md:flex-row md:gap-28 ">
            {" "}
            <div className="flex flex-col  md:w-1/2  gap-5">
              <div>
                <Image width={500} height={400} src="GP1.svg" alt="" />
              </div>{" "}
            </div>
            <div className=" flex flex-col gap-4 md:w-1/3">
              <h2 className="first:capitalize font-bold text-2xl flex items-center gap-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p className="text-gray-500">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
              <div>
                <Image width={150} height={100} src="GP.svg" alt="" />
                <p className="font-bold my-5">Nick Jonas</p>
              </div>
            </div>
          </div>
        </main>
        <main className="mx-auto my-10 flex flex-col">
          <div className="">
            {" "}
            <p className="font-semibold text-red-500">F A Q</p>
            <h1 className="first:capitalize text-5xl w-1/2 font-bold">
              Frequently Asked Questions
            </h1>
          </div>
          <div className=" mx-auto my-10 flex gap-1">
            <div className="w-1/2 flex flex-col gap-5">
              {" "}
              <div className="bg-red-500 text-white p-5 w-full rounded-lg ">
                {" "}
                <h2 className="first:capitalize  font-bold text-2xl flex items-center gap-2 ">
                  the best financial accounting app ever!
                </h2>
                <p className>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className="p-5  rounded-lg w-full">
                {" "}
                <h2 className="first:capitalize  font-bold text-2xl flex items-center gap-2 ">
                  the best financial accounting app ever!
                </h2>
                <p className>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className="bg-red-500 text-white p-5 w-full rounded-lg ">
                {" "}
                <h2 className="first:capitalize  font-bold text-2xl flex items-center gap-2 ">
                  the best financial accounting app ever!
                </h2>
                <p className>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <div className=" p-5 w-full rounded-lg ">
                {" "}
                <h2 className="first:capitalize  font-bold text-2xl flex items-center gap-2 ">
                  the best financial accounting app ever!
                </h2>
                <p className>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>{" "}
              <div className="bg-red-500 text-white p-5 w-full rounded-lg ">
                {" "}
                <h2 className="first:capitalize  font-bold text-2xl flex items-center gap-2 ">
                  the best financial accounting app ever!
                </h2>
                <p className>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className=" p-5 w-full rounded-lg ">
                {" "}
                <h2 className="first:capitalize  font-bold text-2xl flex items-center gap-2 ">
                  the best financial accounting app ever!
                </h2>
                <p className>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            </div>
          </div>
        </main>
        <main className=" mx-auto my-10 flex  items-center flex-col">
          <Image
            width={500}
            height={400}
            className="w-full"
            src="pic.svg"
            alt=""
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
