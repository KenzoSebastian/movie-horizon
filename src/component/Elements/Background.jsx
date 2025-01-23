const Background = () => {
  return (
    <div className="fixed h-screen w-screen -z-50 bg-slate-700">
      <img
        src="../bg-patern.png"
        alt="background"
        className="object-cover brightness-50 h-full w-full"
      />
      <div className="bg-gradient-to-t from-black/75 to-transparent absolute bottom-0 w-full h-2/5"></div>
    </div>
  );
};

export default Background;
