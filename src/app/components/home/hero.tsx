
import BgVideo from "../bgVideo"

const Hero = () => {
    
    return(
        <>
        <section className="section fit bg-primary" id="home" >
        <div className="container-fluid g-0" >
            <BgVideo posterURL="/sparkt-office.jpg" videoMP4URL="/sparkt-office.mp4" positionValue={'fixed'} />
        </div>

        </section>
        </>
    )
}

export default Hero