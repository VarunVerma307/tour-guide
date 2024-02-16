import './Tours.css';
import Card from './Card';
function Tours(props){
    return(
   <div>
    <div className='heading'>
        <h1>Plan with Varun</h1>
    </div>
    <div className='all'>
       {props.tours.map((tour) => {
          return <Card {...tour} remove={props.remove}></Card>
        })
        }
    </div>
   </div>
    )
}
export default Tours;