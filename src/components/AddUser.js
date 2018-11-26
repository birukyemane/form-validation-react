//AddUser.js component

import React, {Component} from 'react';
import '../App.css';
import ErrorFeedback from './ErrorFeedback';

const patterns = {
    fullName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    phones: /[0-9]{3}[ -][0-9]{3}[-][0-9]{4}$/,
    email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    ReEnterEmail: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    address1: /[A-Za-z0-9' \-,.]+$/,
    address2: /[A-Za-z0-9' \-,.]+$/,
    city: /[A-Za-z0-9' \-,.]+$/,
    state: /[A-Za-z0-9' \-,.]+$/,
    country: /[A-Za-z0-9' \-,.]+$/,
    zip:/^\d{5}$/,
    aboutUS: /^.{0,50}$/,
    portfolio: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/,
    another: /^.{0,50}$/
  };     

class AddUser extends Component {

        state = {                       
            fullName: '',
            phones: '',
            email: '',
            ReEnterEmail: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '',
            zip:'',
            aboutUS: '',
            portfolio: '',
            another: '',            
            validationStatus : {
                fullName: '',
                phones: '',
                email: '',
                ReEnterEmail: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                country: '',
                zip: '',
                aboutUS: '',
                portfolio: '', 
                another: '',              
            },  
            buttonDisabled: true           
        };  
  
  handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState ({
        [name]: value,
      });
    this.formValidator(target,patterns[name]);
  };

  handleSelectOption = e => {
    this.setState ({
        gender: e.target.value,
      });
  };

  allPassed() {
    console.log('inside passed');
    for(let inputData in this.state.validationStatus){
      console.log('inside loop');
      if(this.state.validationStatus[inputData] === 'invalid' || this.state.validationStatus[inputData] === '') {
         console.log('error');
         return false;
      }
    }
    return true;     
  }

  formValidator = (element, pattern) => {
    const {name, value} = element;
    if (pattern.test(value)) {
        this.setState ({
            validationStatus: {...this.state.validationStatus, [name]: 'valid'},
        });
        if(this.allPassed()){
          this.setState ({
            buttonDisabled: false,
          });
        }   
    } else {      
        this.setState ({
          validationStatus: {...this.state.validationStatus, [name]: 'invalid'},
        });
        this.setState ({
          buttonDisabled: true,
        });
    } 
  }

  handleSubmit = e => {
    e.preventDefault ();
    this.props.addUser (this.state);
  };

  render () {
   const inputMedium = 'inputMedium ';
   const inputLarge = 'inputLarge ';

   const status = this.state.validationStatus;
    return (
      <form onSubmit={this.handleSubmit}>
          <section>
            <h3>1. Personal information</h3>
            <hr />
            <div className="personalInfo">
              <input id="fullName" className= {inputMedium.concat(status.fullName)} type="text" name="fullName" value={this.state.fullName} placeholder="Full name*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Full name must be letters and can contain space and special characters(,-.')"></ErrorFeedback>
              <input id="phones" className= {inputMedium.concat(status.phones)} type="text" name="phones" value={this.state.phones} placeholder="phones*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Phone must be 10 digits: xxx-xxx-xxxx"></ErrorFeedback>
              <input id="email" className= {inputMedium.concat(status.email)} type="text" name="email" value={this.state.email} placeholder="email*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Email alpahnumeric characters sparaed by @ and proper doman name : abc@ddd.com"></ErrorFeedback>
              <input id="ReEnterEmail" className= {inputMedium.concat(status.ReEnterEmail)} type="text" name="ReEnterEmail" value={this.state.ReEnterEmail} placeholder="Re-enter email*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Email alpahnumeric characters sparaed by @ and proper doman name : abc@ddd.com"></ErrorFeedback>
              <input id="address1" className= {inputLarge.concat(status.address1)} type="text" name="address1" value={this.state.address1} placeholder="Address 1*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Address must be alpahnumeric characters and can contain space and special characters(,-.')"></ErrorFeedback>
              <input id="address2" className= {inputLarge.concat(status.address2)} type="text" name="address2" value={this.state.address2} placeholder="Address 2*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Address must be alpahnumeric characters and can contain space and special characters(,-.')"></ErrorFeedback>
              <input id="city" className= {inputMedium.concat(status.city)} type="text" name="city" value={this.state.city} placeholder="City*" onChange={this.handleChange}/>     
              <ErrorFeedback error="City must be alpahnumeric characters and can contain space and special characters(,-.')"></ErrorFeedback>
              <input id="state" className= {inputMedium.concat(status.state)} type="text" name="state" value={this.state.state} placeholder="State*" onChange={this.handleChange}/>     
              <ErrorFeedback error="State must be alpahnumeric characters and can contain space and special characters(,-.')"></ErrorFeedback>
              <input id="country" className= {inputMedium.concat(status.country)} type="text" name="country" value={this.state.country} placeholder="Country*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Country must be alpahnumeric characters and can contain space and special characters(,-.')"></ErrorFeedback>
              <input id="zip" className= {inputMedium.concat(status.zip)} type="text" name="zip" value={this.state.zip} placeholder="Zip/Postal code*" onChange={this.handleChange}/>     
              <ErrorFeedback error="Zip code must be exactly 5 digits: 00700"></ErrorFeedback>
              <input id="aboutUS" className= {inputLarge.concat(status.aboutUS)} type="text" name="aboutUS" value={this.state.aboutUS} placeholder="How did you hear about us*" onChange={this.handleChange}/>     
              <ErrorFeedback error="  About can be any characters - maximum 50 chracters"></ErrorFeedback>          
            </div>
          </section>
          <section className="skills">
            <h3>2. Skills and Location</h3>
              <hr />
            <p>Which is your primary disign discipline?*</p>
            <div className="options">
                <input type="radio" name="radio" id="DesignResearch-radio" placeholder="1" />
                <label htmlFor="DesignResearch-radio">Design Research</label>

                <input type="radio" name="radio" id="Visual-Design-radio" placeholder="2" />
                <label htmlFor="Visual-Design-radio">Design Research</label>

                <input type="radio" name="radio" id="UX-Design-radio" placeholder="3" />
                <label htmlFor="UX-Design-radio">UX Design</label>

                <input type="radio" name="radio" id="Front-end-Development-radio" placeholder="4" />
                <label htmlFor="Front-end-Development-radio">Front-end Development</label>
            </div>  
            <div className= "choices">
                <div className="intersts">
                    <p>Do you have experience with any other disciplines?</p>            
                    <input type="checkbox" name="visualDesign" id="visualDesign" />
                    <label htmlFor="visualDesign">Visual Design</label> <br />
                    <input type="checkbox" name="UXDesign" id="UXDesign" />
                    <label htmlFor="UXDesign">UX Design</label><br />
                    <input type="checkbox" name="feDev" id="feDev" />
                    <label htmlFor="feDev">Front-end Development</label>
                  </div> 
                  <div className="locations">
                    <p>Where are you interested in working*?</p>
                    <small>You must be legally authorized to work without visa sponsership in the location(S) you choose.</small>
                    <br />
                    <input type="checkbox" name="Texas" id="Texas" />
                    <label htmlFor="Texas">Austin Texas</label> <br />
                    <input type="checkbox" name="York" id="York" />
                    <label htmlFor="York">New York</label><br />
                    <input type="checkbox" name="Canada" id="Canada" />
                    <label htmlFor="Canada">Toronto, Canada</label> <br />
                    <input type="checkbox" name="China" id="China" />
                    <label htmlFor="China">Shangai China</label> <br />
                    <input type="checkbox" name="Ireland" id="Ireland" />
                    <label htmlFor="visualDesign">Dublin, Ireland</label> <br />      
                    <input type="checkbox" name="Hursley" id="Hursley" />
                    <label htmlFor="visualDesign">Hursley, United Kingdom</label> <br />
                    <input type="checkbox" name="Germany" id="Germany" />
                    <label htmlFor="visualDesign">Boeblingen, Germany</label> <br />
                    <input type="checkbox" name="Somewhere" id="Somewhere" />
                    <label htmlFor="visualDesign">Somewhere else</label> 
                  </div>
              </div>      
          </section>
          <section>
            <h3>3. Portfolio</h3>
            <hr />
            <p>Prove you're IBM's next great desinger by showing us who your are. What you have done. How you think. Tell us your story. </p>
            <input id="portfolio" className={inputLarge.concat(status.portfolio)} type="url" name="portfolio" value={this.state.portfolio} placeholder="Portfolio link*" onChange={this.handleChange}/>
            <ErrorFeedback error="Portfolio must be a URL"></ErrorFeedback>
            <br />
            <br />
            <textarea name="another" id="another" className={inputLarge.concat(status.another)} cols="2" rows="1" value={this.state.another} placeholder="anything else(another link availability)?" onChange={this.handleChange}></textarea>
            <ErrorFeedback error="Another info can be any characters. Maximum of 50 characters!"></ErrorFeedback>
            <br />
          </section>
          <button type="submit"  className={this.state.buttonDisabled?'':'submit-button'} disabled={this.state.buttonDisabled?true:false}>Submit</button>
          <h3 className = {(this.state.buttonDisabled? 'sumbitInfo':'hideSubmitInfo')}>One or more fields need to be filled!</h3> 
      </form> 
    );
  }
}

export default AddUser;