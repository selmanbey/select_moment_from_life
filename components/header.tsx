import Link from "next/link";
import { withRouter, SingletonRouter } from "next/router";
import * as React from "react";

function Header({ router }: { router: SingletonRouter }) {
  return router.pathname === "/" ? (
    <>
      <header>
        <Link href="/">
          <button className="group absolute top-1 left-1 cursor-pointer bg-wld-5 p-1 w-20 hover:bg-wld-1 border border-wld-5">
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
          </button>
        </Link>
      </header>
    </>
  ) : null;
}

export default withRouter(Header);
