function MovieLayout({ children }) {
  return (
    <div className="w-full flex items-center justify-center mt-[2rem] 2xl:mt-[4rem] lg:mt-[4rem]">
      <ul className="grid grid-cols-2 gap-1 lg:flex lg:flex-wrap lg:justify-center ">{children}</ul>
    </div>
  );
}

export default MovieLayout;
