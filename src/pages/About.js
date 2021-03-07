import profilePic from "../Assets/Daniel.jpg"

export default function About (){

    return <>
    <div className="card mb-5 text-center mx-auto d-block" style={{width: "35rem"}}>
      <h3 className="card-header">About Me</h3>
      <div className="card-body">
        <h5 className="card-title">Aspiring Web Developer</h5>
        <h6 className="card-subtitle text-muted">Based out of Orange County, CA</h6>
      </div>
      <img style={{height: "250px", width: "45%", display: "block"}} src={profilePic} alt="Card image" className="mx-auto d-block img-fluid"/>
      <div className="card-body">
        <p className="card-text">[Placeholder for content here]</p>
      </div>
    </div>

    {/* Social Media Card: Contains links to connect with me */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Social Media</h4>
        <h6 className="card-subtitle mb-2 text-muted">Let's Connect!</h6>
        <p className="card-text">Feel encouraged to reach out via any of the following social media platforms. I am eager to find out how I can help with any projects!</p>
        <a href="https://github.com/dfigueroa7007" className="card-link" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/danielffigueroa/" className="card-link" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/Dan_Aye_" className="card-link" target="_blank">Twitter</a>
      </div>
    </div>
    </>
}