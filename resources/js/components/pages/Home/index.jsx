import React, { Component } from "react";
import { Card } from "antd";
import { getUser } from "../../atoms/AuthenticatedRoute";

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount () {
    getUser()
      .then(user => this.setState({ user: user.data }));
  }

  render () {
    return (
      <div className="home">
        <section className="mainContainer">
          <div>
            <h1>Willkommen {this.state.user ? this.state.user.username : ""}!</h1>
          </div>
        </section>
        <section className="recipesContainer">
          <Card size="small" title="Froschsuppe" extra={<a href="#">More</a>}>
            <p>Super Beschreibung über mehrere Zeilen jaja
                    jaja
                    Frösche sind toll</p>
          </Card>
          <Card size="small" title="Baumkuchen" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card size="small" title="Blaukrautfroschhaus döner nett" extra={<a href="#">More</a>}>
            <p>Card content</p>
          </Card>
        </section>
      </div>
    );
  }
}
export default Home;
