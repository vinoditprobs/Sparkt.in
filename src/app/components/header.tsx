import MainMenu from "./mainMenu";
import Image from "next/image";

const Header = () => {

  return (
      <>
      <header>
        <div className="navbar" >
          <div className="container-fluid gx-5 h-100" >
            <div className="w-100 h-100" >
              <div className="row h-100 align-items-center" >
                <div className="col-6 h-100" >
                  <span className="main_logo" >
                    <Image src="/sparkt-light.png" alt="Picture of the author" width={100} height={100} />
                  </span>
                </div>
                <div className="col-6 text-end " >
                 <MainMenu/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      </>
  )
};

export default Header;
