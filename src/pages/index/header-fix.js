import React, { Component } from 'react';
import './header-fix.scss'

// class HeaderFix extends Component {
//   constructor(props){
//     super(props);
//     // console.log(props)
//   }
  
//   componentDidMount() {
//     console.log(this.props)

//   }

//   render() {
//     // const {  }
//     console.log(this.props)
//     return (
//       <div className='fix-wrapper'>
//         {/* {
//           fixFlag && 
//             <div className='text' style={{backgroundImage: "url(&quot;/images/head15.png&quot;)"}}>
//               {fixInfoText}
//             </div>
//         } */}
//       </div>
//     )
//   }
// }

function HeaderFix({ fixInfoText, fixFlag }) {
  return (
    <div className='fix-wrapper'>
      {
        fixFlag && 
          <div className='text' style={{backgroundImage: "url(&quot;/images/head15.png&quot;)"}}>
            {fixInfoText}
          </div>
      }
    </div>
  )
}

export default HeaderFix