import React from 'react'
import VHeadersidebar from '../VHeadersidebar/VHeadersidebar'
import "./Reports.css"
export default function Reports() {
  return (
    <div>
         <div>
      <VHeadersidebar/>
    </div>
    <div className='Reports_div'>
    <h4 className='Reports_heading'>Reports</h4>
    <div className='data_div'>

    <div className="card mt-5 mb-3">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col" className='Report_tableNo'>#</th>

                                            <th scope="col" className='Report_table'>Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                                <tr>
                                                     <td >1</td>
                                                    <td  className='Report_data'>Grocery and HouseHold</td>
                                                   
                                                </tr>
                                            
                                     

                                    </tbody>
                                    <tbody>
                                       
                                       <tr>
                                            <td >2</td>
                                           <td  className='Report_data'>Home and Kitchen</td>
                                       </tr>
                           </tbody>
                                </table>
                            </div>
                        </div>
    </div>
    </div>
  )
}
