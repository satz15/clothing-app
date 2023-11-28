import { Shirt } from "../../constants/shirt";

const Menshirt = () => {
               const Item = (props) => {
            return ( 
                <div>
                    <img src={props.image} />
                    <h2>{props.name}</h2>
                    <span>{props.price}</span>
                    <p>{props.size}</p>
                </div>
             );
        };
        
            <div>
            <div>
                <h2>Shirts</h2>
            </div>
        
          <div>
        {Shirt.map((item, id) => {
            return (
              <Item
                key={id}
                id={item.id}
                name={item.name}
                price={item.price}
                size={item.size}
                image={item.imgUrl}
              />
           );
          })}
        </div>
        </div> 
    

}
 
export default Menshirt;


// );


// export default Shirt;