import React, { Component } from 'react'

export default class Table extends Component {

    changedFormForm = (event) => {
        this.props.changedForm(event)
    }

    render() {


        return (
            <div className='content row justify-content-center mt-3' >

                <div className='box col-10      '>
                    <table className=' table table-striped table-hover table-dark'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>IsMarried</th>
                                <th>Work</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users.map((item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isMarried}</td>
                                        <td>{item.work}</td>
                                        <td><button onClick={() => this.props.Delete(index)} className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                    <br />
                    <br />

                    {this.props.bool ? (
                        <>
                            <button onClick={this.props.addUserBtn} className='btn btn-danger mb-5 col-12'>Close</button>
                            
                            
                        
                            <form action="" className='d-flex justify-content-around' onChange={this.props.changedFormForm} >
                                
                                <input type="text" id='name' placeholder='Name' required onChange={this.props.addName} />
<br /><br />
                                <input type="text" id='lastName' placeholder='Last Name' required onChange={this.props.addLastName} />


                                <input type="number" placeholder='Age' required onChange={this.props.addAge} />


                                <input type="text" placeholder='Is Married' required onChange={this.props.isMarried} />


                                <input type="text" placeholder='Work' required onChange={this.props.work} />


                                <input type="button" onClick={this.props.addedUser}  value={"ADD"} className='btn btn-success '/>
                            </form>

                        </>
                    ) : (
                        <button onClick={this.props.addUserBtn} className='btn btn-success col-12'>Add user</button>
                    )}
                </div>


            </div>
        )
    }
}





