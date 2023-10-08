import { useRouter } from "next/router";


export const Toolbar = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div onClick={() => router.push("/")} className="text-white text-2xl font-semibold cursor-pointer">
          Blog Website
        </div>
        <div className="flex space-x-6">
          <div
            onClick={() => router.push("/")}
            className={`text-white cursor-pointer ${
              isActive("/") && "font-bold"
            }`}
          >
            Home
          </div>
          <div
            onClick={() => router.push("/feed/1")}
            className={`text-white cursor-pointer ${
              isActive("/feed/1") && "font-bold"
            }`}
          >
            Blog
          </div>
        </div>
      </div>
    </div>
  );
};
