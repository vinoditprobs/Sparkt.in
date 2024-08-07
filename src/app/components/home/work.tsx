import Link from "next/link"

const WorkSection = () => {
    return(
        <>
        <section className="section  bg-secondary" id="work" >
        <div className="container fit d-flex align-items-center justify-content-center text-center" >
        <div>
        <h1 >
            Work
        </h1>
        <hr></hr>
        <p>
          <Link href="/work" className="text-light btn btn-primary" >Work Listing</Link>
          </p>
        </div>
        </div>
        </section>
        </>
    )
}
export default WorkSection