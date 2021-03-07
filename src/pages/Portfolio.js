const projectData = [
    {
        img: "https://raw.githubusercontent.com/jdmarty/scoop/main/images/mainsc.jpg",
        title: "Project 1: Nutri Spot",
        text: "This project required the use of 2 API's. We used Spoonacular and Yelp's API's to create this app.",
        hub: "https://github.com/jdmarty/scoop",
        live: "https://jdmarty.github.io/scoop/"
    },
    {
        img: "https://raw.githubusercontent.com/jdmarty/scoop/main/images/mainsc.jpg",
        title: "Project 2: SHIT that was ummm",
        text: "This project required the use of 2 API's. We used Spoonacular and Yelp's API's to create this app.",
        hub: "https://github.com/jdmarty/scoop",
        live: "https://jdmarty.github.io/scoop/"
    },
    {
        img: "https://raw.githubusercontent.com/jdmarty/scoop/main/images/mainsc.jpg",
        title: "Project 1: Nutri Spot",
        text: "This project required the use of 2 API's. We used Spoonacular and Yelp's API's to create this app.",
        hub: "https://github.com/jdmarty/scoop",
        live: "https://jdmarty.github.io/scoop/"
    },
    {
        img: "https://raw.githubusercontent.com/jdmarty/scoop/main/images/mainsc.jpg",
        title: "Project 1: Nutri Spot",
        text: "This project required the use of 2 API's. We used Spoonacular and Yelp's API's to create this app.",
        hub: "https://github.com/jdmarty/scoop",
        live: "https://jdmarty.github.io/scoop/"
    },
    {
        img: "https://raw.githubusercontent.com/jdmarty/scoop/main/images/mainsc.jpg",
        title: "Project 1: Nutri Spot",
        text: "This project required the use of 2 API's. We used Spoonacular and Yelp's API's to create this app.",
        hub: "https://github.com/jdmarty/scoop",
        live: "https://jdmarty.github.io/scoop/"
    },
    {
        img: "https://raw.githubusercontent.com/jdmarty/scoop/main/images/mainsc.jpg",
        title: "Project 1: Nutri Spot",
        text: "This project required the use of 2 API's. We used Spoonacular and Yelp's API's to create this app.",
        hub: "https://github.com/jdmarty/scoop",
        live: "https://jdmarty.github.io/scoop/"
    },
]

export default function Portfolio (){

    return <>

    <div class="card-deck row">
        {projectData.map(project => {
            return <div class="card col-4">
            <img class="card-img-top" src={project.img} alt="Nutri Spot Main Screenshot"/>
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">{project.text}</p>
              <p class="card-text">The links to this project are:</p>
              <p class="card-text"><a href={project.hub} class="card-link" target="_blank">GitHub Repo</a></p>
              <p class="card-text"><a href={project.live} class="card-link" target="_blank">Live Page</a></p>
            </div>
          </div>
        })}
      </div>
    </>
}