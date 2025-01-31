
const LandingPage = () => {
  return (
    <div className="bg-[url('/banner.png')] h-[500px] bg-cover bg-center">
    {/* <div className="h-[calc(100vh-64px)] bg-[url('/banner.jpg')] bg-cover bg-center"> */}
    <div className="pt-32 max-w-xl flex-1 mx-auto">
      <h1 className="text-4xl font-bold text-black text-center">
        Welcome to the <br />
        <span className="text-[#FF6B6B]">Foodie</span> App
        <br />
      </h1>
    </div>
  </div>
  );
};

export default LandingPage;