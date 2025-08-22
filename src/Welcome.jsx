import Header from './Header';
function Welcome() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-1">
        <img
          src="emp.png"
          alt="Employee Portal"
          className="rounded-lg shadow-lg w-full  object-cover"
        />
      </div>
    </div>
  );
}

export default Welcome
