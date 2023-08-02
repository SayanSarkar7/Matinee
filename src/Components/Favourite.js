import React, { Component } from 'react'

export default class Favourite extends Component {
  render() {
    return (
      <div>
        <>
            <div className='main'>
                <div className='row'>
                    <div className='col-3'>
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className='col-9'>
                        9
                    </div>
                </div>
            </div>
        </>
      </div>
    )
  }
}
