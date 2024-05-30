import React from 'react'
import {Link} from 'react-router-dom'
const PageHeader = ({title,curPage}) => { 
  return (
    <div className='pageheader-section'>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="pageheader-content text-center">
                    <h2 className="animate__animated animate__backInDown">{title}</h2>
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center animate__animated animate__backInUp'>
                            <li className='breadcrub-item'><Link to="/">{"Home /"}</Link></li>
                            <li className='breadcrub-item active' aria-current="page"> {curPage}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
