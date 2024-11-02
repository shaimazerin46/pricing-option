import PropTypes from "prop-types";

const PriceDiv = ({option}) => {
    const {id,membership,features,price} = option
    return (
        <div className="shadow-xl bg-emerald-100 p-3 rounded-xl flex flex-col">
           <h3><span className="text-xl">{price}</span><span>/month</span></h3> 
           <h3>{membership}</h3>
           <h3 className="flex-grow">{
            features.map(feature=><li>{feature}</li>)
            }</h3>
            <button className="btn bg-emerald-500 mt-4">Buy now</button>
        </div>
    );
};

export default PriceDiv;
PriceDiv.propTypes={
    option: PropTypes.object
}
