import { CgSpinner } from "react-icons/cg";

const LoadingComponent = () => {
  return (
    <div
      className="bg-slate-200 opacity-70 h-[100vh] w-full fixed top-0 flex justify-center items-center text-black"
      style={{ zIndex: 100 }}
    >
      <div className="animate-rotate">
        <CgSpinner size={40} />
      </div>
    </div>
  );
};

export default LoadingComponent;
