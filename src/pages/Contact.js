export default function Contact (){

    return <>
    <div className="container">

    <form>
      <fieldset>
        <legend>Contact</legend>
        <div className="form-group row">
          <div className="col-sm-10">
          </div>
        </div>
        <div className="form-group">
          <label for="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" placeholder="Enter Name Here ( First  Last )"/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleTextarea">Message</label>
          <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Enter Message Here"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </fieldset>
    </form>
    </div>
    </>
}