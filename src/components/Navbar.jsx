import Link from "next/link";

const Navbar = () => {
  const links = [
    {
    title:"Posts",
    path:'/posts'
  },
    {
    title:"Meals",
    path:'/meals'
  },
]
  return (
    <div className=" flex justify-between px-20 py-3 bg-slate-100">
      <h1 className=" text-xl font-bold">Next <span className=" text-green-600">JS</span></h1>
      <ul>
        {
          links.map((link)=><Link href={link.path}>{link.title}</Link>)
        }
      </ul>
    </div>
  );
};

export default Navbar;