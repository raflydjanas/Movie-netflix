function SecondLayout({ children }) {
  return <div className="h-[29rem] pt-16 bg-black ">{children}</div>;
}

const Layout1 = ({ children }) => {
  return (
    <div className="h-[29rem] pt-16 bg-black ">
      <div className="flex items-center justify-center">{children}</div>
      <div className="h-2 mt-10 bg-[#232323]"></div>
    </div>
  );
};

SecondLayout.Layout1 = Layout1;
export default SecondLayout;
