import React from 'react'

class NewForm extends React.Component {

    state = {
        name:'',
        category: '',
        image: '',
        description: '',
        brand: '',
        rating: '',
        link: ''
    }

    changeHandler = (e) => {
        console.log('been changed')
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        //pass this.state to a this.props function
        console.log('been submit')
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <br/>
                    <label>Post Name</label>
                    <input name="name" type='text' value={this.state.name} onChange={this.changeHandler} />
                    <br/>
                    <label>Category</label>
                    <input name='category' type='text' value={this.state.category} onChange={this.changeHandler}/>
                    <br/>
                    <label>Image</label>
                    <input name='image' type='text' value={this.state.image} onChange={this.changeHandler}/>
                    <br/>
                    <label>Description</label>
                    <input name='description' type='text' value={this.state.description} onChange={this.changeHandler}/>
                    <br/>
                    <label>Brand</label>
                    <input name='brand' type='text' value={this.state.brand} onChange={this.changeHandler}/>
                    <br/>
                    <label>Rating</label>
                    <input name='rating' type='text' value={this.state.rating} onChange={this.changeHandler}/>
                    <br/>
                    <label>Buy Link</label>
                    <input name='link' type='text' value={this.state.link} onChange={this.changeHandler}/>
                    <input type="submit" value="Create Post"/>
                </form>

            </div>
        )
    }
}

export default NewForm