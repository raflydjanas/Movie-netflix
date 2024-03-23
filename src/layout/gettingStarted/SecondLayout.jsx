function SecondLayout({ children, type }) {
  return <div className={`h-[29rem] pt-16 bg-black ${type && "h-auto"}`}>{children}</div>;
}

export default SecondLayout;
