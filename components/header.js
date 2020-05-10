import utlS from "../styles/utils.module.css";
import Link from "next/link";
import { withRouter } from "next/router";

function Header({ router }) {
  console.log(router.pathname);
  return router.pathname === "/" ? (
    <Link href="/">
      <div
        role="button"
        className="group absolute top-1 left-1 cursor-pointer bg-wld-5 p-1 w-20 hover:bg-wld-1 border border-wld-5"
      >
        <p className="block p-1 my-0 mx-auto text-white font-heavy font-black group-hover:text-wld-5">
          <span className="font-mono leading-tight">SELECT</span>
          <br />
          <span className="font-normal">moment</span>
          <br />
          <span className="font-mono leading-tight">FROM</span>
          <br />
          <span className="font-normal">life</span>
          <br />
        </p>
      </div>
    </Link>
  ) : null;

  // return (
  //   <>
  //     {router.pathname === "/" && (
  //       <header className="my-0 mx-auto">
  //         <h1 className="title">SELECT moment FROM life</h1>
  //       </header>
  //     )}
  //   </>
  // );
}

export default withRouter(Header);
