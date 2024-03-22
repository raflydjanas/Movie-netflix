function SecondLayout({ children, type }) {
  return <div className={`h-[29rem] pt-16 bg-black ${type && "h-[60rem]"}`}>{children}</div>;
}

export default SecondLayout;
