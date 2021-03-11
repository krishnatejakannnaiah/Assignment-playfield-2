import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import Modal from 'react-modal';
import Modall from './Modal'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            items1: [],
            items2 : [],
            items : [],
            showdat : false,
        };

        this.Onepage = this.Onepage.bind(this)
        this.Twopage = this.Twopage.bind(this)

    }

componentDidMount() {

            /*
            fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items2: json.data
                })
                console.log(this.state.items2)
            }).then(()=>
            {
                this.setState({
                    items : [...this.state.items1, ...this.state.items2]
                })
            });
            */
            
    }


     Onepage(){
        
        fetch("https://reqres.in/api/users?page=1")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    loading: true,
                    items: json.data
                })
            });

        this.setState({
            showdat: true
        })
    }
   Twopage(){
        this.setState({
            showdat: false
        })
    }
  

    render() {    
        var {loading,items} = this.state

        if(this.state.showdat){
            if(!loading){
                    console.log('loading confirmed for acknowledement');
                return (
                <div>
                <h1>loading</h1>
                <div className="loader"></div>
                </div>
                )

        }
        else{
      if(this.state.showdat){
        return(
        <div>
          <Navbar2 Twopage={this.Twopage}/>
            {
              <ul className="grid-container" id="block">
            {   
                items.map(item => (
                <li key={item.id} className="bord"> 
                 <img src={item.avatar} width="80" height="80" className="img"/>
                <h2>{item.first_name +" " }  
                {item.last_name}</h2>
                <p className="ptype">{item.email}</p>
                <Modall key={item.id} item={item}/>
                </li>
                
            )
            )}
              </ul> 
            }
        </div>
            )
        }
        else{
            return(
                <div>
               <Navbar  Onepage={this.Onepage}/>
                <h1>hit it</h1>
                </div>
            )
        }

       }
        }

        else
        {
            return (
            <div>
            <Navbar  Onepage={this.Onepage}/>
            <h2>Hit Nav button (Get Users) to fetch the API data.</h2>
            <p className="ptag">The app is responsive, UI varies on the device compatibility.</p>
            <p className="ptag2">If it is hard to see the loading state due to fast fetch of the API after when show button is clicked, you can also view a log of acknowledement in console too.</p>
            </div>
            )
        }
     
    }
}

export default App
